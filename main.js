const persons = document.querySelectorAll('.person');
const groups = document.querySelectorAll('.group');

// Add group event listener
function addGroupListener(group){
    group.addEventListener('dragover', e => {
        e.preventDefault(); // Prevent the default "dont" cursor
        console.log(group.childElementCount);
        if(group.childElementCount > 3){
            // Dont add the child if the hovered group had 3 before (4 including this one)
        }else{
            // It is possible to add
            const person = document.querySelector('.dragging')
            group.appendChild(person)
        }
    })
}

// Assign the first groups
groups.forEach( group => {
    addGroupListener(group);
})

// Create a new group
function addNewGroup(){
    const container = document.querySelector('.container');
    newGroup = document.createElement('DIV');
    newGroup.classList.add('group');
    addGroupListener(newGroup);
    container.appendChild(newGroup);
}


// Person listeners
persons.forEach( person => {
    person.addEventListener('dragstart', () => {
        person.classList.add('dragging')
    })
    person.addEventListener('dragend', () =>{
        person.classList.remove('dragging')
    })
})
