
# Pivnenko Anton
## WEB-Developer
![Avatar](/img/ava.jpg)



**Contacts**


* +995 555 466 983
* pivnenkowebdev@gmail.com
* [Web-site](https://pivnenko-anton.pro/)
* [Discord](https://discord.gg/V8fwMPqd)

-----------------------------------------  


**About me**


I have the skills of cross-browser, valid, semantic and adaptive layout. On my sites, I like to create animations using the GSAP js library.  

I ensure the full implementation of the terms of reference and pixel perfect

-------------------------------------------


**Skills**


* HTML (PUG)
* CSS (Bootstrap, SASS/SCSS, BEM)
* JavaScript (Basic,DOM,Event,AJAX,Libs)
* PHP (Basic)
* JQuery (Basic)
* Git/GitHub
* Figma (For web-developer)

-----------------------------------


**Experience**

**AGATON LIMITED**
Cyprus, Nicosia – Web-development teacher  

FEBRUARY 2021 - PRESENT


**"YURP McDonald's" LLC**
Russia, Gelendzhik – Assistant director  

JUNE 2019 – NOVEMBER 2020

--------------------------------------


**Courses**

* Course on HTML, CSS layout of sites, WebCademy

--------------------------------------


**Сode example**


##### This is a simple version of "notes" in JS/HTML/CSS (NOT ADAPTIVE)


`JS`

```
const toDo = document.querySelector('#to-do');
const listNotes = toDo.querySelector('#list-notes');
const inputSearch = toDo.querySelector('#search');

toDo.addEventListener('submit',renderNote);
listNotes.addEventListener('click', removeNote);
inputSearch.addEventListener('keyup', filterNotes);

function renderNote(e){
   e.preventDefault();

   let inputValue = toDo.querySelector('#new-note-input');
   
   const newNote = `<li class="list-notes__item">
   <p class="list-notes__value">${inputValue.value}</p>
   <button class="delete-btn" data-action='delete'>Delete</button>
   </li>`
   
   inputValue.value = '';

   listNotes.insertAdjacentHTML('beforeend', newNote);
}

function removeNote(e){
   if(e.target.dataset.action == 'delete'){

         e.target.parentNode.remove();

   }
}

function filterNotes(e){

   let searchValue = e.target.value.toLowerCase();

   const noteItem = listNotes.querySelectorAll('.list-notes__value');

   
   noteItem.forEach(function(item){

      const itemValue = item.textContent.toLowerCase();
      
      if(itemValue.indexOf(searchValue) != -1 ){

         item.closest('.list-notes__item').style.display = 'flex';
         
      }else{
         
         item.closest('.list-notes__item').style.display = 'none';

      }
         

   })

}
```

`HTML`


```
<!DOCTYPE html>
<html lang="en">

<head>
   <link rel="stylesheet" href="./css/style.css">
   <meta charset="UTF-8">
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>to-do-list</title>
</head>

<body>
   <div class="wrapper">
      <form action="" class="to-do" id="to-do">

         <div class="header">
            <div class="container">
               <div class="to-do__item">
                  <p class="to-do__heading">To-do</p>
                  <input type="search" class="to-do__search" placeholder="Search" id="search">
               </div>
           </div>
         </div>
         
         <div class="main">
              <div class="container">
                  <div class="to-do__item">
                     <div class="add-note">
                        <input type="text" class="add-note__input" placeholder="Add note" id="new-note-input">
                        <input type="submit" class="add-btn" value="Add" id="add-btn">
                     </div>
                  </div>
   
                  <div class="to-do__item">
                        <ul class="list-notes" id="list-notes">
                          
                        </ul>
                  </div>
              </div>
         </div>

      </form>
   </div>
   <script src="./js/main.js"></script>
</body>

</html>
```


`CSS`


```
@import './reset.css';
@import url('https://fonts.googleapis.com/css2?family=Kanit:wght@400;500;600&display=swap');

html,body{
background-color: rgb(210, 238, 238);
font-family: 'Kanit', sans-serif;
}

.container{
width: 900px;
margin: 0 auto;
}

.header {
padding-top: 40px;
padding-bottom: 40px;
background-color: brown;
margin-bottom: 20px; 
}

.to-do__item {
margin-bottom: 20px;
}

.to-do__item:last-child{
   margin-bottom: 0;
}

.to-do__heading {
   font-size: 60px;
   font-weight: 600;
   color: rgb(247, 242, 242);
}

.to-do__search {
   padding-left: 10px;
   padding-right: 10px;
   height: 40px;
   width: 600px;
   font-size: 20px;
   border-radius: 5px;
}

.add-note__input {
   padding-left: 10px;
   padding-right: 10px;
   height: 40px;
   width: 400px;
   border-radius: 5px 0px 0px 5px;
   font-size: 20px;
}

.add-note .add-btn {
   padding-left: 20px;
   padding-right: 20px;
   border-radius: 0px 5px 5px 0px;
   height: 40px;
   font-size: 20px;
   background-color: brown;  
   color: rgb(247, 242, 242);
   transition: background-color 500ms, color 500ms;
}

.list-notes {
   height: 600px;
   border: 1px solid gray;
   border-top: none;
   overflow: auto;
   padding-left: 20px;
   padding-right: 20px;
   padding-bottom: 20px;
}

.list-notes__item {
   display: flex;
   column-gap: 5px;
   margin-bottom: 15px;
}

.list-notes__item:last-child{
   margin-bottom: 0;
}

.list-notes__value {
   width: 90%;
   height: 50px;
   background-color: white;
   overflow:auto;
   padding-left: 15px;
   padding-right: 15px;
   border-radius:5px 0px 0px 5px;
}

.list-notes__value::-webkit-scrollbar,
.list-notes::-webkit-scrollbar {
   width: 6px; 
 }

 .list-notes__value::-webkit-scrollbar-thumb,
 .list-notes::-webkit-scrollbar-thumb  {
   background-color: rgba(230, 127, 113, 0.5);  
}
   
.list-notes__value::-webkit-scrollbar-thumb:hover,
.list-notes::-webkit-scrollbar-thumb:hover{
   background-color: rgba(199, 50, 30, 0.822);    
}

.list-notes .delete-btn {
   padding-left: 20px;
   padding-right: 20px;
   border-radius: 0px 5px 5px 0px;
   height: 50px;
   font-size: 20px;
   background-color: brown;  
   color: rgb(247, 242, 242);
   transition: background-color 500ms, color 500ms;
}

.list-notes .delete-btn:hover,
.add-note .add-btn:hover{
   background-color: rgb(233, 33, 33);
   color: white;
   transition: background-color 500ms, color 500ms;
}

.list-notes .delete-btn:active,
.add-note .add-btn:active{
   background-color: rgb(99, 93, 93);
}
```


`CSS-RESET`


```
/* Reset and base styles  */
* {
	padding: 0px;
	margin: 0px;
	border: none;
}

*,
*::before,
*::after {
	box-sizing: border-box;
}

:focus,
:active {
	outline: none;
}

/* Links */

a, a:visited  {
   color: inherit;
   text-decoration: none;
   display: inline-block;
}

a:hover  {
   color: inherit;
   text-decoration: none;
}

a:focus,
a:active {
	outline: none;
}

/* Common */

aside, nav, footer, header, section, main {
	display: block;
}

h1, h2, h3, h4, h5, h6, p {
   font-size: inherit;
	font-weight: inherit;
}

ul {
	list-style: none;
}

img, svg {
	display: block;
	max-width: 100%;
	height: auto;
	object-fit: cover;
}

/* Form */

input, textarea, button, select {
	font-family: inherit;
   font-size: inherit;
}

input::-ms-clear {
	display: none;
}

button, input[type="submit"] {
   display: inline-block;
   box-shadow: none;
   background-color: transparent;
   background: none;
   cursor: pointer;
}

input:focus, input:active,
button:focus, button:active {
   outline: none;
}

button::-moz-focus-inner {
	padding: 0;
	border: 0;
}

label {
	cursor: pointer;
}

legend {
	display: block;
}

/* off yellow background input */
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
textarea:-webkit-autofill,
textarea:-webkit-autofill:hover,
textarea:-webkit-autofill:focus,
select:-webkit-autofill,
select:-webkit-autofill:hover,
select:-webkit-autofill:focus {
  border-bottom: 1px solid #8f8d8d;
  -webkit-text-fill-color: #161616;
  -webkit-box-shadow: 0 0 0px 1000px #ffffff inset;
  transition: background-color 5000s ease-in-out 0s;
}

input[type="search"]::-webkit-search-decoration,
input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-results-button,
input[type="search"]::-webkit-search-results-decoration {
  display: none;
}
```
---------------------------------------


**Education**


Krasnodar State Technological University  

Faculty: MIPPS. Specialty: Engineer-Technologist.

---------------------------------------


**Languages**


* Russian - native;
* English - intermediate, communication, writing, reading a technical document
