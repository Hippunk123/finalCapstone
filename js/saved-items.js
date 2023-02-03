let savedItems = JSON.parse(localStorage.getItem('savedItems'));

let deleteAllSaved = () =>{

    var list = document.getElementsByClassName("gridItem");
    for (let item of list) {
        console.log(item.id);
        item.style.display = "none";
    }
    localStorage.setItem('savedItems', JSON.stringify([]));

    updateAlert();
};

let deleteAllBtn = document.getElementById('deleteAll');
deleteAllBtn.addEventListener('click', deleteAllSaved);

for (let i = 0; i < savedItems.length; i++){
    // Display the saved item content
    // Create a div to house the saved item
    let dv = document.createElement("div");
    dv.className = "gridItem";
    dv.style.backgroundColor = "beige";
    dv.style.padding = "5px";
    // Give the element an id which is equal to it's position in the local storage array
    dv.id = i;
    // Set the elements content
    dv.innerHTML = savedItems[i];
    // Add the element to the UI
    document.getElementById('showSavedItems').appendChild(dv);


    // Deal with the buttons
    // Get the 'saveBtn' button that already exists, if it exists
    let btn = dv.getElementsByTagName('button')[0];

    // Remove the likeBtn
    dv.removeChild(dv.getElementsByClassName('likeBtn')[0]);
    
    if(btn){
        let newBtn = btn;
        newBtn.innerHTML = "Delete";
        const sp = document.createElement('div');
        // Styling for the button
        sp.style.width = "100%";
        sp.style.textAlign = "left";
        // Add the new elements
        sp.appendChild(newBtn);
        dv.insertBefore(sp, dv.firstChild);
        // Create the listener
        newBtn.addEventListener('click', (e) =>{
            dv.style.display = 'none';
            let arr = JSON.parse(localStorage.getItem('savedItems'));
            arr.splice(dv.id, 1);
            localStorage.setItem('savedItems', JSON.stringify(arr));
            updateAlert();
            console.log(localStorage.getItem('savedItems'));

        }, {once: true});
    }else{
        console.log("NO BUTTON")
    }


};

updateAlert();
