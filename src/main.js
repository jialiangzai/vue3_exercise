import { createApp } from 'vue'
// import App from './App.vue'
// import Setup from './views/setup函数入口.vue'
// import Reactive from './views/reactive函数.vue'
// import Refs from './views/ref函数.vue'
// import Compute from '@/views/computed.函数.vue'
// import Watch from './views/watch函数.vue'
// import Hook from '@/views/生命周期钩子函数.vue'
// import Parent from '@/views/parent.vue'
// Todolist ===>01
import Todos from '@/views/todos00.vue'
// Todolist组件化
// import Todolist from '@/views/todos.vue'
import router from './router'
import store from './store'

// createApp(App).use(store).use(router).mount('#app')

// createApp(Setup).use(store).use(router).mount('#app')
// createApp(Reactive).use(store).use(router).mount('#app')
// createApp(Refs).use(store).use(router).mount('#app')
// createApp(Compute).use(store).use(router).mount('#app')
// createApp(Watch).use(store).use(router).mount('#app')
// createApp(Hook).use(store).use(router).mount('#app')
// createApp(Parent).use(store).use(router).mount('#app')
createApp(Todos).use(store).use(router).mount('#app')
// createApp(Todolist).use(store).use(router).mount('#app')
