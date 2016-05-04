// Your JS goes here
// Random Colors Problem

var row = 7;
var col = 9;

var body = document.getElementsByTagName("body")[0];

// column * row Checkerboard
for (var i = 0; i < row; i++) {
	for (var j = 0; j < col; j++) {
		var tile, rgbColor, tileColor;
	
		tile = document.createElement('div');
		tile.style.width = "11.1%";
		tile.style.float = "left";
		tile.style.paddingBottom = "11.1%";		
		rgbColor = generateRandomColor();
		tileColor = "rgb(" + rgbColor.join(",") + ")"
		tile.style.backgroundColor = tileColor;
		
		body.appendChild(tile);
	}
}

// generate random RGB colors in format rgb(num1, num2, num3)
function generateRandomColor() {
	var rgbColor = [Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256)];

	return rgbColor;
}
