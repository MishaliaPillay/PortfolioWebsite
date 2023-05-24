header.innerHTML = ` <input type="checkbox" name="" id="check" />
<input type="checkbox" name="" id="check" />
<label for="check" class="burgerbutton"
  ><i class="fa-solid fa-bars"></i
></label>
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
    <a href="index.html" class="opened"> <strong>Home</strong></a>
    <a href="design.html" class="opened"> <strong>Design</strong></a>
    <a href="blogs.html" class="opened"> <strong>Blogs</strong></a>
    <a href="essay.html" class="opened"> <strong>Essay</strong></a>
    <a href="portfolio.html" class="opened">
      <strong>Portfolio</strong></a
    >
  </li>
</ul>`;


//DOM
//Dark mode
console.log("dark mode");

const lightingBtn = document.querySelector(".lighting");
const htmlRoot = document.querySelector("html");
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
  localStorage.set
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
  }
});


