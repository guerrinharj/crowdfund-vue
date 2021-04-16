import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'


import App from './App.vue'
import TheButton from './components/TheButton.vue'
import TheModal from './components/TheModal.vue'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/back', component: TheModal
        }
    ]
})

const app = createApp(App)

app.component('the-button', TheButton)

app.use(router)

app.mount('#app')