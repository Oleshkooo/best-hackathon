'use client'

import { useCallback } from 'react'

type UseScrollSelector = () => (selector: string) => void

export const useScrollSelector: UseScrollSelector = () => {
    return useCallback((selector: string) => {
        const element = document.querySelector(selector) as HTMLElement

        if (element === null) {
            console.error(`useScrollSelector: Element with selector ${selector} not found`)
            return
        }

        element.scrollIntoView({ behavior: 'smooth' })
    }, [])
}
