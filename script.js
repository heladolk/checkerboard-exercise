// Your JS goes here
// Gradient
var row = 7;
var col = 9;

var rgbColor1 = generateRandomColor();
var rgbColor2 = generateRandomColor();

var body = document.getElementsByTagName("body")[0];

// column * row Checkerboard
for (var i = 0; i < row; i++) {
	for (var j = 0; j < col; j++) {
		var tile, tileColor1, tileColor2;
		
		tile = document.createElement('div');
		tile.style.width = "11.1%";
		tile.style.float = "left";
		tile.style.paddingBottom = "11.1%";

		if ( (i + j) % 2 === 0) {
			rgbColor1 = addGradient(rgbColor1);
			tileColor1 = "rgba(" + rgbColor1.join(",") + ")";
			tile.style.backgroundColor = tileColor1;			
		} else {
			rgbColor2 = addGradient(rgbColor2);
			tileColor2 = "rgba(" + rgbColor2.join(",") + ")";
			tile.style.backgroundColor = tileColor2;
		}
		
		body.appendChild(tile);
	}
}

// a function that generates random rgb color in format rgb(num1, num2, num3)
function generateRandomColor() {
	var rgbColor = [Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256)];

	return rgbColor;
}

// a functioin adding alpha channel to rgb color
function addGradient(rgbColor) {
	rgbColor[3] = Math.random();;

	return rgbColor;
}