import { get } from "../api/projects"
import Footer from "../component/footer"
import Nav from "../component/nav"

const ProjectDetail = {
    async render(id) {
        const project = await get(id)
        return `
        ${Nav.render()}
        <div class="container">
            <h1>${project.name_project}</h1>
            <div class="post my-5">
            <div class=" w-100" style="width: 18rem;">
                <div class="d-flex my-3">
                <h5 class="card-subtitle mb-2 rounded-pill bg-danger bg-opacity-75 text-white px-3">${project.time}</h5>
                <h5 class="card-subtitle mb-2 mx-3 text-muted"> | </h5>
                <h5 class="card-subtitle mb-2 text-muted">${project.work}</h5>
                </div>
                <img src="${project.avatar}" class="w-100 mb-5" alt="">
                <h1 class="my-2">Heading 1</h1>
                <img src="${project.img1}" class="w-100" alt="">
                <p>${project.body1}</p>
            </div>
            </div>
        </div>
        ${Footer.render()}
        `
    }
}
export default ProjectDetail