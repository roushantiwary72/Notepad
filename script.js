const createButton=document.querySelector('.create-btn');
const notesContainer=document.querySelector('.notes-container');

let notes=document.querySelectorAll('.input-box');

showNotes();
createButton.addEventListener('click',()=>{
    let notesParagraph=document.createElement('p');
    let img=document.createElement('img')
    notesParagraph.classList.add('input-box');
    notesParagraph.setAttribute('contenteditable','true');
    img.setAttribute('src','images/delete.png');
    notesParagraph.append(img);
    notesContainer.append(notesParagraph);
    saveNotes();
    
})

notesContainer.addEventListener('click',(e)=>{
    if(e.target.tagName==='IMG'){
        e.target.parentElement.remove();
        saveNotes();
    }
    else if(e.target.tagName==='P'){
        notes=document.querySelectorAll('.input-box');
        notes.forEach((writtenNotes)=>{
            writtenNotes.onkeyup=function(){
                saveNotes();
            }
        })
    }
})

function saveNotes(){
    localStorage.setItem('notesFile',notesContainer.innerHTML);
}

function showNotes(){
    notesContainer.innerHTML=localStorage.getItem('notesFile')||'';
}


document.addEventListener('keydown',(e)=>{
    if(e.key==='Enter'){
        document.execCommand('insertLineBreak');
        e.preventDefault();
    }
})