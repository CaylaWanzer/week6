
const fruit = ["apple", "banana", "cherry"];

fruit.forEach(f => console.log(f));

function print(item){
    console.log(item)
}
fruit.forEach(print);

[999,444,222].forEach(n => console.log(n));



[11, 14, 16, 25].forEach((n,i,a) => i ? console.log( n - a[i - 1]) : 0);



// 









































