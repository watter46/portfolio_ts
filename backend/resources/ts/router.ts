import { createRouter, createWebHistory } from 'vue-router';
import Todo from "./components/Todo/Todo.vue";
 
const routes = [
    { path: '/todo', name: 'todo', component: Todo },
]
 
const router = createRouter({
    history: createWebHistory(),
    routes,
})
 
export default router;
