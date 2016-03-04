var Game = {
	my_pos: 0,// Zero from left
	enemy_pos: -20, // Position from top
	init: function () {
		setInterval(function() {
			if (Game.enemy_pos > 100) {
				Game.enemy_pos = -20;
				var left = Math.floor(Math.random()*5) * 10;
				Game.enemy.css("left", left + "vmin");
			} else {
				Game.enemy_pos += 1;
				Game.enemy.css("top", Game.enemy_pos + "vmin");
			}
			
		}, 30);
	},
	//this || Game 
	moveRight: function() {
		if (this.my_pos < 40) {
			this.my_pos += 10;
			this.car.css("left", this.my_pos + "vmin");
		}
	},
	moveLeft: function() {
		if (this.my_pos > 0) {
			this.my_pos -= 10;
			this.car.css("left", this.my_pos + "vmin");
		}
	}
}; 


$(document).ready(function() {

	 
	Game.car = $('#my_car');
	Game.enemy = $('#enemy_car');

	$(document).bind('keydown', 'right', function() {
		Game.moveRight();		
	});
	$(document).bind('keydown', 'left', function() {
		Game.moveLeft();
	});

	Game.init();
});