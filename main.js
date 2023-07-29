song = "";

function preload()
{
	song = loadSound("Recording (2).mp3");
}


function draw() {

    fill("FF0000");
	stroke("#FF0000");
}

function play()
{
	song.play();
	song.setVolume(1);
	song.rate(1);
}
