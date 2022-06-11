
import instance from "./config";

export const getPost = () => {
    return instance.get('/posts/')
}
export const get = (id) => {
    return instance.get(`/post/${id}`)
}
export const remove = (id) => {
    return instance.get(`/posts/${id}`)
}
export const add = (post) => {
    return instance.post(`/posts/${post}`)
}
export const update = (post) => {
    return instance.post(`/posts/${post.id}`, post)
}