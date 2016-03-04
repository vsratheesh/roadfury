$(document).ready(function(){
	var position = 0;
	setInterval(function(){
		position +=1;
		var enemy = $('#enemy_car');
		enemy.css("top",position+"vmin");
	},30);
});