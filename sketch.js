let Shader;
let alpha = 0.5;

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

	shader(Shader);
	rect(0, 0, width, height);
	alpha += 0.01;
}

function windowResized(){
	resizeCanvas(windowWidth, windowHeight);
  }