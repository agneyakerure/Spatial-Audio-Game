
var dots = [];
var l;



function setup()
{
	createCanvas(300, 300);
	
	l = new lines;
	// a = mouseX;
	// b = mouseY;

}




function draw()
{
	//background(200);
	//translate(150, 150);
	for(var i =0; i<dots.length; i++)
	{
		dots[i].show();	
		if(l.x1 == dots[i].x)
		{
			console.log(dots[i].mapped);
			dots[i].sampler.start();
		}
	}
	l.show();

	

}

// function mouseClicked()
// {
// 	dots.push(new dot(mouseX, mouseY));	
// }

function touchStarted()
{
	dots.push(new dot(mouseX, mouseY));	
	// for(var i = dots.length-1; i>=0; i--)
	// {
	// 	dots.splice(i, 1);
		
	// }
	
}

function lines()
{
	this.x1 = 0;
	this.y1 = 0;
	this.x2 = 0; 
	this.y2 = 200;

	this.show = function()
	{
		//line(this.x1, this.y1, this.x2, this.y2);
		this.x1=this.x1+1;
		this.x2=this.x2+1;
		if(this.x1>300)
		{
			this.x1=0;
			this.x2=0;
		}
	}
}

function dot(x, y)
{
	this.x = x;
	this.y = y;
	//this.b = floor(random(-15, 15));
	this.mapped = floor(map(this.x, 0, 300, 15, -15));
	this.life = 255;

	this.spat = new Tone.Panner3D( this.mapped,0, 0).toMaster();
	this.sampler = new Tone.Player("kick.wav").connect(this.spat);
	

	this.show = function()
	{
		fill(100, this.life)
		ellipse(x,y, 10, 10);
	}

}

gyro.startTracking(function(o) {
			// o.x, o.y, o.z for accelerometer
			// o.alpha, o.beta, o.gamma for gyro


			var j = floor(map(o.alpha, 0, 360, 15, -15));
			for(var i = 0; i<dots.length; i++)
			{
				if(j==dots[i].mapped)
				{
					background(100, 20, 47);
				}
				else
				{
					background(150);
				}
			}
			textSize(32);
			text(j, 20, 250)
			Tone.Listener.positionX = o.alpha;


			// for(var i = 0; i<dots.length; i++)
			// {
			// 	if(j >= dots[i].b-5 || j < dots[i].b+5)
			// 	{
			// 		background(100, 200, 10);
			// 	}
			// 	else
			// 	{
			// 		background(200);
			// 	}
			// }




		});