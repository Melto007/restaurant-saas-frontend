import axios, { AxiosError } from 'axios'

const axiosInstance = axios.create({
    baseURL: 'http://localhost:80/api/v1',
    headers: {
        'Content-Type': 'application/json',
    },
    timeout: 10000,
    withCredentials: true,
})

axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token")
        const restaurant = localStorage.getItem("restaurant")
        if (token) {
            config.headers["Authorization"] = `Bearer ${token}`
        }

        if (restaurant) {
            try {
                const parsed = JSON.parse(restaurant)

                if (parsed?.restaurantId) {
                    config.headers["x-restaurant-id"] = parsed.restaurantId
                }
            } catch (err) {
                console.error("Restaurant parse error", err)
            }
        }

        return config
    },
    (error) => Promise.reject(error)
)

axiosInstance.interceptors.response.use(
    (response) => response,
    (error: AxiosError) => {
        if (error.response?.status === 401) {
            console.warn("Unauthorized - redirecting");
        }

        if (!error.response) {
            console.error("Network Error: Is the backend actually running on Port 80?");
        }

        return Promise.reject(error)
    }
)

export default axiosInstance