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
        <div class="flex w-96 m-auto flex-row items-center justify-center pb-8 gap-1">
            <input
                class="bg-gray-100 px-3 py-3 rounded text-xl font-semibold border-gray-500 border-2 w-72"
                type="text"
                v-model="bookName"
                placeholder="Add a book..."
            />
            <Button @click="addBook" :label="add" />
        </div>
        <ul>
            <li v-for="book in booklists" :key="book" class="text-xl font-bold">
                {{ book }}
            </li>
        </ul>
    </div>
</template>

<script>
import Button from "./components/Button.vue";

export default {
    components: {
        Button,
    },
    data() {
        return {
            count: 0,
            labelForIncrement: "Increment",
            labelForDecrement: "Decrement",
            labelForReset: "Reset",
            add: "Add",
            bookName: "",
        };
    },
    computed: {
        booklists() {
            return this.$store.state.booklists;
        },
    },
    methods: {
        increment() {
            this.count += 1;
        },
        decrement() {
            this.count -= 1;
        },
        reset() {
            this.count = 0;
        },
        addBook() {
            console.log(this.bookName);
            this.$store.dispatch("addBook", this.bookName);
        },
    },
};
</script>
