// Circle Icons

let icon1 = document.querySelector('.circle-1');
let icon2 = document.querySelector('.circle-2');
let icon3 = document.querySelector('.circle-3');
let icon4 = document.querySelector('.circle-4');
let icon5 = document.querySelector('.circle-5');
let icon6 = document.querySelector('.circle-6');

// Message Boxes

let mssgBox1 = document.querySelector('.message-box-1');
let mssgBox2 = document.querySelector('.message-box-2');
let mssgBox3 = document.querySelector('.message-box-3');
let mssgBox4 = document.querySelector('.message-box-4');
let mssgBox5 = document.querySelector('.message-box-5');

// Current Date
let today = new Date();
let currentDate = today.getDate();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear()-1998;

// Input Fields
let firstname = document.querySelector('.firstname');
firstname.addEventListener('focus', () =>{

    closeBtn1();
    closeBtn2();

    if(icon1.style.visibility === "visible"){
        mssgBox1.style.visibility = "visible";
    }
    else{
        mssgBox1.style.visibility = "hidden";
    }

    icon1.style.visibility = 'hidden';
    firstname.style.outline = 'none';
    firstname.style.border = '1px solid #AFA7A7';
});
firstname.addEventListener('focusout', () =>{

    mssgBox1.style.visibility = "hidden";
    closeBtn1();
    closeBtn2();

    if(firstname.value.length==0){
        icon1.style.visibility = 'visible';
        firstname.style.borderColor = "red";
    }
    
});

let surname = document.querySelector('.surname');
surname.addEventListener('focus', () =>{

    closeBtn1();
    closeBtn2();

    if(icon2.style.visibility === "visible"){
        mssgBox2.style.visibility = "visible";
    }
    else{
        mssgBox2.style.visibility = "hidden";
    }

    icon2.style.visibility = 'hidden';
    surname.style.outline = 'none';
    surname.style.border = '1px solid #AFA7A7';
});
surname.addEventListener('focusout', () =>{

    mssgBox2.style.visibility = "hidden";
    closeBtn1();
    closeBtn2();

    if(surname.value.length==0){
        icon2.style.visibility = 'visible';
        surname.style.borderColor = "red";
    }
});

let email = document.querySelector('.email');
email.addEventListener('focus', () =>{

    closeBtn1();
    closeBtn2();

    if(icon3.style.visibility === "visible"){
        mssgBox3.style.visibility = "visible";
    }
    else{
        mssgBox3.style.visibility = "hidden";
    }

    icon3.style.visibility = 'hidden';
    email.style.outline = 'none';
    email.style.border = '1px solid #AFA7A7';
});
email.addEventListener('focusout', () =>{
    
    mssgBox3.style.visibility = "hidden";
    closeBtn1();
    closeBtn2();

    if(email.value.length==0){
        icon3.style.visibility = 'visible';
        email.style.borderColor = "red";
    }
});

let password = document.querySelector('.password');
password.addEventListener('focus', () =>{

    closeBtn1();
    closeBtn2();

    if(icon4.style.visibility === "visible"){
        mssgBox4.style.visibility = "visible";
    }
    else{
        mssgBox4.style.visibility = "hidden";
    }

    icon4.style.visibility = 'hidden';
    password.style.outline = 'none';
    password.style.border = '1px solid #AFA7A7';
});
password.addEventListener('focusout', () =>{
    
    mssgBox4.style.visibility = "hidden";
    closeBtn1();
    closeBtn2();

    if(email.value.length==0){
        icon4.style.visibility = 'visible';
        password.style.borderColor = "red";
    }
});

// Gender Code

let gender = document.getElementsByName('gender');

let female = document.querySelector(".female");
let male = document.querySelector(".male");
let other = document.querySelector(".other");

female.addEventListener('click', () =>{

    closeBtn1();
    closeBtn2();

    icon6.style.visibility = 'hidden';
    male.style.borderColor = "transparent";
    female.style.borderColor = "transparent";
    other.style.borderColor = "transparent";
});
male.addEventListener('click', () =>{

    closeBtn1();

    icon6.style.visibility = 'hidden';
    male.style.borderColor = "transparent";
    female.style.borderColor = "transparent";
    other.style.borderColor = "transparent";
});
other.addEventListener('click', () =>{

    closeBtn1();
    closeBtn2();

    icon6.style.visibility = 'hidden';
    male.style.borderColor = "transparent";
    female.style.borderColor = "transparent";
    other.style.borderColor = "transparent";
});



