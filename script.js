// Your JS goes here

var row = 7;
var col = 9;

var body = document.getElementsByTagName("body")[0];

// column * row Checkerboard
for (var i = 0; i < row; i++) {
	for (var j = 0; j < col; j++) {
		var tile = document.createElement("div");
		tile.style.width = "11.1%";
		// tile.style.backgroundColor = "black";
		tile.style.float = "left";
		tile.style.paddingBottom = "11.1%";
		if ( (i + j) % 2 === 0) {
			tile.style.backgroundColor = "black";
		} else {
			tile.style.backgroundColor = "red";
		}
		body.appendChild(tile);
	}
}


