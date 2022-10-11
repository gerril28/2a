input.onButtonPressed(Button.A, function () {
    Counter += -1
    basic.showNumber(Counter)
})
let Counter = 0
basic.showIcon(IconNames.EigthNote)
Counter = 9
basic.showNumber(Counter)
