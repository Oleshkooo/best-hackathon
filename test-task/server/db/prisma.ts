import { PrismaClient } from '@prisma/client'

import { isDevelopment } from '@/config/env'

const globalForPrisma = global as unknown as {
    prisma: PrismaClient | undefined
}

export const prisma =
    globalForPrisma.prisma ??
    new PrismaClient(
        isDevelopment
            ? {
                  //   log: ['query'],
              }
            : undefined,
    )

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma
