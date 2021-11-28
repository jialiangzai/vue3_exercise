import { createApp } from 'vue'
// import App from './App.vue'
// import Setup from './views/setup函数入口.vue'
// import Reactive from './views/reactive函数.vue'
// import Refs from './views/ref函数.vue'
import Compute from '@/views/computed.函数.vue'
import router from './router'
import store from './store'

// createApp(App).use(store).use(router).mount('#app')

// createApp(Setup).use(store).use(router).mount('#app')
// createApp(Reactive).use(store).use(router).mount('#app')
// createApp(Refs).use(store).use(router).mount('#app')
createApp(Compute).use(store).use(router).mount('#app')
