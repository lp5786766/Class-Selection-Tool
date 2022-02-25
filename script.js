/// User is prompted to answer a series of questions.
// Each reply determines the next question.
// After the last question the user is given the final reply - class the need to attend.
// The user needs to see all their answers and be able to return to the previous questions -> collapsible dropdown is advised

// initiate collapsible

$(document).ready(function () {
  $('.collapsible').collapsible();
});

var elem = document.querySelector('.collapsible.expandable');
var instance = M.Collapsible.init(elem, {
  accordion: false,
});


$('.btn').click(function () {
 
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

  // 1.1 If current question === 1, generate "start over" button
  if (currentId == 2 || currentId == 3) {
    startOverBtn.removeClass('hidden');
  }
  $(`#${otherBtn}`).addClass('disabled btn-flat');

  // if the link button is pressed, keep active:
  if (this.classList[0] === 'link') {
  } else {
    $(this).addClass('disabled btn-large');
  }

  // Open next question
  $(`#question${this.id}`).removeClass('hidden');
  $('.collapsible').collapsible();
});
