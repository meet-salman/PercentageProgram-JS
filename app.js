var yourName = prompt("Enter Your Name");
var yourClass = +prompt("Enter Your Class");
var rollNo = +prompt("Enter Your Roll No");
var engMarks = +prompt("Enter Your English Marks");
var urduMarks = +prompt("Enter Your Urdu Marks");
var mathMarks = +prompt("Enter Your Mathematics Marks");
var phyMarks = +prompt("Enter Your Physics MArks");
var chemMarks = +prompt("Enter Your Chemistry Marks");

var totalMarks = 450;
var studentMarks = engMarks + urduMarks + mathMarks + phyMarks + chemMarks;
var percentage = studentMarks / totalMarks * 100;

console.log("Your Name Is " + yourName + ", Your Class Is " + yourClass + ", Your Roll No Is " + rollNo + ", Your Total Marks Are " + studentMarks + " Out Of " + totalMarks + ", Your Percentage Is " + percentage + "." );
