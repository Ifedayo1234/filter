const profileIt = [
  {
    id: 1,
    category: "frontend",
    company: "Photosnap",
    logo: "./images/photosnap.svg",
    new: true,
    featured: true,
    position: "Senior Frontend Developer",
    role: "Frontend",
    level: "Senior",
    postedAt: "1d ago",
    contract: "Full Time",
    location: "USA Only",
    languages: ["HTML", "CSS","JavaScript"],
    tools: []
  },
  {
    id: 2,
    category: "fullstack",
    company: "Manage",
    logo: "./images/manage.svg",
    new: true,
    featured: true,
    position: "Fullstack Developer",
    role: "Fullstack",
    level: "Midweight",
    postedAt: "1d ago",
    contract: "Part Time",
    location: "Remote",
    languages: ["Python"],
    tools: ["React"]
  },
  {
    id: 3,
      category: "frontend",
    company: "Account",
    logo: "./images/account.svg",
    new: true,
    featured: false,
    position: "Junior Frontend Developer",
    role: "Frontend",
    level: "Junior",
    postedAt: "2d ago",
    contract: "Part Time",
    location: "USA Only",
    languages: ["JavaScript"],
    tools: ["React", "Sass"]
  },
  {
    id: 4,
      category: "frontend",
    company: "MyHome",
    logo: "./images/myhome.svg",
    new: false,
    featured: false,
    position: "Junior Frontend Developer",
    role: "Frontend",
    level: "Junior",
    postedAt: "5d ago",
    contract: "Contract",
    location: "USA Only",
    languages: ["CSS", "JavaScript"],
    tools: []
  },
  {
    id: 5,
    category: "fullstack",
    company: "Loop Studios",
    logo: "./images/loop-studios.svg",
    new: false,
    featured: false,
    position: "Software Engineer",
    role: "Fullstack",
    level: "Midweight",
    postedAt: "1w ago",
    contract: "Full Time",
    location: "Worldwide",
    languages: ["JavaScript"],
    tools: ["Ruby", "Sass"]
  },
  {
    id: 6,
    category: "backend",
    company: "FaceIt",
    logo: "./images/faceit.svg",
    new: false,
    featured: false,
    position: "Junior Backend Developer",
    role: "Backend",
    level: "Junior",
    postedAt: "2w ago",
    contract: "Full Time",
    location: "UK Only",
    languages: ["Ruby"],
    tools: ["RoR"]
  },
  {
    id: 7,
      category: "frontend",
    company: "Shortly",
    logo: "./images/shortly.svg",
    new: false,
    featured: false,
    position: "Junior Developer",
    role: "Frontend",
    level: "Junior",
    postedAt: "2w ago",
    contract: "Full Time",
    location: "Worldwide",
    languages: ["HTML", "JavaScript"],
    tools: ["Sass"]
  },
  {
    id: 8,
      category: "frontend",
    company: "Insure",
    logo: "./images/insure.svg",
    new: false,
    featured: false,
    position: "Junior Frontend Developer",
    role: "Frontend",
    level: "Junior",
    postedAt: "2w ago",
    contract: "Full Time",
    location: "USA Only",
    languages: ["JavaScript"],
    tools: ["Vue", "Sass"]
  },
  {
    id: 9,
    category: "fullstack",
    company: "Eyecam Co.",
    logo: "./images/eyecam-co.svg",
    new: false,
    featured: false,
    position: "Full Stack Engineer",
    role: "Fullstack",
    level: "Midweight",
    postedAt: "3w ago",
    contract: "Full Time",
    location: "Worldwide",
    languages: ["JavaScript", "Python"],
    tools: ["Django"]
  },
  {
    id: 10,
      category: "frontend",
    company: "The Air Filter Company",
    logo: "./images/the-air-filter-company.svg",
    new: false,
    featured: false,
    position: "Front-end Dev",
    role: "Frontend",
    level: "Junior",
    postedAt: "1mo ago",
    contract: "Part Time",
    location: "Worldwide",
    languages: ["JavaScript"],
    tools: ["React", "Sass"]
  }
]

function newItem(profileIt) {
    let itemNew = ""
    if (profileIt.new) 
    itemNew +=`<button class="new">new!</button>`
    return itemNew
}

function featureItem(profileIt){
    let itemFeature = "" 
    if (profileIt.featured) 
itemFeature += `<button class="featured">featured</button>`
return itemFeature 
}




function makeFilters(filters) {
let itemFilter = ''
itemFilter += `<button class="filter-btn" data-id=${filters.role}>${filters.role}<i class="fas fa-times"></i></button>`;
    itemFilter += `<button class="filter-btn" data-id=${filters.level}>${filters.level}<i class="fas fa-times"></i></button>`;

filters.languages.forEach(function (item) {
    
    itemFilter += `<button class="filter-btn" data-id=${item}>${item}<i class="fas fa-times"></i></button>`;
    
});
filters.tools.forEach(function (item) {
    
    itemFilter += `<button  class="filter-btn" data-id=${item}>${item}<i class="fas fa-times"></i></button>`;
    
});

    return itemFilter;
    
}





const container = document.querySelector(".container")

const filterB = document.querySelector(".filter")
const searchBar = document.querySelector(".search-bar-container");

