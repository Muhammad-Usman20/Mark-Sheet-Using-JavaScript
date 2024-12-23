
                    // MARKSHEET

var HTML = +prompt("Enter Your HTML Marks", "Enter HTML Your Marks")
var Css = +prompt("Enter Your CSS Marks", "Enter CSS Your Marks")
var javaScript = +prompt("Enter javaScripot Your Marks", "Enter javaScripot Your Marks")
var python = +prompt("Enter python Your Marks", "Enter python Your Marks")
var reactJs = +prompt("Enter Your reactJs Marks", "Enter reactJs Your Marks")

var totalMarks = 500
var obtainedMarks = HTML+Css+javaScript+python+reactJs

var percentage = (obtainedMarks/totalMarks) * 100

console.log("HTML marks is", HTML)
console.log("CSS marks is", Css)
console.log("javaScript marks is", javaScript)
console.log("python marks is", python)
console.log("reactJs marks is", reactJs)
console.log("")

console.log("Total Marks are:", totalMarks)
console.log("Obtained Marks are:",obtainedMarks)
console.log("")

console.log("Your Percentage is:", percentage)
console.log("")


if (percentage >= 90 && percentage <= 100){
    console.log("Congratulations! Your Rank is A+")
} else if ( percentage >= 80 && percentage < 90){
    console.log("Congratulations! Your Rank is A")
} else if (percentage >= 70 && percentage < 80){
    console.log("Congratulations! Your Rank is B")
} else if (percentage >= 60 && percentage < 70){
    console.log("Congratulations! Your Rank is C")
} else if (percentage >=0 && percentage < 60){
    console.log("Hard Luck! Your Rank is F")
    console.log("Better Luck for next time")
}else{
    console.log("Invalid Input!")
}