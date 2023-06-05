//Filter and search start 
//Gopal, A. 2023. Ecommerce JS and Dom Exercise, 9 May 2023. Coding Exercise (WSOA3028A). University of the Witwatersrand, Johannesburg
    
let ctsYouWantToView = [...cts]; //This is a hack "database". We filter thisvariable based on ALL cts and use this in the displaycts() function.
const ctsContainer = document.querySelector(".cts-container");
//Display
const displaycts = () => {
ctsContainer.innerHTML = ctsYouWantToView
.map((ct) => {
const { t1,  t1para1,  t2,t3,t4, t5,image1, image2,image3,image4
,image5 ,image1desc, image2desc, image3desc,image4desc,image5desc ,image6desc,image7desc
,image1para,image2para,image3para,image4para,image5para,image6para,image7para
,image6
,image7} = ct;
return `                    

<article class="ct" class="paragraphtext" class="h-feed">
         
          <button type="button" class="collapsible"> <h2 class="smallertitles">${ t1}</h2></button>
          <section class="togglect" class="e-content">
            <section class="paragraphtext">
              <h2 class="smallertitles">${ t1}</h2>
              <h2 class="evensmallertitles">${t2}</h2>
              <p class="designblocks">
                <img
                  src="${image1}"
                  alt=" ${image1desc}"
                  id="designimg"
                />
                ${image1para}
              </p>
              <p >
              ${ t1para1}
            </p>
            
            <h2 class="evensmallertitles"></h2>
            <p class="designblocks">
              <img
                src="${image2}"
                alt=" ${image2desc}"
                id="designimg"
              />
              ${image2para}
            </p>
            <p >
            <h2 class="evensmallertitles">${t3}</h2>
            <p class="designblocks">
              <img
                src="${image3}"
                alt=" ${image3desc}"
                id="designimg"
              />
              ${image3para}
            </p>
            <p >
            <h2 class="evensmallertitles"></h2>
            <p class="designblocks">
              <img
                src="${image4}"
                alt=" ${image4desc}"
                id="designimg"
              />
              ${image4para}
            </p>
            <p >
             
            <h2 class="evensmallertitles">${t4}</h2>
            <p class="designblocks">
              <img
                src="${image5}"
                alt=" ${image5desc}"
                id="designimg"
              />
              ${image5para}
            </p>
            <p >

            <h2 class="evensmallertitles">${t4}</h2>
            <p class="designblocks">
              <img
                src="${image6}"
                alt=" ${image6desc}"
                id="designimg"
              />
              ${image6para}
            </p>
            <p >
            <h2 class="evensmallertitles">${t5}</h2>
            <p class="designblocks">
              <img
                src="${image7}"
                alt=" ${image7desc}"
                id="designimg"
              />
              ${image7para}
            </p>
            <p >
             
            </section>
          </section>
        </article>
`;
})
.join("");
};
displaycts();

clearempty();
function clearempty()
{
  let images=document.querySelectorAll("img");
  
  let m;
  let src;
  for(m=0; m<images.length; m++)
  {src=images[m].getAttribute('src');
  console.log(src);
  
    if(!src)
    {
      images[m].style.display="none";
    }
  }
};




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
return `<button class="category-btn" data-coy="${category}">${category}</button>`;
})
.join("");
};
displayButtons();
//Filter for Buttons
categoriesSection.addEventListener("click", (e) => {
const chosenCoy = e.target;
if (chosenCoy.classList.contains("category-btn")) {
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
*/
// toggle togglect
calltoggle();
function calltoggle(){
  let coll = document.getElementsByClassName("collapsible");
let i;
console.log(coll.length);

for (i = 0; i < coll.length; i++) {

  coll[i].addEventListener ("click", activetoggle); 
}
};
function activetoggle(){
  {
    this.classList.toggle("active");
    let togglect = this.nextElementSibling;
    if (togglect.style.maxHeight){
      togglect.style.maxHeight = null;
    } else {
      togglect.style.maxHeight = togglect.scrollHeight + "px";
    }
  };
};

