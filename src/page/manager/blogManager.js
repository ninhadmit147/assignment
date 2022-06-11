import { getBlog, remove } from "../../api/blog"
import Footer from "../../component/footer"
import Nav from "../../component/nav"

const BlogManager = {
  async render() {
    const blog = await getBlog()
    return `
        ${Nav.render()}
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
                <p class="card-text">${item.body}</p>
                <button type="button" class="btn-remove btn btn-danger float-end text-white" data-id="${item.id}">Delete</button>
                <a href="#/admin/blog/${item.id}/update" type="button" class="btn btn-info mx-2 float-end text-white">Update</a>
            </div>
          `).join('')}
          </div>
          <br>
        <a href="/admin/blog/add" type="button" class="btn btn-primary w-100 float-end text-white">+ Add new</a>

        </div>
      </div>
        ${Footer.render()}
        `
  },
  afterRender() {
    const btns = document.querySelectorAll(".btn")
    for (let btn of btns) {
      const id = btn.dataset.id
      btn.addEventListener('click', async function () {
        if (btn.classList.contains('btn-remove')) {
          console.log(id);
          const confirm = window.confirm('Do you want to delete this item?')
          if (confirm) {
            const data = await remove(id)
            if (data) {
              window.alert('Delete successful')
              window.location()
            }
          }
        }
      })
    }
  }
}
export default BlogManager