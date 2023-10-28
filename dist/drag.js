const draggables = document.querySelectorAll('.task');
const droppables = document.querySelectorAll('.drop-boxes');

draggables.forEach((task) =>{
    task.addEventListener("dragstart",()=>{
        task.classList.add('is-dragging');
    });
    task.addEventListener("dragend",()=>{
        task.classList.remove("is-dragging");
    });
});

droppables.forEach((zone)=>{
    zone.addEventListener("dragover",(event)=>{
        event.preventDefault();
        const currtsk = document.querySelector('.is-dragging');
        zone.appendChild(currtsk);
    });
});
