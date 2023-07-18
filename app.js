window.onload = function () {
    if (window.location.href.indexOf("?reloaded") == -1) {
        window.location.replace(window.location.href + "?reloaded");
    }
}

function convertFirstName() {
    var firstName = document.getElementById('firstName').value;
    switch (firstName.charAt(0).toUpperCase()) {
        case "":
            document.getElementById("textConvertedFirstName").innerHTML = "";
            break;
        case "A":
            document.getElementById("textConvertedFirstName").innerHTML = "Peach";
            break;
        case "B":
            document.getElementById("textConvertedFirstName").innerHTML = "Juicy";
            break;
        case "C":
            document.getElementById("textConvertedFirstName").innerHTML = "Kiki";
            break;
        case "D":
            document.getElementById("textConvertedFirstName").innerHTML = "Mimi";
            break;
        case "E":
            document.getElementById("textConvertedFirstName").innerHTML = "Bon Bon";
            break;
        case "F":
            document.getElementById("textConvertedFirstName").innerHTML = "Coco";
            break;
        case "G":
            document.getElementById("textConvertedFirstName").innerHTML = "Gucci";
            break;
        case "H":
            document.getElementById("textConvertedFirstName").innerHTML = "Orgazma";
            break;
        case "I":
            document.getElementById("textConvertedFirstName").innerHTML = "Toxic";
            break;
        case "J":
            document.getElementById("textConvertedFirstName").innerHTML = "Heavenly";
            break;
        case "K":
            document.getElementById("textConvertedFirstName").innerHTML = "Luxury";
            break;
        case "L":
            document.getElementById("textConvertedFirstName").innerHTML = "Cherry";
            break;
        case "M":
            document.getElementById("textConvertedFirstName").innerHTML = "Tiara";
            break;
        case "N":
            document.getElementById("textConvertedFirstName").innerHTML = "Babydoll";
            break;
        case "O":
            document.getElementById("textConvertedFirstName").innerHTML = "Alotta";
            break;
        case "P":
            document.getElementById("textConvertedFirstName").innerHTML = "Sparkles";
            break;
        case "Q":
            document.getElementById("textConvertedFirstName").innerHTML = "Glitter";
            break;
        case "R":
            document.getElementById("textConvertedFirstName").innerHTML = "Jewel";
            break;
        case "S":
            document.getElementById("textConvertedFirstName").innerHTML = "Iona";
            break;
        case "T":
            document.getElementById("textConvertedFirstName").innerHTML = "Pookie";
            break;
        case "U":
            document.getElementById("textConvertedFirstName").innerHTML = "Minny";
            break;
        case "V":
            document.getElementById("textConvertedFirstName").innerHTML = "Likki";
            break;
        case "W":
            document.getElementById("textConvertedFirstName").innerHTML = "Wanda";
            break;
        case "X":
            document.getElementById("textConvertedFirstName").innerHTML = "Dingus";
            break;
        case "Y":
            document.getElementById("textConvertedFirstName").innerHTML = "Sugar";
        case "Z":
            document.getElementById("textConvertedFirstName").innerHTML = "Diva";
        default:
            document.getElementById("textConvertedFirstName").innerHTML = "Baby";
            break;
    }
}

function convertLastName() {
    var lastName = document.getElementById('lastName').value;
    switch (lastName.charAt(0).toUpperCase()) {
        case "":
            document.getElementById("textConvertedLastName").innerHTML = "";
            break;
        case "A":
            document.getElementById("textConvertedLastName").innerHTML = "Cakes";
            break;
        case "B":
            document.getElementById("textConvertedLastName").innerHTML = "Eleganza";
            break;
        case "C":
            document.getElementById("textConvertedLastName").innerHTML = "Surprise";
            break;
        case "D":
            document.getElementById("textConvertedLastName").innerHTML = "Diamond";
            break;
        case "E":
            document.getElementById("textConvertedLastName").innerHTML = "O'Plenty";
            break;
        case "F":
            document.getElementById("textConvertedLastName").innerHTML = "Cut'a'bitch";
            break;
        case "G":
            document.getElementById("textConvertedLastName").innerHTML = "Deelite";
            break;
        case "H":
            document.getElementById("textConvertedLastName").innerHTML = "MacDollars";
            break;
        case "I":
            document.getElementById("textConvertedLastName").innerHTML = "Fierce";
            break;
        case "J":
            document.getElementById("textConvertedLastName").innerHTML = "Glam";
            break;
        case "K":
            document.getElementById("textConvertedLastName").innerHTML = "Waffle";
            break;
        case "L":
            document.getElementById("textConvertedLastName").innerHTML = "Coxx";
            break;
        case "M":
            document.getElementById("textConvertedLastName").innerHTML = "McBalls";
            break;
        case "N":
            document.getElementById("textConvertedLastName").innerHTML = "Lightning";
            break;
        case "O":
            document.getElementById("textConvertedLastName").innerHTML = "Pookems";
            break;
        case "P":
            document.getElementById("textConvertedLastName").innerHTML = "Fantasia";
            break;
        case "Q":
            document.getElementById("textConvertedLastName").innerHTML = "La Punta";
            break;
        case "R":
            document.getElementById("textConvertedLastName").innerHTML = "The House Down Boots Mama";
            break;
        case "S":
            document.getElementById("textConvertedLastName").innerHTML = "Lollapalooza";
            break;
        case "T":
            document.getElementById("textConvertedLastName").innerHTML = "Girl";
            break;
        case "U":
            document.getElementById("textConvertedLastName").innerHTML = "Beaverhousan";
            break;
        case "V":
            document.getElementById("textConvertedLastName").innerHTML = "Killer";
            break;
        case "W":
            document.getElementById("textConvertedLastName").innerHTML = "Diva";
            break;
        case "X":
            document.getElementById("textConvertedLastName").innerHTML = "Von Trap";
            break;
        case "Y":
            document.getElementById("textConvertedLastName").innerHTML = "La Dumptruck";
            break;
        case "Z":
            document.getElementById("textConvertedLastName").innerHTML = "Party";
            break;
        default:
            document.getElementById("textConvertedLastName").innerHTML = "oops";
            break;
    }
}

function displayMonth() {
    var selectedMonth = document.getElementById("months").value;
    console.log(selectedMonth)
    switch (selectedMonth) {
        case "January":
            document.getElementById("title").innerHTML = "Miss";
            console.log(selectedMonth)
            break;
        case "February":
            document.getElementById("title").innerHTML = "Miss";
            console.log(selectedMonth)
            break;
        case "March":
            document.getElementById("title").innerHTML = "Miss";
            console.log(selectedMonth)
            break;
        case "April":
            document.getElementById("title").innerHTML = "Miss";
            console.log(selectedMonth)
            break;
        case "May":
            document.getElementById("title").innerHTML = "Mrs";
            console.log(selectedMonth)
            break;
        case "June":
            document.getElementById("title").innerHTML = "Mrs";
            console.log(selectedMonth)
            break;
        case "July":
            document.getElementById("title").innerHTML = "Mrs";
            console.log(selectedMonth)
            break;
        case "August":
            document.getElementById("title").innerHTML = "Mrs";
            console.log(selectedMonth)
            break;
        case "September":
            document.getElementById("title").innerHTML = "Madame";
            console.log(selectedMonth)
            break;
        case "October":
            document.getElementById("title").innerHTML = "Madame";
            console.log(selectedMonth)
            break;
        case "November":
            document.getElementById("title").innerHTML = "Madame";
            console.log(selectedMonth)
            break;
        case "December":
            document.getElementById("title").innerHTML = "Madame";
            console.log(selectedMonth)
            break;
    }
}


