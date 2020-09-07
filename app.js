
'use strict';

alert('Welcome To My Page');
var userName= prompt('what is your name?');
alert('Welcome ' + userName)


var answer1= prompt('What Is My Major?');
//console.log(answer1.toLowerCase());
alert(answer1);
switch(answer1){
    case'accountant':
    alert('no it\'s finance and banking!');
    break;
    case'finance':
    alert('yes it\'s a correct answer');
    break;
    default:
    alert('Money Related Major, guess and try again!');
}

var answer2= prompt('How much experience do I have?' , 'guess ..I worked just for a months');
//console.log(answer2);
alert(answer2);
switch(answer2){
case'8':
alert('yes, correct answer!');
break;
case'3':
case'9':
case'11':
case'5':
alert ('No!..It\'s 8 Months');
break;
default:
     alert('I worked just for a months!');
}

var answer3= prompt('One of my goals! I want to travel to two countries ?' , 'The first letter for the first one is T and the second one is G');
//console.log(answer3.toLowerCase());
alert(answer3);
switch(answer3){
    case'turkey':
    case 'greece':
    alert('Yess,,it\'s true!');
    break;
    case'tokyo':
    case'germany':
    alert('No ,, it\'s wrong!');
    break;
    default:
  alert('The state that begins with the T letter extends its lands on two continents; The continent of Asia and the continent of Europe.!');
}

var answer4= prompt('what kind of company i have worked in?' , 'It\'s work is similar to the work of the bank, easy to know!');
//console.log(answer4.toLowerCase());
alert(answer4);
switch(answer4){
    case'finance':
    alert('yes , true!');
    break;
    case'insurance':
    alert('no , wrong!');
    break;
    default: 
    alert('money Related company, guess and try again!');
}

var answer5= prompt('Can you guess how old I am?', 'I graduated in three years and a half in 1/2019!');
//console.log(answer5);
alert(answer5);
switch(answer5){
    case'23':
    alert('yes.. correct');
    break;
    case'22':
    case'21':
    case'20':
    alert('no..wrong!');
    break;
    default:
    alert('In the first half of the twenties!');
}

alert('Welcome ' + userName + ' Now you will know some information about me!')


