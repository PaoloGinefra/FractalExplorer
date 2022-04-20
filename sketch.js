let thresh = 16
let iter = 50

let rangeX = 2;

var width;
var height;

var Center = new Complex(0.285, 0);

function setup() {
	W = windowWidth;
	H = windowHeight;

	createCanvas(W, H);

	background(0)

	let rangeY = rangeX * H / W;

	let col = color(255, 187, 0)

	let i = 0;

	for(let y = 0; y < H; y++){
		for(let x = 0; x < W; x++, i++){
			let In = isInJulia(rangeX * map(x, 0, W - 1, -1, 1), rangeY * map(y, 0, H - 1, 1, -1));
			let newCol = color(
				In * red(col),
				In * green(col),
				In * blue(col),
				In * alpha(col)
			)
			set(x, y, newCol);
		}
	}
	updatePixels();
	console.log('Done');
}

function draw() {
	
}

function isInJulia(x, y){
	let z = new Complex(0, 0);
	let c = new Complex(x, y)

	let i

	for(i = 0; i < iter && z.len() < thresh; i++){
		z.squared();
		z.add(c);
	}

	return i / iter;
}