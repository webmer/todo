export default {
    state: () => ({
        tasks: [],
    }),
    mutations: {
        updateTasks(state, tasks) {
            state.tasks = tasks;
        },
        deleteTask(state, id) {
            for (let i = 0; i < state.tasks.length; i++) {
                if (id === state.tasks[i].id) {
                    state.tasks.splice(i, 1);

                    break;
                }
            }
        },
        addTask(state, title) {
            state.tasks.unshift({
                id: Date.now(),
                title: title,
                completed: false,
            })
        }
    },
    actions: {
        async fetchTodos({commit}) {
            const res = await fetch('https://jsonplaceholder.typicode.com/todos/?_limit=5');
            const tasks = await res.json();

            commit('updateTasks', tasks);
        },
    },
    getters: {
        allTasks(state) {
            return state.tasks;
        }
    }
}