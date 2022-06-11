import { getBlog } from "../api/blog"
import Footer from "../component/footer"
import Nav from "../component/nav"

const Blog = {
  async render() {
    const data = await getBlog()
    return `
        ${Nav.render()}
        <div class="container mt-5">
        <h1>Blog</h1>
        <div class="post m-5 ">
          <div class=" w-100" style="width: 18rem;">
          ${data.map((item) => `
          <div class="card-body border-bottom my-4 py-4">
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
          `).join('')}
          </div>
        </div>
      </div>
        ${Footer.render()}
        `
  }
}
export default Blog