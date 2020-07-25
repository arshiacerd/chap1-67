//CHAPTER 21-25

//task 1
// var FN= prompt("Enter first name");
// var LN = prompt("Enter last name");
// var fullName = FN+LN;
// alert("Welcome " + fullName);
//task 2 
// var model = prompt ("Enter your favourite mobile phone model");
// var model = model.toString();
// document.write("Length of string is : " + model.length);
// task 3
// var text = "Pakistan";
// document.write("index of n is : " + text.indexOf('n'));
// task 4
// var text = "Hello World";
// document.write("index of last l is : " + text.lastIndexOf('l'));
//task5
// var text = "Pakistan";
// var text = text.slice(3,4);
// document.write("Character at index 3 is : " + text)
//task6   
// var FN= prompt("Enter first name");
// var LN = prompt("Enter last name");
// var fullName= FN.concat(LN);
// alert("Welcome " + fullName);
//task 7 
// var text = "Hyderabad";
// var text2 = text.replace("Hyder","Islam");
// document.write("City: " + text + "<br>" );
// document.write("After replacement : " + text2 );
//task 8
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var message2 = message.replace(/and/g , '&');
// document.write("message: " + message + "<br>" );
//  document.write("After replacement : " + message2 );
//task9
// var string = "472";
// document.write("Value: " + string + "<br>");
// document.write("Type : " + typeof(string) + "<br>");
// var num = Number(string);
// document.write("Value: " + num + "<br>");
// document.write("Type : " + typeof(num));
//task10
// var input = prompt("enter text ");
// document.write("User Input: " + input + "<br>");
// document.write("Upper case : " + input.toUpperCase());
//task 11
// var input = prompt("enter text ");
// document.write("User Input: " + input + "<br>");
// var input2 = input.slice(0,1);
// var lower = input.slice(1);
// var input2 = input2.toUpperCase();
// document.write("Title Case: " + input2 + lower);
//task12
// var num = 35.36
// document.write("number : " + num + "<br>");
// document.write("Result: " + Math.floor(num)+Math.ceil(num));
//task13 
// var userName = prompt("Enter your name");
// let code = [33,44,46,64];
// for(let i =0 ; i<=userName.length-1;i++)
// {
//     var check = userName.charCodeAt(i);
//     for(let j =0 ;j<=code.length-1;j++)
//     {
//     if(check==code[j])
//     {
//         alert("Please enter a valid user name");
//     }
// }
// }

//task14
// var A = ["cake" , "applepie" , "cookie" , "chips" ,"patties"];
// var input = prompt("Enter items you want to find in our bakery");
// input = input.toLowerCase();
// var boolean = "false";
// for ( let i =0; i<A.length;i++){
//     if(input==A[i]){
//         document.write(input + " is <b>available</b> at index " + i + " in our bakery");
//         boolean = "true";
//     }
    
// }
// if(boolean=="false"){
//   document.write("We are sorry. " + input + " is  not <b>available</b>  in our bakery");
// }
//task 15 !

//  var password = prompt("Enter password");
//  var check1 = password.slice(0,1);
//  var code = check1.charCodeAt(0);
//  var boolean = "false"
//  for(let i = 49 ; i<=57 ;i ++) //0-9 = 49-57 , a-z = 97-122 , A-Z = 65-90
//  {
//   if(code==i){
//     alert("Password cannot begin with a number");
//     boolean = "true";
//   }
// }
// if(boolean=="false")
// {
//     if(password.length<6){
//         alert("it must atleast 6 characters long");
 
// }  
// }
  


//  alert(check1);
// for(let i = 49 ; i<=57 ;i ++) //0-9 = 49-57 , a-z = 97-122 , A-Z = 65-90
// {
//  if(check1==i){
// 
//  }
// }
 
//task16
//  var university = "University of karachi";
 
//  for(let i =0; i <= university.length-1;i++){
//      document.write(university[i] + "<br>");
//  }
 
//task17
// var input = prompt("enter some text");
// document.write("user Input: " + input + "<br>");
// var len = input.length;
// var len2 = len-1;
// var lastchar = input.slice(len2,len);
// document.write("last character of input: " + lastchar);
//task18
    // var text = "The quick brown fox jumps over the lazy dog ."
    // document.write("Text : " + text + "<br>");

    // document.write(" There are  " +  text.split("the").length + " occurrence of word \' the \' ");
    
    
