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

let designSelect = document.getElementById("design");
let colorSelect = document.getElementById("color");
let colorOption = colorSelect.children;
