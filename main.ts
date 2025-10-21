let projectile: Sprite = null
scene.setBackgroundImage(assets.image`Background`)
scroller.scrollBackgroundWithSpeed(-50, 0)
let mySprite = sprites.create(assets.image`Player01`, SpriteKind.Player)
mySprite.setPosition(26, 75)
info.setScore(0)
animation.runImageAnimation(
mySprite,
assets.animation`myAnim0`,
200,
true
)
forever(function () {
    projectile = sprites.createProjectileFromSide(assets.image`Cactus01`, -50, 0)
    projectile.y = 75
    pause(2000)
})
forever(function () {
    projectile = sprites.createProjectileFromSide(assets.image`Cactus0`, -50, 0)
    projectile.y = 75
    pause(2000)
})
forever(function () {
    projectile = sprites.createProjectileFromSide(assets.image`Cactus2`, -50, 0)
    projectile.y = 75
    pause(2000)
})
