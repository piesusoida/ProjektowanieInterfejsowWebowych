
let lastRemovedItem = null;
let currentItemToRemove = null;
let currentList = "lista1";

function updateList() {
    const selectedList = document.getElementById("szukanie").value;
    currentList = selectedList;

}

function todo_add() {
    const positionInput = document.getElementById("pole");
    const positionValue = positionInput.value;

    if (positionValue.trim() !== "") {

        const li = document.createElement("li");
        li.textContent = positionValue;
        const removeButton = document.createElement("button");
        removeButton.textContent = "X";
        removeButton.onclick = function() {
            openModal(li);
        };
        li.appendChild(removeButton);

        li.onclick = function(){
            if(li.style.color === "grey"){
                li.style.color = "black";
                li.style.textDecoration = "";
                const dateSpan = li.querySelector(".date");
                if (dateSpan) {
                    dateSpan.remove();
        }
            }else{
                li.style.color = "grey";
                li.style.textDecoration = "line-through";
                const date = new Date();
                const dateSpan = document.createElement("span");
                dateSpan.textContent = ` - ${date}`;
                dateSpan.classList.add("date");
                li.appendChild(dateSpan);
            }
            
        };
        
        document.getElementById(currentList).appendChild(li);
        positionInput.value = "";
    }
}

function remove(li, positionValue){
    lastRemovedItem = { li, positionValue };
    document.getElementById("binContent").textContent = positionValue;
    document.getElementById("restoreButton").disabled = false;

    // Remove the item from the list
    li.remove();
}

function restore() {
    // Check if there is a removed item to restore
    if (lastRemovedItem) {
        const { li, positionValue } = lastRemovedItem;
        // Append the last removed item back to the list
        document.getElementById(currentList).appendChild(li);
        
        // Clear the bin content
        document.getElementById("binContent").textContent = "Empty";
        document.getElementById("restoreButton").disabled = true;

        // Reset the lastRemovedItem to null
        lastRemovedItem = null;
    }
}

function openModal(li) {
    // Show the modal and store the li element to be removed
    currentItemToRemove = li;
    document.getElementById("myModal").style.display = "block";
    document.getElementById("confirmMessage").textContent = `Are you sure you want to remove "${li.textContent.trim()}"?`;
}

function closeModal() {
    // Close the modal without removing the item
    document.getElementById("myModal").style.display = "none";
    currentItemToRemove = null; // Reset the item to be removed
}

function confirmRemove() {
    // Move the item to the bin and remove it from the list
    if (currentItemToRemove) {
        const itemText = currentItemToRemove.textContent.trim();
        lastRemovedItem = { li: currentItemToRemove, text: itemText };

        // Update the bin content
        document.getElementById("binContent").textContent = itemText;
        document.getElementById("restoreButton").disabled = false;

        // Remove the item from the list
        currentItemToRemove.remove();
        closeModal(); // Close modal after removing
    }
}

function hide(lista) {
    const list = document.getElementById(lista);
    if (list.style.display === "none") {
        list.style.display = "block"; // Show the list
    } else {
        list.style.display = "none"; // Hide the list
    }
}

function filterList() {
    const searchInput = document.getElementById("searchInput").value;
    const isCaseSensitive = document.getElementById("caseSensitiveCheckbox").checked;
    const allLists = ['lista1', 'lista2', 'lista3'];

    // Loop through each list
    allLists.forEach((listId) => {
        const list = document.getElementById(listId);
        const listItems = list.getElementsByTagName("li");

        // Loop through each list item
        for (let i = 0; i < listItems.length; i++) {
            const listItem = listItems[i];
            const textContent = listItem.textContent || listItem.innerText;

            // Check if the list item's text starts with the search string
            if (isCaseSensitive) {
                // Case-sensitive search
                if (textContent.startsWith(searchInput)) {
                    listItem.style.display = "list-item"; // Show item
                } else {
                    listItem.style.display = "none"; // Hide item
                }
            } else {
                // Case-insensitive search
                if (textContent.toLowerCase().startsWith(searchInput.toLowerCase())) {
                    listItem.style.display = "list-item"; // Show item
                } else {
                    listItem.style.display = "none"; // Hide item
                }
            }
        }
    });
}