window.addEventListener('DOMContentLoaded', function () {


    displayProfileItems(profileIt)
    toggleClearBtn()
})





function displayProfileItems(profileItems) {
   
    let displayItems = profileItems.map(function (item) { 
            
   return `<article class="profile">
  <img src=${item.logo} alt=${item.logo}  class="logo">
  <div class="profile-header">
    <h5 class="company">${item.company}</h5>
  ${newItem(item)}
  ${featureItem(item)}
  </div>
  <h3 class="position">
    ${item.position}
  </h3>
  <ul>
    <li id="cont" class="time">${item.postedAt}</li>
    <li class="time">${item.contract}</li>
    <li class="time">${item.location}</li>

  </ul>
  <div class="filter">   
${makeFilters(item)}

  </div>

</article>`  
        
    })
    
    displayItems = displayItems.join("");
container.innerHTML = displayItems
    filterBut()
}

function filterBut() {
  const filterBtns = document.querySelectorAll(".filter-btn");
filterBtns.forEach(function (btn) {
    btn.addEventListener('click', 
    function (e) {
       
    

        const category = e.currentTarget.dataset.id;
        

const profileCategory = profileIt.filter(function (profileIte) {
 

    if (profileIte.role === category) {
const searchBar = document.querySelector(".search-bar")
searchBar.style.display = "block"
      const closeBut = document.querySelector(".fas")
 closeBut.style.display = "inline-flex"
searchBar.append(btn, closeBut)
     return profileIte
  
    } 
     
    if (profileIte.level === category) {
const searchBar = document.querySelector(".search-bar")
searchBar.style.display = "block"
      const closeBut = document.querySelector(".fas")
 closeBut.style.display = "inline-flex"
searchBar.append(btn, closeBut)
        return profileIte
    }
    if (profileIte.languages[0] === category) {
        const searchBar = document.querySelector(".search-bar")
searchBar.style.display = "block"
      const closeBut = document.querySelector(".fas")
 closeBut.style.display = "inline-flex"
searchBar.append(btn, closeBut)
        return profileIte;
    }
     if (profileIte.languages[1] === category) {
       const searchBar = document.querySelector(".search-bar")
searchBar.style.display = "block"
      const closeBut = document.querySelector(".fas")
 closeBut.style.display = "inline-flex"
searchBar.append(btn, closeBut)
        return profileIte;
    }
     if (profileIte.languages[2] === category) {
       const searchBar = document.querySelector(".search-bar")
searchBar.style.display = "block"
      const closeBut = document.querySelector(".fas")
 closeBut.style.display = "inline-flex"
searchBar.append(btn, closeBut)
        return profileIte;
    }
    if (profileIte.tools[0] === category) {
      const searchBar = document.querySelector(".search-bar")
searchBar.style.display = "block"
      const closeBut = document.querySelector(".fas")
 closeBut.style.display = "inline-flex"
searchBar.append(btn, closeBut)
        return profileIte;
    }
     if (profileIte.tools[1] === category) {
       const searchBar = document.querySelector(".search-bar")
searchBar.style.display = "block"
      const closeBut = document.querySelector(".fas")
 closeBut.style.display = "inline-flex"
searchBar.append(btn,closeBut)
        return profileIte;
        
    }
    else{
      const hidden = document.querySelector(".hidden")
      return hidden
    }
})
if (category === "all") {
  
   
   removChild()
  

}
else{
     displayProfileItems(profileCategory)
}




mainToggle() 


    })     
    })

}

// function closeButton() {
//   const 
// }

function removChild() {

const searchBar = document.querySelector(".search-bar")
const clear = document.querySelector(".clear")

clear.addEventListener('click', function () {
displayProfileItems(profileIt)
 searchBar.innerHTML = ""
 searchBar.classList.toggle("hidden")
})
  
}

function toggleClearBtn() {
  const clearBtn = document.querySelector(".clear-btn")
  const searchBar = document.querySelector(".search-bar")

clearBtn.addEventListener('click', function () {
  //  displayProfileItems(profileIt)
  //  searchBar.innerHTML = ""
window.location.reload()
 
})







}

function mainToggle() {
   const clearBtn = document.getElementById("clear")
    

 clearBtn.style.display = "block"



}

function appendButtons(profileButtons) {

  let displayButtons = 
  
  profileButtons.map(function (profileButtons) {
  let itemFilter = ''
itemFilter += `<button class="filter-btn" data-id=${profileButtons.role}>${profileButtons.role}</button><button class="close-btn">
        <i class="fas fa-times"></i>
      </button>`;
    itemFilter += `<button class="filter-btn" data-id=${profileButtons.level}>${profileButtons.level}</button><button class="close-btn">
        <i class="fas fa-times"></i>
      </button>`;

profileButtons.languages.forEach(function (item) {
    
    itemFilter += `<button class="filter-btn" data-id=${item}>${item}</button><button class="close-btn">
        <i class="fas fa-times"></i>
      </button>`;
    
});
profileButtons.tools.forEach(function (item) {
    
    itemFilter += `<button  class="filter-btn" data-id=${item}>${item}</button><button class="close-btn">
        <i class="fas fa-times"></i>
      </button>`;
    
});

    return itemFilter;
})

displayButtons = displayButtons.join("")
searchBar.innerHTML = displayButtons
}