//MAIN TITLE AND HEADER
// Create the div for the main header
var mainHeaderDiv = document.createElement("header"); 
mainHeaderDiv.id = "main-header"; 
mainHeaderDiv.classList = "column-flex"; 
document.body.append(mainHeaderDiv); 

// Create the header for the title
var mainHeader = document.createElement("h1"); 
mainHeader.id = "intro-main-header";
mainHeader.innerHTML = "Welcome to the (Unofficial) Exercise Guide of <em>Eloquent JavaScript<em>";
document.getElementById("main-header").append(mainHeader); 

// Create the header for the creator's name 
var secondHeader = document.createElement("h2");
secondHeader.id = "second-header";
secondHeader.innerHTML = "Created by David Brunner (A Rookie JavaScript Pupil)"; 
document.getElementById("main-header").append(secondHeader); 


//ELOQUENT JAVASCRIPT LINKS
//Create a article for the resources
var bookLinkArticle = document.createElement("article"); 
bookLinkArticle.id = "resources-article";
bookLinkArticle.classList = "column-flex";
document.body.append(bookLinkArticle); 

//Create a div for the blur effect 
var bookLinkDiv = document.createElement("div"); 
bookLinkDiv.id = "inner-resources-div";
bookLinkDiv.classList = "column-flex";
document.getElementById("resources-article").append(bookLinkDiv); 

//Create a figure for the book cover
var bookCoverFigure = document.createElement("figure"); 
bookCoverFigure.id = "book-cover-figure"; 
bookCoverFigure.classList = "column-flex";
document.getElementById("inner-resources-div").append(bookCoverFigure); 

//Create an image of the book cover
var bookCoverImage = document.createElement("img");
bookCoverImage.id = "book-cover-image";
bookCoverImage.src = "../Intro/Assets/Book_Cover.jpg"; 
bookCoverImage.alt = "Eloquent JavaScript Cover";
bookCoverImage.style = "width: 100%; height: 100%" ; 
document.getElementById("book-cover-figure").append(bookCoverImage); 

//Create a div for the book links
var linksDiv = document.createElement("div");
linksDiv.id = "book-links";
linksDiv.classList = "column-flex";
document.getElementById("inner-resources-div").append(linksDiv); 

//Create a div for first link
var firstLinkDiv = document.createElement("div"); 
firstLinkDiv.id = "first-link-div"; 
document.getElementById("book-links").append(firstLinkDiv); 

// Create a p for the Eloquent JavaScript website link
var link1 = document.createElement("p"); 
link1.id = "link1"; 
link1.innerText = "The entire book is available online for free: "; 
document.getElementById("first-link-div").append(link1); 

// Create a href link for the Eloquent JavaScript website
var link1Element = document.createElement("a"); 
link1Element.innerText = "Eloquent JavaScript Website"; 
link1Element.href = "https://eloquentjavascript.net/index.html"; 
link1Element.alt = "Eloquent JavaScript Website"; 
link1Element.target = "_blank"; 
document.getElementById("first-link-div").append(link1Element); 

// Create a div for the second link
var secondLinkDiv = document.createElement("div");
secondLinkDiv.id = "second-link-div"; 
document.getElementById("book-links").append(secondLinkDiv); 

// Create a p for the Amazon link to Eloquent JavaScript
var link2 = document.createElement("p"); 
link2.id = "link2"; 
link2.innerText = "The entire book is also available for purchase: " 
document.getElementById("second-link-div").append(link2); 

// Create a href link for Amazon to purchase Eloquent JavaScript
var link2Element = document.createElement("a");
link2Element.innerText = "Amazon"; 
link2Element.href = "https://www.amazon.com/gp/product/1593279507/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=1593279507&linkCode=as2&tag=marijhaver-20&linkId=d8642c0457954f03e27c02b0034d0d60"; 
link2Element.alt = "Amazon"; 
link2Element.target = "_blank"; 
document.getElementById("second-link-div").append(link2Element); 


//NAVBAR
//Create a article element for the navbar
var navbarArticle = document.createElement("article");
navbarArticle.id = "navbar-article"; 
document.body.append(navbarArticle); 

//Create a section element for 3rd Ed.
var navbarSection3 = document.createElement("section"); 
navbarSection3.id = "navbar-section-3rd-Ed"; 
navbarArticle.append(navbarSection3); 

//Create a header for 3rd Ed. 
var header3rdEd = document.createElement("h3"); 
header3rdEd.id = "header-3rd-Ed"; 
header3rdEd.innerHTML = "3rd Edition"; 
document.getElementById("navbar-section-3rd-Ed").append(header3rdEd); 

// Create a navbar for 3rd Ed. 
var navbar3 = document.createElement("nav"); 
navbar3.id = "navbar-3rd-Ed";
document.getElementById("navbar-section-3rd-Ed").append(navbar3); 

//Create unorderedList
var unorderedList3 = document.createElement("ul"); 

//Create link for intro
var page30 = document.createElement("li"); 
var page30Link = document.createElement("a"); 
page30Link.innerText = "Intro"; 
page30Link.href = "../Intro/Eloquent_JavaScript_HTML_Intro.html";
page30Link.alt = "Intro Link"; 
page30Link.title = "Intro"; 
page30.appendChild(page30Link); 
unorderedList3.append(page30); 

