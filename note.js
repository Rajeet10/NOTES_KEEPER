console.log("HEY WELCOME TO TODO APP");
shownotes();
//store in local storage
let adBtn = document.getElementById("addBtn");
adBtn.addEventListener("click", function (e) {
  let adTxt = document.getElementById("addTxt");
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesobj = [];
  } else {
    notesobj = JSON.parse(notes);
  }
  notesobj.push(adTxt.value);
  localStorage.setItem("notes", JSON.stringify(notesobj));
  adTxt.value = "";
  console.log(notesobj);
  shownotes();
});
//display element from local storage
function shownotes() {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesobj = [];
  } else {
    notesobj = JSON.parse(notes);
  }
  let html = "";
  notesobj.forEach(function (element, index) {
    html += ` <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">Note ${index + 1}</h5>
              <p class="card-text">${element}</p>
              <button id="${index}" onclick="deletenote(this.id)" href="#" class="btn btn-primary">Delete Note</button>
            </div>
          </div> `;
  });
  let noteselem = document.getElementById("notes");
  if (notesobj.length != 0) {
    noteselem.innerHTML = html;
  } else {
    noteselem.innerHTML = `NOTHING TO SHOW.USE "ADD A NOTE" SECTION ABOVE TO ADD NOTE`;
  }
}
//function to delete
function deletenote(index) {
    console.log("DELE",index)
    let notes = localStorage.getItem("notes");
    if (notes == null) {
      notesobj = [];
    } else {
      notesobj = JSON.parse(notes);
    }
    notesobj.splice(index,1);
    localStorage.setItem("notes", JSON.stringify(notesobj));
    shownotes();
    
    
}

let search=document.getElementById('searchtxt');
search.addEventListener("input",function(){
    let inputval=search.value.toLowerCase();
    console.log("SEARCH WORKING FOR",inputval);
    let notecard=document.getElementsByClassName('noteCard');
    Array.from(notecard).forEach(function(element) {
        let cardtxt=element.getElementsByTagName('p')[0].innerText;
        console.log(cardtxt);
        if(cardtxt.includes(inputval)){
            element.style.display="block";
        }else{
            element.style.display="none";
        }
    })
    
        
    })