import axiosInstance from "@/modules/axiosInstance"

type LoginData = {
    email: string
    password: string
}

export const authService = {
    login: async(data: LoginData) => {
        const response = await axiosInstance.post("/auth/login", data)
        return response
    }
}
