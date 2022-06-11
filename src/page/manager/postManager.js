import navAdmin from "../../component/manager/navAdmin"


const PostManager = {
  render() {
    return `
        ${navAdmin.render()}
        <div class="container">
        <h1>Blog</h1>
        <div class="post my-5">
          <div class=" w-100" style="width: 18rem;">
            <div class="card-body border-bottom my-4">
              <a class="text-reset text-decoration-none" href="#">
                <h3 class="card-title">Card title</h3>
                <div class="d-flex my-3">
                  <h5 class="card-subtitle mb-2">12 Feb 2019</h5>
                  <h5 class="card-subtitle mb-2 mx-3 text-muted"> | </h5>
                  <h5 class="card-subtitle mb-2 text-muted">Express, Handlebars</h5>
                </div>
                <p class="card-text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
                  consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
              </a>
            </div>
            <div class="card-body border-bottom my-4">
              <a class="text-reset text-decoration-none" href="#">
                <h3 class="card-title">Card title</h3>
                <div class="d-flex my-3">
                  <h5 class="card-subtitle mb-2">12 Feb 2019</h5>
                  <h5 class="card-subtitle mb-2 mx-3 text-muted"> | </h5>
                  <h5 class="card-subtitle mb-2 text-muted">Express, Handlebars</h5>
                </div>
                <p class="card-text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
                  consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
              </a>
            </div>
            <div class="card-body border-bottom my-4">
              <a class="text-reset text-decoration-none" href="#">
                <h3 class="card-title">Card title</h3>
                <div class="d-flex my-3">
                  <h5 class="card-subtitle mb-2">12 Feb 2019</h5>
                  <h5 class="card-subtitle mb-2 mx-3 text-muted"> | </h5>
                  <h5 class="card-subtitle mb-2 text-muted">Express, Handlebars</h5>
                </div>
                <p class="card-text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
                  consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
              </a>
            </div>
            <div class="card-body border-bottom my-4">
              <a class="text-reset text-decoration-none" href="#">
                <h3 class="card-title">Card title</h3>
                <div class="d-flex my-3">
                  <h5 class="card-subtitle mb-2">12 Feb 2019</h5>
                  <h5 class="card-subtitle mb-2 mx-3 text-muted"> | </h5>
                  <h5 class="card-subtitle mb-2 text-muted">Express, Handlebars</h5>
                </div>
                <p class="card-text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
                  consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
              </a>
            </div>
            <div class="card-body border-bottom my-4">
              <a class="text-reset text-decoration-none" href="#">
                <h3 class="card-title">Card title</h3>
                <div class="d-flex my-3">
                  <h5 class="card-subtitle mb-2">12 Feb 2019</h5>
                  <h5 class="card-subtitle mb-2 mx-3 text-muted"> | </h5>
                  <h5 class="card-subtitle mb-2 text-muted">Express, Handlebars</h5>
                </div>
                <p class="card-text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
                  consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
              </a>
            </div>
          </div>
        </div>
      </div>
        ${Footer.render()}
        `
  }
}
export default PostManager