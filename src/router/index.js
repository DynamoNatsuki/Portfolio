import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import FizzBuzzView from '@/views/FizzBuzzView.vue'
import MVCPortfolioView from '@/views/MVCPortfolioView.vue'
import ExerciseDiaryView from '@/views/ExerciseDiaryView.vue'
import TicTacToeView from '@/views/TicTacToeView.vue'
import CompanyMVC from '@/views/CompanyMVC.vue'
import RecipeMVC from '@/views/RecipeMVC.vue'
import RecipeSQL from '@/views/RecipeSQL.vue'
import BlogSQL from '@/views/BlogSQL.vue'
import TrainingSQL from '@/views/TrainingSQL.vue'
import RecipeAPI from '@/views/RecipeAPI.vue'
import BlogAPI from '@/views/BlogAPI.vue'
import BlogAPI2 from '@/views/BlogAPI2.vue'
import CV from '@/views/CV.vue'
import Recipehdlb from '@/views/Recipehdlb.vue'
import RestaurantVue from '@/views/RestaurantVue.vue'
import BlogVue from '@/views/BlogVue.vue'
import TodoVue from '@/views/TodoVue.vue'
import Webshop from '@/views/Webshop.vue'
import LoansCRUD from '@/views/LoansCRUD.vue'
import BlogView from '@/views/BlogView.vue'
import TodoView from '@/views/TodoView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/fizzbuzz',
    name: 'fizzbuzz',
    component: FizzBuzzView
  },
  {
    path: '/mvcport',
    name: 'mvcportfolio',
    component: MVCPortfolioView
  },
  {
    path: '/exercise',
    name: 'exercisediary',
    component: ExerciseDiaryView
  },
  {
    path: '/tictac',
    name: 'tictactoe',
    component: TicTacToeView
  },
  {
    path: '/company',
    name: 'company_mvc',
    component: CompanyMVC
  },
  {
    path: '/recipemvc',
    name: 'recipe_mvc',
    component: RecipeMVC
  },
  {
    path: '/recipesql',
    name: 'recipe_sql',
    component: RecipeSQL
  },
  {
    path: '/blogsql',
    name: 'blog_sql',
    component: BlogSQL
  },
  {
    path: '/training',
    name: 'trainingsql',
    component: TrainingSQL
  },
  {
    path: '/recipeapi',
    name: 'recipe_api',
    component: RecipeAPI
  },
  {
    path: '/blogapi',
    name: 'blog_api',
    component: BlogAPI
  },
  {
    path: '/blogapi2',
    name: 'blog_api2',
    component: BlogAPI2
  },
  {
    path: '/cv',
    name: 'cv_port',
    component: CV
  },
  {
    path: '/recipehdlb',
    name: 'recipe_hdlb',
    component: Recipehdlb
  },
  {
    path: '/restaurant',
    name: 'restaurant_vue',
    component: RestaurantVue
  },
  {
    path: '/blogvue',
    name: 'blog_vue',
    component: BlogVue
  },
  {
    path: '/todovue',
    name: 'todo_vue',
    component: TodoVue
  },
  {
    path: '/webshop',
    name: 'webshop_vue',
    component: Webshop
  },
  {
    path: '/loans',
    name: 'loans_crud',
    component: LoansCRUD
  },
  {
    path: '/blogview',
    name: 'blog_view',
    component: BlogView
  },
  {
    path: '/todo',
    name: 'todo_view',
    component: TodoView
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
