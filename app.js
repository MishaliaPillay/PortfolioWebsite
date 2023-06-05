
//header
header.innerHTML = ` 
<input type="checkbox" name="" id="check" />
<input type="checkbox" name="" id="check" />
<label for="check" class="burgerbutton"
  ><script src="https://cdn.lordicon.com/bhenfmcm.js"></script>
  <lord-icon
      src="https://cdn.lordicon.com/phtfmmnb.json"
      trigger="morph"
      colors="primary:#121331,secondary:#08a88a"
      stroke="25"
      style="width:50px;height:50px">
  </lord-icon>
 </label>
<label for="navtitle" class="navtitle">MISHALIA'S PORTFOLIO</label>
<img src="./Images/R.png" id="navtitle" alt="" />
<section class="checkbox-wrapper-54">
          <label class="switch">
            <input class="lighting" type="checkbox" />
            <span class="slider"></span>
          </label>
        </section>
<ul>
  <li>
    <a href="index.html" class="opened"> <b>Home</b></a>
    <a href="design.html" class="opened"> <b>Design</b></a>
    <a href="blogs.html" class="opened"> <b>Blogs</b></a>
    <a href="essay.html" class="opened"> <b>Essay</b></a>
    <a href="portfolio.html" class="opened">
      <b>Portfolio</b></a
    >
  </li>
</ul>`;

//header end 
//DOM
//Dark mode
console.log("dark mode");

const lightingBtn = document.querySelector(".lighting");
const htmlRoot = document.querySelector("html");
const toggleSwitch = document.querySelector('.switch input[type="checkbox"]');
//localStorage.getItem("input:checked");
let darkMode = localStorage.getItem("dark-mode");
//code without local storage 
/*lightingBtn.addEventListener("click", () => {
htmlRoot.classList.toggle("dark-mode");
localStorage.getItem(".lighting", "html");
//const theme;
if(htmlRoot.classList.contains("dark-mode")){
console.log("dark-mode");
localStorage.setItem("")
}
else{
  console.log("light-mode");
}
});*/
//code with local storage 
const enableDarkMode = () => {
  htmlRoot.classList.add("dark-mode");
  lightingBtn.classList.remove("dark-mode");
  localStorage.setItem("dark-mode", "enabled");
  toggleSwitch.checked = true;
 // localStorage.setItem("input:checked");
  //localStorage.set
  //.lighting==true;
};

const disableDarkMode = () => {
  htmlRoot.classList.remove("dark-mode");
  lightingBtn.classList.add("dark-mode");
  localStorage.setItem("dark-mode", "disabled");
};

if (darkMode === "enabled") {
  enableDarkMode(); 
}

lightingBtn.addEventListener("click", (e) => {
  darkMode = localStorage.getItem("dark-mode"); 
  if (darkMode === "disabled") {
    enableDarkMode();
  } else {
    disableDarkMode();
    toggleSwitch.addEventListener("click", lightingBtn, false);
  }
});
// end of dark mode 

//How to - sticky/affix Navbar (no date) How To Create a Sticky Navbar. Available at: https://www.w3schools.com/howto/howto_js_navbar_sticky.asp (Accessed: 05 June 2023). 

window.onscroll = function() {stickyScroll()};

let stckyasidesc = document.getElementById("stckyaside");
let sticky = stckyasidesc.offsetTop;

function stickyScroll() {
  if (window.pageYOffset > sticky) {
    stckyasidesc.classList.add("sticky");
  } else {
    stckyasidesc.classList.remove("sticky");
  }
}