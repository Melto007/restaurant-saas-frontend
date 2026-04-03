"use client"

import React from 'react'
import { useForm } from 'react-hook-form'
import { InputLogin } from '@/shared/constants/login.constants'
import Input from '@/modules/auth/components/Input'
import Link from 'next/link'
import { useLogin } from "@/modules/auth/api/auth/hooks/useLogin"

const LoginForm = () => {
    const loginMutation = useLogin()
    const {  register, handleSubmit, formState: { errors }  } = useForm<InputLogin>({
        mode: "onChange"
    })

    const onSubmit = (data: InputLogin) => {
        console.log("success", data)
        loginMutation.mutate(data)
    }

    return (
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            {/* Error Message */}
            {errors.email?.message || errors.password?.message ? (
                <div className="p-4 rounded-lg bg-[#3d2626] border border-red-700 text-red-200">
                    <p className="text-sm font-medium">Email and Password field is required</p>
                </div>
            ) : null}

            <Input
                label="Email Address"
                type="email"
                placeholder="Enter your email"
                {...register("email", { required: "Email is required" })}
            />

            <Input
                label="Password"
                type="password"
                placeholder="Enter your password"
                {...register("password", { required: "Password is required" })}
            />

            {/* Remember Me */}
            <div className="flex justify-between items-center text-sm">
                <label className="flex items-center" style={{ color: '#A0A0A0' }}>
                    <input type="checkbox" className="mr-2" />
                    Remember me
                </label>
                <Link href="#" style={{ color: '#4CBF67' }} className="hover:underline">Forgot password?</Link>
            </div>

            {/* Submit Button */}
            <button
                type="submit"
                className="w-full text-white font-semibold py-2 rounded-lg hover:shadow-lg transition duration-300"
                style={{ backgroundImage: 'linear-gradient(to right, #FFC34A, #FF6B38)' }}
            >
                Sign In
            </button>
        </form>
    )
}

export default LoginForm