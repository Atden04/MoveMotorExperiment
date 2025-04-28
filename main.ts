input.onButtonPressed(Button.A, function () {
	
})
let biasValue = 0
let distanceToWall = 2
let speed = 20
let moveMotorZIP = Kitronik_Move_Motor.createMoveMotorZIPLED(4)
moveMotorZIP.setZipLedColor(0, Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.Red))
moveMotorZIP.setZipLedColor(1, Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.Blue))
moveMotorZIP.setZipLedColor(2, Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.Green))
moveMotorZIP.setZipLedColor(3, Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.Yellow))
Kitronik_Move_Motor.setUltrasonicUnits(Kitronik_Move_Motor.Units.Centimeters)
basic.forever(function () {
    moveMotorZIP.rotate(1)
    moveMotorZIP.show()
    basic.pause(100)
})
basic.forever(function () {
    basic.showNumber(Kitronik_Move_Motor.measure())
})
