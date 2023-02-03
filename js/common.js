// This is for all functions and variables that are common to all the HTML pages
// I've done this as I don't like having multiple identical items across different documents

const updateAlert = () =>{
    // Number of savedItems in local storage
    let numItems = JSON.parse(localStorage.getItem('savedItems')).length;
    // Get the UI element to display the number of saved items in
    let alertUI = document.getElementById('savedItemsAlert');
    // Update the UI element
    localStorage.getItem('savedItems') ? alertUI.innerHTML = ` (${numItems})` : alertUI.innerHTML = ' (0)';
}

updateAlert();

// Make the comment form functional
let postCommentBtn = document.getElementById('postComment');

if(postCommentBtn != null){
    postCommentBtn.addEventListener('click', (e) => {
        let str = document.getElementById('commentArea').value;

        const commArea = document.getElementById('attachComments');
        commArea.appendChild(commentUI(str));
    });


}

// Make the contact form functional
let submitBtn = document.getElementById('submit');

if(submitBtn != null){
    submitBtn.addEventListener('click', (e) => {
       // Not sure what we are meant to do here, but this is where it will go!
       
    });


}


// Create the new comment UI
let commentUI = str => {
    this.dv = document.createElement('div');
    this.hr = document.createElement('hr');
    this.pg = document.createElement('p');
    pg.classList.add('commentPG');
    pg.innerHTML = str;
    dv.appendChild(pg);
    dv.appendChild(hr);

    console.log(dv);

    return dv;

}