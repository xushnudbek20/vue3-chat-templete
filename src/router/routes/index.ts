import { RouteRecordRaw } from 'vue-router'
import Home from '../../pages/Home.vue'
import Chat from '../../pages/Chat/index.vue'
import Setting from '../../pages/Setting.vue'
import Main from '../../layout/main.vue'
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'index',
    component: Main,
    children: [
      { path: 'home', component: Home, name: 'Home' },
      { path: 'chats', component: Chat, name: 'Chats' },
      { path: 'chat/:id', component: Chat, name: 'Chat' },
      { path: 'setting', component: Setting, name: 'Setting' },
    ]
  }
]

export default routes
