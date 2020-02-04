const nav = document.getElementsByClassName("navBar");
const navUl = document.getElementById("navBar");
const navLinks = document.getElementsByTagName("a");
const pages = document.getElementsByClassName("page");

let page = 0; //Current Page Number

window.onload = function(){updateNav()};
window.onscroll = function () {updateNav()};

$(document).ready(function() {
    $("#title").fadeIn(2000);
});


/**
Updates the nav bar by highlighting current section of the page
 */
function updateNav() {
    updatePageNum(window.pageYOffset - 8);
    setNav(page);
}

/**
Smooth Scrolling Effect
 */
$(document).ready(function () {
    let scrollTo = $(".scroll");
    scrollTo.click(function (e) {
        e.preventDefault();
        $('body,html').animate({
            scrollTop:$(this.hash).offset().top
        }, 800)
    })
});

/* --------- Helper Functions --------- */

/**
 * Updates the global page number variable based on scroll position
 * @param currentPosition - scroll position (distance from top)
 */
function updatePageNum(currentPosition){
    let height = pages[0].clientHeight;
    let pageFactor = 0.3; //How much of the next page must be hidden
    page = Math.floor(currentPosition/height + pageFactor);
    updateTitle(page);
}

/**
 * Updates the document title (tab text) based on scroll position
 * @param page - the current page number
 */
function updateTitle(page){
    switch(page){
        case 0:{document.title = "Home"; break;}
        case 1:{document.title = "About"; break;}
        case 2:{document.title = "Projects"; break;}
        case 3:{document.title = "Hobbies"; break;}
        case 4:{document.title = "Contact"; break;}
    }
}

/**
 * Highlights the selected page on the navbar based on the page number
 * @param pageNumber - what page the user is on
 */
function setNav(pageNumber){

    for (let i = 0; i < pages.length - 1; i++){
        if ((pageNumber - 1) === i){
            navLinks[i].classList.add("navBar-current")}
        else {
            nav[i].classList.remove("navBar-current");
            navLinks[i].classList.remove("navBar-current");
        }
    }
}