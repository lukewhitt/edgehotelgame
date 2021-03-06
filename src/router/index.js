import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/pages/Welcome'
import HowToPlay from '@/pages/HowToPlay'
import About from '@/pages/About'
import Game from '@/pages/Game'
import Results from "@/pages/Results";
import FailLie from "@/pages/FailLie";
import FailTruth from "@/pages/FailTruth";
import Success from "@/pages/Success";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome
    },
    {
      path: '/howtoplay',
      name: 'HowToPlay',
      component: HowToPlay
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/game',
      name: 'Game',
      component: Game
    },
    {
      path: '/results',
      name: 'Results',
      component: Results
    },
    {
      path: '/faillie',
      name: 'FailLie',
      component: FailLie
    },
    {
      path: '/failtruth',
      name: 'FailTruth',
      component: FailTruth
    },
    {
      path: '/success',
      name: 'Success',
      component: Success
    }
  ]
})
