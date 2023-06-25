//Filter and search start 
//Gopal, A. 2023. Ecommerce JS and Dom Exercise, 9 May 2023. Coding Exercise (WSOA3028A). University of the Witwatersrand, Johannesburg
    
let ctsYouWantToView = [...cts]; //This is a hack "database". We filter thisvariable based on ALL cts and use this in the displaycts() function.
const ctsContainer = document.querySelector(".ctsContainer");
//Display
const displaycts = () => {
ctsContainer.innerHTML = ctsYouWantToView
.map((ct) => {
const { t1,  t1para1,  t2,t2para1,t2para2,t2para3,t2para4,t2para5,t3,t3para1,t3para2,t3para3,t3para4,t4,t4para1,t4para2, t5,t5para1,t5para2,t5para3,tp5para4,} = ct;
return `                    

<article class="ct" class="paragraphText">
<button type="button" class="collapsible" >  <h2 class="smallerTitles">${ t1}</h2> <p class="paraSpacing" >${ t1para1}</p></button>
<section class="toggleCt">
  <section class="paragraphText">
    <h2 class="smallerTitles">${ t1}</h2>
    <h2 class="evenSmallertitles">${ t2}</h2>
    <p class="paraSpacing" >
      ${t2para1} </p>
      <p class="paraSpacing" >${t2para2}</p>
    <p class="paraSpacing" >${t2para3}</p>
    <p class="paraSpacing" >${t2para4}</p>
    <p class="paraSpacing" >${t2para5}</p>
    <h2 class="evenSmallertitles">${ t3}</h2>
    <p class="paraSpacing" >
    ${ t3para1}
    </p>
    <p class="paraSpacing" >
    ${ t3para2}
    </p>
    <p class="paraSpacing" >
    ${ t3para3}
    </p>
    <p class="paraSpacing" >
    ${t3para4}
    </p>

    <h2 class="evenSmallertitles">   ${ t4}:</h2>

    <p class="paraSpacing" >
    ${t4para1}
    </p>
    <p class="paraSpacing" >
    ${t4para2}
    </p>
    <h2 class="evenSmallertitles">  ${t5}</h2>
    <p class="paraSpacing" >
    ${t5para1}
    </p>
    <p class="paraSpacing" >
    ${t5para2}
    </p>
    <p class="paraSpacing" >
    ${t5para3}
    </p>
  </section>
  
</section>
</article>
`;
})
.join("");
};
displaycts();
//Buttons
const categoriesSection = document.querySelector(".categories");
const displayButtons = () => {
const categoryButtons = [
"All",
...new Set(
cts.map((ct) => {
return ct.category;
})
),
];
categoriesSection.innerHTML = categoryButtons
.map((category) => {
return `<button class="categoryBtn" data-coy="${category}">${category}</button>`;
})
.join("");
};
displayButtons();
//Filter for Buttons
categoriesSection.addEventListener("click", (e) => {
const chosenCoy = e.target;
if (chosenCoy.classList.contains("categoryBtn")) {
if (chosenCoy.dataset.coy === "All") {
ctsYouWantToView = [...cts];
} else {
ctsYouWantToView = cts.filter((ct) => {
return ct.category === chosenCoy.dataset.coy;
});
}
displaycts();
calltoggle();
}
});
//Searchbar Filter
/*
const input = document.querySelector(".search-input");
const form = document.querySelector(".input-form");
form.addEventListener("keyup", () => {
const searchQuery = input.value;
ctsYouWantToView = cts.filter((ct) => {
return ct.title.toLowerCase().includes(searchQuery);
});
displaycts();
});
*///


//Referencde: How To Create an Accordion (no date). Available at: https://www.w3schools.com/howto/howto_js_accordion.asp.
// toggle toggleCt
calltoggle();
function calltoggle(){
  let coll = document.getElementsByClassName("collapsible");
let i;
console.log(coll.length);

for (i = 0; i < coll.length; i++) {

  coll[i].addEventListener ("click", activetoggle); 
}
}
function activetoggle(){
  {
    this.classList.toggle("active");
    let toggleCt = this.nextElementSibling;
    if (toggleCt.style.maxHeight){
      toggleCt.style.maxHeight = null;
    } else {
      toggleCt.style.maxHeight = toggleCt.scrollHeight + "px";
    }
  }
}


