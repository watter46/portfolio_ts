import { createRouter, createWebHistory } from 'vue-router';
import Todo from "./components//Todo/Todo.vue";
 
const routes = [
    { path: '/todo', name: 'todo', component: Todo },
    // { path: '/Page2', name: 'page2', component: Page2 },
]
 
const router = createRouter({
    history: createWebHistory(),
    routes,
})
 
export default router;