//CHAPTER 26-30
// //task 01
// var num = prompt("enter positive integer:");
// document.write("number: " + num + "<br>");
// document.write("round off value: " + Math.round(num) + "<br>");
// document.write("floor value: " + Math.floor(num) + "<br>");
// document.write("ceil value: " + Math.ceil(num) + "<br>");
//task 2
// var num = prompt("enter negative floating point number:");
// document.write("number: " + num + "<br>");
// document.write("round off value: " + Math.round(num) + "<br>");
// document.write("floor value: " + Math.floor(num) + "<br>");
// document.write("ceil value: " + Math.ceil(num) + "<br>");
//task 3
// var num = -23.6;
// document.write("The absolute value of " + num + " is " + Math.abs(num));
//task 4
// var num = (Math.random() *5) + 1;
// document.write("random dice value is : " + num.toFixed(0));
//task 5
// var toss = (Math.random()*1) + 1;
// var coin = toss.toFixed(0);
// if(coin == '2'){
//     document.write(coin + " <br> random coin value: Heads" )
// }
// else{
//     document.write(coin + "<br> random coin value: Tails"  )
// }
//task 6 
// var num = (Math.random()*99) + 1;
// var num2 = num.toFixed(0);  
// document.write("random number between 1 and 100: " + num2);
//task 7
// var weight = prompt("enter your weight in kilograms");
// var weight = parseInt(weight);
// document.write("The weight of user is: " + weight + " kilograms");
//task 8 
// var ranNo = (Math.random() *9) +1;
// var secretNo =Math.floor(ranNo);
// var num = prompt("Enter no between 1 and 10");
// if(num==secretNo)
// {
//     alert("Congratulations! you got the secret number");
// }
// else{
//     alert("Try again");
// }


// //CHAPTER 31-34
//task 1
// var months = ["January","February","March","April","May","June", "July","August","September","October","November","December"];
// var today = new Date();
// document.write(today + "<br>");
// //task 2

// var currentMon = today.getMonth();
// document.write(months[currentMon]);
//task 3
// var day = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat" ];
// var today = new Date();
// var now = today.getDay();
// document.write("Today is " + day[now]);
//task 4
// var today = new Date();
// var day = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat" ];
// var now = today.getDay();
// var finalNow = day[now];
// if(finalNow=="Sun" || finalNow== "Sat" ){
//     document.write("\"Today is Fun day \"");
// } 
// else{
//     document.write("\"Today is Working day \"");
// }
//task 5
// var today = new Date();
// var now = today.getDate();

// if(now < '16'){
// document.write("First Fifteen days of the month");

// }
// else{
//     document.write("last days of the month");
// }
// //task 6
// var today = new Date();
// document.write("Current Date: " + today + "<br>");
// document.write("Elapsed milliseconds since January 1 , 1970: " +(today.getTime()) + "<br>");
// var min = today.getTime()/(1000*60);
// document.write("Elapsed minutes since January 1 , 1970: " + min + "<br>");
//task 7 
// var today = new Date();
// var now = today.getHours();
// console.log(now);
// if(now <13)
// {
//     document.write("It's AM");
// }
// else{
//     document.write("It's PM");
// }
//task 8
// var d = new Date();
//  d.setFullYear(2020);
// d.setMonth(11);
// d.setDate(31);
// d.setHours(0);
// d.setMinutes(0);
// d.setSeconds(0);
// document.write("Later date: " + d);
//task 9
// var ramdan = new Date();
// ramdan.setFullYear(2015, 5, 18);
// var today = new Date()
// var time = today-ramdan;
// var time = time/(1000*60*60*24);
// document.write(time + " days have passed since 1st Ramdan, 2015");
//task 10
// var refDate = new Date();
// var beginDate = new Date();
// beginDate.setFullYear(2020, 0, 01);
// var time = refDate-beginDate;
// time = time/1000;
// document.write("On reference date " + refDate + "<br>");
// document.write(time + " seconds had passed since beginning 2020");
//task 11
// var d = new Date();
// document.write("current date: " + d + "<br>");
// var d1 = new Date();
// d1.setHours(d1.getHours()-1);
// document.write("1 hour ago, it was " +  d1);
//task 12
// var d = new Date();
//  document.write("current date: " + d + "<br>");
 
//  document.write("100 years back, it was " + d.getFullYear()-100 );
//task 13
// var d = new Date();
// var age = prompt("enter your age");
// var birth = d.getFullYear()-age
// document.write("Your birth year is: " + birth);
//task 14
// var d = new Date();
// var currmonth = d.getMonth();
// var months = ["January","February","March","April","May","June", "July","August","September","October","November","December"];

