import Navigo from "navigo"
import Blog from "./page/blog"
import Edit from "./page/edit"
import Home from "./page/home"
import ProjectDetail from "./page/projectDetail"
import Project from "./page/project"
import PostManager from "./page/manager/postManager"
import ProjectManager from "./page/manager/projectManager"
import BlogManager from "./page/manager/blogManager"
import UserUpdate from "./page/manager/userUpdate"
import BlogAdd from "./page/manager/blogAdd"
import BlogUpdate from "./page/manager/blogUpdate"
import ProjectAdd from "./page/manager/projectAdd"
import ProjectUpdate from "./page/manager/projectUpdate"

const router = new Navigo('/', { hash: true })

document.addEventListener('DOMContentLoaded', () => {
  async function print(page, id) {
    const app = document.getElementById('app')
    if (app) {
      app.innerHTML = await page.render(id)
    }
    if (page.afterRender) {
      page.afterRender(id)
    }

  }
  router.on({
    '/': () => print(Home),
    '/project': () => print(Project),
    '/project/:id': (data) => {
      const id = +data.data.id;
      print(ProjectDetail, id);
    },
    '/blog': () => print(Blog),
    //admin
    '/admin': () => print(Edit),
    '/user/:id/edit': (data) => {
      const id = +data.data.id;
      print(UserUpdate, id);
    },
    '/admin/posts': () => print(PostManager),

    //Project
    '/admin/projects': () => print(ProjectManager),
    '/admin/projects/add': () => print(ProjectAdd),
    '/admin/projects/:id/update': (data) => {
      const id = +data.data.id
      print(ProjectUpdate, id)
    },

    //Blog
    '/admin/blogs': () => print(BlogManager),
    '/admin/blog/add': () => print(BlogAdd),
    '/admin/blog/:id/update': (data) => {
      const id = +data.data.id
      print(BlogUpdate, id)
    },

  })
  router.resolve()
})
