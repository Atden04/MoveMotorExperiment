function turn_right_90 () {
    Kitronik_Move_Motor.motorOn(Kitronik_Move_Motor.Motors.MotorLeft, Kitronik_Move_Motor.MotorDirection.Forward, speed)
    Kitronik_Move_Motor.motorOn(Kitronik_Move_Motor.Motors.MotorRight, Kitronik_Move_Motor.MotorDirection.Reverse, speed)
    basic.pause(500)
    Kitronik_Move_Motor.stop()
}
function traverse_maze () {
    move_to_wall()
    turn_left_90()
    move_to_wall()
    turn_right_90()
    move_to_wall()
}
input.onButtonPressed(Button.A, function () {
	
})
function turn_left_90 () {
    Kitronik_Move_Motor.motorOn(Kitronik_Move_Motor.Motors.MotorLeft, Kitronik_Move_Motor.MotorDirection.Reverse, speed)
    Kitronik_Move_Motor.motorOn(Kitronik_Move_Motor.Motors.MotorRight, Kitronik_Move_Motor.MotorDirection.Forward, speed)
    basic.pause(500)
    Kitronik_Move_Motor.stop()
}
input.onButtonPressed(Button.AB, function () {
    Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Forward, speed)
})
input.onButtonPressed(Button.B, function () {
    Kitronik_Move_Motor.stop()
    basic.showNumber(Kitronik_Move_Motor.measure())
})
function move_to_wall () {
    while (Kitronik_Move_Motor.measure() > distanceToWall) {
        Kitronik_Move_Motor.motorOn(Kitronik_Move_Motor.Motors.MotorLeft, Kitronik_Move_Motor.MotorDirection.Forward, speed)
        Kitronik_Move_Motor.motorOn(Kitronik_Move_Motor.Motors.MotorRight, Kitronik_Move_Motor.MotorDirection.Forward, speed)
        basic.pause(100)
    }
    Kitronik_Move_Motor.stop()
}
let speed = 0
let distanceToWall = 0
let biasValue = 3
Kitronik_Move_Motor.motorBalance(Kitronik_Move_Motor.SpinDirections.Right, biasValue)
distanceToWall = 5
speed = 20
Kitronik_Move_Motor.setUltrasonicUnits(Kitronik_Move_Motor.Units.Centimeters)
traverse_maze()
