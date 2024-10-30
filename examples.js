// let menu = [
//     {id: 1, item: "Tacos", category: "Meal", price: 12.29},
//     {id: 2, item: "Burger", category: "Meal", price: 7.29},
//     {id: 3, item: "Salad", category: "Meal", price: 8.29},
//     {id: 4, item: "Ice tea", category: "Drink", price: 2.19},
//     {id: 5, item: "Coke", category: "Drink", price: 2.29},
    
//     ];
//     // find a single element matching a condition
//     let searchId = 12;
//     let matching = null;
//     let numItems = menu.length;
//     for(let i = 0; i < numItems; i++) {
//     if (menu[i].id == searchId) {
//     matching = menu[i];
//     break; // you've found it! stop looking!
//     }
//     }
//     if (matching != null) {
//     console.log(matching.item + " costs $" + matching.price);
//     }
//     else {
//     console.log("Item " + searchId + " not found!");
//     }





    // let menu = [
    //     {id: 1, item: "Tacos", category: "Meal", price: 12.29},
    //     {id: 2, item: "Burger", category: "Meal", price: 7.29},
    //     {id: 3, item: "Salad", category: "Meal", price: 8.29},
    //     {id: 4, item: "Ice tea", category: "Drink", price: 2.19},
    //     {id: 5, item: "Coke", category: "Drink", price: 2.29},
        
    //     ];
    //     // find a subset of elements that match a condition
    //     let searchCategory = "Drink";
    //     let matching = [];
    //     let numItems = menu.length;
    //     for(let i = 0; i < numItems; i++) {
    //     if (menu[i].category == searchCategory) {
    //     matching.push(menu[i]);
    //     }
    //     }
    //     if (matching.length != 0) {
    //     let numMatches = matching.length;
    //     for(let i = 0; i < numMatches; i++) {
    //     console.log(
    //     matching[i].item + " costs $" + matching[i].price);
    //     }
    //     }
    //     else {
    //     console.log("No items matched category " + searchCategory);
    //     }
        


    // 
    

// function isOver60 (value){
//     if(value > 60){
//         return true;
//     }else{
//     return false;
//     };
// };


// let numbers = [7, 9, 64, 60, 12, 13, 65, 62]
// let firstOver60 = numbers.find(isOver60)

// if(firstOver60 != undefined){
//     console.log(firstOver60)
// }else{
//     console.log("No values over 60")
// };

////////////////////////


// function under60 (value){
//     if(value < 60){
//         return true;
//     }else{
//         return false;
//     };
// };

// let numbers = [7, 9, 64, 60, 12, 13, 65, 62]
//  firstUnder = numbers.find(under60);

//  if (firstUnder!= undefined){
//     console.log(firstUnder);
//  }else{
//     console.log("no value ")
//  }

// function isOver60(arrayValue) {
//     if (arrayValue > 60) {
//     return true;
//     }
//     else {
//     return false;
//     }
//     }
//     let numbers = [7, 9, 64, 60, 12, 13, 65, 62];
//     let firstValOver60Position = numbers.findIndex(isOver60);
//     // returns the index 2
//     if (firstValOver60Position != -1) {
//     console.log("First value over 60 found at position " +
//     firstValOver60Position);
//     }
//     else {
//     console.log("No values over 60");
//     }


// function isOver60(value){
//     if(value > 60){
//         return true;
//     }else{
//         return false;
//     };
// }

// let numbers = [7, 9, 64, 60, 12, 13, 65, 62];
// let firstValOver60Position = numbers.findIndex(isOver60);

// if (firstValOver60Position != -1){
//     console.log("First value over 60 found at position " +
//     firstValOver60Position);
// }else{
//     console.log("No values over 60");
// }


let kids = [
    { first : "Natalie", last : "Plyers" },
    { first: "Brittany", last: "Ray" },
    { first: "Zachary", last: "Westly" }
];

// function displayKids(name){
//     console.log(name.first + " " + name.last);
// }
// kids.forEach(displayKids)

// function displayfirst(name){
//     console.log(name.first)
// }
// kids.forEach(displayfirst)


function display(name){
    console.log(name.last)
}
kids.forEach(display)





