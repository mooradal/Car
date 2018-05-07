canvas = document.getElementById("canvas")
c = canvas.getContext("2d")
canvas.width = 720
canvas.height = 700

right = false
left = false
backward = false
forward = false
player = new body((canvas.width/2)-32,400,8)

car = new Image()
car.src = "Sprites/car.png"
road = new Image()
road.src = "Sprites/road.png"
enemy = new Image()
enemy.src = "Sprites/enemy.png";

c.imageSmoothingEnabled = false;
main()

function main() {
	window.requestAnimationFrame(main)
	c.clearRect(0,0,canvas.width,canvas.height)
	creatingRoad(7)
	c.drawImage(car,player.x,player.y,64,64)
	movement()

}

function body(x,y,spd) {
	this.x = x
	this.y = y
	this.spd = spd
}

document.onkeyup = function(event) {
	key = event.keyCode
	if (key == 38) {
		forward = false
	} else if (key == 40) {
		backward = false
	} else if (key == 39) {
		right = false
	} else if (key == 37) {
		left = false
	}
}

document.onkeydown = function(event) {
	key = event.keyCode
	if (key == 38 || key == 87) {
		forward = true
	} else if (key == 40) {
		backward = true
	} else if (key == 39) {
		right = true
	} else if (key == 37) {
		left = true
	}

}

function movement() {
	if (forward == true) {
		player.y -= player.spd;
	} if (backward == true) {
		player.y += player.spd;
	} if (right == true) {
		player.x += player.spd
	} if (left == true) {
		player.x -= player.spd;
	}
}

function creatingRoad(num) {
	for (var i = 0;i <= num;i++) {
		console.log(i)
		c.drawImage(road,(canvas.width/2)-100,0+(100*i),200,100)
	}
}