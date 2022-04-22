let Shader;
let alpha = 0.5;
let zoom = 3;
let A = 0.8;

function preload(){
	Shader = loadShader('basic.vert', 'Fractal.frag');
}

function setup() {
	W = windowWidth;
	H = windowHeight;

	createCanvas(W, H, WEBGL);
}

function draw() {
	Shader.setUniform('ratio', windowHeight / windowWidth);
	Shader.setUniform('alpha', alpha);
	Shader.setUniform('zoom', zoom);
	Shader.setUniform('A', A);

	shader(Shader);
	rect(0, 0, width, height);
	alpha += 0.01;
}

function windowResized(){
	resizeCanvas(windowWidth, windowHeight);
  }