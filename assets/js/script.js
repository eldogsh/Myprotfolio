//// page navigation variables
const navlinks=document.querySelectorAll("[data-nav-link]");
const databage=document.querySelectorAll("[data-page]");

// add event to all nav link
    for(let i=0;i<navlinks.length;i++){
        navlinks[i].addEventListener('click',function(){
               
        for(let i=0; i<databage.length; i++){
            if(this.innerHTML.toLowerCase() === databage[i].dataset.page){
                navlinks[i].classList.add("active");
                databage[i].classList.add("active");
                }
                else{
                    databage[i].classList.remove("active");
                    navlinks[i].classList.remove("active");
                    
                }
            }
            });
     };


// elementToggleFunction;
const elementToggleFunc = function(elm) {
    elm.classList.toggle("active");
}

// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebar_btn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebar_btn.addEventListener('click', function() {
    elementToggleFunc(sidebar);
});

// testimonials variables
var testimonialsItems = document.querySelectorAll("[data-testimonials-item]");
var container = document.querySelector("[data-modal-container]");
var overlay = document.querySelector("[data-overlay]");
var closebtn = document.querySelector("[data-modal-close-btn]");

// modal variables
var modalImg = document.querySelector("[data-modal-img]");
var modalTitle = document.querySelector("[data-modal-title]");
var modalText = document.querySelector("[data-modal-text]");

// modal toggle function
var testimonialsModalFunc = function() {
    container.classList.toggle("active");
    overlay.classList.toggle("active");
}

// add click event to all modal items
testimonialsItems.forEach(function(item) {
    item.addEventListener('click', function() {
        modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
        modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
        modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

        testimonialsModalFunc();
    });
});

// add click event to modal close button and overlay
closebtn.addEventListener('click', testimonialsModalFunc);
overlay.addEventListener('click', testimonialsModalFunc);

//protfolio

// custom select variables
const select=document.querySelector("[data-select]");
const selectvalue=document.querySelector("[data-selecct-value]");
const filterbtn=document.querySelectorAll("[data-filter-btn]");
const selectitem=document.querySelectorAll("[data-select-item]");

select.addEventListener('click',function(){elementToggleFunc(this)});
// add event in all select items
for(let i=0;i<selectitem.length;i++){
    selectitem[i].addEventListener('click',function(){
        let selectetdvalue=this.innerText.toLowerCase();
        selectetdvalue.innerText=this.innerText;
        filterfunc(selectetdvalue);
    })

};

// filter variables
const filteritme=document.querySelectorAll("[data-filter-item]");
const filterfunc=function(selectetdvalue){
    for(let i=0;i<filteritme.length;i++){
        if(selectetdvalue==="all"){
            filteritme[i].classList.add("active");
        }else if(selectetdvalue===filteritme[i].dataset.category){
            filteritme[i].classList.add("active")
        }
        else{
            filteritme[i].classList.remove("active");
        }
        
    }
};

// add event in all filter button items for large screen
let lastClickedBtn = filterbtn[0];

for(let i=0;i<filterbtn.length;i++){
    filterbtn[i].addEventListener('click',function(){
        let selectetdvalue=this.innerText.toLowerCase();
        selectetdvalue.innerText=this.innerText;
        filterfunc(selectetdvalue);
        lastClickedBtn.classList.remove("active");
        lastClickedBtn=this;
    });
};


// contact form variables

const form=document.querySelector("[data-form]");
const forminput=document.querySelectorAll("[data-form-input]");
const formbtn=document.querySelector("[data-form-btn]");

// add event to all form input field

for(let i=0;i<forminput.length;i++){
    forminput[i].addEventListener('input',function(){
        //check from validate
        if(form.checkValidity()){
            formbtn.removeAttribute("disabled");
        }else{
            formbtn.setAttribute("disabled","")
        }
    })
};