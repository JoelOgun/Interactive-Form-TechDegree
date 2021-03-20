console.log("Hello World");
// Set the focus property and highlight the input element under the Name label
let nameInput = document.getElementById("name");
nameInput.focus();
/* 
 The "Other job role" field should be hidden by default and only be displayed 
 if the user selects the "Other" option from the "Job Role" drop-down, and 
 if the user selects any other option, the "Other job role" field should be hidden from view.
 */
// Create variable for the "Job Role" select element and the "Other job role" input
let jobRoleSelect = document.getElementById("title");
let otherJobInput = document.getElementById("other-job-role");
// Hide "Other job role by default"
otherJobInput.style.display = "none";
/* When the "Other" option is selected/deselected from "Job Role" menu, the 
"Other job role" field should be visible/hidden on the page.   */
jobRoleSelect.addEventListener("change", (e) => {
  if (e.target.value === "other") {
    otherJobInput.style.display = "block";
  } else {
    otherJobInput.style.display = "none";
  }
});
/* To prevent users from selecting an invalid color for a particular theme, the "Color" menu should be disabled by default. Once a theme is selected, the "Color" menu should be enabled, and 
the color options need to be displayed/hidden based on which theme the user has selected. 
*/
let designSelect = document.getElementById("design");
let designThemes = designSelect.children;
let colorSelect = document.getElementById("color");
let colorOptions = colorSelect.children;
// Color menu is disabled by default
colorSelect.disabled = true;
// Once theme is selected "Color" menu is enabled
designSelect.addEventListener("change", (e) => {
  if (e.target.value === "js puns" || e.target.value === "heart js") {
    colorSelect.removeAttribute("disabled");
  } else {
    colorSelect.setAttribute("disabled");
  }
  /* The color options in the "Color" menu matches with the theme selected in the previous menu 
  also hides the other options that do not match with theme 
  */
  for (let i = 0; i < colorOptions.length; i++) {
    let themePicked = e.target.value;
    let colorOption = colorOptions[i];
    let dataTheme = colorOption.getAttribute("data-theme");
    if (themePicked === dataTheme) {
      colorOption.hidden = false;
      colorOption.selected = true;
    } else {
      colorOption.hidden = true;
      colorOption.selected = false;
    }
  }
});
/* 
The total cost of the selected activities in the "Register for Activities" section 
should be totaled and displayed for the user. 
*/
let activitiesFieldset = document.getElementById("activities");
let activitiesCost = document.getElementById("activities-cost");
let totalCost = 0;
/*  
When an activity or activities are checked/selected the total cost will be shown
if an activity/activities are unchecked/ unselected the cost will be updated to show new total cost
*/
activitiesFieldset.addEventListener("change", (e) => {
  let dataCost = e.target.getAttribute("data-cost");
  if (e.target.checked === true) {
    // use the + unary plus operator to change data-cost to a number to do the addition
    totalCost += +dataCost;
    console.log(totalCost);
    console.log(e.target.checked);
  } else {
    totalCost -= +dataCost;
    console.log(totalCost);
    console.log(e.target.checked);
  }
  activitiesCost.innerHTML = `Total : ${totalCost}`;
});

let payWithSelect = document.getElementById("payment");
let creditCardDiv = document.getElementById("credit-card");
let payPalDiv = document.getElementById("paypal");
let bitCoinDiv = document.getElementById("bitcoin");

payPalDiv.style.display = "none";
bitCoinDiv.style.display = "none";
let creditCardSelected = payWithSelect.children[1];
creditCardSelected.setAttribute("selected", "selected");

payWithSelect.addEventListener("change", (e) => {
  if (e.target.value === "paypal") {
    payPalDiv.style.display = "block";
    bitCoinDiv.style.display = "none";
    creditCardDiv.style.display = "none";
  } else if (e.target.value === "bitcoin") {
    bitCoinDiv.style.display = "block";
    payPalDiv.style.display = "none";
    creditCardDiv.style.display = "none";
  } else {
    payPalDiv.style.display = "none";
    bitCoinDiv.style.display = "none";
    creditCardDiv.style.display = "block";
  }
});
nameInput;
let emailInput = document.getElementById("email");
activitiesFieldset;
let creditCardNumber = document.getElementById("cc-num");
let zipCodeInput = document.getElementById("zip");
let cVVInput = document.getElementById("cvv");
let form = document.forms[0];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let nameValue = nameInput.value;
  let regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
  let nameValidationTest = regName.test(nameValue);
  if (!nameValidationTest) {
    e.preventDefault();
  }
  let emailValue = emailInput.value;
  let regEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  let emailValidationTest = regEmail.test(emailValue);
  if (!emailValidationTest) {
    e.preventDefault;
  }
  /* function activityValidator() {
    if (totalCost !== 0) {
      alert("thank");
      return true;
    } else {
      alert("please");
      return false;
    }
  } 
  */
  let creditCardValue = creditCardNumber.value;
  // regExp from w3resource to validate visa card starting with 4 length 13 or 16 digits
  let regCreditCard = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
  let creditCardValidationTest = regCreditCard.test(creditCardValue);
  if (!creditCardValidationTest) {
    e.preventDefault;
  }
  let zipCodeValue = zipCodeInput.value;
  let cVVValue = cVVInput.value;
});
