input.onButtonPressed(Button.A, function () {
    if (biasValue > 0) {
        biasValue += -0.5
    } else {
        biasValue = 0
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(biasValue)
})
input.onButtonPressed(Button.B, function () {
    if (biasValue < 10) {
        biasValue += 0.5
    } else {
        biasValue = 10
    }
})
let biasValue = 0
biasValue = 0
let distanceToWall = 3
let speed = 20
let traverseMaze = false
Kitronik_Move_Motor.turnRadius(Kitronik_Move_Motor.TurnRadii.Tight)
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
    if (traverseMaze) {
        while (Kitronik_Move_Motor.measure() > distanceToWall) {
            Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Forward, speed)
        }
        Kitronik_Move_Motor.motorOn(Kitronik_Move_Motor.Motors.MotorLeft, Kitronik_Move_Motor.MotorDirection.Forward, 50)
        while (Kitronik_Move_Motor.measure() > distanceToWall) {
            Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Forward, speed)
        }
        Kitronik_Move_Motor.motorOn(Kitronik_Move_Motor.Motors.MotorRight, Kitronik_Move_Motor.MotorDirection.Forward, 50)
        while (Kitronik_Move_Motor.measure() > distanceToWall) {
            Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Forward, speed)
        }
        Kitronik_Move_Motor.motorOn(Kitronik_Move_Motor.Motors.MotorRight, Kitronik_Move_Motor.MotorDirection.Forward, 50)
        while (Kitronik_Move_Motor.measure() > distanceToWall) {
            Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Forward, speed)
        }
    }
})
