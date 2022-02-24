/// User is prompted to answer a series of questions.
// Each reply determines the next question.
// After the last question the user is given the final reply - class the need to attend.

// The user needs to see all their answers and be able to return to the previous questions -> collapsible dropdown is advised
// But the questions need to be appended only after reply - otherwise the user will be confused.

// initiate collapsible

$(document).ready(function () {
  $('.collapsible').collapsible();
});

var elem = document.querySelector('.collapsible.expandable');
var instance = M.Collapsible.init(elem, {
  accordion: false
});

// As the user replies, we will append new questions to the page:
const yes1 = $('#yes1');
const no1 = $('#no1');
const questionOne = $('#question1');
const questionTwo = $('#question2');
const questionThree = $('#question3');
// show question 2

// var instance = M.Collapsible.getInstance(elem);
// no1.on('click', function (event) {
//   questionOne.removeClass('active');
//   questionThree.removeClass('hidden');
//   questionThree.addClass('active');
//   $('.collapsible').collapsible();
// });

// yes1.on('click', function (event) {

//   questionOne.removeClass('active').addClass('replied');
//   yes1.addClass('disabled btn-large');
//   no1.addClass('disabled btn-flat');
//   questionTwo.removeClass('hidden');
//   questionTwo.addClass('active');
//   $('.collapsible').collapsible();
// });

$('.btn').click(function () {
  // as the button is clicked:

  // 1. current question becomes inactive
  // 1.1 If current question === 1, generate "start over" button
  // 2. next question appears
  //

  // disable the other button:
  let currentId = this.id;
  let otherBtn;
  // Start over button refreshes the page:
  const startOverBtn = $('#start_over');
  startOverBtn.click(function () {
    location.reload();
  });

  //Function to disable the other button
  if (currentId % 2 == 0) {
    otherBtn = parseInt(currentId) + 1;
  } else {
    otherBtn = parseInt(currentId) - 1;
  }
  if (currentId == 2 || currentId == 3) {
    startOverBtn.removeClass('hidden');
  }
  $(`#${otherBtn}`).addClass('disabled btn-flat');
  $(this).addClass('disabled btn-large');

  // Open next question
  $(`#question${this.id}`).removeClass('hidden');
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
