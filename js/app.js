'use strict';
let score = 0;
/*let username=prompt('Enter your name please:')
//num1
let movie= prompt('Do i like movies?(yes,No)');
if (movie ==='yes' || movie ==='y')
{
      // console.log(movie);

      alert ('No i dont like watch movies ');
}
else{
    alert('the right answer join the club');
    score ++;
}
// num2
let color=prompt ('Do i like worm colors or cold colors?' );
if (color==='worm'|| color ==='worm colors')
{
    // console.log(color);

    alert ('No i do like the cold color ');
}
else{
    alert ('i like the cold color ');
    score ++;
}
//num3
 let design=prompt('i like homedesiging and guses what the most color i like to use (white)yes or no? ');
 if (design==='no'|| design ==='n')
{
    // console.log(design);

    alert ('Yes i like white and gray  ');
}
else {
    alert ('i like white and gray  ');
    score ++;
}
//num 4
let diy=prompt('do i like DIY and crafting(yes or no)');
diy.toUpperCase();

 if (diy==='no'|| diy ==='n')
{
    // console.log(diy);

    alert ('Yes i like white and gray  ');
}
else  {
    alert ('yes the right answer' );
    score ++;
}

alert ('welcome'+' '+username+' '+'to my page ')*/
/*num5
Add a question to the guessing game that takes in a numeric input by prompting the user to guess a number.
*/
let sister = prompt('guess how many sisters i have ?');
sister = Number(sister);
for (let i = 0; i <= 4; i++) { //It should give the user exactly four opportunities to get the correct answer
    if (sister < 0) {
        alert('enter alogic answer ');
        sister = prompt('guess how many sisters i have ?');

    }
    else if (sister == 1) {
        alert('you are right');
        score++;
        break;
    }
    else {
        alert('No gusses again');
        sister = prompt('guess how many sisters i have ?');

    }

}
 alert('1 sister is the right answer');// tell the user the correct answer.
//num6
let fruitArr = ['banana', 'dates', 'orange', 'mango', 'peach'];// question that could have many possibilities (array i think) 
    for (let index = 0; index === 6; index++) {  //Give the user 6 attempts to guess the correct answer.
        let fruit = prompt('what is my faveret fruit?');
        if (fruit !== fruitArr){
        alert('not of my fav fruit');}
        
else {
    alert('yes it is');
    score++;
}
    }

alert(score);

