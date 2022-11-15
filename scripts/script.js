// function greet(username, time = "Day"){
//     console.log(`Good ${time} ${username}!`);
// };

// let greet = function (username){
//     console.log(`Hello ${username}!`);
// };

// let greet = (username) => {
//     console.log(`Hello ${username}!`);
// };

// let input = prompt("Enter a name");

// greet(input, "night");
// greet("Hayal");
// greet("Aleks");
// greet()

let shoppingList = ["cheese", "bread", "chips", "ice cream"];

const unorderedListElement = document.querySelector(".shopping")

function populateList (list){
    for (let i = 0; i < list.length ; i++)
    {
        console.log(list[i]);
        const listItemElement = document.createElement("li");
        listItemElement.textContent = list[i];
        unorderedListElement.appendChild(listItemElement);
    }
}

populateList(shoppingList);

function changeListStyle (list)
{
    unorderedListElement.classList.add("squareList");
    unorderedListElement.classList.remove("circleList");
}

changeListStyle()

function updateImg ()
{
    const imageElement = document.querySelector("#shoppingCart");
    console.log(imageElement);
    imageElement.src = "https://cdn-icons-png.flaticon.com/512/263/263142.png"
    imageElement.width = 100;
    imageElement.height = 100;
    imageElement.alt = "shopping cart icon"

}

updateImg()