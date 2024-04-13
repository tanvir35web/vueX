<template>
    <button
        class="p-3 bg-gray-300 border-gray-500 border-2 hover:bg-gray-400 hover:shadow-lg rounded w-full font-semibold text-xl"
    >
        {{ label }}
    </button>
</template>

<script>
export default {
    props: ["label"],
};
</script>
