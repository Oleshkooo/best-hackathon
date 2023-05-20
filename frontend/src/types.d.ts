import { type Transaction, type User } from '@prisma/client'

export type FullUser = User & {
    transactions: Transaction[]
}
