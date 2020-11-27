input.onButtonPressed(Button.A, function () {
    POLL = false
})
input.onButtonPressed(Button.B, function () {
    POLL = true
})
let POLL = false
POLL = false
let Red = -1
let Green = -1
let Blue = -1
basic.forever(function () {
    while (POLL) {
        Red = envirobit.getRed()
        Green = envirobit.getGreen()
        Blue = envirobit.getBlue()
        serial.writeLine("Red: " + Red)
        serial.writeLine("Blue: " + Blue)
        serial.writeLine("Green: " + Green)
        Red = 0
        Green = 0
        Blue = 0
        basic.pause(1000)
    }
})
