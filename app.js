// =========================Assignment Number 01=================================

function evenodd(){
  var select_Number = +prompt("Enter any number and check, it's Even or Odd?");
if(select_Number % 2 == 0 && select_Number <= 10 && select_Number != 0){
  document.write(' The Number <b><mark>' + select_Number + '</mark></b> is Even');
} else if(select_Number % 2 == 1 && select_Number <= 10 && select_Number != 0) {
    document.write(' The Number <b><mark> '+ select_Number +'</mark></b> is Odd');
} else if(select_Number == 0){
    document.write('Please select any number expect 0');
} else {
    document.write('Please select number in <= 10')
}
}

// =========================Assignment Number 02=================================

function positiveNegative(){

var first_Number = +prompt("Enter any number and check, Positive or Negative?");
if(first_Number > 0 && first_Number <= 100 && first_Number != 0){
    document.write('The number is <b><mark> Positive </mark><b>');
} else if(first_Number < 0 && first_Number <= 100 && first_Number != 0) {
    document.write('The number is <b><mark> Negative </mark><b>');
} else {
    document.write('The number is <b> <mark> Zero </mark><b/>');
}
}

// =========================Assignment Number 03=================================

function maxTwoNum(){

var first_Number = +prompt("Enter first value in number and check larger number in Two Values");
var second_Number = +prompt("Enter second value in number and check larger number Two Values");

if (first_Number < second_Number){
    document.write (second_Number)
} else {
    document.write(first_Number)
}
}

//  =========================Assignment Number 04=================================

function maxThreeNum(){

var first_Number = +prompt("Enter first value in number and check larger number in Three Values");
var second_Number = +prompt("Enter second value in number and check larger number Three Values");
var third_Number = +prompt("Enter second value in number and check larger number Three Values");

if (first_Number < second_Number){
    document.write( first_Number)
}
else if (second_Number < third_Number)
{
    document.write(second_Number)
}
else if(third_Number < first_Number) {
    document.write(third_Number)
}
}

//  =========================Assignment Number 05=================================

function grade_Calc(){

var first_Number = +prompt("Enter first Subject marks");
var second_Number = +prompt("Enter second Subject marks");
var third_Number = +prompt("Enter third Subject marks");
var each_subject_marks = 100;
var total_marks = 300;
var obtained_marks = first_Number + second_Number + third_Number;
var percentAge = (obtained_marks / total_marks) * 100;

if(percentAge > 90 && percentAge <= 100 ){
    document.write(' Obtained marks ' + '<b><mark>' + obtained_marks + '</mark></b>' +' Grade-A1');
}
else if(percentAge > 80 && percentAge <= 90){
    document.write(' Obtained marks ' + '<b><mark>' + obtained_marks + '</mark></b>' +' Grade-A');
}
else if(percentAge > 70 && percentAge <= 80){
    document.write(' Obtained marks ' + '<b><mark>' + obtained_marks + '</mark></b>' +' Grade-B');
}
else if(percentAge > 60 && percentAge <= 70){
    document.write(' Obtained marks ' + '<b><mark>' + obtained_marks + '</mark></b>' +' Grade-C');
}
else if(percentAge > 50 && percentAge <= 60){
    document.write(' Obtained marks ' + '<b><mark>' + obtained_marks + '</mark></b>' +' Grade-D');
}
else {
    document.write('You are <b><mark> Fail </mark</b> Try Again!');
}
}

//  =========================Assignment Number 06=================================

function tempretur(){
var celsius_Temp = +prompt("Enter temperature in Celsius:");
var fahrenheit_Temp = (celsius_Temp * 9) / 5 + 32;

if (celsius_Temp == celsius_Temp && celsius_Temp < 100) {
  document.write('<center><b><mark>' + celsius_Temp + "</b></mark> degrees Celsius is equal to <b><mark>" + fahrenheit_Temp + "</mark></b> degrees Fahrenheit.</center>");
} else {
  document.write(
    "Invalid input. Please enter a valid number for Celsius temperature.");
}
}

//  =========================Assignment Number 07=================================

function triangle(){
var side_1 = +prompt("Enter length of side 1:");
var side_2 = +prompt("Enter length of side 2:");
var side_3 = +prompt("Enter length of side 3:");

if (side_1 == side_2 && side_2 == side_3 && side_1 != 0 && side_2 != 0 && side_3 != 0 ) {
    document.write("This is an <b><mark> equilateral triangle</mark></b>.");
    }else if (side_1 == side_2 && side_1 != side_3 || side_2 == side_3 && side_2 != side_1 && side_1 != 0 && side_2 != 0 && side_3 != 0 ) {
        document.write("This is an <b><mark> isosceles triangle</mark></b>.");
      } else if (side_1 != side_2 && side_2 != side_3 || side_1 != 0 && side_2 != 0 && side_3 != 0 ) {
          document.write("This is an <b><mark> scalene triangle</mark></b>.");
        } else{
            console.log("Invalid input. Please enter valid numbers for the lengths of sides.");
        }
      }
     
// =========================Assignment Number 07=================================

function vowel(){

var alpha_character = prompt('Enter Character for confirm its Vowel or Consonant.');

if(alpha_character == 'a' || alpha_character == 'e' || alpha_character == 'i' || alpha_character == 'o' || alpha_character == 'u'){
    document.write('<center> ( ' + alpha_character + ' ) Its <b><mark>vowels</mark></b></center>');
  }
else if(alpha_character == 1 || alpha_character == 2 || alpha_character == 3 || alpha_character == 4 || alpha_character == 5 || alpha_character == 6 || alpha_character == 7 || alpha_character == 8 || alpha_character == 9){
    document.write('<center> ( ' + alpha_character + ' ) Its <b><mark>Number</mark></b></center>');
  }
else{
        document.write('<center> ( ' + alpha_character + ' ) Its <b><mark>Consonant</mark></b></center>');
  }
  }
  
  
  // =========================Assignment Number 08=================================
  
// ============================Help from chatGPT================================
  function power_Calc(){
  var baseNumber = +prompt("Enter the base number:");
  var exponent = +prompt("Enter the exponent:");
  var result = Math.pow(baseNumber, exponent);
  
  document.write("Result: " + result);
}

  // =========================Assignment Number 09=================================

  function age_Calc(){
  var age = +prompt('Enter your age');

  if(age <= 12) {
    document.write('<center> Child </center>')
  } else if(age > 12 && age <= 19) {
    document.write('<center> Teenager </center>')
  } else if(age > 19 && age <= 64) {
    document.write('<center> Adult </center>')
  } else{
    document.write('<center> Senior </center>')
  }
}