// Date of birth

let year = document.getElementsByClassName('year');
let month = document.getElementsByClassName('month');
let day = document.getElementsByClassName('day');

// Month , Day , Year

let x = day[0].value;
let y = month[0].value;
let z= year[0].value;

year[0].addEventListener('focusout', () =>{

    closeBtn1();
    closeBtn2();
    mssgBox5.style.visibility = "hidden";
});

year[0].addEventListener('focus', () =>{

    closeBtn1();
    closeBtn2();
    if(icon5.style.visibility === "visible"){
        mssgBox5.style.visibility = "visible";
    }
    else{
        mssgBox5.style.visibility = "hidden";
    }
});

year[0].addEventListener('change', () =>{

    closeBtn1();
    closeBtn2();
    x = day[0].value;
    y = month[0].value;
    z= year[0].value;

    if(icon5.style.visibility === "visible"){
        mssgBox5.style.visibility = "visible";
    }
    else{
        mssgBox5.style.visibility = "hidden";
    }

    if(year[0].value > currentYear-5 || (x==0 || y==0 || z==0)){

        icon5.style.visibility = 'visible';
        year[0].style.outline = 'none';
        year[0].style.border = '1px solid red';
        month[0].style.outline = 'none';
        month[0].style.border = '1px solid red';
        day[0].style.outline = 'none';
        day[0].style.border = '1px solid red';
    }
    else{

        icon5.style.visibility = 'hidden';
        day[0].style.outline = 'none';
        day[0].style.border = '1px solid #AFA7A7';
        month[0].style.outline = 'none';
        month[0].style.border = '1px solid #AFA7A7';
        year[0].style.outline = 'none';
        year[0].style.border = '1px solid #AFA7A7';
    }

});

day[0].addEventListener('focusout', () =>{

    mssgBox5.style.visibility = "hidden";
    closeBtn1();
    closeBtn2();
});

day[0].addEventListener('focus', () =>{

    closeBtn1();
    closeBtn2();
    if(icon5.style.visibility === "visible"){
        mssgBox5.style.visibility = "visible";
    }
    else{
        mssgBox5.style.visibility = "hidden";
    }
});

day[0].addEventListener('change', () =>{

    closeBtn1();
    closeBtn2();

    x = day[0].value;
    y = month[0].value;
    z= year[0].value;

    if(icon5.style.visibility === "visible"){
        mssgBox5.style.visibility = "visible";
    }
    else{
        mssgBox5.style.visibility = "hidden";
    }

    if(year[0].value > currentYear-5 || (x==0 || y==0 || z==0)){

        icon5.style.visibility = 'visible';
        year[0].style.outline = 'none';
        year[0].style.border = '1px solid red';
        month[0].style.outline = 'none';
        month[0].style.border = '1px solid red';
        day[0].style.outline = 'none';
        day[0].style.border = '1px solid red';
    }
    else{

        icon5.style.visibility = 'hidden';
        day[0].style.outline = 'none';
        day[0].style.border = '1px solid #AFA7A7';
        month[0].style.outline = 'none';
        month[0].style.border = '1px solid #AFA7A7';
        year[0].style.outline = 'none';
        year[0].style.border = '1px solid #AFA7A7';
    }

    
});

month[0].addEventListener('focusout', () =>{
    closeBtn1();
    closeBtn2();
    mssgBox5.style.visibility = "hidden";
});

month[0].addEventListener('focus', () =>{

    closeBtn1();
    closeBtn2();
    if(icon5.style.visibility === "visible"){
        mssgBox5.style.visibility = "visible";
    }
    else{
        mssgBox5.style.visibility = "hidden";
    }
});

