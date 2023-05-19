import { type Transaction, type User } from '@prisma/client';
export type ErrorType = Error | string | null | unknown;
export type FullUser = User & {
    transactions: Transaction[];
};
