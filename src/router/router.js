import OurCenter from "@/components/center/OurCenter.vue";
import OurContanct from "@/components/contact/OurContanct.vue";
import Landing from "@/components/landing/LandingView.vue";
import PrivacyPolicy from "@/components/PrivacyPolicy/PrivacyPolicy.vue";
import Services from "@/components/services/ServicesView.vue";
import TDAH from "@/components/TDAH/TDAH.vue";
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
    {path: '/', component: Landing},
    {path: '/servicios', component: Services},
    {path: '/tdah', component: TDAH},
    {path: '/nuesto_centro', component: OurCenter},
    {path: '/contacto', component: OurContanct},
    {path: '/privacidad', component: PrivacyPolicy}
]

const router = createRouter({
    routes: routes,
    history: createWebHashHistory()
})
export default router