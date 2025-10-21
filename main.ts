controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.vy == 0) {
        mySprite.vy = -150
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    game.gameOver(true)
    game.setGameOverMessage(true, "GAME OVER!")
    game.setGameOverScoringType(game.ScoringType.HighScore)
})
let projectile: Sprite = null
let mySprite: Sprite = null
game.splash("Dino Runner", "AGER")
scene.setBackgroundImage(assets.image`Background`)
tiles.setCurrentTilemap(tilemap`foreground`)
scroller.scrollBackgroundWithSpeed(-100, 0)
mySprite = sprites.create(assets.image`Player01`, SpriteKind.Player)
mySprite.setPosition(26, 65)
info.setScore(0)
controller.moveSprite(mySprite, 0, 0)
mySprite.ay = 300
animation.runImageAnimation(
mySprite,
assets.animation`myAnim0`,
75,
true
)
info.setScore(0)
forever(function () {
    projectile = sprites.createProjectileFromSide(assets.image`Cactus01`, -100, 0)
    projectile.y = 75
    pause(randint(1000, 4000))
})
forever(function () {
    projectile = sprites.createProjectileFromSide(assets.image`Cactus0`, -100, 0)
    projectile.y = 75
    pause(randint(3000, 4000))
})
forever(function () {
    projectile = sprites.createProjectileFromSide(assets.image`Cactus2`, -100, 0)
    projectile.y = 75
    pause(randint(3000, 7000))
})
game.onUpdateInterval(100, function () {
    info.changeScoreBy(1)
})
