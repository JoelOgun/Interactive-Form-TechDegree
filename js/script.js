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
