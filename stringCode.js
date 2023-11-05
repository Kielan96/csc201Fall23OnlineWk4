function checkCreds(){
    //input validationfor week 3
    console.log("checkCreds() started");
    document.getElementById("loginStatus").innerHTML = "Status of Login";
    //variables we need 
    var fisrtName;
    var lastName;
    var zipCode;
    var fullName;
    var fullNameLength;
    var zipCodeNumb;
     //fill in the variables 
        //working on inputting first name
    fisrtName = document.getElementById("fName").value;
    console.log("The first name was inputted as " + fisrtName);

        //working on inputting last name
    lastName = document.getElementById("lName").value;
    console.log("The last name was inputted as " + lastName);

        //working on inputting zipcode
    zipCode = document.getElementById("zipCode").value;
    console.log("The zip code was inputted as " + zipCode);

        //working on inputting full name
    fullName = fisrtName + " " + lastName;
    console.log("The full name was inputted as " + fullName);

       //working on inputting character length
    fullNameLength = fullName.length;
    console.log("The full name has " + fullNameLength + " characters.");

    //working on inputting zip coed character length
    zipCodeNumb = parseInt(zipCode);
    console.log(" The zip code number is " + zipCodeNumb);

    //things to check for... fullNameLength is less than 20 cahracters
    //zipcode has only 5 digits
    if(fullNameLength > 20){
        document.getElementById("loginStatus").innerHTML = "Invalid full name"; 
    } else if(zipCode.length != 5){
        document.getElementById("loginStatus").innerHTML = "Invalid zip code"; 
    } else {
        alert("User Credentials passed, welcome to site, " + fullName);
    }
}

function checkPalin(){
    console.log("checkPalin() started");
    //record the string into a variable
    var entStr;
    entStr = document.getElementById("palinInput").value;
    console.log("entStr is " + entStr);

    //take away any spaces 
    var entStrNoSpace;
    entStrNoSpace = entStr.split(" ").join("");
    console.log("entStr with no spaces is " + entStrNoSpace);

    //create reverse array var and reverse string
    var revStr;
    const revArray = [];
    var length = entStrNoSpace.length - 1;
    console.log("string length is " + length);

    //input into array and reverse it
    for(var i = length; i >= 0; i--){
        revArray.push(entStrNoSpace[i]);
    }

    //convert to a string from an array
    var revStr = revArray.join("");
    console.log("reversed is " + revStr);

    //compare rev to string and write to status
    var equal = 0;
    equal = (entStrNoSpace === revStr);
    console.log("the ent and reversed being equal is: " + equal);

    //wrie to plaindrome status
    if(equal == true){
        document.getElementById("palinStatus").innerHTML = entStr + " <b>is</b> a palindrome";
    } else {
        document.getElementById("palinStatus").innerHTML = entStr + " is <b>not</b> a palindrome";
    }
}

function playLuffy(){
    // write to the log for debugging
    console.log("playLuffy() started");
    mySound = new sound("Gum Gum Pistol.mp3");
    console.log("playing Gum Gum Pistol.mp3 using the sound() function");
    mySound.play();

}

function sound(srcFile){
    //create a instance of the audio class
    this.sound = document.createElement("audio");
    //sets the source for src file
    this.sound.src = srcFile;
    //loads everthing needed for audio
    this.sound.setAttribute("preload", "audio");
    //just plays sound with no controls
    this.sound.setAttribute("controls", "none");
    document.body.appendChild(this.sound);
    this.play = function(){
        //gives it a way to play the sound file
        this.sound.play();
    }
        //this pauses the sound file
    this.stop = function(){
        this.sound.pause();
    }
}