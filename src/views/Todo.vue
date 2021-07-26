<template>
  <div>
    <AddTask />
    <Loader v-if="loading"/>
    <Tasks
        v-else-if="allTasks.length"
        :tasks="allTasks"
        @remove-task="deleteTask"/>
    <p v-else>Not tasks</p>
  </div>
</template>

<script>
import Tasks from '@/components/Tasks.vue'
import AddTask from '@/components/AddTask.vue'
import Loader from '@/components/Loader.vue'
import { mapGetters, mapMutations  } from 'vuex'

export default {
  name: 'Todo',
  components: {
    Tasks, AddTask, Loader
  },
  async mounted() {
    this.$store.dispatch('fetchTodos');

    this.loading = await false;
  },
  computed: mapGetters(['allTasks']),
  data() {
    return {
      tasks: [],
      loading: true,
    }
  },
  methods: {
    ...mapMutations(['deleteTask']),
    removeTask(id) {
    },

  }
}
</script>