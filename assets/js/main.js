'use strict'

// For Text Animation - Call it for functions
const typedTextSpan = document.querySelector(".type");

const textList = ["TXT-A-NERD |"];
const txtDelay = 200;
const removeDelay = 100;
const insertTxtDelay = 500;

let textListIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textList[textListIndex].length) {
        typedTextSpan.textContent += textList[textListIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, txtDelay);
    } else {
        setTimeout(erase, insertTxtDelay);
    }
}

function erase() {
    if(charIndex > 0) {
        typedTextSpan.textContent = textList[textListIndex].substring(0, charIndex-1);
        charIndex--;
        setTimeout(erase, removeDelay);
    } else {
        textListIndex++;
        if(textListIndex >= textList.length) textListIndex = 0;
        setTimeout(type, txtDelay + 800);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    setTimeout(type, insertTxtDelay + 150);
});


// JQuery
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-66590547-1', 'auto');
ga('send', 'pageview');


// MADE BY CPC Development