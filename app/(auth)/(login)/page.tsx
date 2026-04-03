import Image from 'next/image'
import Link from 'next/link'
import LoginForm from '@/modules/auth/pages/LoginForm'

const Login = () => {
    return (
        <div className="flex h-screen" style={{ backgroundColor: '#2A2D3E' }}>
            {/* Left Side - Logo */}
            <div className="hidden lg:flex lg:w-1/2 bg-linear-to-br items-center justify-center p-12 flex-col" style={{ backgroundImage: 'linear-gradient(135deg, #2A2D3E 0%, #1F8F6A 60%, #37A873 100%)' }}>
                <Image
                    src="/images/restaurant-logo.png"
                    alt="Restaurant Logo"
                    width={300}
                    height={300}
                    priority
                />
                <h2 className="text-4xl font-bold mt-8 text-center" style={{ color: '#FFC34A' }}>Restaurant Management</h2>
                <p className="text-lg mt-4 text-center max-w-sm" style={{ color: '#FFFFFF' }}>Streamline your restaurant operations with our comprehensive SaaS platform</p>
                <div className="flex gap-6 mt-12">
                    <div className="text-center">
                        <p className="text-2xl font-bold" style={{ color: '#FFC34A' }}>100+</p>
                        <p className="text-sm" style={{ color: '#FFFFFF' }}>Restaurants</p>
                    </div>
                    <div className="text-center">
                        <p className="text-2xl font-bold" style={{ color: '#FFC34A' }}>24/7</p>
                        <p className="text-sm" style={{ color: '#FFFFFF' }}>Support</p>
                    </div>
                    <div className="text-center">
                        <p className="text-2xl font-bold" style={{ color: '#FFC34A' }}>99%</p>
                        <p className="text-sm" style={{ color: '#FFFFFF' }}>Uptime</p>
                    </div>
                </div>
            </div>

            {/* Right Side - Login Form */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-6" style={{ backgroundColor: '#1F2230' }}>
                <div className="w-full max-w-md rounded-lg shadow-lg p-8" style={{ backgroundColor: '#2A2D3E', border: '1px solid #37A873' }}>
                    <h1 className="text-3xl font-bold mb-2" style={{ color: '#FFC34A' }}>Welcome Back</h1>
                    <p className="mb-8 text-sm" style={{ color: '#A0A0A0' }}>Sign in to your Restaurant Dashboard</p>

                    <LoginForm />

                    {/* Sign Up Link */}
                    <p className="text-center mt-6 text-sm" style={{ color: '#A0A0A0' }}>
                        Don't have an account? <Link href="/register" className="hover:underline font-semibold text-[#4CBF67]">Sign up here</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Login