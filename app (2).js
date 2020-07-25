//CHAP 38-42
//TASK1
// var a = 2;
// var b = 4;
// function power(){
//     var result = pow(a,b);
// document.write(result);
// }
// power();

//task2
// var year = prompt("Enter year");
// if(year%4==0){
//     alert(year + " is leap year");
// }
// else{
//     alert(year + " is not leap year");
// }

//task3
// var area;
// function triangle(){
//     var a = 5;
// var b=6;
// var c=10;

//         var s = (+a + +b + +c)/2;
//         var area = s*(s-a)*(s-b)*(s-c);
//         return area;
// }
// function display(){
//     var print =  triangle();
//     document.write("area of triangle is: " + print);
// }
// display();

//task4
// var sub1 = prompt("Enter marks of 1st subject");
// var sub2 = prompt("Enter marks of 2nd subject");
// var sub3 = prompt("Enter marks of 3rd subject");
// var avg,per,obt;

// function Average (){

//      avg = (+sub1 + +sub2 + +sub3)/3;
//     return avg;
// }
// function percentage(){
//     obt = +sub1 + +sub2 + +sub3;
//     per = obt*100/300;
//     return per;
// }
// function main(){
//     var funAvg = Average();
//     var calPer = percentage();
//     document.write("average is: " + funAvg + "<br>");
//     document.write("percentage is: " + calPer + "<br>");
// }
// main();

//task5
// var str = "Hi , I am learning javascript";

// function checkIndex(){
// alert(str.indexOf(","));

// }
// checkIndex();

//task6

// var sentnce = "I am learning javascript";
//function delVowels(){
// var arr =new Array();
// var vowels = new Array();
// for(var i =0 ; i<=sentnce.length-1;i++){
//     if(sentnce[i]=='a' || sentnce[i]=='e' || sentnce[i] == 'i' || sentnce[i] == 'o' || sentnce[i] == 'u'){
//       vowels[i] = sentnce[i];
      
//     }
//    else{
//             arr[i] = sentnce[i];
       
//    }
// }

// alert(arr);
//}
//delVowels();

//task7
// var str = "Please read this application and give me gratuity";
// var vowels = new Array();
// var j=0;
// var k =0;
// var arr ;

// function count(){
//     for(var i =0 ; i<=str.length-1;i++){
//     if(str[i]=='a' || str[i]=='e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u'){
        
//         vowels[i] = str[i];
//         document.write(vowels[i]);
        
        
//         j++;

//     }
//     if(j==2){
        
        
        
//         document.write( " ");
// k++;
            
//         j=0;
//     }
// }
// document.write("<br>no of occurences is: " + k);
// }


// count();

//task8
// var distnce = prompt("enter distance between two cities in km");
// function meter(){
//     var result = distnce*1000;
// document.write("distance in meter is: " + result + "<br>");

// }
// function feet(){
//     var result = distnce*3280.84;
// document.write("distance in feet is: " + result + "<br>");

// }
// function inches(){
//     var result = distnce*39370.08;
// document.write("distance in inches is: " + result + "<br>");

// }
// function centimeter(){
//     var result = distnce*100000;
// document.write("distance in centimeter is: " + result + "<br>");

// }   
// meter();feet();inches();centimeter();

//task9
// document.write("Overtime pay of employees for 40 hours: " + 12*40 );

//task10
// var amount = prompt("Enter amount to withdraw!");
// var hundred = parseInt(amount / 100);
// var fifty = parseInt((amount % 100) / 50);
// var ten = parseInt(((amount % 100) % 50) / 10);
// document.writeln('You will have ', hundred, ' hundred notes ', fifty, ' fifty notes, ', ten, ' ten notes');

