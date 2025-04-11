input.onButtonPressed(Button.A, function () {
    if (true) {
        biasValue += -0.5
    } else {
        biasValue = 0
    }
})
input.onButtonPressed(Button.AB, function () {
    while (Kitronik_Move_Motor.measure() > distanceToWall) {
        Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Forward, speed)
    }
    Kitronik_Move_Motor.spin(Kitronik_Move_Motor.SpinDirections.Left, speed)
    while (Kitronik_Move_Motor.measure() > distanceToWall) {
        Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Forward, speed)
    }
    Kitronik_Move_Motor.spin(Kitronik_Move_Motor.SpinDirections.Right, speed)
    while (Kitronik_Move_Motor.measure() > distanceToWall) {
        Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Forward, speed)
    }
    Kitronik_Move_Motor.spin(Kitronik_Move_Motor.SpinDirections.Right, speed)
    while (Kitronik_Move_Motor.measure() > distanceToWall) {
        Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Forward, speed)
    }
})
input.onButtonPressed(Button.B, function () {
    if (true) {
        biasValue += 0.5
    } else {
        biasValue = 10
    }
})
let speed = 0
let distanceToWall = 0
let biasValue = 0
biasValue = 0
distanceToWall = 2
speed = 20
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
