<template>
    <div class="p-20 m-auto text-center">
        <h1 class="text-5xl font-bold">Hello Vue Counter</h1>
        <h2 class="text-5xl font-bold my-10">{{ count }}</h2>
        <div class="flex gap-1 flex-col m-auto justify-center w-96 pb-10">
            <div class="flex gap-1 justify-center">
                <Button @click="increment" :label="labelForIncrement" />
                <Button @click="decrement" :label="labelForDecrement" />
            </div>
            <Button @click="reset" :label="labelForReset" />
        </div>
        <p class="text-2xl font-semibold mb-8">The total length of book list : {{ bookLength }}</p>
        <form
            class="flex w-96 m-auto flex-row items-center justify-center pb-8 gap-1"
        >
            <input
                class="bg-gray-100 px-3 py-3 rounded text-xl font-semibold border-gray-500 border-2 w-72"
                type="text"
                v-model="bookName"
                placeholder="Add a book..."
            />
            <Button @click.prevent="addBook" :label="add" />
        </form>
        <ul>
            <li
                v-for="(book, index) in booklists"
                :key="index"
                class="text-xl font-bold"
            >
                {{ book }}
                <button
                    @click="removeBook(index)"
                    class="px-3 py-2 font-medium bg-red-700 text-white m-1 rounded hover:bg-red-900"
                >
                    Delete
                </button>
            </li>
        </ul>
    </div>
</template>

<script>
import Button from "./components/Button.vue";
import {mapActions, mapGetters, mapState} from "vuex"

export default {
    components: {
        Button,
    },
    data() {
        return {
            labelForIncrement: "Increment",
            labelForDecrement: "Decrement",
            labelForReset: "Reset",
            add: "Add",
            bookName: "",
        };
    },
    computed: {
        ...mapState({
            booklists: "booklists",
            count: "count",
        }),

        ...mapGetters({
            bookLength: "bookLength",
        })

        // ,
        // booklists() {
        //     return this.$store.state.booklists;
        // },
    },
    methods: {
        
        addBook() {
            this.$store.dispatch("addBook", this.bookName);
            this.bookName = "";
        },

        // removeBook(index) {
        //     this.$store.dispatch("removeBook", index);
        // },

        ...mapActions({
            removeBook: "removeBook",
            increment: "increment",
            decrement: "decrement",
            reset: "reset",
        })
    },
};
</script>
