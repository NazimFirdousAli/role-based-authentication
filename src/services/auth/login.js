import React from 'react'
import axios from 'axios'

// const login = 
const loginApi = (data) => axios.post(`https://api.zues.ae/api/token`, data)

export { loginApi }