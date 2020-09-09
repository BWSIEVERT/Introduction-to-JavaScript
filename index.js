/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)

let votingAge = 20;
if(votingAge > 18){
    console.log("votingAge is greater than 18, so this is true.");
} else{
    console.log("Age is less than 18, so this is false.");
}




//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)
let bankAverage = 10000;
let bankAccount = 8000;
if(bankAccount < bankAverage){
    let bankAccount = "You're broke";
    console.log(bankAccount);
} else{
    let bankAccount = "It's a green day";
    console.log(bankAccount);
}





//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method

let year = "1999";
console.log(parseInt(year));



//Task d: Write a function to multiply a*b 

function multiply(a, b){
    return a*b;
}
let value = multiply(2,6);
console.log(value);



/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 

let myAge = 23;
function humanToDogYears(HumanAge, DogYears){
    return HumanAge*DogYears;
}
let myAgeInDogYears = humanToDogYears(myAge,7);
console.log(myAgeInDogYears);




/************************************************************** Task 3 **************************************************************/
//Dog feeder 
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

// Notes for self *** Remember converted years to months so you could make puppies options in function ***

function dogFeeder(dogWeight, dogAge){
    if(dogAge >= 12 && dogWeight <= 5){
        let dogFood = dogWeight * 0.05;
        console.log(dogFood);
    } else if(dogAge >= 12 && dogWeight <= 10){
        let dogFood = dogWeight * 0.04;
        console.log(dogFood);
    } else if(dogAge >= 12 && dogWeight <= 15){     
        let dogFood = dogWeight * 0.03;
        console.log(dogFood);
    } else if(dogAge >= 12 && dogWeight > 15){  
        let dogFood = dogWeight * 0.02;
        console.log(dogFood);
    } else if(dogAge <= 4){
        let puppyFood = dogWeight * 0.10;
        console.log(puppyFood);
    } else if(dogAge <= 7){
        let puppyFood = dogWeight * 0.05;
        console.log(puppyFood);
    } else if(dogAge <= 12){
        let puppyFood = dogWeight * 0.04;
        console.log(puppyFood);
    }
}
dogFeeder(15,12);
//feeding requirements
// adult dogs at least 1 year - 
// up to 5 lbs - 5% of their body weight 
// 6 - 10 lbs - 4% of their body weight 
// 11 - 15 lbs - 3% of their body weight 
// > 15lbs - 2% of their body weight 

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight 
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996
  




/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 

function rps(){
    let randomNum = Math.random()
    if (randomNum < .3){
        console.log("Rock");
    } else if(randomNum > .3 && randomNum < .6){
        console.log("Paper");
    } else if(random > .6){
        console.log("Scissors");
    }
}
rps()

  
  

/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles
let kilometers = 5; // User types in number of kilometers to be converted
let miles = kilometers * 0.62137; // Formula to convert
console.log(miles); // console logs result





//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
let feet = 12 // Number of feet
let centimeters = feet * 30.48 // formula to convert ft to cm
console.log(centimeters); // console logs result




/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`


function annoyingSong(bottles) {
for(let number = 99; number >= 0; number--){
    console.log(number + " bottles of soda on the wall, " + number + " bottles of soda, " + " take one down pass it around " + number + " bottles of soda on the wall.");
}
}
annoyingSong()

/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be C
//60s should be D 
//and anything below 60 should be F

let students = [['David', 80], ['Samuel', 77], ['Brenda', 88], ['Heather', 95], ['Thomas', 68]];

let avgMarks = 0;

for (let i = 0; i < students.length; i++){
    avgMarks += students[i][1];
    var avg = (avgMarks/students.length);
}
console.log("Average grade: " + (avgMarks)/students.length);

if(avg < 60){
    console.log("Grade : F");
} else if(avg < 70){
    console.log("Grade : D");
} else if(avg < 80){
    console.log("Grade : C");
} else if(avg < 90){
    console.log("Grade : B");
} else if(avg < 100){
    console.log("Grade : A");
};

  
  

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method





/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object





