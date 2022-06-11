import { UploadFile } from "../../api/upImage"
import { get, updateUser } from "../../api/user"
import Nav from "../../component/nav"

const UserUpdate = {
  async render(id) {
    const user = await get(id)
    return `
        ${Nav.render()}
        <div class="container mx-auto">
    <form id="updateUser">
      <div class="mb-3">
        <label for="" class="form-label">Fullname</label>
        <input type="text" class="form-control" id="nameUser" value="${user.fullname}" aria-describedby="emailHelp">
      </div>
      <div class="mb-3">
        <label for="" class="form-label">Specialized</label>
        <input type="text" class="form-control" id="specializedUser" value="${user.specialized}"
          aria-describedby="emailHelp">
      </div>
      <div class="mb-3">
        <label for="" class="form-label">Avatar</label>
        <br>
        <img class="w-25 rounded-pill" src="${user.image}" alt="" id="preview">
        <div id="preview">
        <label for="" class="form-label">New avatar</label>
        <br>
        <img class="w-25 rounded-pill" style="width=:300px;" src="" alt="" id="previewNew">
        </div>
        <input type="file" class="form-control" onchange="document.getElementById('previewNew').src = window.URL.createObjectURL(this.files[0])" id="avatarUser" aria-describedby="emailHelp">
      </div>
      <div class="mb-3">
        <label for="" class="form-label">Desire</label>
        <input type="text" class="form-control" id="desireUser" value="${user.desire}" aria-describedby="emailHelp">
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
        `
  },
  afterRender(id) {
    const updateForm = document.querySelector('#updateUser')
    const img = document.querySelector('#avatarUser')
    const preview = document.querySelector('#preview')
    const oldAvatar = preview.src
    updateForm.addEventListener('submit', async function (e) {
      e.preventDefault()
      if (img.files[0] != undefined) {
        const newAvatar = await UploadFile(img.files[0])
        const user = {
          id: id,
          fullname: document.querySelector('#nameUser').value,
          specialized: document.querySelector('#specializedUser').value,
          image: newAvatar.data.url,
          desire: document.querySelector('#desireUser').value
        }
        console.log(user);
        updateUser(user)
        if (updateUser) {
          alert('Update successful')
          window.location = "/admin"
        }
      } else {
        const user = {
          id: id,
          fullname: document.querySelector('#nameUser').value,
          specialized: document.querySelector('#specializedUser').value,
          image: oldAvatar,
          desire: document.querySelector('#desireUser').value
        }
        console.log(user);
        updateUser(user)
        if (updateUser) {
          alert('Update successful')
          window.location = "/admin"
        }
      }

    })
  }
}
export default UserUpdate