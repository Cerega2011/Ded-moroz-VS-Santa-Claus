let game = new Game()
let stage = new Stage()

let santa = new Sprite()
let santaOnFloor = false
let santaYSpeed = 0
let santaIsKick = false
let dm = new Sprite()
let dmOnFloor = false
let dmYSpeed = 0
let dmIsKick = false
let barRed = new Sprite()
let barGreen = new Sprite()
let barRed2 = new Sprite()
let barGreen2 = new Sprite()

santa.addCostume("/santaStay.png")
santa.addCostume("/santaKick.png")
santa.addCostume("/santaPain.png")
santa.addCostume("/santaHook.png")
dm.addCostume("/dmStay.png")
dm.addCostume("/dmKick.png")
dm.addCostume("/dmPain.png")
dm.addCostume("/dmHook.png")
barRed.addCostume("/barRed.png")
barGreen.addCostume("/barGreen.png")
barRed2.addCostume("/barRed.png")
barGreen2.addCostume("/barGreen.png")

santa.size = stage.height / 15
dm.size = stage.height / 15
barRed.y = 50
barRed.x = 150
barGreen.y = 50
barGreen.x = 150

barRed2.y = 50
barRed2.x = stage.width - 150
barGreen2.y = 50
barGreen2.x = stage.width - 150

stage.addBackground("/bg.jpeg")

stage.forever(function () {
    if (dmOnFloor == false) {
        dmYSpeed += 0.5
        dm.y += dmYSpeed
    }
    if (dm.y > stage.height - stage.height / 2.5) {
        dmYSpeed = 0
        dmOnFloor = true
    }
    if (game.keyPressed("w") && dmOnFloor == true) {
        dmYSpeed = -15
        dmOnFloor = false
    }
    if (game.keyPressed("a")) {
        dm.rotateStyle = "leftRight"
        dm.direction = -90
        dm.x -= 5
    }
    if (game.keyPressed("d")) {
        dm.rotateStyle = "leftRight"
        dm.direction = 90
        dm.x += 5
    }
    if (dm.x < 0) {
        dm.x = stage.width - 50
    }
    if (dm.x > stage.width) {
        dm.x = 0

    }
    if (game.keyPressed("s") && dmIsKick == false) {
        dm.switchCostume(1)
        setTimeout(function () {
            dm.switchCostume(0)
        }, 300)
        setTimeout(function () {

            dmIsKick = false
        }, 1000)
        dmIsKick = true
    }
    if (game.keyPressed("f") && dmIsKick == false) {
        dm.switchCostume(3)
        setTimeout(function () {
            dm.switchCostume(0)
        }, 300)
        setTimeout(function () {

            dmIsKick = false
        }, 1000)
        dmIsKick = true
    }
})

stage.forever(function () {
    if (santaOnFloor == false) {
        santaYSpeed += 0.5
        santa.y += santaYSpeed
    }
    if (santa.y > stage.height - stage.height / 2.5) {
        santaYSpeed = 0
        santaOnFloor = true
    }
    if (game.keyPressed("up") && santaOnFloor == true) {
        santaYSpeed = -15
        santaOnFloor = false
    }
    if (game.keyPressed("left")) {
        santa.rotateStyle = "leftRight"
        santa.direction = -90
        santa.x -= 5
    }
    if (game.keyPressed("right")) {
        santa.rotateStyle = "leftRight"
        santa.direction = 90
        santa.x += 5
    }
    if (santa.x < 0) {
        santa.x = stage.width - 50
    }
    if (santa.x > stage.width) {
        santa.x = 0

    }
    if (game.keyPressed("down") && santaIsKick == false) {
        santa.switchCostume(1)
        setTimeout(function () {
            santa.switchCostume(0)
        }, 300)
        setTimeout(function () {

            santaIsKick = false
        }, 1000)
        santaIsKick = true
    }
    if (game.keyPressed("m") && santaIsKick == false) {
        santa.switchCostume(3)
        setTimeout(function () {
            santa.switchCostume(0)
        }, 300)
        setTimeout(function () {

            santaIsKick = false
        }, 1000)
        santaIsKick = true
    }
})

stage.forever(function () {
    if (dm.touchSprite(santa) && (santa.costumeIndex == 1 || santa.costumeIndex == 3)) {
        dm.switchCostume(2)
        barGreen2.x += 10
        setTimeout(function () {
            dm.switchCostume(0)
        }, 300)
        if (dm.x < santa.x) {
            dm.x -= 100
        } else {
            dm.x -= 100
        }
    }
})

stage.forever(function () {
    if (santa.touchSprite(dm) && (dm.costumeIndex == 1 || dm.costumeIndex == 3)) {
        santa.switchCostume(2)
        barGreen.x -= 10
        setTimeout(function () {
            santa.switchCostume(0)
        }, 300)
        if (santa.x < dm.x) {
            santa.x -= 100
        } else {
            santa.x -= 100
        }
    }
    if (barGreen.x < -150 || barGreen2.x > stage.width + 150) {
        game.stop()
    }
})

game.run()