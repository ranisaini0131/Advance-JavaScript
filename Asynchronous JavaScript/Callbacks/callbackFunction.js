// Asynchronous callbacks are functions passed to another function that starts executing code in the background.which is then invoked inside the outer function to complete the action.
//need:- Callbacks are the super powerful way of handling async operation in javaScript


//(Callback Hell)pyramid of Doom
const cart = ["shoes", "pants", "kurtas"];

api.createOrder(cart, () => {

    api.proceesToPayment(payment, () => {

        api.showOrderHistory(show, () => {

            api.updateWalllet(update, () => {

            })
        })
    })
})
//inversion of control:it's like we are loosing the control of our functions by passing 1 function into another