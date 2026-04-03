"use client"

import React, { useState } from 'react'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'

const QueryProvider = ({ children }: { children: React.ReactNode }) => {
    const [ queryClient ] = useState(() => new QueryClient({
        defaultOptions: {
            queries: {
                staleTime: 5 * 60 * 1000,
                retry: 1,
            }
        }
    }))
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    )
}

export default QueryProvider