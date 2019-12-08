import home from '../view/home'
import login from '../view/login'
import enter from '../view/enter'
import geren from '../view/geren'
import xuqwb from '../view/xuqwb'
import cool from '../view/home/cool'
import my from '../view/home/my'
let route=[
    {
        path:"/home",
        component:home,
        children:[
            {
                path:"/home/cool",
                component:cool
            },{
                path:"/home/my",
                component:my
            },{
                path:"/",
                redirect:"/home/cool"
            }
        ]
    },{
        path:"/login",
        component:login
    },{
        path:"/enter",
        component:enter
    },{
        path:"/geren",
        component:geren
    },{
        path:"/xuqwb",
        component:xuqwb
    },{
        path:"/",
        redirect:"/enter"
    }
]
export default route