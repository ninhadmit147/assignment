import { getPost } from "../api/post"
import { getProject } from "../api/projects"
import { get } from "../api/user"
import Footer from "../component/footer"
import Nav from "../component/nav"

const Home = {
  async render() {
    const user = await get(1)
    const post = await getPost()
    const projects = await getProject()
    return `
        ${Nav.render()}
        <div class="row w-100 my-5 px-5 container mx-auto" style="height:350px">
        <div class="col-8">
          <div class="w-100 mt-5 h-50 m-auto align-items-end ">
            <h1 class="text-capitalize ">
              Hi,i'm ${user.fullname},<br>
              ${user.specialized}
            </h1>
            <p class="py-4">
              ${user.desire}
            </p>
            <button type="button" class="btn bg-danger text-white bg-opacity-75 rounded-0">Download Resume</button>
          </div>
        </div>
        <div class="col-4 col-xs-1 text-center">
          <img src="${user.image}" class="w-100 rounded-circle" style="height:350px" alt="">
        </div>
      </div>
      <div class="recent_post container pt-5 ">
        <div class="bg-info bg-opacity-25" style="height:316px">
          <div class="w-100 px-5 mx-auto h-100">
            <div class="d-flex justify-content-between pt-4 mx-2">
              <h5>Rencent post</h5>
              <a class="text-decoration-none" href="#">View All</a>
            </div>
            <div class="d-flex justify-content-between">
            ${post.map((item) => `
            <div class="card-group container">
              <div class="card rounded-0">
                <div class="card-body">
                  <h5 class="card-title">${item.title}</h5>
                  <div class="d-flex mb-4 mt-5">
                  <h5 class="card-subtitle mb-2 text-muted">${item.time}</h5>
                  <h5 class="card-subtitle mb-2 mx-2 text-muted"> | </h5>
                  <h5 class="card-subtitle mb-2 text-muted"> ${item.work}</h5>
                </div>
                <p style="overflow: hidden;text-overflow: ellipsis;line-height: 20px;-webkit-line-clamp: 5;display: -webkit-box;-webkit-box-orient: vertical;" class="card-text">${item.body}</p>
                </div>
              </div>
            </div>`
    ).join('')}
          </div>
        </div>
      </div>
      <div class="Featured_works my-4">
        <div class="container mx-auto">
          <h5>Featured works</h5>
          ${projects.map((item) => `
          <div class="mb-3 w-100 rounded-0 border-light px-5">
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
          `)}
        </div>
      </div>
        ${Footer.render()}
        `
  }
}
export default Home