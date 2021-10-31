/* List of names */
// let persons = [
//     "Anders", "Martin", "Barbora", "Peter", "Marco", "Marc", "Marcus", "Hana", "Cecilie",
//     "Kunuut", "Carlos", "Morten", "Nils", "Agnes", "Peter K.", "Lasse", "Esben",
//     "Oliver", "Artur", "Laurita", "Amir", "Anna", "Lucie", "Dalena"
// ];

const persons = document.querySelectorAll('.person');
const groups = document.querySelectorAll('.group');



// Person listeners
persons.forEach( person => {
    person.addEventListener('dragstart', () => {
        person.classList.add('dragging')
    })
    person.addEventListener('dragend', () =>{
        person.classList.remove('dragging')
    })
})

// Group listeners
groups.forEach( group => {
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
})
