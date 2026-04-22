// Automatically shows the current year in the footer
// No need to update it every year manually

var year = new Date().getFullYear();
var footer = document.getElementById("footerYear");
footer.textContent = "© " + year + " [Subhashini]. All rights reserved.";
