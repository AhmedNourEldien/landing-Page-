
//define globale variables to be used in later in all functions


//create list of all sections & store it in sectors variable
const sectors = document.querySelectorAll('section');
const navigationmenu = document.querySelector('#navbar__list');
//Create virtual docuemnt fragment to enhance doucment performance
const fragment = document.createDocumentFragment();


//loop on different sections to acquire each section name & assign it to link as list item in navigation menu
  sectors.forEach((sector) => {
    const navListItem = document.createElement('li');
    const sectorLink = document.createElement('a');
    //assign displayed link name to be acquired dynamically from each section (data-nav)
    sectorLink.textContent = sector.getAttribute('data-nav');
    //assing link for each section to the previously created links
    sectorLink.href= '#'+sector.id;
    //assign class list for sections link
    sectorLink.classList.add('menu__link');
    //appending each link inside navigation list
    navListItem.appendChild(sectorLink);
    //appending navigation list inside virtual fragment
    fragment.appendChild(navListItem);
  });
  // appending the virtual fragment back to navigation menu
  navigationmenu.appendChild(fragment);

//set scroll behavior to smooth (source : W3schools Library)
document.documentElement.style.scrollBehavior = "smooth";

//window Event Listener function will fire on scroll action from user
window.addEventListener ('scroll', activateClass => {
//create loop of the different page sections
  sectors.forEach((sector) => {
    //set IntersectionObserver to observe changes in the intersection of a target section with window view port
    // IntersectionObserver tutorial source (https://observablehq.com/@gianordoli/intersection-observer-tutorial)
    let observer = new IntersectionObserver ((entries,observer) =>{
      entries.forEach((entry) => {
        //if section is appeared within view port ,then activate class "your-active-class" in the target section
        if (entry.isIntersecting){
          entry.target.classList.add('your-active-class');
        }
        //otherwise delete class "your-active-class" from section
        else {
          entry.target.classList.remove('your-active-class');
        }
      });
    });
    observer.observe(sector);
  });
});


//Scroll to Top Button creation
//(source : W3schools & MDN )

//create button
const scrollButton = document.createElement('button');
//appending button to the document body
document.body.appendChild(scrollButton);
//assign text to button
scrollButton.textContent='Back to Top';
//assign style to button
scrollButton.classList.add('buttonstyle');
//function activated when user scroll down on window
window.onscroll = function scrollFunction () {
  //condition when user scroll down by 50 from top of page then button displayed
  if ( document.documentElement.scrollTop > 50) {
    scrollButton.style.display = "block";
  }
  //otherwise the button will disappear (occure when user on top of the page)
  else {
    scrollButton.style.display = "none";
  }
};

//button function that will excute when button clicked
scrollButton.onclick =function scrollToTop () {
  document.documentElement.scrollTop = 0;
}
