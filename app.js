let addBtn = document.getElementById('addBtn');
addBtn.addEventListener("click", function (e) {
  let addTxt = document.getElementById("addTxt");
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  notesObj.push(txt.value);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  txt.value = "";
  console.log(notesObj);
  showNotes();
});
function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
      } else {
        notesObj = JSON.parse(notes);
      }
      let html ="";
      notesObj.forEach(function(element, index){
        html+= '
        <div class="noteCard ">
        <div class="card-body">
        <h5 class="card-title">Note $[index+1]</h5>
        <p class="card-text">$[element+1]</p>
        <button class="btn btn-primary">Delete Note</button>
           </div> ';
              
        
        
      }
      );
      let notesElm=document.getElementById('notes');
      if(notes.length!=0){
        notesElm.innerHTML=html;
      }

}
