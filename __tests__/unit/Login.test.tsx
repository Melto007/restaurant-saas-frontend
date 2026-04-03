import { findByText, render, screen } from '@testing-library/react';
import LoginForm from '@/modules/auth/pages/LoginForm';
import Login from '@/app/(auth)/(login)/page';
import { vi, describe, it, expect } from 'vitest';
import userEvent from '@testing-library/user-event';

vi.mock("next/image", () => ({
    default: (props: any) => <img {...props} />
}))

describe("Login Component", () => {
    it("render the login heading", () => {
        render(<Login />)
        expect(screen.getByText("Welcome Back")).toBeInTheDocument()
    })

    it("render the email field", () => {
        render(<LoginForm />)

        expect(screen.getByLabelText("Email Address")).toBeInTheDocument()
        expect(screen.getByLabelText("Password")).toBeInTheDocument()
    })

    it("find the button by role", () => {
        render(<LoginForm />)

        expect(screen.getByRole("button", { name: /Sign in/i })).toBeInTheDocument()
    })

    it("it should point to the correct url page register", () => {
        render(<Login />)

        expect(screen.getByRole("link", { name: /Sign up here/i })).toHaveAttribute("href", "/register")
    })

    it("test the input", async () => {
        const user = userEvent.setup()
        render(<LoginForm />)

        const emailText = screen.getByLabelText("Email Address")
        const passwordText = screen.getByLabelText("Password")

        await user.type(emailText, 'test@gmail.com')
        await user.type(passwordText, 'password')

        expect(emailText).toHaveValue("test@gmail.com")
        expect(passwordText).toHaveValue("password")
    })

    it("show error message for fields", async () => {
        const user = userEvent.setup()
        render(<LoginForm />)

        const signInButton = screen.getByRole("button", { name: /Sign in/i })
        user.click(signInButton)

        const errorMessage = await screen.findByText("Email and Password field is required")
        expect(errorMessage).toBeInTheDocument()

        expect(errorMessage.parentElement).toHaveClass("border-red-700")
    })

    it("should hide the error message when user is typing", async () => {
        const user = userEvent.setup()
        render(<LoginForm />)

        const btn = screen.getByRole("button", { name: /Sign in/i })
        const emailInput = screen.getByLabelText("Email Address")
        const passwordInput = screen.getByLabelText("Password")
        await user.click(btn)

        const errorText = await screen.findByText("Email and Password field is required")
        expect(errorText).toBeInTheDocument()

        await user.type(emailInput, 'test@gmail.com')
        await user.type(passwordInput, 'password')

        expect(screen.queryByText(/Email and Password field is required/i)).not.toBeInTheDocument()
    })
})