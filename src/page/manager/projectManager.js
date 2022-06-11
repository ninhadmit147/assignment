import { getProject, remove } from "../../api/projects"
import Nav from "../../component/nav"

const ProjectManager = {
  async render() {
    const projects = await getProject()
    return `
        ${Nav.render()}
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
                    <h1 class="card-title text-reset fs-4 text-decoration-none fw-bold">${item.name_project}</h1>
                    <div class="d-flex my-5">
                      <h5 class="card-subtitle mb-2 text-white bg-dark px-3 rounded-pill">${item.time}</h5>
                      <h5 class="card-subtitle mb-2 mx-2 text-muted"> </h5>
                      <h5 class="card-subtitle mb-2 text-muted">${item.work}</h5>
                    </div>
                    <p class="card-text">${item.body1}</p>
                    <button type="button" class="btn-remove btn btn-danger float-end text-white mb-2" data-id="${item.id}">Delete</button>
                    <a href="/admin/projects/${item.id}/update" type="button" class="btn btn-info mx-2 float-end text-white">Update</a>
                  </div>
                </div>
                <hr>
              </div>
              
            </div>
            `)}
            
            </div>
        <a href="/admin/projects/add" type="button" class="btn btn-primary w-100 float-end text-white">+ Add</a>

            </div>
        </div>
        `
  }, afterRender() {
    const btns = document.querySelectorAll('.btn')
    for (let btn of btns) {
      const id = btn.dataset.id
      btn.addEventListener('click', async function () {
        if (btn.classList.contains('btn-remove')) {
          const confirm = window.confirm('Do you want to delete this item?')
          if (confirm) {
            const data = remove(id)
            if (data) {
              confirm('Project -1')
              window.location('#/admin/projects')
            }
          }
        }
      })
    }
  }
}
export default ProjectManager