import { memo } from 'react'

export const CoinIcon: React.FC = memo(() => {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                stroke="#AFAFAF"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M12 3.20001V20.8"
                stroke="#AFAFAF"
                stroke-width="1.6"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M16 6.40002H10C9.25741 6.40002 8.54522 6.69502 8.02011 7.22013C7.49501 7.74523 7.20001 8.45742 7.20001 9.20002C7.20001 9.94263 7.49501 10.6548 8.02011 11.1799C8.54522 11.705 9.25741 12 10 12H14C14.7426 12 15.4548 12.295 15.9799 12.8201C16.505 13.3452 16.8 14.0574 16.8 14.8C16.8 15.5426 16.505 16.2548 15.9799 16.7799C15.4548 17.305 14.7426 17.6 14 17.6H7.20001"
                stroke="#AFAFAF"
                stroke-width="1.6"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>
    )
})

CoinIcon.displayName = 'CoinIcon'
