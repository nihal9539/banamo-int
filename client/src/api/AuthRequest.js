import axios from "axios"

const API = axios.create({baseURL:"http://localhost:3000"})

export const login = (formData )=> API.post('/auth/login',formData)
export const signup = (formData )=> API.post('/auth/register',formData)