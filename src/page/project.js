import { getProject } from "../api/projects"
import Footer from "../component/footer"
import Nav from "../component/nav"

const Project = {
  async render() {

    const projects = await getProject()
    return `
        ${Nav.render()}
        <div class="container mt-5">
            <h1>Project</h1>
            <div class="post m-5">
            <div class=" w-100" style="width: 18rem;">
            ${projects.map((item) => `
            <div class="mb-3 w-100 rounded-0 border-light">
              <div class="row g-0">
              <div class="col-md-4 text-center">
              <img src="${item.avatar}" class="img-fluid rounded-md p-3 " style="height:300px;" alt="...">
            </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <a href="/project/${item.id}" class="card-title text-reset fs-4 text-decoration-none fw-bold">${item.name_project}</a>
                    <div class="d-flex my-3">
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
            `).join('')}
            
            </div>
            </div>
        </div>
        ${Footer.render()}
        `
  }
}
export default Project