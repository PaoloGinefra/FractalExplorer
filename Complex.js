class Complex{
	constructor(a, b){
		this.a = a;
		this.b = b;
	}

	add(c){
		this.a += c.a;
		this.b += c.b;
	}

	squared(){
		let a = this.a * this.a - this.b * this.b
        this.b = 2 * this.a * this.b;
		this.a = a;
	}

	len(){
		return this.a * this.a + this.b * this.b;
	}
}