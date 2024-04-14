import { createStore } from "vuex";

export default createStore({
    state() {
        return {
            booklists: ["Book 1", "Book 2", "Book 3", "Book 4", "Book 5"],
        };
    },
    mutations: {
        // Define mutations to change state
        ADD_BOOK(state, data) {
            state.booklists.push(data);
        },
        REMOVE_BOOK(state, index) {
            state.booklists.splice(index, 1);
        },
    },
    actions: {
        // Define actions to commit mutations
        addBook({ commit }, data) {
            commit("ADD_BOOK", data);
        },
        removeBook({ commit }, index) {
            commit("REMOVE_BOOK", index);
        },
    },
    getters: {
        // Define getters to access state
        bookLength(state) {
            return state.booklists.length;
        }
    },
});