month[0].addEventListener('change', () =>{

    closeBtn1();
    closeBtn2();

    x = day[0].value;
    y = month[0].value;
    z= year[0].value;

    if(icon5.style.visibility === "visible"){
        mssgBox5.style.visibility = "visible";
    }
    else{
        mssgBox5.style.visibility = "hidden";
    }

    if(year[0].value > currentYear-5 || (x==0 || y==0 || z==0)){

        icon5.style.visibility = 'visible';
        year[0].style.outline = 'none';
        year[0].style.border = '1px solid red';
        month[0].style.outline = 'none';
        month[0].style.border = '1px solid red';
        day[0].style.outline = 'none';
        day[0].style.border = '1px solid red';
    }
    else{

        icon5.style.visibility = 'hidden';
        day[0].style.outline = 'none';
        day[0].style.border = '1px solid #AFA7A7';
        month[0].style.outline = 'none';
        month[0].style.border = '1px solid #AFA7A7';
        year[0].style.outline = 'none';
        year[0].style.border = '1px solid #AFA7A7';
    }

});


window.addEventListener('load',() =>{

    day[0].value = currentDate;
    month[0].value = currentMonth+1;
    year[0].value = currentYear;

    closeBtn1();
    closeBtn2();
});


// Submit Button Event Listener

let submitBtn = document.querySelector('.submit-btn');
submitBtn.addEventListener('click', checkField);

function checkField(){

    if(firstname.value.length==0){
        icon1.style.visibility = 'visible';
        firstname.style.borderColor = "red";
    }
    else{
        icon1.style.visibility = 'hidden';
        
    }

    if(surname.value.length==0){
        icon2.style.visibility = 'visible';
        surname.style.borderColor = "red";
    }
    else{
        icon2.style.visibility = 'hidden';
    }
    
    if(email.value.length==0){
        icon3.style.visibility = 'visible';
        email.style.borderColor = "red";
    }
    else{
        icon3.style.visibility = 'hidden';
    }

    if(password.value.length==0){
        icon4.style.visibility = 'visible';
        password.style.borderColor = "red";
    }
    else{
        icon4.style.visibility = 'hidden';
    }

    // Date of Birth
    x = day[0].value;
    y = month[0].value;
    z= year[0].value;

    if(year[0].value > currentYear-5 || (x==0 || y==0 || z==0)){

        icon5.style.visibility = 'visible';
        year[0].style.outline = 'none';
        year[0].style.border = '1px solid red';
        month[0].style.outline = 'none';
        month[0].style.border = '1px solid red';
        day[0].style.outline = 'none';
        day[0].style.border = '1px solid red';
    }
    else{

        icon5.style.visibility = 'hidden';
        day[0].style.outline = 'none';
        day[0].style.border = '1px solid #AFA7A7';
        month[0].style.outline = 'none';
        month[0].style.border = '1px solid #AFA7A7';
        year[0].style.outline = 'none';
        year[0].style.border = '1px solid #AFA7A7';
    }

    // Gender
    let flag = 1, genderValue;      
    for(i = 0; i < gender.length; i++) { 
        flag=1;
        if(gender[i].checked){
            genderValue = gender[i].value;
            break;
        }
        else{
            flag=0;
        }
    }   

    if(flag==0){
        icon6.style.visibility = 'visible';
        male.style.borderColor = "red";
        female.style.borderColor = "red";
        other.style.borderColor = "red";
    }
    else{
        icon6.style.visibility = 'hidden';
    }

    closeBtn1();
    closeBtn2();
}

// Onclick
let questionDiv1 = document.querySelector('.questionBox1');
let questionMark1 = document.querySelector('.questionMark-1');

function questMark(){
    closeBtn2();
    questionDiv1.style.visibility = "visible";
}

function closeBtn1(){
    questionDiv1.style.visibility = "hidden" ;
}

let questionDiv2 = document.querySelector('.questionBox2');
let questionMark2 = document.querySelector('.questionMark-2');

function questMark1(){
    closeBtn1()
    questionDiv2.style.visibility = "visible";
}

function closeBtn2(){
    questionDiv2.style.visibility = "hidden" ;
}

// Listen for click events on body
document.body.addEventListener('click', function (event) {
    if (questionMark1.contains(event.target) || questionDiv1.contains(event.target)) {

        questionDiv1.style.visibility = "visible";
    } 
    else {
        questionDiv1.style.visibility = "hidden" ;
    }
});

document.body.addEventListener('click', function (event) {
    if (questionMark2.contains(event.target) || questionDiv2.contains(event.target)) {

        questionDiv2.style.visibility = "visible";
    } 
    else {
        questionDiv2.style.visibility = "hidden" ;
    }
});
