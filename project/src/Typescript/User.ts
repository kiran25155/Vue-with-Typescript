
import { defineComponent } from 'vue'
import axios from 'axios';
import Notifications from '../components/Notifications.vue'
import TrackMyApplication from '../components/TrackMyApplication.vue'
import Notification from '../Mixin/Notification';
import User from '../Mixin/User'
export default defineComponent({
    name:'User',
    mixins:[Notification,User],
    components:{ Notifications,TrackMyApplication},
    
})
