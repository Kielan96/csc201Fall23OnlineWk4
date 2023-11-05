function playcraps() {
    /*this is a function to play craps in the game .html
    for craps, sum of 7 or 11 loses, even doubles wins, everything else is a push
    Kielan Certeza
    certezak3@gmail.com
    18Oct2023*/
    console.log("playcraps() started");
    var die1 = Math.ceil(Math.random() * 6);
    console.log("die1 result = " + die1);
    document.getElementById("die1Res").innerHTML = "die1 result = " + die1;

    var die2 = Math.ceil(Math.random() * 6);
    console.log("die2 result = " + die1);
    document.getElementById("die2Res").innerHTML = "die2 result = " + die2;

    var sum = die1 + die2;
    console.log("sum result = " + sum,);
    document.getElementById("sumRes").innerHTML = "sum result = " + sum;

    //check for 7 or 11 meaning loss
    if (sum == 7 || sum == 11) {
        document.getElementById("gameRes").innerHTML = "You got turned into the Navy!";
        //check for doubles and even for the win
    } else if (die1 == die2 && die1 % 2 == 0) {
        document.getElementById("gameRes").innerHTML =
            "You found the One Piece!";
    } //did not win, did not lose so a push
    else {
        document.getElementById("gameRes").innerHTML =
            "You did not get caught by the Navy, but now you have to fight the Sea Kings!";
    }
}