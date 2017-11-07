
var game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, update: update, render: render });

function preload() {
    game.load.image('player1', 'assets/sprites/player1.png');
    game.load.image('player2', 'assets/sprites/player2.png');
    game.load.image('ball', 'assets/sprites/ball.png');
}

var sprite;

function create() {

    game.stage.backgroundColor = '#111';

    player = game.add.sprite(100, window.innerHeight / 2, 'player1');
    player.x = 100;
    player.y = window.innerHeight/2;
    //player.arrow =  game.add.sprite(100, window.innerHeight / 2, 'arrow');
    player.anchor.setTo(0.5, 0.5);
    //player.angle = -45;
    player.turning = true;
    player.hasBall = false;

    var ball = game.add.sprite(window.innerWidth / 2, window.innerHeight / 2, 'ball');

}

function update() {
    
    if(player.turning === true && player.hasBall === true) {
      player.angle += 4;
    } else if(player.turning === false && player.hasBall === true) {
      player.angle -= 4;
    }
  
    if(player.angle > 45 && player.hasBall === true) {
      player.turning = false;
    } else if(player.angle < -45 && player.hasBall === true) {
      player.turning = true;
    }

    //  Note: Due to a bug in Chrome the following doesn't work atm:
    //  sprite.angle++;
    //  See: https://code.google.com/p/chromium/issues/detail?id=306851

}

function render() {

    //game.debug.spriteInfo(sprite, 32, 32);
    // game.debug.text('angularVelocity: ' + sprite.body.angularVelocity, 32, 200);
    // game.debug.text('angularAcceleration: ' + sprite.body.angularAcceleration, 32, 232);
    // game.debug.text('angularDrag: ' + sprite.body.angularDrag, 32, 264);
    // game.debug.text('deltaZ: ' + sprite.body.deltaZ(), 32, 296);

}
