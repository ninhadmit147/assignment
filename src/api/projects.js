import instance from "./config";

export const getProject = () => {
    return instance.get('/projects/')
}
export const get = (id) => {
    return instance.get(`/projects/${id}`)
}
export const remove = (id) => {
    return instance.delete(`/projects/${id}`)
}
export const add = (project) => {
    return instance.post(`projects/`, project)
}
export const update = (project) => {
    return instance.put(`/projects/${project.id}`, project)
}