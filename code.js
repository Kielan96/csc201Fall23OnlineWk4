function startFun(){
        //log for debugging purposes
    console.log("startFun() started");
    //turn off start button
    document.getElementById("startButton").disabled = true;
    //re-enables stop button
    document.getElementById("stopButton").disabled = false;
    //starts meme image
    document.getElementById("myMarquee").start();

}

function stopFun(){
    //log for debugging purposes
    console.log("stopFun() started");
    //turn off stop button
    document.getElementById("stopButton").disabled = true;
    //re-enables start button
    document.getElementById("startButton").disabled = false;
    //stops the memeimage
    document.getElementById("myMarquee").stop();
}