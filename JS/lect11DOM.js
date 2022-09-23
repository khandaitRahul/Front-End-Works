//DOM (Document Object Modal)

//Window vs Document

//WINDOW
//Window is the main object or we can say the GLOBAL OBJECT and any,
//operations related to entire browser window can be part of window object.

//DOCUMENT
//Document is know as DOM whereas it is the child of an object.
//where in the DOM we need to refer the document, if we want to use Document
//object,methods or properties.
//Document is just the object of the global object(window) which deals  with
//the document the HTML elements.


//DOM(Document Object Modal) vs BOM(Browser Object Modal)
//DOM
//the DOM deals with the document, the HTML elements themselves, eg:- document,events.

//BOM
//the BOM deals with the browser components aside from the components like history,
//location, navigator and screen.

//DOM NAVIGATION
//it is a tree like structure of an HTML documents that render the HTML tags in web browser.
//<HTML> - <BODY> - <a>,<p>,<h1>
//       |-<HEAD> - <href>,<meta>,<style>

//NAVIGATE THROUGH DOM

//DOCUMENT
//(document) is the root element of our document
//(document.documentElement) returns the element present in the documents.
//(document.head) returns the element present in the <head> section of HTML.
//(document.body) returns the element present in the <body> section of HTML.
//(document.body.childNodes) returns all the element present in the HTML body section (including tab,enter & whitespaces).

//list of the direct children
//(document.body.children) returns all the child tags present in the HTML body tags (excluding enter,whitespaces & tab)
//(document.body)


//PRACTICES
//1. wether an elements(<p>,<a>) have there own childNodes or not(with syntax)..??
//yes we can by (document.body.hasChildNodes());

//2. how to find the child in DOM tree.
//(document.body.firstElementChild) for first element present in the body section
//(document.querySelector(".className")); to target the element by className.

//3. how to find the parent in the DOM tree.
//(document.body.parentNode) to know the parent elements of a tags.

//4. how to find the sibling in the DOM tree.
//(document.body.nextElementSibling),(document.body.previousElementSibling) to know the sibling present before or after the present tags.

//GET ELEMENT BY ID
//  what is getElementById() ?
//  syntax :
//    element = document.getElementById(id);
//returns a reference to the element by its ID. if the element with the specified ID is not in the document,
//then it will return null.

//5. how to change the content of an element within JS.
//(document.getElementById("ID NAME").innerHTML = "Content";) //use to change the content by targetting the ID of that content.
//(document.getElementsByClassName("CLASSNAME").innerHTML = "Content";) //use to change content through className.
//(document.getElementsByTagName("p").innerHTML = "Content";) //use to change the content through TagName.
//(document.getElementsByName("NAME").innerHTML = "Content";) //use to change the value by targetting the name attribute.

//QUERY SELECTOR
//  what is querySelector ?
//  syntax :
//  element = document.querySelector(selector);
//returns the first element within the document that matches the specified group of selectors,
//or null if no matches are found.

//(document.querySelector("#ID" or ".CLASS");) //use to change the content(first matching value) inside the DOM.
//(document.querySelectorAll(".CLASS");)

