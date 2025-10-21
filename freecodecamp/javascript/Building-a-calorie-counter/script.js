Skip to content
Profile

    JavaScript Algorithms and Data Structures
    Learn Form Validation by Building a Calorie Counter

script.js
19
20
21
22
23
24
Step 52

To see your new HTML content for the targetInputContainer, you will need to use the innerHTML property.

The innerHTML property sets or returns the HTML content inside an element.

Here is a form element with a label and input element nested inside.
Example Code

<form id="form">
  <label for="first-name">First name</label>
  <input id="first-name" type="text">
</form>

If you want to add another label and input element inside the form, then you can use the innerHTML property as shown below:
Example Code

const formElement = document.getElementById("form");
const formContent = `
  <label for="last-name">Last name</label>
  <input id="last-name" type="text">
`;
formElement.innerHTML += formContent;

Use the addition assignment operator += to append your HTMLString variable to targetInputContainer.innerHTML.


/**
* Your test output will go here
*/

Navigated to Step 52
