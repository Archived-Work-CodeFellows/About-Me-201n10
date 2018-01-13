'use strict';

var userPoints = 0;
var userBonus = 0;
var userAttempts = 3;
var question1, question2, question3, question4, question5, bonusQuestion;


console.log('User has connected to the site');
alert('Come on, come all to my guess game crawl');

var user = prompt('I\'d like to know your name!', 'type your name');
console.log('user will now be referred to as ' + user);
console.log(user + ' currently has ' + userPoints + ' points');
console.log(user + ' attempts left: ' + userAttempts);

alert('Welcome ' + user + '! I hope you are ready to play a game.');
alert('Here there will be a series of questions about me. Who am I? Well my name is Eric. Good luck ' + user + '!');

//var question1 = prompt("First Question: Am I a musician?", 'type yes or no').toLowerCase();
//console.log(user + ' has answered ' + question1);

while( userAttempts > 0) {

    question1 = prompt("First Question: Am I a musician?", 'type yes or no').toLowerCase();
    console.log(user + ' has answered ' + question1);

    if(question1 === 'yes' || question1 === 'y') {
        
        break;
    } else {
        userAttempts--;
        console.log(user + ' attempts left: ' + userAttempts);
        switch(userAttempts) {
            case 2:
            alert('Hmm, try again '+ user + '!');
            break;
            case 1:
            alert('Really...there are only two possible answers.');
            break;
            default:
            alert('Lets just move on...');
            break;
        }
    }
}

if(question1 === 'yes' || question1 === 'y') {

    alert('Hooray! You did it ' + user + '. I am in fact a musician! Originally I studied Classical Bassoon and Jazz Saxophone but now I just kinda play whatever I pick up when I need to do some sound design or composition! Enjoy your delicious point');
    userPoints++;
    userAttempts = 3;
    console.log(user + ' points: ' + userPoints);
    console.log(user + ' attempts left: ' + userAttempts);
} else {
    alert('Sorry you got this one wrong. I am a musician and originally studied Classical Bassoon and Jazz Saxophone. Now I just play whatever I pick up when I need to do sound design or compose. Hopefully you can guess better next time!');
    userAttempts = 3;
    console.log(user + ' points: ' + userPoints);
    console.log(user + ' attempts left: ' + userAttempts);
}

alert('Alright lets move on to the next question! Here we go!');
while( userAttempts > 0) {

   question2 = prompt('Am I an incredibly geeky person? Yeah you probably don\'t know who I am so flip a coin. Coins are unbiased right?', 'type yes or no').toLowerCase();
   console.log(user +  ' has answered with ' + question2);

    if(question2 === 'yes' || question2 === 'y') {
        
        break;
    } else {
        userAttempts--;
        console.log(user + ' attempts left: ' + userAttempts);
        switch(userAttempts) {
            case 2:
            alert('Hmm, try again '+ user + '!');
            break;
            case 1:
            alert('Really...there are only two possible answers.');
            break;
            default:
            alert('Lets just move on...');
            break;
        }
    }
}

if(question2 === 'yes' || question2 === 'y') {
    
    alert('Yup you would be correct, or that coin was correct or however your preferred method of guessing...um...guessed. I come from a comic book family, playing board games, role playing, super heroes, sci-fi space western...you name it. It\'s a lot of fun to have an active imagination! Point for you!');
    userPoints++;
    userAttempts = 3;
    console.log(user + ' points: ' + userPoints);
    console.log(user + ' attempts left: ' + userAttempts);
} else {

    userAttempts = 3;
    alert('attempts all gone, it\'s okay. I will give you more so you can play!');
    alert('hmm, that wasn\'t a super fair question. Plus it was out of the blue and a lot of pressure to just judge something pretty random. I\'m sorry. So get ready for another one!');
    console.log(user + ' points: ' + userPoints);
    console.log(user + ' attempts left: ' + userAttempts);
}


alert('Cool feeling good? Sweet.');
while( userAttempts > 0) {

   question3 = prompt('Do I have any siblings?', 'type yes or no').toLowerCase();
   console.log(user + ' has answered with ' + question3);

    if(question3 === 'yes' || question3 === 'y') {
        
        break;
    } else {
        userAttempts--;
        console.log(user + ' attempts left: ' + userAttempts);
        switch(userAttempts) {
            case 2:
            alert('Hmm, try again '+ user + '!');
            break;
            case 1:
            alert('Really...there are only two possible answers.');
            break;
            default:
            alert('Lets just move on...');
            break;
        }
    }
}

