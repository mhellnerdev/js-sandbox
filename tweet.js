/* ======= Tweeting and Slicing ======= */

var tweet = prompt("Compose your tweet:");

var tweetLength = tweet.length;
var maxTweet = 140;
var charRemaining = maxTweet - tweetLength;

tweetUnder140 = tweet.slice(0,140);

alert("You have entered " + tweetLength + " characters and you have " + charRemaining + " characters left.")

alert(tweetUnder140);
