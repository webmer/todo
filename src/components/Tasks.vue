<template>
    <div>
        <ul>
            <Task
             v-for="(task, index) in tasks" 
             :key="index"
             :task="task"
             @remove-task="removeTask"
             />
        </ul>
    </div>
</template>

<script>
import Task from '@/components/Task.vue'

export default {
    props: ['tasks'],
    components: {
        Task
    },
    methods: {
        removeTask(id) {  
            this.$emit('remove-task', id);
        },
    }
}
</script>