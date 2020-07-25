//CHAP 49-52
//task1
// function signUp(){
//     var fname = document.getElementById("name").value;
//  document.getElementById("demo1").innerHTML = fname;
//  var lname = document.getElementById("lastName").value;
//  document.getElementById("demo2").innerHTML = fname;
//  var fname = document.getElementById("email").value;
//  document.getElementById("demo3").innerHTML = fname;
 
   
// }

//task2
// function readMore(){
// var moreText = document.getElementById("more");
// moreText.style.display = "inline";
// var readText = document.getElementById("moreBtn");
// readText.style.display= "none";
//  }
 
//task3
var sdName,sdMail,sdNo,sdAddress,cell1,cell2,cell3,cell4,cell5,cell6;
function addData(){
var form = document.forms[""]
  var sdName = document.getElementById("stdName").value;
    var sdMail = document.getElementById("mail").value;
    var sdNo = document.getElementById("phone").value;
    var sdAddress = document.getElementById("address").value;
    
    if(sdName =="" || sdMail == "" || sdNo == "" || sdAddress== "")
    {
      
      alert("please insert values first");
    }
    
    else{

  
  var table =   document.getElementById("table");
  
    newRow = table.insertRow(table.length);
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    var cell5 = newRow.insertCell(4);
    var cell6 = newRow.insertCell(5);
    
    var sdName = document.getElementById("stdName").value;
    var sdMail = document.getElementById("mail").value;
    var sdNo = document.getElementById("phone").value;
    var sdAddress = document.getElementById("address").value;
    var remove = document.createElement('input');
    remove.setAttribute('type','button'); 
   remove.setAttribute('value', 'Delete');
   remove.setAttribute('onclick' , 'removeData(this);');
   remove.style.backgroundColor = "red";
   var edit = document.createElement('input');
    edit.setAttribute('type','button'); 
    edit.setAttribute('value', 'Edit');
    edit.setAttribute('onclick' , 'editData(this);');
  edit.style.backgroundColor = "green";
   
    
    cell1.innerHTML = sdName;
    cell2.innerHTML = sdMail;
    cell3.innerHTML = sdNo;
    cell4.innerHTML = sdAddress;
    cell5.appendChild(remove);
   cell6.appendChild(edit);
    table.style.display = "inline";
    var sdName = document.getElementById("stdName").value = " ";
    var sdMail = document.getElementById("mail").value = " ";
    var sdNo = document.getElementById("phone").value = " ";
    var sdAddress = document.getElementById("address").value = " ";
    
    }
    
    }
    function removeData(r){
  //     var i = r.parentNode.parentNode.rowIndex
  // document.getElementById("table").deleteRow(i);
r.parentNode.parentNode.remove();

}
function editData(r){
  document.getElementById("myform").style.display= "block";
  //console.log(r.parentNode.parentNode);

//  console.log(parent.childNodes[0]);

 var child1 =  r.parentNode.parentNode.firstChild.firstChild.nodeValue;
 console.log(child1);
 var stdName1 =   document.getElementById("myform").childNodes[2].nodeValue=child1 ; 


 console.log(stdName1);
 var stdName1 = document.getElementById("stdName1").innerHTML = child1;
 //console.log(sdName);
 var mail1 = document.getElementById("mail1").value;
 var phone1 = document.getElementById("phone1").value;
 var address1 = document.getElementById("address1").value;


}
function updateData(){
  
 var a =   document.getElementById("stdName1").value;

}
          