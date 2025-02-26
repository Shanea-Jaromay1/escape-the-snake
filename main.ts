scene.onOverlapTile(SpriteKind.Player, sprites.builtin.forestTiles0, function (sprite, location) {
    game.gameOver(true)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Projectile, function (sprite, otherSprite) {
    game.showLongText("That's ok, you got this!", DialogLayout.Bottom)
})
scene.setBackgroundColor(15)
game.setDialogTextColor(15)
game.setDialogFrame(img`
    ..bbbbbbbbbbbbbbbbbbbb..
    .bd111111111111111111db.
    bd1dbbbbbbbbbbbbbbbbd1db
    b1dbbbbbbbbbbbbbbbbbbd1b
    b1bd1111111111111111db1b
    b1b111111111111111111b1b
    b1b111111111111111111b1b
    b1b111111111111111111b1b
    b1b111111111111111111b1b
    b1b111111111111111111b1b
    b1b111111111111111111b1b
    b1b111111111111111111b1b
    b1b111111111111111111b1b
    b1b111111111111111111b1b
    b1b111111111111111111b1b
    b1b111111111111111111b1b
    b1b111111111111111111b1b
    b1b111111111111111111b1b
    b1b111111111111111111b1b
    b1bd1111111111111111db1b
    bd1bbbbbbbbbbbbbbbbbb1db
    bbd111111111111111111dbb
    .bbbbbbbbbbbbbbbbbbbbbb.
    ..bbbbbbbbbbbbbbbbbbbb..
    `)
game.showLongText("Don't let the snake touch you", DialogLayout.Center)
effects.confetti.startScreenEffect(500)
tiles.setCurrentTilemap(tilemap`level2`)
let mySprite = sprites.create(img`
    . f f f . f f f f . f f f . 
    f f f f f c c c c f f f f f 
    f f f f b c c c c b f f f f 
    f f f c 3 c c c c 3 c f f f 
    . f 3 3 c c c c c c 3 3 f . 
    . f c c c c 4 4 c c c c f . 
    . f f c c 4 4 4 4 c c f f . 
    . f f f b f 4 4 f b f f f . 
    . f f 4 1 f d d f 1 4 f f . 
    . . f f d d d d d d f f . . 
    . . e f e 4 4 4 4 e f e . . 
    . e 4 f b 3 3 3 3 b f 4 e . 
    . 4 d f 3 3 3 3 3 3 c d 4 . 
    . 4 4 f 6 6 6 6 6 6 f 4 4 . 
    . . . . f f f f f f . . . . 
    . . . . f f . . f f . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
tiles.placeOnRandomTile(mySprite, sprites.castle.tileGrass2)
info.startCountdown(60)
let myEnemy = sprites.create(assets.image`snake`, SpriteKind.Enemy)
myEnemy.follow(mySprite, 50)
tiles.placeOnRandomTile(myEnemy, sprites.builtin.forestTiles0)
game.onUpdate(function () {
    if (mySprite.overlapsWith(myEnemy)) {
        game.gameOver(false)
        game.setGameOverMessage(true, "GAME OVER!")
    }
})
