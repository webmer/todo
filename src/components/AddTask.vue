<template>
  <form @submit.prevent="sendTask">
    <input type="text" v-model="title">
    <button type="submit">send</button>
  </form>
</template>

<script>
import { mapMutations  } from 'vuex'

export default {
  data() {
    return {
      title: ''
    };
  },
  methods: {
    ...mapMutations(['addTask']),
    sendTask() {
      this.addTask(this.title);

      this.title = '';
    }
  },
}
</script>