/*
	RUNNERSHIGH HTML5 Version
	www.weberdevelopment.de

	*** DRAW THE GAME ***
*/
function draw() {
	if(!clearAfteObject)
		clear();

	// Draw Background-Gradient
	_canvasContext.fillStyle = gradient1;
	_canvasContext.fillRect(0, 0, WIDTH, HEIGHT);

	// Moon
	_canvasContext.drawImage(moon, 100, 20);

	// Skyscrapers
	skyscrapers.forEach(function(skyscraper) {
		skyscraper.draw();
	});	

	// Gimmick
	if(showFlash == true) {
		_canvasContext.fillStyle = 'rgba(255, 255, 255, 0.6)';
		_canvasContext.fillRect(0, 0, WIDTH, HEIGHT);		
		_canvasContext.drawImage(flash, 120, 0);
	}

	// Clouds
	clouds.forEach(function(cloud) {
		cloud.draw();
	});

	checkCollision(); // Should be in an update function!
		
	// Platforms
	platforms.forEach(function(platform) {
		platform.draw();
	});	

	// Bonus
	bonis.forEach(function(bonus) {
		bonus.draw();
	});		

	// Enemies
	enemies.forEach(function(enemy) {
		enemy.draw();
	});	

	// Draw Player
	if (hero.isJumping) hero.checkJump();
	if (hero.isFalling) hero.checkFall();
	hero.draw();

	_canvasContext.fillStyle = "#CCC";
	_canvasContext.fillRect(0, HEIGHT - 2, WIDTH, 2);

	// Update Level
	level.update();

	context.drawImage(buffer, 0, 0);

	// FPS CHECK
	var thisFrameFPS = 1000 / ((now=new Date) - lastUpdate);
	fps += (thisFrameFPS - fps) / fpsFilter;
	lastUpdate = now;
};