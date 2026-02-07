let notesList = [];

function addData() {
  let text = document.getElementById("input-js");
  let texInput = text.value.trim();

  if (texInput !== "") {
    notesList.push(texInput);
    text.value = ""; // Clear the input field
    displayNotes();
  }
}

function handleAddData(event){
  if(event.key === 'Enter'){
      addData();
  }
  
  
}

function displayNotes() {
  let output = document.querySelector(".js-output");
  output.innerHTML = ""; // Clear previous notes

  notesList.forEach((note, index) => {
    output.innerHTML += `
       <div class="to-do-list">
          <div><p>${note}</p> </div>

           <div> 
              <button class="delete-btn" 
                onclick="deleteItem(${index})">
                Delete
                </button>
                
            </div> 
       </div>
            `;
        
  });
}

function deleteItem(index) {
  notesList.splice(index, 1);
  displayNotes();
}
