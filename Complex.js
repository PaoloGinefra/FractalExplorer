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
		this.a = sq(this.a) - sq(this.b)
        this.b = 2 * this.a * this.b;
	}

	len(){
		return sq(this.a) + sq(this.b);
	}
}