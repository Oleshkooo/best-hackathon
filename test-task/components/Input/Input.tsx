import { memo } from 'react'

import s from './Input.module.scss'

interface InputProps extends JSX.IntrinsicAttributes, React.HTMLAttributes<HTMLInputElement> {
    value: string
    setValue?: React.Dispatch<React.SetStateAction<string>>
    onChange?: React.ChangeEventHandler<HTMLInputElement>
    type: 'text' | 'password' | 'email'
    name?: string
    required?: boolean
}

export const Input: React.FC<InputProps> = memo(
    ({
        value,
        setValue,
        onChange,
        className = '',
        type,
        name,
        placeholder,
        required = false,
        ...props
    }) => {
        const handleChange =
            onChange !== undefined
                ? onChange
                : (e: React.ChangeEvent<HTMLInputElement>) => {
                      setValue?.(e.target.value)
                  }

        return (
            <input
                value={value}
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
