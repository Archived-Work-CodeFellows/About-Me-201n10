'use strict';

var userPoints = 0;
var music = ['bassoon', 'saxophone', 'guitar', 'piano'];

console.log('User has connected to the site');
alert('Come on, come all to my guess game crawl');

var user = prompt('I\'d like to know your name!');
console.log('user will now be referred to as ' + user);
console.log(user + ' currently has ' + userPoints + ' points');

alert('Welcome ' + user + '! I hope you are ready to play a game.');
alert('Here there will be a series of questions about me. Who am I? Well my name is Eric. Good luck ' + user + '!');

var questions = ['First Question: Am I a musician?', 'Am I an incredibly geeky person? Yeah you probably don\'t know who I am so flip a coin. Coins are unbiased right?', 'Do I have any siblings?', 'Curveball! Am I a super secret ninja plotting to take over the world??', 'Am I colorblind?'];

var correctAnswers = ['y', 'y', 'y', 'n', 'y'];

var info = ['I am in fact a musician! Originally I studied Classical Bassoon and Jazz Saxophone but now I just kinda play whatever I pick up when I need to do some sound design or composition!', 'I come from a comic book family, playing board games, role playing, super heroes, sci-fi space western...you name it. It\'s a lot of fun to have an active imagination!', 'I have one younger brother who is currently finishing up his third year of college.', 'I may not be a ninja but along side my Tai Chi instructor Certificate, I have taken Kung Fu, Muay Tai kickboxing, Savant Kickboxing and Jeet Kune Do. I like hitting things what can I say!', 'I am color-blind'];

function simpleQuestions(questions, correctAnswers, info) {
  var userResponse = prompt(questions, 'type yes or no').toLowerCase();
  console.log(user + ' responded with ' + userResponse);
  if (userResponse.substring(0,1) === correctAnswers) {
    userPoints++;
    alert('You did it! ' + info);
    return userPoints;
  } else {
    alert('Nope, Got it wrong! ' + info);
  }
}

for (var i = 0; i < questions.length; i++) {
  console.log('Asking questions ' + i);
  simpleQuestions(questions[i], correctAnswers[i], info[i]);
  alert('You have ' + userPoints + ' point(s)!');
}

function bonus1(attempts) {
  var userAttempts = attempts;
  var guess = '';
  while (userAttempts > 0) {

    var number = '26';
    guess = prompt('Guess what number I was thinking at the time I was writing this script! I\'ll give you a hit, the number is between 10 and 40. Attempts left: ' + userAttempts + '!');
    var compare = '';
    console.log(guess);
    if(isNaN(guess) === true) {
      alert('OH looks like you didn\'t type a number. I only accept integers!');
    } else {
      if(guess === number) {
        break;
      } else {
        userAttempts--;
        switch(userAttempts) {
        case 3:
          if(guess > 26) {
            alert('Good number but you are too high');
          } else {
            alert('Good number, but you are too low');
          }
          compare = guess;
          break;
        case 2:
          if(guess > 26 && guess < compare) {
            alert('Oh man looks like you are getting closer!');
          } else if (guess < 26 && guess > compare) {
            alert('Oh man you are getting closer!');
          } else if (guess < 26 && guess < compare) {
            alert('Oh you overshot and went too low!');
          } else {
            alert('Went to high up! Try again!');
          }
          compare = guess;
          break;
        case 1:
          if(guess > 26 && guess < compare) {
            alert('Oh man looks like you are getting closer!');
          } else if (guess < 26 && guess > compare) {
            alert('Oh man you are getting closer!');
          } else if (guess < 26 && guess < compare) {
            alert('Oh you overshot and went too low!');
          } else {
            alert('You are still too high!');
          }
          break;
        default:
          alert('Oh no, you are all out of attempts! Good effort though!');
          break;
        }
      }
    }
  } if(guess === '26') {
    userPoints++;
    alert('Woo you guessed it right! I picked 26 because my birthday is at the end of the month and that is how old I will be!');
    return userPoints;
  } else {
    alert('Nice try ' + user + '! The number is actually 26. I turn 26 at the end of the month!');
  }
}

bonus1(4);




alert('Alright ' + user + ' now we are on the last question.');
alert('I mentioned earlier in the game that I am a musician. I also compose music and do sound design for various projects in my spare time!');

function bonus2(attempts) {
  var userAttempts = attempts;
  while(userAttempts > 0) {
    var guess2 = prompt('What instruments do I play? There are multiple answers possible!').toLowerCase();
    for(var i = 0; i < music.length; i++){
      music[i];
      if(guess2 === music[i]) {
        alert('You did it!');
        userAttempts = 0;
        userPoints++;
        break;
      }
    }
    if(guess2 !== 'bassoon' || guess2 !== 'saxophone' || guess2 !== 'guitar' || guess2 !== 'piano'){
      userAttempts--;
      switch(userAttempts) {
      case 5:
        alert('Nope try again! Attempts remaining: ' + userAttempts);
        break;
      case 4:
        alert('Keep trying! I believe in you! Attempts remaining: ' + userAttempts);
        break;
      case 3:
        alert('Here is a hint: I said two of them in a previous question! Attempts remaining: ' + userAttempts);
        break;
      case 2:
        alert('Keep on keeping on! Attempts remaining: ' + userAttempts);
        break;
      case 1:
        alert('Nooooooooooooooooooooooooo almost out of timmmmmeeeee! Attempts remaining: ' + userAttempts);
        break;
      default:
        alert('That is it! You are all done!');
        break;
      }
    }
  }
  return userPoints;
}

bonus2(6);

alert('Hope you enjoyed this javascript guessing game and learned something     about me! Lets see where you ended up with points!');
var finalScore = userPoints;
console.log('add user points and bonus points');
console.log(finalScore);

if(finalScore > 0) {
  alert(user + ' you ended with a final score of ' + finalScore + ' out of 7! You win! Anything above 0 wins!!!!');
} else {
  alert('Oh no! I stole your points away! It\'s okay ' + user + '. You still win. Nobody loses here!');
}
console.log('end of the javascript stuff');
