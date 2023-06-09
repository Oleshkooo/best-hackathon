'use client'

import { useEffect } from 'react'

/**
 * @see https://usehooks.com/useLockBodyScroll
 */
export const useLockBodyScroll = () => {
    useEffect(() => {
        // Get original body overflow
        const originalStyle = window.getComputedStyle(document.body).overflow

        // Prevent scrolling on mount
        document.body.style.overflow = 'hidden'

        // Re-enable scrolling when component unmounts
        return () => {
            document.body.style.overflow = originalStyle
        }
    }, []) // Empty array ensures effect is only run on mount and unmount
}
