const bookname=document.getElementById('bname');
const email=document.getElementById('email');
const authorname=document.getElementById('aname');
const date=document.getElementById('date');
const price=document.getElementById('price');
const category=document.getElementById('category');
const form=document.getElementById('form')
localStorage.setItem("name","Hey there");

var storedBookName='';
var storedBookCategory='';
var storedEmailValuee='';
var storedAuthorName='';
var storedDate='';
var storedPrice='';

var successCategory=false;
var successBName=false;
var successEmail =false;
var successAName =false;
var successDate =false;
var successPrice =false;
var showDetail=false;

setInputError=(HTMLElement,errorMessage)=>{
    //console.log('in error setting');
    const elementClass=HTMLElement.parentElement;
    const message=elementClass.querySelector('.error');
    message.innerHTML=errorMessage;
    elementClass.classList.add('errorstyle');
    elementClass.classList.remove('successstyle');

}
setInputSuccess=(HTMLElement)=>{
    const elementClass=HTMLElement.parentElement;
    const message=elementClass.querySelector('.error');
    message.innerHTML=' '
    //console.log('in success');
    elementClass.classList.remove('errorstyle');
    elementClass.classList.add('successstyle');
}
keyPressValidateCategory=()=>{
    const categoryValue=category.value;
    const element=category.parentElement;
    
    storedBookCategory=categoryValue;
    localStorage.setItem("lcategory",storedBookCategory);

    if(categoryValue==''){
        
        setInputError(category,'Please select the category');
        element.classList.add('errorcategorystyle');
        element.classList.remove('successcategorystyle');
    }
    else{
        element.classList.remove('errorcategorystyle');
        element.classList.add('successcategorystyle');
        setInputSuccess(category);
        successCategory=true;
    }
}
keyPressValidateBName =()=>{
    const bookNameValue=bookname.value.trim();

    storedBooknameValue=bookNameValue
    localStorage.setItem("lbname",storedBooknameValue);
    
    if((bookNameValue=="")){
        setInputError(bookname,'Book name cannot be empty');
    }else if(bookNameValue.length>50){
        setInputError(bookname,'Book name cannot exceed 50');
    }
    else if(!/^[a-zA-Z #$]*$/g.test(bookNameValue))
    {
        setInputError(bookname,'Book name cannot contain numeric values');
    }
    else{
        setInputSuccess(bookname);
        successBName=true;
    }
}
keyPressValidateEmail =()=>{
    const emailValue=email.value.trim();

    storedEmailValuee=emailValue;
    localStorage.setItem("lemail",storedEmailValuee);

    if(emailValue=='')
    {  setInputError(email,'Email cannot be empty');
    }
    else if(!(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/).test(emailValue)){
        setInputError(email,'Invalid email format');
    }
    else{
        setInputSuccess(email);
        successEmail=true;
    }
}
keyPressValidateAName =()=>{
    const authornameValue=authorname.value.trim();

    storedAuthorName=authornameValue;
    localStorage.setItem("laname",storedAuthorName);

    if((authornameValue=="")&&(authorname)){
        setInputError(authorname,'Author name cannot be empty');
    }
    else if(authornameValue.length>50){
        setInputError(authorname,'Author name cannot exceed 50');
    }
    else if(!((/^[a-zA-Z ]*$/)).test(authornameValue)){
        setInputError(authorname,'Author name cannot have numeric values');
    }
    else if(!((/^[a-zA-Z #$]*$/g).test(authornameValue)))
    {
        setInputError(authorname,'Author name cannot contain numeric values');
    }
    else{
        setInputSuccess(authorname);
        successAName=true;
    }
}
keyPressValidateDate =()=>{
    const dateValue=date.value.trim();

    storedDate=dateValue;
    localStorage.setItem("ldate",storedDate);

    if(dateValue==""){
        setInputError(date,'Date cannot be empty');
    }
    else if(!((parseInt(dateValue)>1000)&&(parseInt(dateValue)<=2022))){
        setInputError(date,'Invalid date Eg 2020');
    }
    else if(!((/^[0-9]*$/g).test(dateValue))){
        console.log("hey working good")
        setInputError(date,'Date cannot be alphabets');
    }
    else{
        setInputSuccess(date);
        successDate=true;
    }
}
keyPressValidatePrice =()=>{
    const priceValue=price.value.trim();

    storedPrice=priceValue;
    localStorage.setItem("lprice",storedPrice);

    if(priceValue==""){
        setInputError(price,'Price cannot be empty');
    }
    else if(!((/^[0-9]*$/).test(priceValue))){
        setInputError(price,'Price cannot be alphabet');
    }
    else{
        setInputSuccess(price);
        successPrice=true;
    }
}
addEventListener('submit',e=>{
    e.preventDefault();
    keyPressValidateAName();
    keyPressValidateBName();
    keyPressValidateDate();
    keyPressValidateEmail();
    keyPressValidatePrice();
    keyPressValidateCategory();
    const submitmessage=document.getElementById('smessage');
    if((successAName==true)&&(successBName==true)&&(successCategory==true)&&(successEmail==true)&&(successDate==true)&&(successPrice==true)){
        submitmessage.innerHTML=`Saved Successfully Click '<i>Show</i>' to view entered values`;
        submitmessage.style.color='green';
        showDetail=true;
    }
    else{
        submitmessage.innerHTML="Please enter valid input for all fields"
        submitmessage.style.color='red';
    }
    
})
clearError=()=>{
    window.location.reload();
   
}
showDetails= ()=>{
    if(showDetail){
        window.open("./saveddetails.html","_self")
    }
   
}

 