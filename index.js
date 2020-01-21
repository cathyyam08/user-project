document.addEventListener('DOMContentLoaded', function() {
  var form = document.querySelector('form');
  console.log(form)

  form.addEventListener('submit', function(event) {

    event.preventDefault();
    console.log('form submitted');

  var firstNameInput = document.querySelector('.first-name');

  var lastNameInput = document.querySelector('.last-name');
  console.log(firstNameInput, lastNameInput);

  var firstNameValue = firstNameInput.value;

  var lastNameValue = lastNameInput.value;

  console.log(firstNameValue, lastNameValue);

  var p = document.createElement('p');
  p.innerHTML = firstNameValue + ' ' + lastNameValue;

  var userContainer = document.querySelector('.user-container');

  userContainer.appendChild(p);


});
});