//Create link for first Chapter
var page31 = document.createElement("li"); 
var page31Link = document.createElement("a"); 
page31Link.innerText = "Chapter 1 (Part 1: Language)"; 
page31Link.href = "../Chap1 - Values, Types, and Operators/Eloquent_JavaScript_HTML_Chap1.html"; 
page31Link.alt = "Chapter 1 Link"; 
page31Link.title = "Chapter 1";
page31.appendChild(page31Link); 
unorderedList3.append(page31); 

//Create link for second Chapter
var page32 = document.createElement("li"); 
var page32Link = document.createElement("a"); 
page32Link.innerText = "Chapter 2"; 
page32Link.href = "../Chap2 - Program Structure/Eloquent_JavaScript_HTML_Chap2.html"; 
page32Link.alt = "Chapter 2 Link"; 
page32Link.title = "Chapter 2"; 
page32.appendChild(page32Link); 
unorderedList3.append(page32)

//Create a link for third chapter
var page33 = document.createElement("li"); 
var page33Link = document.createElement("a"); 
page33Link.innerText = "Chapter 3";
page33Link.href = "../Chap3 - Functions/Eloquent_JavaScript_HTML_Chap3.html"; 
page33Link.alt = "Chapter 3 Link";
page33Link.title = "Chapter 3";
page33.appendChild(page33Link); 
unorderedList3.append(page33); 

//Create a link for fourth chapter
var page34 = document.createElement("li"); 
var page34Link = document.createElement("a"); 
page34Link.innerText = "Chapter 4";
page34Link.href = "../Chap4 - Data Structures/Eloquent_JavaScript_HTML_Chap4.html"; 
page34Link.alt = "Chapter 4 Link";
page34Link.title = "Chapter 4";
page34.appendChild(page34Link); 
unorderedList3.append(page34); 

//Create a link for fifth chapter
var page35 = document.createElement("li"); 
var page35Link = document.createElement("a"); 
page35Link.innerText = "Chapter 5";
page35Link.href = "../Chap5 - Higher-Order Functions/Eloquent_JavaScript_HTML_Chap5.html";  
page35Link.alt = "Chapter 5 Link";
page35Link.title = "Chapter 5";
page35.appendChild(page35Link); 
unorderedList3.append(page35); 

//Create a link for sixth chapter
var page36 = document.createElement("li"); 
var page36Link = document.createElement("a"); 
page36Link.innerText = "Chapter 6";
page36Link.href = "../Chap6 - The Secret Life of Objects/Eloquent_JavaScript_HTML_Chap6.html"; 
page36Link.alt = "Chapter 6 Link";
page36Link.title = "Chapter 6";
page36.appendChild(page36Link); 
unorderedList3.append(page36); 

//Create a link for seventh chapter
var page37 = document.createElement("li"); 
var page37Link = document.createElement("a"); 
page37Link.innerText = "Chapter 7";
page37Link.href = "../Chap7 - A Robot Project/Eloquent_JavaScript_HTML_Chap7.html"; 
page37Link.alt = "Chapter 7 Link";
page37Link.title = "Chapter 7";
page37.appendChild(page37Link); 
unorderedList3.append(page37); 

//Create a link for eigth chapter 

// Add links to the unordered list
navbar3.append(unorderedList3); 


// CSS
var styles = `
    html { font-size: 62.5%; overflow-y: scroll; }    

    /* MAIN ELEMENTS */
    body { margin: 0; font-size: 2rem; font-family: Georgia, 'Nimbus Roman No9 L', 'Century Schoolbook L', serif; }

    ul { margin: 0; padding: 0; list-style-type: none; }

    li { padding-top: 3rem; }

    a { color: #800080; text-decoration: none; }

    a:hover { color: #F00; }

    /* CLASSES */
    .column-flex { display: flex; flex-direction: column; }

    /* IDS */
    /* Header */
    #main-header { margin: 0 auto; padding: 15rem 10rem 10rem 10rem; background-color: #f8d410; text-align: center; }

    /* Resource Links */
    #resources-article { justify-content: center; align-items: center; margin-top: 10rem; }

    #inner-resources-div { justify-content: center; align-items: center; }

    #book-cover-figure { justify-content: center; align-items: center; margin: 0; }

    #book-links { position: relative; opacity: 0; }

    #first-link-div { position: absolute; width: 30rem; margin-bottom: 1rem; padding: 2rem; color: white; background-color: rgba(0,0,0, 0.8); text-align: center; border: 0.5rem solid white; transform: translate(-50%, -300%); }

    #second-link-div { position: absolute; width: 30rem; margin-top: 1rem; padding: 2rem; color: white; background-color: rgba(0,0,0, 0.8); text-align: center; border: 0.5rem solid white; transform: translate(-50%, -200%); }

    #book-links a { color: #ac77f2; }

    #book-cover-figure:hover + #book-links{ opacity: 1; }

    #book-links:hover { opacity: 1; }

    #inner-resources-div:hover #book-cover-image { filter: blur(8px); }

    /* Navbar */
    #navbar-article { display: flex; justify-content: space-around; align-items: center; padding: 8rem; }

    #navbar-section-3rd-Ed { padding: 5rem; transition: background-color 0.3s ease-out; }

    #navbar-section-3rd-Ed:hover { background-color: #f8d410; } `

var styleSheet = document.createElement("style"); 
styleSheet.type = "text/css";
styleSheet.innerText = styles; 
document.head.appendChild(styleSheet); 

