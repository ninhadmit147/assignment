import instance from "./config";

export const getBlog = () => {
    return instance.get('/blog/')
}
export const get = (id) => {
    return instance.get(`/blog/${id}`)
}
export const remove = (id) => {
    return instance.delete(`/blog/${id}`)
}
export const add = (blog) => {
    return instance.post(`/blog/`, blog)
}
export const updateBlog = (blog) => {
    return instance.put(`/blog/${blog.id}`, blog)
}