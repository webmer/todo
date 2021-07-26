<template>
    <li>
        <span v-bind:class="{done: task.completed}">
            <input type="checkbox" v-on:change="task.completed = !task.completed" :checked="task.completed">
         {{ task.title }}
        </span>
        <button @click="$emit('remove-task', task.id)">del</button>
    </li>
</template>

<script>
export default {
    props: {
        task: {
            type: Object,
        }
    },
}
</script>

<style scoped>
li {
  width: 500px;
  display: flex;
  place-content: space-between;
}
.done {
    text-decoration: line-through;
}
</style>