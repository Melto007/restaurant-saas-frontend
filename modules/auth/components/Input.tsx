import React, { forwardRef, useId } from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ label, type = "text", placeholder, className = '', ...props }, ref) => {
        const id = useId();

        return (
            <div className="w-full">
                <label
                    htmlFor={id}
                    className="block text-sm font-medium mb-2"
                    style={{ color: '#FFC34A' }}
                >
                    {label}
                </label>
                <input
                    id={id}
                    ref={ref}
                    type={type}
                    placeholder={placeholder}
                    className={`w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 transition-all ${className}`}
                    style={{
                        backgroundColor: '#1F2230',
                        borderColor: '#4CBF67',
                        color: '#FFF',
                        border: '1px solid'
                    }}
                    {...props}
                />
            </div>
        );
    }
);

Input.displayName = 'Input';

export default Input;