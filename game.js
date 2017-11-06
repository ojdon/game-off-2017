
var game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, update: update, render: render });

function preload() {
    game.load.image('arrow', 'http://www.freepngimg.com/thumb/arrow/4-2-arrow-free-download-png-thumb.png');
}

var sprite;

function create() {

    game.stage.backgroundColor = '#111';

    player = game.add.sprite(100, 300, 'arrow');
    player.anchor.setTo(0.5, 0.5);
    player.angle = -45;
    turning = true;
}

function update() {
    
    if(turning == true) {
      player.angle += 4;
    } else {
      player.angle -= 4;
    }
  
    if(player.angle > 45) {
      turning = false;
    } else if(player.angle < -45) {
      turning = true;
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
