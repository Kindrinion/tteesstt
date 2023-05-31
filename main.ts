function 좌회전 (num: number) {
    maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
    maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, num)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, num * 2.2)
    basic.pause(500)
}
input.onGesture(Gesture.TiltRight, function () {
    radio.sendString("R")
})
input.onGesture(Gesture.TiltLeft, function () {
    radio.sendString("L")
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    radio.sendString("B")
})
function 우회전 (num: number) {
    maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
    maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, num)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, num * 2.2)
    basic.pause(500)
}
input.onButtonPressed(Button.A, function () {
    radio.sendString("L")
})
input.onGesture(Gesture.Shake, function () {
    radio.sendString("X")
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("F")
})
radio.onReceivedString(function (receivedString) {
    명령 = receivedString
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("R")
})
function 후진 (num: number) {
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, num)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, num * 2.2)
    basic.pause(500)
}
function 전진 (num: number) {
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, num)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, num * 2.2)
    basic.pause(500)
}
let 명령 = ""
radio.setGroup(616)
basic.forever(function () {
    if (명령 == "L") {
        좌회전(30)
    } else if (명령 == "R") {
        우회전(30)
    } else if (명령 == "F") {
        전진(15)
    } else if (명령 == "B") {
        후진(15)
    } else if (명령 == "X") {
        maqueen.motorStop(maqueen.Motors.All)
    }
})
