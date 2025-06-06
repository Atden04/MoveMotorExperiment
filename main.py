def turn_right_90():
    Kitronik_Move_Motor.motor_on(Kitronik_Move_Motor.Motors.MOTOR_LEFT,
        Kitronik_Move_Motor.MotorDirection.FORWARD,
        speed)
    Kitronik_Move_Motor.motor_on(Kitronik_Move_Motor.Motors.MOTOR_RIGHT,
        Kitronik_Move_Motor.MotorDirection.REVERSE,
        speed)
    basic.pause(500)
    Kitronik_Move_Motor.stop()
def traverse_maze():
    move_to_wall()
    turn_left_90()
    move_to_wall()
    turn_right_90()
    move_to_wall()
    turn_right_90()
    move_to_wall()
    turn_left_90()
    move_to_wall()
    turn_right_90()
    move_to_wall()
    turn_left_90()
    move_to_wall()
    turn_left_90()
    move_to_wall()
def turn_left_90():
    Kitronik_Move_Motor.motor_on(Kitronik_Move_Motor.Motors.MOTOR_LEFT,
        Kitronik_Move_Motor.MotorDirection.REVERSE,
        speed)
    Kitronik_Move_Motor.motor_on(Kitronik_Move_Motor.Motors.MOTOR_RIGHT,
        Kitronik_Move_Motor.MotorDirection.FORWARD,
        speed)
    basic.pause(500)
    Kitronik_Move_Motor.stop()
def move_to_wall():
    while Kitronik_Move_Motor.measure() > distanceToWall:
        Kitronik_Move_Motor.motor_on(Kitronik_Move_Motor.Motors.MOTOR_LEFT,
            Kitronik_Move_Motor.MotorDirection.FORWARD,
            speed)
        Kitronik_Move_Motor.motor_on(Kitronik_Move_Motor.Motors.MOTOR_RIGHT,
            Kitronik_Move_Motor.MotorDirection.FORWARD,
            speed)
        basic.pause(100)
    Kitronik_Move_Motor.stop()
speed = 0
distanceToWall = 0
biasValue = 3
Kitronik_Move_Motor.motor_balance(Kitronik_Move_Motor.SpinDirections.RIGHT, biasValue)
distanceToWall = 5
speed = 20
Kitronik_Move_Motor.set_ultrasonic_units(Kitronik_Move_Motor.Units.CENTIMETERS)
traverse_maze()