/* Define default group */
let persons = [
    "Anders",
    "Martin",
    "Barbora",
    "Peter",
    "Marco",
    "Marc",
    "Marcus",
    "Hana",
    "Cecilie",
    "Kunuut",
    "Carlos",
    "Morten",
    "Nils",
    "Agnes",
    "Peter K.",
    "Lasse",
    "Esben",
    "Oliver",
    "Artur",
    "Laurita",
    "Amir",
    "Anna",
    "Lucie",
    "Dalena"
];

/* Output name to a list */
function insertName(example){
    var node = document.createElement("LI");
    node.innerHTML = example;
    document.getElementById("namelist").appendChild(node);
}

function updateList(){
    if(list.hasChildNodes()){
        /* List is not empty, remove childs to update */
        let newList = list.cloneNode(true);
        let childs = newList.children;
        let newListFrag = document.createDocumentFragment();
        while(childs.length > 0){
            newListFrag.appendChild(childs[Math.floor(Math.random() * childs.length)]);
        };
        list.innerHTML = "";
        list.appendChild(newListFrag);
    }else{
        /* list is empty, append list */
        persons.forEach((element) => insertName(element));
    }
}
/* First run */
let list = document.getElementById("namelist");
updateList();
