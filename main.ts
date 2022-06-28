let sound = 0
input.onButtonPressed(Button.A, function () {
    basic.showNumber(1)
    basic.pause(1000)
    basic.showNumber(2)
    basic.pause(1000)
    basic.showNumber(3)
    basic.pause(1000)
    basic.showNumber(4)
    basic.pause(1000)
    basic.showNumber(5)
    basic.pause(1000)
    basic.showNumber(6)
    basic.pause(1000)
    basic.showNumber(7)
    basic.pause(1000)
    sound = 2
    basic.showNumber(8)
    basic.pause(1000)
    basic.showNumber(9)
    basic.pause(1000)
    basic.showString("go")
    basic.pause(500)
    sound = 0
})
input.onButtonPressed(Button.B, function () {
    sound = 1
    basic.showNumber(3)
    basic.pause(1000)
    basic.showNumber(2)
    basic.pause(1000)
    basic.showNumber(1)
    basic.pause(1000)
    basic.showString("go!")
    basic.pause(500)
    sound = 0
})
basic.forever(function () {
    if (sound == 1) {
        music.playMelody("G A B C5 - - - - ", 34)
    }
    if (sound == 2) {
        music.playMelody("A B C5 - - - - - ", 34)
    }
})