if(question3 === 'yes' || question3 === 'y') {
    
    alert('You got it! I have one younger brother who is currently finishing up his third year of college.');
    userPoints++;
    userAttempts = 3;
    console.log(user + ' points: ' + userPoints);
    console.log(user + ' attempts left: ' + userAttempts);
    bonusQuestion = prompt('pssssssssssst....hey ' + user + '! Wanna get a bonus point?', 'type yes or no').toLowerCase();
    console.log(user + ' answered ' + bonusQuestion);
    if(bonusQuestion === 'yes' || bonusQuestion === 'y') {
        userBonus++;
        alert('That was it! You did it ' + user + '! Enjoy free stuff!');
        console.log(user + ' points: '  + userPoints + ' bonus points: ' + userBonus);
    } else {
        userAttempts = 3;
        alert('Oh that is cool too. Yeah I don\'t need bonus points either. Just asking for a friend');
        console.log(user + ' points: ' + userPoints);
        console.log(user + ' attempts left: ' + userAttempts);
    }
} else {

    userAttempts = 3;
    alerts('attempts all gone, it\'s okay. I will give you more so you can play!');
    alert('hmm, that wasn\'t a super fair question. Plus it was out of the blue and a lot of pressure to just judge something pretty random. I\'m sorry. So get ready for another one!');
    console.log(user + ' points: ' + userPoints);
    console.log(user + ' attempts left: ' + userAttempts);
}

/*
var question4 = prompt('Curveball! Am I a super secret ninja plotting to take over the world??').toLowerCase();
console.log(user + ' has answered ' + question4);

if(question4 === 'no' || question4 === 'n'){
    userPoints++;
    alert('well ' + user + ', I guess that wasn\'t much of a curveball huh...fine here is your point. I may not be a ninja but along side my Tai Chi instructor Certificate, I have taken Kung Fu, Muay Tai kickboxing, Savant Kickboxing and Jeet Kune Do. I like hitting things what can I say!');
    console.log(user + ' now has ' + userPoints + ' points');

} else {

    alert('mmmm yessssss I will take over the world with my lazer sharks. Nothing can save you now!');
    alert('Nah I am kidding, that is a lot of work for a javascript alert to do');
    console.log(user + ' has ' + userPoints + ' points');
}

alert('Alright ' + user + ', Everything is on this last question. Everything before means nothing now. All your points belong to me!');
alert('If you get this question right, you win. If you get it wrong, well you don\'t win.');

var question5 = prompt('Am I colorblind?', 'type yes or no').toLowerCase();
console.log(user + ' has answered ' + question5);
if(question5 === 'yes' || question5 === 'y') {
    
    userPoints++;
    alert('Wow ' + user + '! Either you know me pretty well or that was a good guess! (probably a guess cause well...this is a guessing game)');
    console.log(user + ' now has ' + userPoints + ' points');
} else {

    switch(userBonus) {
        case 1:
        alert('Hah jokes on you I AM colorblind. I will eat all your points nom nom nom nom nom.');
        alert('NOOOOOO you\'ve foiled me! How could I forget about the bonus point! Nothing beats the bonus point! Curses! Well I guess you still have some points left!');
        break;
        default:
        alert('Nope, I am definitely colorblind. It\'s a really interesting conversation to have!');
        alert('Hah, you have nothing. I took everything. I am the better guesserer about myself. So what if I cheated and made the program this way. I typed it');
        break;
    }
}

console.log('end of the game');
alert('Hope you enjoyed this javascript guessing game and learned something     about me! Lets see where you ended up with points!');
var finalScore = userPoints + userBonus;
console.log('add user points and bonus points');

if(userPoints > 0) {
    alert(user + ' you ended with a final score of ' + finalScore + '. You win! Anything above 0 wins!!!!');
} else {
    alert('Oh no! I stole your points away! It\'s okay ' + user + '. You still win. Nobody loses here!');
}
console.log('end of the javascript stuff');
*/