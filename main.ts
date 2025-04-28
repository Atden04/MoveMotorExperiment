input.onButtonPressed(Button.A, function () {
	
})
let biasValue = 0
Kitronik_Move_Motor.motorBalance(Kitronik_Move_Motor.SpinDirections.Right, biasValue)
biasValue = 4
let distanceToWall = 8
let speed = 20
Kitronik_Move_Motor.setUltrasonicUnits(Kitronik_Move_Motor.Units.Centimeters)
basic.forever(function () {
    if (Kitronik_Move_Motor.measure() > distanceToWall) {
        Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Forward, speed)
    } else {
        Kitronik_Move_Motor.stop()
    }
})
