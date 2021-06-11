class Paper{
	constructor(x,y,r)
	{
		var options={
            isStatic:false,
			restitution:0,
			friction:10,
			density:3
		}
		this.x=x;
		this.y=y;
		this.r=r
		this.image = loadImage("ball.png");
		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
		World.add(world, this.body);

	}
	display()
	{
			var rubberpos=this.body.position;		
			push()
			translate(rubberpos.x, rubberpos.y);
			rotate(this.body.angle);
			imageMode(RADIUS)
			strokeWeight(4);
			stroke("red");
			fill("magenta");
			image(this.image,0,-20,this.r, this.r);
			pop()
	}

}



