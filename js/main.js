// Collect all elements from the page which are savable
const savables = document.getElementsByClassName('isSavable');

// If "savedItems" does not already exist,  create it
if(!localStorage.getItem('savedItems')){
    localStorage.setItem('savedItems', JSON.stringify([]));
}

// Function to create a 'save' button
const newSaveBtn = () => {
    // Create a delete Button
    let saveBtn = document.createElement('button');
    saveBtn.className = "saveItem"; // Give it a class name
    saveBtn.innerHTML = 'Save for later';

    // Add the event listener
    saveBtn.addEventListener('click', function(e){
        // Get contents of savedItems from storage
        let arr = JSON.parse(localStorage.getItem('savedItems'));
        // Add the selected item to the arry
        arr.push(e.target.parentElement.innerHTML);
        // Save the array back to storage
        localStorage.setItem('savedItems', JSON.stringify(arr));

        /* e.target.disabled = "true"; */

        updateAlert();

    }, {once: true} // Adding this as I don't know if a hidden object can still have a listener, which wee don't want
    );

    return saveBtn;
};

// Create a 'like' button
const newLikeBtn = () => {
    // Create a like Button
    let likeBtn = document.createElement('button');
    likeBtn.className = "likeBtn"; // Give it a class name
    likeBtn.innerHTML = 'Like';
    likeBtn.style.marginLeft = "10px";

    likeBtn.addEventListener('click', (e) => {
        e.target.innerHTML == 'Like' ? e.target.innerHTML = '&#10003 Liked' : e.target.innerHTML = 'Like';
        // Not sure what the Task had in mind for the forms for this function,
        // so leaving spave here for it
    });

    return likeBtn;
}

// Executes on page load
for (let i = 0; i < savables.length; i++){
    /* savables[i].before(newSaveBtn()); */
    /* avables[i].appendChild(newSaveBtn()); */
    const ret = document.createElement('div');
    // Styling for the div that positions the btns
    ret.style.width = "100%";
    ret.style.height = "2px";
    // Add the buttons
    savables[i].insertBefore(ret, savables[i].firstChild);
    savables[i].insertBefore(newLikeBtn(i), savables[i].firstChild);
    savables[i].insertBefore(newSaveBtn(i), savables[i].firstChild);

};

updateAlert();
