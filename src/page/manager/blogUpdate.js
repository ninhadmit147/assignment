import { get, updateBlog } from "../../api/blog"
import Nav from "../../component/nav"

const BlogUpdate = {
    async render(id) {
        const blog = await get(id)
        return `
        ${Nav.render()}
        <div class="container mx-auto">
        <div class="d-flex justify-content-between">
            <h1>Update blog</h1>
            <a href="#/admin/blogs" class="mt-2"><i class="bi bi-arrow-left-short"></i>Back</a>
        </div>
            <form id="updateBlog">
            <div class="mb-3">
                <label for="" class="form-label">Tille blog</label>
                <input type="text" class="form-control" id="title-blog" value="${blog.title}" aria-describedby="emailHelp">
            </div>
            <div class="mb-3">
                <label for="" class="form-label">Blog content</label>
                <div class="form-floating">
                <textarea class="form-control"  placeholder="Leave a comment here" id="content-blog"
                    style="height: 100px">${blog.body}</textarea>
                <label for="floatingTextarea2"></label>
                </div>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
        `
    },
    afterRender(id) {
        const update_Blog = document.querySelector('#updateBlog')
        const newTime = new Date()
        const day = newTime.getDate()
        const mouth = newTime.getUTCMonth() + 1
        const year = newTime.getFullYear()
        const time = `${day}-${mouth}-${year}`
        update_Blog.addEventListener('submit', async function (e) {
            e.preventDefault()
            const blog = {
                id: id,
                title: document.querySelector('#title-blog').value,
                time: time,
                body: document.querySelector('#content-blog').value,
            }
            updateBlog(blog)
        })
    }
}
export default BlogUpdate