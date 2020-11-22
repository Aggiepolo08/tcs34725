input.onButtonPressed(Button.A, function () {
    POLL = false
})
input.onButtonPressed(Button.B, function () {
    POLL = true
})
let Blue = 0
let Green = 0
let Red = 0
let POLL = false
POLL = true
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
