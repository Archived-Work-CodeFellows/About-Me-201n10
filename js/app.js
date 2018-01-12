'use strict';

var userPoints = 0;
var userAttempts = 3;

console.log('User has connected to the site');
alert('Come on, come all to my guess game crawl');

var user = prompt('I\'d like to know your name!', 'type your name');
console.log('user will now be referred to as ' + user);
console.log(user + ' currently has ' + userPoints + ' points');

alert('Welcome ' + user + '! I hope you are ready to play a game.');
alert('Here there will be a series of questions about me. Who am I? Well my name is Eric. Good luck ' + user + '!');

var question1 = prompt("First Question: Am I a musician?", 'type yes or no').toLowerCase();
console.log(user + ' has answered ' + question1);

/*
while((question1 !== 'yes' && userAttempts < 1) || (question1 !== 'y' && userAttempts < 1)) {

    userAttempts--;
    console.log(user + ' has ' + userAttempts + ' attempts left');
    alert('Hmm keep trying!')
    question1 = prompt("First Question: Am I a musician?", 'type yes or no').toLowerCase();
    console.log(user + ' has answered ' + question1);

}*/

if(question1 === 'yes' || question1 === 'y') {
    
    alert('Hooray! You did it ' + user + '. I am in fact a musician! Originally I studied Classical Bassoon and Jazz Saxophone but now I just kinda play whatever I pick up when I need to do some sound design or composition! Enjoy your delicious point');
    userPoints++;
    console.log(user + ' now has ' + userPoints + ' points');

} else {
    
    alert('Sorry you got this one wrong. I am a musician and originally studied Classical Bassoon and Jazz Saxophone. Now I just play whatever I pick up when I need to do sound design or compose. Hopefully you can guess better next time!');
    console.log(user + ' has ' + userPoints + ' points');

}