// document.write("<b>K-Electric Bill</b> <br>");
// document.write("Customer Name: <b>Zafar</b><br>");
// document.write("Month: <b>" + months[currmonth] + "</b><br>");
// document.write("Number of units: <b>410</b><br>");
// document.write("Charges per unit: <b>16</b><br>");
// netAmount = 410*16;
// grossAmount = netAmount + 350;
// document.write("Net Amount payable(within Due Date): <b>" + netAmount + "</b><br>");
// document.write("late Payment Surcharge: <b> 350 </b><br>");
// document.write("Gross Amount payable(after Due Date): <b>" + grossAmount + "</b><br>");
//CHAPTER 35-38
//task 1
// function date(){
//     var d = new Date();
//     document.write(d);
// }
// date();
//task 2
// function welcome(){
//      var firstName = prompt("Enter first name");
//      var lastName = prompt("Enter last name");
//      alert("Welcome " + firstName +" " + lastName);
// }
// welcome();
//task 3
// function sum(){
//     var num1 = prompt("input 1st number");
//     var num2 = prompt("input 2nd number");
//     return  ( +num1 + +num2);
// }
// document.write(sum());
//task 4
// var a,b,operat;
// function calculator(num1,op,num2){
//      a = prompt("enter 1st number:");
//      b = prompt("enter 2nd number:");
//      operat = prompt("enter operator:");
//     if(operat== '+'){
//         return (+a + +b);
//     }
//     else if(operat== '-'){
//         return(a-b);
//     }
//     else if(operat== '*'){
//         return (a*b);
//     }
//     else if(operat== '/'){
//         return (a/b);
//     }
// }
// var calc = calculator(a,operat,b)
// document.write("result is:  " + calc );
//task 5

// function square(num){
//     return Math.pow(num, 2);
// }
// alert("Square of 6 is : " + square(6));
//task 6
// let num1;
// function factorial(num){
//     let fact;
//     for(let i =num-1 ; i>=1 ; i--){
//       fact =   num=num*i
//     }
//     return fact;
// }
// num1 = prompt("Enter  number to calculate the factorial:");
// document.write("factorial of " + num1 + " is " + factorial(num1));
//task 7
// let startNum, endNum;
// function count(startNum,endNum)
// {
//      startNum = prompt("Enter starting number");
//      endNum = prompt("Enter ending number");
//     for(let i =startNum ; i<=endNum ; i++)
//     {
//         document.write(i + "<br>");
//     }
// }
// count(startNum,endNum);
//task 8

// var base,perp;

// function hypotenious(){
//     let baseRoot, perpRoot, hyp, add, sqbase, sqperp;
//     square();
//     add = +sqbase + +sqperp;
//     hyp = Math.pow(add, (1/2));
//     return hyp.toFixed(2);
  

//     function square(){
//          sqbase = Math.pow(base, 2);
//          sqperp = Math.pow(perp, 2);
         
         
        

//     }
// }
//  base = prompt("enter base of right angle triangle:");
//  perp = prompt("enter perpendicular of right angle triangle:");
// document.write("Hypotenious of right angle triangle is: <b>" + hypotenious());
// //task 9
// let width, height; 
// function area(width,height){
//     let A = width*height;
//     document.write("Area of trinagle is: <b>" + A);

// }
// area(4,6);
//task 10                                                                                   
// function palindrome(){
//     var word = prompt("Enter a word");
    
//     for(let i =0 ; i<=word.length-1 ; i++)
//     {
//         for(let j=word.length-1-i ; j>j-1;j--)
//         {
        
//             if(word[i]==word[j])
//             {
//               document.write(word[i]);
//             }
//         }
//     }
// }
 //palindrome();
//task 11
// let string;
// function transform(string){
//     string = prompt("Enter text");
//     document.write(string[0].toUpperCase())
//     for(let i =1;i<=string.length-1;i++){
        
//         if(string[i-1]== " "){
        
//      document.write( string[i].toUpperCase());
//         }
//         else{
//             document.write( string[i]);
//         }
//     }
    
// }
// transform(string);
//task 12                                                                                   
// let string;
// function longest(){
//     string = prompt("enter string");
//     var str = string.split(' ');
//     var longWord = 0;
//     for(i=0;i<str.length;i++){
//         if(str[i].length>longWord){
//             longWord = str[i].length;
//             strWord = str[i];

//         }

//     }
//     return strWord;
    
// }
//console.log(longest());
//task 13
// let text,letter;
// let count = 0;
// function string(text, letter){
// text = prompt("enter text");
// letter = prompt("enter letter");
// for (let i =0 ; i<=text.length-1;i++){
//     if(text[i]==letter){
//         count++;
//     }
// }

// document.write("occurence of  <b>\' " + letter + "\'</b> is: " + count + " times " );
// }
// string(text,letter);
//task 14
// let radius;
// function calcCircumference(radius){
//     let Circumference = 2*Math.PI*radius;
//     document.write("Circumference of circle is: " + Circumference + "<br>");
// }
// function calcArea(radius){
//     let area = Math.PI * Math.pow(radius, 2);
//     document.write("Area of circle is: " + area);
// }
// calcCircumference(5.6);
// calcArea(5.6);