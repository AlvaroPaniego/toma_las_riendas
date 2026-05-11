// import OurCenter from "@/components/center/OurCenter.vue";
// import OurContanct from "@/components/contact/OurContanct.vue";
// import Landing from "@/components/landing/LandingView.vue";
// import PrivacyPolicy from "@/components/PrivacyPolicy/PrivacyPolicy.vue";
// import Services from "@/components/services/ServicesView.vue";
// import TDAH from "@/components/TDAH/TDAH.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: '/',
        name: "Home",
        component: () => import("@/components/landing/LandingView.vue")
    },
    {
        path: '/servicios',
        name:"Servicios",
        component: () => import("@/components/services/ServicesView.vue")
    },

    {
        path: '/tdah',
        name:"TDAH",
        component: () => import("@/components/TDAH/TDAH.vue")
    },

    {
        path: '/nuestro_centro',
        name:"",
        component: () => import("@/components/center/OurCenter.vue")
    },

    {
        path: '/contacto',
        name:"Contacto",
        component: () => import("@/components/contact/OurContanct.vue")
    },

    {
        path: '/privacidad',
        name:"Privacidad",
        component: () => import("@/components/PrivacyPolicy/PrivacyPolicy.vue")
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes    
})
export default router