import instance from "./config";

export const getUser = () => {
    return instance.get('/user/')
}
export const get = (id) => {
    return instance.get(`/user/${id}`)
}
export const updateUser = (user) => {
    return instance.put(`/user/${user.id}`, user)
}