def on_button_pressed_a():
    pass
input.on_button_pressed(Button.A, on_button_pressed_a)

biasValue = 0
Kitronik_Move_Motor.motor_balance(Kitronik_Move_Motor.SpinDirections.RIGHT, biasValue)
biasValue = 4
distanceToWall = 8
speed = 20
moveMotorZIP = Kitronik_Move_Motor.create_move_motor_zipled(4)
moveMotorZIP.set_zip_led_color(0,
    Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.RED))
moveMotorZIP.set_zip_led_color(1,
    Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.BLUE))
moveMotorZIP.set_zip_led_color(2,
    Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.GREEN))
moveMotorZIP.set_zip_led_color(3,
    Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.YELLOW))
Kitronik_Move_Motor.set_ultrasonic_units(Kitronik_Move_Motor.Units.CENTIMETERS)

def on_forever():
    moveMotorZIP.rotate(1)
    moveMotorZIP.show()
    basic.pause(100)
basic.forever(on_forever)

def on_forever2():
    if Kitronik_Move_Motor.measure() > distanceToWall:
        Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.FORWARD, speed)
    elif Kitronik_Move_Motor.measure() < distanceToWall:
        Kitronik_Move_Motor.stop()
        basic.pause(500)
        Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.REVERSE, 50)
        basic.pause(1000)
        Kitronik_Move_Motor.spin(Kitronik_Move_Motor.SpinDirections.LEFT, 50)
        basic.pause(500)
        Kitronik_Move_Motor.stop()
basic.forever(on_forever2)
