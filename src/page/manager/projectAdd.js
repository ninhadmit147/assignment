import { add } from "../../api/projects"
import { UploadFile } from "../../api/upImage"
import Nav from "../../component/nav"

const ProjectAdd = {
  render() {
    return `
        ${Nav.render()}
        <div class="container">
        <h1>Add project</h1>
          <form id="addProject">
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Name project</label>
              <input type="text" class="form-control" id="name_project" aria-describedby="emailHelp">
            </div>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Work</label>
              <input type="text" class="form-control" id="work" aria-describedby="emailHelp">
            </div>
            <input class="mb-3" type="date" name="" id="time">
            <br>
            <label for="exampleInputEmail1" class="form-label">Avatar</label>
            <br>
            <input class="my-2" type="file" name="" id="avatar">
            <div class="mb-3 border-dark border p-2">
              <label class="fw-bold text-" for="">Content</label>
              <br>
              <input type="file" id="img1">
              <div class="w-100" id="preview1"></div>
              <div class="form-floating">
                <textarea class="form-control" placeholder="Leave a comment here" id="body1" style="height: 100px"></textarea>
                <label for="">Content</label>
              </div>
            </div>
            <button type="submit" class="btn btn-primary">Add Project</button>
          </form>
        </div>
        `
  },
  afterRender() {
    const add_project = document.querySelector('#addProject')
    const img1 = document.querySelector('#img1')
    const avatar = document.querySelector('#avatar')

    add_project.addEventListener('submit', async function (e) {
      e.preventDefault()

      const addAvatar = await UploadFile(avatar.files[0])
      const addImg1 = await UploadFile(img1.files[0])

      const project = {
        name_project: document.querySelector('#name_project').value,
        time: document.querySelector('#time').value,
        work: document.querySelector('#work').value,
        avatar: addAvatar.data.url,
        img1: addImg1.data.url,
        body1: document.querySelector('#body1').value,
      }
      console.log(project);
      add(project)
      if (add) {
        alert('Project +1')
        window.location = '/admin/projects'
      }

    })
  }
}
export default ProjectAdd