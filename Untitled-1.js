// Ejercicio 1 sobre condicionales (else if)

var age = 70;

if(age >= 65){
    console.log("You get your income from your pension")
} else if(age < 65 && age >= 18) {
    console.log("Each month you get a salary")
} else if(age < 18 ) {
    console.log("You get an allowance")
}else{
    console.log("The value of the age is not numerical")
}


// Ejeercicio 2 condicionales (switch)

var day = "Sunday";

switch(day){
    case"Monday":
    console.log("Do something");
    break;
    case"Tuesday":
    console.log("Do something");
    break;
    case"Wednesday":
    console.log("Do something");
    break;
    case"Thursday":
    console.log("Do something");
    break;
    case"Friday":
    console.log("Do something");
    break;
    case"Saturday":
    console.log("Do something");
    break;
    case"Sunday":
    console.log("Do something");
    break;
    default:
        console.log("There is no such day")
}

// Looping constructs

// For loop examples

for (var i = 1; i <= 3; i++){
    console.log(i)
}
console.log("Go!")

// Another for loop example 

for (var i = 10; i > 0; i--){
    console.log(i)
}
console.log("Happy New Year!")

for (var i = 0; i <= 3; i++) {
    console.log("This is line ", i)
}

// While Loop Example

var counter = 3
while (counter > 0){
    console.log(counter);
    counter = counter -1;
}
console.log("Looping is fun")

// Task 1 with for Loop

for(var i = 1; i <=5; i++){
    console.log(i)
}
console.log("Counting completed")

// Task 2 with for loop

for (var i = 5; i > 0; i--){
    console.log(i)
}
console.log("Countdown finished")

// Task 3 with while loop

var i = 1;
while (i <= 5){
    console.log(i);
    i = i +1;
}
console.log("Counter completed")

// Task 4 with while Loop

var i = 5;
while (i > 0){
    console.log(i);
    i = i-1
}
console.log("Countdown finished")

// Task 5 with while loop

var i = 2018
while(i <= 2022){
    console.log(i);
    i = i +1;
}

// Nested Loops
for (var year = 2023; year < 2025; year++){
    console.log(year)
    for (var months = 6; months < 9; months++)
    console.log(months);
}
// Another example of nested loops

for (var firstNum = 0; firstNum < 2; firstNum++) {
    for (var secondNum = 0; secondNum < 10; secondNum++) {
        console.log(firstNum + ", " + secondNum);
    }
}

