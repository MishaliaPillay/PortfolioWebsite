//Filter and search start 
//Gopal, A. 2023. Ecommerce JS and Dom Exercise, 9 May 2023. Coding Exercise (WSOA3028A). University of the Witwatersrand, Johannesburg
    
let ctsYouWantToView = [...cts]; //This is a hack "database". We filter thisvariable based on ALL cts and use this in the displaycts() function.
const ctsContainer = document.querySelector(".ctsContainer");
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

<article class="ct" class="paragraphText" class="h-feed">
         
          <button type="button" class="collapsible"> <h2 class="smallerTitles">${ t1}</h2></button>
          <section class="toggleCt" class="e-content">
            <section class="paragraphText">
              <h2 class="smallerTitles">${ t1}</h2>
              <h2 class="evenSmallertitles">${t2}</h2>
              <p class="designBlocks">
                <img
                  src="${image1}"
                  alt=" ${image1desc}"
                  id="designImg"
                />
                ${image1para}
              </p>
              <p >
              ${ t1para1}
            </p>
            
            <h2 class="evenSmallertitles"></h2>
            <p class="designBlocks">
              <img
                src="${image2}"
                alt=" ${image2desc}"
                id="designImg"
              />
              ${image2para}
            </p>
            <p >
            <h2 class="evenSmallertitles">${t3}</h2>
            <p class="designBlocks">
              <img
                src="${image3}"
                alt=" ${image3desc}"
                id="designImg"
              />
              ${image3para}
            </p>
            <p >
            <h2 class="evenSmallertitles"></h2>
            <p class="designBlocks">
              <img
                src="${image4}"
                alt=" ${image4desc}"
                id="designImg"
              />
              ${image4para}
            </p>
            <p >
             
            <h2 class="evenSmallertitles">${t4}</h2>
            <p class="designBlocks">
              <img
                src="${image5}"
                alt=" ${image5desc}"
                id="designImg"
              />
              ${image5para}
            </p>
            <p >

            <h2 class="evenSmallertitles">${t4}</h2>
            <p class="designBlocks">
              <img
                src="${image6}"
                alt=" ${image6desc}"
                id="designImg"
              />
              ${image6para}
            </p>
            <p >
            <h2 class="evenSmallertitles">${t5}</h2>
            <p class="designBlocks">
              <img
                src="${image7}"
                alt=" ${image7desc}"
                id="designImg"
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
*/
// toggle toggleCt
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
    let toggleCt = this.nextElementSibling;
    if (toggleCt.style.maxHeight){
      toggleCt.style.maxHeight = null;
    } else {
      toggleCt.style.maxHeight = toggleCt.scrollHeight + "px";
    }
  };
};

