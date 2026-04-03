"use client"

import React from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { authService } from '../login.request'
import { useRouter } from 'next/navigation'
import { setCookie } from 'cookies-next'

export const useLogin = () => {
    const router = useRouter()
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: authService.login,
        onSuccess: async (response) => {
            const data = response.data

            setCookie('token', data.token, { maxAge: 60 * 60 * 24, path: '/' })
            setCookie("refreshToken", data.refreshToken,
                {
                    maxAge: 60 * 60 * 24 * 7,
                    path: '/'
                }
            )

            localStorage.setItem("userId", data.userId)
            localStorage.setItem(
                "restaurant",
                JSON.stringify(data.restaurantInfos?.[0])
            )
            await queryClient.invalidateQueries({ queryKey: ['auth']})

            router.push("/dashboard");
        },
        onError: (err) => {
            console.log(err)
        }
    })
}
