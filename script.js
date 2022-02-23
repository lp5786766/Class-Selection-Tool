/// User is prompted to answer a series of questions.
// Each reply determines the next question.
// After the last question the user is given the final reply - class the need to attend.

// The user needs to see all their answers and be able to return to the previous questions -> collapsible dropdown is advised
// But the questions need to be appended only after reply - otherwise the user will be confused.

// initiate collapsible

$(document).ready(function () {
  $('.collapsible').collapsible();
});



// As the user replies, we will append new questions to the page:
const yesBtn = $('.yes');
const noBtn = $('.no');
const questionOne = $('#question1');
const questionTwo = $('#question2');
const questionThree = $('#question3');
// show question 2

// var instance = M.Collapsible.getInstance(elem);
noBtn.on('click', function(event) {
   
    questionOne.removeClass('active');
    questionThree.removeClass('hidden');
    questionThree.addClass('active');
    $('.collapsible').collapsible();
});


yesBtn.on('click', function (event) {
    //  alert('clicked');
    questionOne.removeClass('active').addClass('replied');
    yesBtn.addClass('disabled');
    noBtn.addClass('disabled');
    questionTwo.removeClass('hidden');
    questionTwo.addClass('active');
    $('.collapsible').collapsible();
});

// show question 3


//APPENDING A SECTION
// const yesBtn = $('.yes');
// const questionDiv = $(`  <li class='active list'>
// <div class='collapsible-header'>
//   <i class='material-icons'>filter_drama</i>Question ${questionNumber} Title
// </div>
// <div class='collapsible-body question'>
//   <div class='row'>
//     <span>${question}</span>
//   </div>
//   <div class='row'>
//     <a class='waves-effect waves-light btn blue darken-2 yes'>${replyOne}</a>
//     <a class='waves-effect waves-light btn red darken-2 no'>${replyTwo}</a>
//   </div>
// </div>
// </li>`);

// const list = $('.list');
// console.log(questionDiv);

// yesBtn.on('click', function (event) {
//   //    alert('clicked');
//   list.append(questionDiv);
// });
