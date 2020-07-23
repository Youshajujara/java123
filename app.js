// -------------------------(Chapter 39 to 42)----------------------------------------

//task 1

// function power(x,y) {
//     var cal = x ** y;
//     alert("The value of 'x' raised to 'y' is: " + cal)
// }

// power(+prompt("Enter Value to Calculate power"), 2)


// task 2

// var year = prompt("Enter year");
// var LeapYear = year % 4;

// if (LeapYear==0) {
//     alert("This is Leap Year");
// } else {
//     alert("This is not leap year");
// }


// task 3

// var side1 = prompt("Enter No 1"); 
// var side2 = prompt("Enter No 2"); 
// var side3 = prompt("Enter No 3"); 
// var s = (side1 + side2 + side3)/2;
// var area =  Math.sqrt(s*((s-side1)*(s-side2)*(s-side3)));
// document.write("The area of Triangle is  : " +area );


// Task: 04


// var obtainedMarks;
// totalMarks = 300;

// function marks() {
//     var subj1 = +prompt("Enter your (1st) subject's Marks: ");
//     var subj2 = +prompt("Enter your (2nd) subject's Marks: ");
//     var subj3 = +prompt("Enter your (3rd) subject's Marks: ");
//     obtainedMarks = subj1 + subj2 + subj3;
//     return obtainedMarks;
// }
// function average() {
//      marks();
//     var average = obtainedMarks / 3;
//     average = average.toFixed(2);
//     document.write("The Average of marks are: " + average + "<br>")
// }

// function percentage() {
//      marks()
//     var percent = ((obtainedMarks / totalMarks) * 100)
//     percent = percent.toFixed(3);
//     document.write("Your Percentage is: " + percent + "% <br>")
// }

// function mainFunction() {
//     marks();
//     average();
//     percentage();
// }

//  mainFunction();


//task 5

// function customindexof(word, character){
//     var a;
//     for (let i = 0; i < word.length; i++)
//      {
//       if (word[i] === character)
//        {
//         document.write(character+" Character index is = "+i);
//       }
//       else
//       {
//         a++;
//       }    
//     }
//     document.write(character+" Character index not avalaible in your word " + word);
//   }
//   customindexof(prompt("Enter Any Word"),prompt("Enter Character To Find Word Index"));


// task 6

// var strings = ("This is a aeroplane. We travel in aeroplane with our family");

//    string = strings.replace( /[aeiou]/g, '' );

// document.write("The sentence is : "+strings +"</br>" +"</br>" +"</br>"); 
// document.write("without vowel sentence : "+string); 


// Task: 08


// var distance = prompt("Enter the distance in KM: ");

// function Meters() {
//   var meters = distance * 1000;
//   document.write("Distance in meters is: " + meters + " meter. <br>");
// }

// function Feet() {
//   var feet = distance * 3280.8;
//   document.write("Distance in Feet is: " + feet + " feet. <br>");
// }

// function Inch() {
//   var inch = distance * 39370.078740157;
//   document.write("Distance in Inches is: " + inch + " inch<br>");
// }

// function Centimeter() {
//   var cm = distance * 100000;
//   document.write("Distance in Centimeter is: " + cm + " Centimeter. <br>");
// }

// function mainreading() {
//   Meters()
//   Feet()
//   Inch()
//   Centimeter()
// }

// mainreading()

//task 9

// function overtime(val)
// {
//     if(val <= 40)
//     {
//         document.write("Worker Do Not Work");
//     }
//     else if(val > 40)
//     {
//         var a= val*12 ;
//         document.write("Overtime Amount pay " + a);
//     }
// }
// overtime(+prompt("Enter Over Time Hour"));

//task 10

// function currency(valcrncy)
// {
//     var necrnc=valcrncy/100;
//     var for50=(valcrncy%100)/50;
//     var for10=((valcrncy%100)%50)/10;
//     var for1=(((valcrncy%100)%50)%10);
    
//     document.write("Hunderd Note : "+Math.floor(necrnc) + "<br>");
//     document.write("Fifty Rupee Note : "+Math.floor(for50)+"<br>");
//     document.write("ten Rupee Note : "+Math.floor(for10)+"<br>");
//     document.write(" Rupee : "+Math.floor(for1));

// }

// currency(+prompt("Enter Amount To Count Note"));







// -------------------------(Chapter 43 to 48)----------------------------------------



// function delRow(r) {
//     var i = r.parentNode.parentNode.rowIndex;
//     document.getElementById("myTable").deleteRow(i);
// } 

// var count = 0;
// function increase() {
//     count += 1
//     document.getElementById("counter").innerHTML = count;
// }

// function decrease() {
//     count -= 1;
//     document.getElementById("counter").innerHTML = count;
// }







// <!-- -------------------------------------------(chapter 48 to 52 )------------------------------------------- -->

