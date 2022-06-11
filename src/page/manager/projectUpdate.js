import { add, get, update } from "../../api/projects"
import { UploadFile } from "../../api/upImage"
import Nav from "../../component/nav"

const ProjectUpdate = {
  async render(id) {
    const project = await get(id)
    return `
        ${Nav.render()}
        <div class="container">
        <h1>Update project</h1>
          <form id="addProject">
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Name project</label>
              <input type="text" class="form-control" value="${project.name_project}" id="name_project" aria-describedby="emailHelp">
            </div>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Work</label>
              <input type="text" class="form-control" value="${project.work}" id="work" aria-describedby="emailHelp">
            </div>
            <input class="mb-3" type="date" name="" value="${project.time}" id="time">
            <br>
            <label for="exampleInputEmail1" class="form-label">Old Avatar</label>
            <img class="w-25" src="${project.avatar}" alt="" id="preview">
            <br>
            <label for="exampleInputEmail1" class="form-label mt-5">New Avatar</label>
            <img class="w-25" src="" alt="" id="previewNew">
            <br>
            <input class="my-2" type="file" value="" name="" id="avatar">
            <div class="mb-3  border-dark border p-2">
              <label class="fw-bold text-" for="">Content 1</label>
              <br>
              <img class="w-25 my-2" src="${project.img1}" alt="" id="preview2">
              <input type="file"  id="img1">
              <div class="w-100" id="preview1"></div>
              <div class="form-floating">
                <textarea class="form-control" placeholder="Leave a comment here" id="body1" style="height: 100px">${project.body1}</textarea>
                <label for="">Content 1</label>
              </div>
            </div>
            <button type="submit" class="btn btn-primary">Update Project</button>
          </form>
        </div>
        `
  },
  afterRender(id) {
    const add_project = document.querySelector('#addProject')
    const img1 = document.querySelector('#img1')
    const avatar = document.querySelector('#avatar')
    const oldAvatar = document.querySelector('#preview')
    const oldImg1 = document.querySelector('#preview2')

    add_project.addEventListener('submit', async function (e) {
      e.preventDefault()
      if (avatar.files[0] != undefined && img1.files[0] != undefined) {
        const addAvatar = await UploadFile(avatar.files[0])
        const addImg1 = await UploadFile(img1.files[0])
        const project = {
          id: id,
          name_project: document.querySelector('#name_project').value,
          time: document.querySelector('#time').value,
          work: document.querySelector('#work').value,
          avatar: addAvatar.data.url,
          img1: addImg1.data.url,
          body1: document.querySelector('#body1').value,
        }
        console.log(project);
        update(project)
        if (update) {
          alert('Update complete ^-^ ')
          window.location = "/admin/projects"
        }
      }
      if (avatar.files[0] == undefined && img1.files[0] == undefined) {
        const project = {
          id: id,
          name_project: document.querySelector('#name_project').value,
          time: document.querySelector('#time').value,
          work: document.querySelector('#work').value,
          avatar: oldAvatar.src,
          img1: oldImg1.src,
          body1: document.querySelector('#body1').value,
        }
        console.log(project);
        update(project)
        if (update) {
          alert('Update complete ^-^ ')
          window.location = "/admin/projects"
        }
      }
      if (avatar.files[0] == undefined || img1.files[0] != undefined) {
        const addImg1 = await UploadFile(img1.files[0])
        const project = {
          id: id,
          name_project: document.querySelector('#name_project').value,
          time: document.querySelector('#time').value,
          work: document.querySelector('#work').value,
          avatar: oldAvatar.src,
          img1: addImg1.data.url,
          body1: document.querySelector('#body1').value,
        }
        console.log(project);
        update(project)
        if (update) {
          alert('Update complete ^-^ ')
          window.location = "/admin/projects"
        }
      }
      if (avatar.files[0] != undefined || img1.files[0] == undefined) {
        const addAvatar = await UploadFile(avatar.files[0])
        const project = {
          id: id,
          name_project: document.querySelector('#name_project').value,
          time: document.querySelector('#time').value,
          work: document.querySelector('#work').value,
          avatar: addAvatar.data.url,
          img1: oldImg1.src,
          body1: document.querySelector('#body1').value,
        }
        console.log(project);
        update(project)
        if (update) {
          alert('Update complete ^-^ ')
          window.location = "/admin/projects"
        }
      }


    })
  }
}
export default ProjectUpdate