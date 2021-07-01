let left_sense = 0
let right_sense = 0
let speed = 30
basic.forever(function () {
    right_sense = maqueen.readPatrol(maqueen.Patrol.PatrolRight)
    left_sense = maqueen.readPatrol(maqueen.Patrol.PatrolLeft)
    if (left_sense == 1 && right_sense == 1) {
        maqueen.motorStop(maqueen.Motors.All)
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 25)
        basic.pause(200)
    } else if (left_sense == 1 && right_sense == 0) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, speed)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, speed - 30)
        basic.pause(75)
    } else if (left_sense == 0 && right_sense == 0) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, speed)
        basic.pause(75)
    } else if (left_sense == 0 && right_sense == 1) {
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, speed)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, speed - 30)
        basic.pause(75)
    }
})
