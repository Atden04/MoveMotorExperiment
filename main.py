def on_button_pressed_a():
    Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.FORWARD, 80)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    Kitronik_Move_Motor.stop()
input.on_button_pressed(Button.B, on_button_pressed_b)

moveMotorZIP = Kitronik_Move_Motor.create_move_motor_zipled(4)
moveMotorZIP.set_zip_led_color(0,
    Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.RED))
moveMotorZIP.set_zip_led_color(1,
    Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.BLUE))
moveMotorZIP.set_zip_led_color(2,
    Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.GREEN))
moveMotorZIP.set_zip_led_color(3,
    Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.YELLOW))
Kitronik_Move_Motor.set_ultrasonic_units(Kitronik_Move_Motor.Units.INCHES)
music.play(music.string_playable("C5 A B G A F G E ", 262),
    music.PlaybackMode.LOOPING_IN_BACKGROUND)

def on_forever():
    moveMotorZIP.rotate(1)
    moveMotorZIP.show()
    basic.pause(100)
basic.forever(on_forever)

def on_forever2():
    if Kitronik_Move_Motor.measure() <= 5:
        basic.show_leds("""
            . # . # .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            """)
    else:
        basic.show_leds("""
            . . . . .
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            """)
basic.forever(on_forever2)
