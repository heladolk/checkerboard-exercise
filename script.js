// Your JS goes here
// Gradient

var row = 7;
var col = 9;

var body = document.getElementsByTagName("body")[0];

// column * row Checkerboard
for (var i = 0; i < row; i++) {
	for (var j = 0; j < col; j++) {
		var rgbColor, tileColor, tile;
		
		tile = document.createElement('div');
		tile.style.width = "11.1%";
		tile.style.float = "left";
		tile.style.paddingBottom = "11.1%";
		
		rgbColor = generateRandomColor();
		tileColor = "rgb(" + rgbColor.join(",") + ")"
		tile.style.backgroundColor = tileColor;

		body.appendChild(tile);
	}
};

changeTileColors();

// generate random RGB colors in format rgb(num1, num2, num3)
function generateRandomColor() {
	var rgbColor = [Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256)];
	return rgbColor;
}

function changeTileColors() {
	tile.style.backgrondColor = newTileColor;
}


// change color every 2 seconds
// setTimeout(drawCheckerBoard(), 2000);
// setTimeout(drawCheckerBoard(), 4000);
// setTimeout(drawCheckerBoard(), 6000);



