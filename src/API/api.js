import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    headers: {
        'API-KEY': 'c5510286-4eff-4785-8abe-0a33bca078e3'
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})

export const usersAPI = {
    getUsers(nextPage, pageSize = 3){
        return instance.get(`users?page=${nextPage}&count=${pageSize}`)
            .then(response => {
                return response.data
        })
    },

    followAPI (userId) {
       return instance.post(`follow/${userId}`)
           .then(response => {
               return response.data
           })
    },

    unfollowAPI (userId) {
        return instance.delete(`follow/${userId}`)
            .then(response => {
                return response.data
            })
    }

}

export const profileAPI = {
    getProfile(userId = 19241){
        return instance.get(`profile/${userId}`)
            .then(response => {
                return response.data
            })
    }
}

export const authAPI = {
    getAuthData(){
        return instance.get(`auth/me`)
            .then(response => {
                return response.data
            })
    }
}