// function showData() {
//     var fname = document.getElementById("fname").value;
//     var lname = document.getElementById("lname").value;
//     var email = document.getElementById("email").value
//     var password = document.getElementById("pass").value


//     document.getElementById("firstName").innerHTML = "First Name: " + fname;
//     document.getElementById("lastName").innerHTML = "Last Name: " + lname;;
//     document.getElementById("displayEmail").innerHTML = "Email: " + email;
//     document.getElementById("passa").innerHTML = "Pass: " + password;

//     var table = document.getElementById("mttable");
//   var row = table.insertRow(1);
//   var cell1 = row.insertCell(0);
//   var cell2 = row.insertCell(1);
//   var cell3 = row.insertCell(2);
//   var cell4 = row.insertCell(3);
//   var cell5 = row.insertCell(4);
//   var cell6 = row.insertCell(5);
//   cell1.innerHTML = fname;
//   cell2.innerHTML = lname;
//   cell3.innerHTML = email;
//   cell4.innerHTML = password;
//   cell5.innerHTML = '<button >Edit</button>';
//   cell6.innerHTML = '<button >Delete</button>';

//   var index, table = document.getElementById('mttable');

// for(var i = 1; i < table.rows.length; i++)
// {
//     table.rows[i].cells[5].onclick = function()
//     {
//         var c = confirm("do you want to delete this row");
//         if(c === true)
//         {
//             index = this.parentElement.rowIndex;
//             table.deleteRow(index);
//         }
//     };
    
// }
// }

// task 2

// function moreDetail() {
//   var fullDetail = `Pakistan was created, as an Islamic state, out of the partition of the UK’s Indian Empire, at
//   independence in August 1947. It originally consisted of two parts, West Pakistan (now Pakistan) and East Pakistan 
//   (now Bangladesh), separated by 1,600 km of Indian territory. Partition was followed by war with India over Kashmir 
//   and the mass migration of Muslims, Hindus and Sikhs to resettle within the new borders, an upheaval which led to 
//   violence, financial loss and death on a large scale. With the arrival of Indian Muslims and departure of Pakistan’s 
//   Hindus and Sikhs, Pakistan became an almost entirely Muslim society. Jinnah, who is honoured as the Quaid-i-Azam, or 
//   great leader, died in 1948.`;
//   var about = document.getElementById("para");
//   about.innerHTML = fullDetail;
// }









// <!-- -------------------------------------------(chapter 53 to 58 )------------------------------------------- -->


//task 1

// function showImage(e){
//     var modalImage = document.getElementById("modalImage")
//     modalImage.src = e.src 
//   }
  
  
//   //task 2
  
//   function zoomin(){
//     var myImg = document.getElementById("map");
//     var currWidth = myImg.clientWidth;
//     if(currWidth == 2500) return false;
//      else{
//         myImg.style.width = (currWidth + 100) + "px";
//     } 
//   }
//   function zoomout(){
//     var myImg = document.getElementById("map");
//     var currWidth = myImg.clientWidth;
//     if(currWidth == 100) return false;
//   else{
//         myImg.style.width = (currWidth - 100) + "px";
//     }
//   }







// <!-- -------------------------------------------(chapter 59 to 67 )------------------------------------------- -->





// var eField = document.getElementById("main-content");

// var c = eField.childNodes;
//   var txt = "";
//   var i;
//   for (i = 0; i < c.length; i++) {
//     txt = txt + c[i].nodeName + "<br>";
//   }

//   document.getElementById("na").innerHTML = txt;


//   var ab = document.getElementsByClassName("render");
//   var txt = "";
//   var i;
//   for (i = 0; i < ab.length; i++) {
//     txt = txt + ab[i].nodeName + "<br>";
//   }

//   document.getElementById("nrendr").innerHTML = txt;



// document.getElementById("first-name").value="Saqlain";
// document.getElementById("last-name").value="Ahmed";
// document.getElementById("email").value="saqlaina820@gmail.com";


// var dsx = document.getElementById("form-content").nodeType;
//   document.getElementById("ba").innerHTML = dsx;


//   document.getElementById("lastName").innerHTML = "Value Changed";

  

//   var nas = document.getElementById("main-content").firstChild.innerHTML;
//   document.getElementById("sss").innerHTML = nas;

//   var nas = document.getElementById("main-content").lastChild.innerHTML;
//   document.getElementById("nwch").innerHTML = nas;


//   var nas = document.getElementById("lastName").nextSibling.innerHTML;
//   document.getElementById("nsb").innerHTML = nas;

//   var nas = document.getElementById("lastName").previousSibling.innerHTML;
//   document.getElementById("psb").innerHTML = nas;


//   var nas = document.getElementById("email").parentNode.innerHTML;
//   document.getElementById("pno").innerHTML = nas;

//   var nas = document.getElementById("email").nodeType;
//   document.getElementById("pty").innerHTML = nas;
