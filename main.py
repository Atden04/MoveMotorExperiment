def on_button_pressed_a():
    pass
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.FORWARD, speed)
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    Kitronik_Move_Motor.stop()
    basic.show_number(Kitronik_Move_Motor.measure())
input.on_button_pressed(Button.B, on_button_pressed_b)

def move_to_wall():
    if Kitronik_Move_Motor.measure() > distanceToWall:
        Kitronik_Move_Motor.motor_on(Kitronik_Move_Motor.Motors.MOTOR_LEFT,
            Kitronik_Move_Motor.MotorDirection.FORWARD,
            speed)
        Kitronik_Move_Motor.motor_on(Kitronik_Move_Motor.Motors.MOTOR_RIGHT,
            Kitronik_Move_Motor.MotorDirection.FORWARD,
            speed)
    else:
        Kitronik_Move_Motor.stop()
speed = 0
distanceToWall = 0
biasValue = 2
Kitronik_Move_Motor.motor_balance(Kitronik_Move_Motor.SpinDirections.RIGHT, biasValue)
distanceToWall = 5
speed = 20
Kitronik_Move_Motor.set_ultrasonic_units(Kitronik_Move_Motor.Units.CENTIMETERS)

def on_forever():
    move_to_wall()
    basic.pause(500)
    Kitronik_Move_Motor.spin(Kitronik_Move_Motor.SpinDirections.LEFT, 50)
    basic.pause(500)
    Kitronik_Move_Motor.stop()
basic.forever(on_forever)
