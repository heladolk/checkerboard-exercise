// Your JS goes here
// Gradient

var row = 7;
var col = 9;

var rgbColor1 = [Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256)];
var rgbColor2 = [Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256)];

var body = document.getElementsByTagName("body")[0];

// column * row Checkerboard
for (var i = 0; i < row; i++) {
	for (var j = 0; j < col; j++) {
		var tile, tileColor1, tileColor2;
		var gradient1, gradient2;
		
		tile = document.createElement('div');
		tile.style.width = "11.1%";
		tile.style.float = "left";
		tile.style.paddingBottom = "11.1%";

		if ( (i + j) % 2 === 0) {
			// generate random RGB colors in format rgb(num1, num2, num3)
			gradient1 = Math.floor(Math.random() * 256);
			// change green component
			rgbColor1[1] = Math.floor((rgbColor1[1] + gradient1)/2); 
			tileColor1 = "rgb(" + rgbColor1.join(",") + ")";
			tile.style.backgroundColor = tileColor1;			
		} else {
			gradient2 = Math.floor(Math.random() * 256);
			// change black component
			rgbColor2[2] = Math.floor((rgbColor2[2] + gradient2)/2); 
			tileColor2 = "rgb(" + rgbColor2.join(",") + ")";
			tile.style.backgroundColor = tileColor2;
		}
		
		body.appendChild(tile);
	}
}



