import EventList from '@/components/EventList'
import Dashboard from '@/components/Dashboard'
import Exception from '@/components/Exception'
import ServiceSmsSend from '@/components/sms/Send'
export default [
  {
    path: '/exception',
    name: 'exception',
    component: Exception
  },
  {
    name: 'EventList',
    path: 'event-list',
    component: EventList
  },
  {
    name: 'Dashboard',
    path: 'dashboard',
    component: Dashboard
  },
  {
    name: 'ServiceSms',
    path: 'service-sms',
    meta: {label: '短信发送'},
    component: ServiceSmsSend
  }
]
