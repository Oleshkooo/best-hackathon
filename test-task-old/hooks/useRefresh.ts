'use client'

import { usePathname, useRouter } from 'next/navigation'
import { useCallback } from 'react'

export const useRefresh = () => {
    const router = useRouter()
    const pathname = usePathname()

    return useCallback(() => {
        router.replace(pathname)
    }, [pathname, router])
}
