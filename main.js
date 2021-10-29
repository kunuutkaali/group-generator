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
    persons.forEach((element) => insertName(element));
    console.log("You have pushed updatelist!");
}
