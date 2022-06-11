import { getBlog, remove } from "../api/blog"
import { getPost } from "../api/post"
import { getProject } from "../api/projects"
import { get } from "../api/user"
import Footer from "../component/footer"
import Nav from "../component/nav"

const Edit = {
  async render() {
    const user = await get(1)
    const post = await getPost()
    const projects = await getProject()
    const blog = await getBlog()
    return `
        
        ${Nav.render()}
        <div class="row w-100 mt-5 container mx-auto border my-5" style="height:305px">
        <div class="col-10 ">
          <div class="w-75 h-50 m-auto align-items-end ">
            <h1 class="text-capitalize ">
              Hi,i'm ${user.fullname},<br>
              ${user.specialized}
            </h1>
            <p>
              ${user.desire}
            </p>
            <button type="button" class="btn btn-danger rounded-0">Download Resume</button>
          </div>
        </div>
        <div class="col-2 col-xs-1 text-center">
        <a href="#/user/${user.id}/edit" type="button" class="btn btn-info float-end text-white">Update</a>
          <img src="${user.image}" class="w-100 rounded-circle" alt="">
        </div>
      </div>
      
      <div class="container border pb-3 my-2">
        <h1>Blog</h1>
        <div class="post my-5">
          <div class=" w-100" style="width: 18rem;">
          ${blog.map((item) => `
          <div class="card-body border-bottom my-4">
              <a class="text-reset text-decoration-none" href="#">
                <h3 class="card-title">${item.title}</h3>
                <div class="d-flex my-3">
                  <h5 class="card-subtitle mb-2">${item.time}</h5>
                  <h5 class="card-subtitle mb-2 mx-3 text-muted"> | </h5>
                  <h5 class="card-subtitle mb-2 text-muted">Express, Handlebars</h5>
                </div>
                <p style="overflow: hidden;text-overflow: ellipsis;line-height: 20px;-webkit-line-clamp: 5;display: -webkit-box;-webkit-box-orient: vertical;" class="card-text">${item.body}</p>
              </a>
            </div>
          `)}
          </div>
          <br>
        <a href="/#/admin/blogs" type="button" class="btn btn-primary w-100 float-end text-white">Edit</a>

        </div>
      </div>
      <div class="container border pb-3 my-2">
            <h1>Project</h1>
            <div class="post my-5">
            <div class=" w-100" style="width: 18rem;">
            ${projects.map((item) => `
            <div class="mb-3 w-100 rounded-0 border-light">
              <div class="row g-0">
                <div class="col-md-4">
                  <img src="${item.avatar}" class="img-fluid rounded-md p-3" alt="...">
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <a href="/project/${item.id}" class="card-title text-reset fs-4 text-decoration-none fw-bold">${item.name_project}</a>
                    <div class="d-flex my-5">
                      <h5 class="card-subtitle mb-2 text-white bg-dark px-3 rounded-pill">${item.time}</h5>
                      <h5 class="card-subtitle mb-2 mx-2 text-muted"> </h5>
                      <h5 class="card-subtitle mb-2 text-muted">${item.work}</h5>
                    </div>
                    <p style="overflow: hidden;text-overflow: ellipsis;line-height: 20px;-webkit-line-clamp: 5;display: -webkit-box;-webkit-box-orient: vertical;" class="card-text">${item.body1}</p>
                  </div>
                </div>
                <hr>
              </div>
              
            </div>
            `)}
            
            </div>
        <a href="#/admin/projects" type="button" class="btn btn-primary w-100 float-end text-white">Edit</a>

            </div>
        </div>
        ${Footer.render()}
    
        `
  }
}
export default Edit