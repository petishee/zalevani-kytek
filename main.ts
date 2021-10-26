basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P1) < 1) {
        pins.digitalWritePin(DigitalPin.P2, 1)
        music.startMelody(music.builtInMelody(Melodies.BaDing), MelodyOptions.Once)
        basic.pause(2000)
    } else {
        pins.digitalWritePin(DigitalPin.P2, 0)
        basic.pause(2000)
    }
})
