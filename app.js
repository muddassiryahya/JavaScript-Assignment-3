// var color = prompt("Enter a color name:")
 
// if (color == "red") {
//     swal({
//         title: "must stop!",
//         text: "You clicked the button!",
//         icon: "success",
//         button: "Aww yiss!",
//       });
// }
// else if (color === "yellow") {
//     swal("ready to move!", "You clicked the button!", "success", {
//         button: "Aww yiss!",
//       });
// }
// else if (color === "green") {
//     swal({
//         title: "move on!",
//         text: "You clicked the button!",
//         icon: "success",
//       });
// }
// else {
    // swal("collection wrong")
// }



// var num1 = +prompt("Enter a number 1" )
// var num2 = +prompt("Enter a number 2" )
// var operator = prompt("Enter a opreator" )

// if (operator ==="+") {
//     console.log(num1 + num2)
// }
// else if (operator ==="-") {
//     console.log(num1 - num2)
// }
// else if (operator ==="*") {
//     console.log(num1 * num2)
// }
// else if (operator ==="/") {
//     console.log(num1 / num2)
// }
// else{
//     console.log("Invalid operator")
// }



// var language = prompt("Enter your language")

// if (language === "javascript") {
//     var city = prompt("Enter your city");
//     if (city === "karachi") {
//         var exp = +prompt("Enter your experince");
//         if (exp >= 2) {
//             console.log("Hired")
//         } else {
//             console.log("upgurad your experince")
//         }
//     } else {
//         console.log("karachi aajao")
//     }
// } else {
//     console.log("learn javascript")
// }




// Chapter No. 14 - 16



// Question No. 3

// var students = ["Ali","Anwar","Tamim"]

// console.log(students)



// Question No. 4

// var numbers = [113,234,890]

// console.log(numbers)



// Question No. 5

// var arr = []
// arr.push(true)
// console.log(arr)


// Question No. 6

// var mixed = ["Maaz",145,"Hammad",567]

// console.log(mixed)



// Question No. 7

// console.log("Qualification:")

// var availableEducations = ["SSC", "HSC", "BCS","BS", "BCOM", "MS", "M. Phil", "PhD"]

// console.log(availableEducations)



// Question No. 8

// var students = ["Ali", "Maaz", "Usama"]

// var numbers = [455,378,247]

// console.log("Score of" + " " + students[0] + " " + "is" + " " + numbers[0] + "." + " " + "Percentage:" + " " + (numbers[0]/"500")*100 + "%")
// console.log("Score of" + " " + students[1] + " " + "is" + " " + numbers[1] + "." + " " + "Percentage:" + " " + (numbers[1]/"500")*100 + "%")
// console.log("Score of" + " " + students[2] + " " + "is" + " " + numbers[2] + "." + " " + "Percentage:" + " " + (numbers[2]/"500")*100 + "%")



// Question No. 9

// var colorNames = ["orange", "yellow", "pink"]
// console.log(colorNames)

// a

// var selectedColor = prompt("Enter your first color")
// console.log(selectedColor)
// colorNames.unshift(selectedColor)
// console.log(colorNames)

// b

// var selectedColor = prompt("Enter your last color")
// console.log(selectedColor)
// colorNames.push(selectedColor)
// console.log(colorNames)

// c

// var addindTwoColor = colorNames.unshift("grey","brown")
// console.log(addindTwoColor)
// console.log(colorNames)

// d

// var deletFirstColor = colorNames.shift()
// console.log(deletFirstColor)
// console.log(colorNames)

// e

// var deletLastColor = colorNames.pop()
// console.log(deletLastColor)
// console.log(colorNames)

// f

// var position = +prompt("Enter the position")
// var selectedColor = prompt("Enter the color")
// var working = colorNames.splice(position , 0, selectedColor)
// console.log(working)
// console.log(colorNames)

// g

// var position = +prompt("Enter the position")
// var countingOfNumber = prompt("How many colors you wants to deleted?")
// var working = colorNames.splice(position , countingOfNumber)
// console.log(working)
// console.log(colorNames)




// Question No. 10

// var Scores = [345,123,890,567,345]
// console.log("Scores of students : " + Scores)
// Scores.sort()
// console.log("Ordered Scores of students : " + Scores)



// Question No. 11

// var citiesList = ["Karachi", "Islambad", "Lahore", "Peshawar", "Quetta"]
// console.log("Cities list : " + citiesList)
// var copyArr = citiesList.slice(2,5)
// console.log("Selected Cities list : " + copyArr)



// Question No. 12

// var example = ["This", "is", "my","cat"]
// console.log(example)
// var answer = example.join(" ")
// console.log(answer)


// Question No. 13

// var devices = ["keyboard","mouse","printer","monitor"]
// document.write("Devices: <br>" + devices + "<br> <br>")
// var returnValue = devices.shift()
// console.log(returnValue)
// console.log(devices)
// document.write("Out: <br>" + returnValue)




// var returnValue = devices.shift()
// console.log(returnValue)
// console.log(devices)
// document.write("<br> Out: <br>" + returnValue)

// var returnValue = devices.shift()
// console.log(returnValue)
// console.log(devices)
// document.write("<br> Out: <br>" + returnValue)

// var returnValue = devices.shift()
// console.log(returnValue)
// console.log(devices)
// document.write("<br> Out: <br>" + returnValue)



// Question No. 14

// var devices = ["keyboard","mouse","printer","monitor"]
// document.write("Devices: <br>" + devices + "<br> <br>")
// var returnValue = devices.pop()
// console.log(returnValue)
// console.log(devices)
// document.write("<br> Out: <br>" + returnValue)


// var returnValue = devices.pop()
// console.log(returnValue)
// console.log(devices)
// document.write("<br> Out: <br>" + returnValue)


// var returnValue = devices.pop()
// console.log(returnValue)
// console.log(devices)
// document.write("<br> Out: <br>" + returnValue)


// var returnValue = devices.pop()
// console.log(returnValue)
// console.log(devices)
// document.write("<br> Out: <br>" + returnValue)



// Question No. 15

// var phoneManufacturers = ["Apple","Samsung","Motorola","Nokia","Sony","Haier"]
//  var returnValue = phoneManufacturers.join("  " +  "</br>")
// document.write("<b>Dropdown List<b>: <br><br>" + returnValue)



// Practice


// var students = ["Ali", "Maaz", "Usama"]
// var returnValue = students.pop()
// console.log(returnValue)
// console.log(students)



// var students = ["Ali", "Maaz", "Usama"]
// var returnValue = students.push("Tamim","Muhammad","Hammad")
// console.log(returnValue)
// console.log(students)



// var students = ["Ali", "Maaz", "Usama"]
// var returnValue =  students.unshift("Tamim","Muhammad","Hammad")
// console.log(returnValue)
// console.log(students)


// var students = ["Ali", "Maaz", "Usama"]
// var returnValue = students.shift()
// console.log(returnValue)
// console.log(students)


// var students = ["Ali", "Maaz", "Usama"]
// var returnValue = students.splice(2,1,"Tamim","Hammad")
// console.log(returnValue)
// console.log(students)



// var students = ["Ali", "Maaz", "Usama"]
// var copyArr = students.slice(1,3)
// console.log(copyArr)
// console.log(students)



// var students  = ["Ali", "Maaz", "Usama"]
// var copyArr = students.slice(-2)
// console.log(copyArr)
// console.log(students)



// var str = "Ali Ahmed"
// var copy = str.slice(1,5)
// console.log(copy)
// console.log(str)


// var str = "Ali Ahmed"
// var copy = str.slice(-5)
// console.log(copy)
// console.log(str)


































