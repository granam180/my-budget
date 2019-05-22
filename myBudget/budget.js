//var monthNames = ["January", "February", "March", "April", "May", "June",   // how to wrap this in a function and
//  "July", "August", "September", "October", "November", "December"			// place it in html id tag
//];

//var d = new Date();
//document.write("myBudget for " + monthNames[d.getMonth()]);

function validateNumber(value) {
    // Validate the number
    if (!isNumber(value))
        alert("Please enter a number.");
}

function calcPrice() {
    //	var maxPrice = document.getElementById("costs").value;
    var val1 = parseInt(document.getElementById("value1").value);
    var val2 = parseInt(document.getElementById("value2").value);
    var val3 = parseInt(document.getElementById("value3").value);
    var val4 = parseInt(document.getElementById("value4").value);
    var val5 = parseInt(document.getElementById("value5").value);
    var val6 = parseInt(document.getElementById("value6").value);
    var val7 = parseInt(document.getElementById("value7").value);
    var val8 = parseInt(document.getElementById("value7").value);

    var ans = document.getElementById("answer");
    ans.value = val1 - val2 - val3 - val4 - val5 - val6 - val7 - val8;
}