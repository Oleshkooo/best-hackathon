import { memo } from 'react'

import s from './Input.module.scss'

interface InputProps extends JSX.IntrinsicAttributes, React.HTMLAttributes<HTMLInputElement> {
    state: string
    setState: React.Dispatch<React.SetStateAction<string>>
    type: 'text' | 'password' | 'email'
    name?: string
    required?: boolean
}

export const Input: React.FC<InputProps> = memo(
    ({ state, setState, className = '', type, name, placeholder, required = false, ...props }) => {
        const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            setState(e.target.value)
        }
        return (
            <input
                value={state}
                onChange={handleChange}
                className={`${s.Input} ${className}`}
                type={type}
                name={name}
                placeholder={placeholder}
                required={required}
                {...props}
            />
        )
    },
)

Input.displayName = 'Input'
