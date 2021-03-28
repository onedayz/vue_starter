export default {
    deposit(state, payload) {
        state.balance += payload;
    },
    withdraw(state, payload) {
        if(state.balance >= payload){
            state.balance -= payload;
        }
    }
}
