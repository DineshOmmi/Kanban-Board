const form = document.getElementById("todoform");
const input = document.getElementById("todo-input");
const todobox = document.getElementById("todo-box");
form.addEventListener('submit',(event)=>{
    event.preventDefault();

    const value = input.value;
    
    if(!value)return;

    const newtask = document.createElement("p");
    newtask.classList.add('task');
    newtask.setAttribute("draggable","true");
    newtask.innerText = value;
    newtask.addEventListener("dragstart",()=>{
        newtask.classList.add('is-dragging');
    });
    newtask.addEventListener("dragend",()=>{
        newtask.classList.remove("is-dragging");
    });
    todobox.appendChild(newtask);
    input.value = "";
});


const opening = document.getElementById("open");
const closeing = document.getElementById("close");

closeing.addEventListener('mouseenter',()=>{
    closeing.classList.add('hide');
    opening.classList.remove('hide');
});
opening.addEventListener('mouseleave',()=>{
    closeing.classList.remove('hide');
    opening.classList.add('hide');
});

droping.addEventListener('dragover',(event)=>{
    event.preventDefault;
    const currtsk = document.querySelector('.is-dragging');
    currtsk.remove();
})



//local storage :
const myname = document.querySelector('#name');
const username = localStorage.getItem('username')||"";
myname.value = username;
myname.addEventListener("change",event=>{
    localStorage.setItem('username',event.target.value);
});
