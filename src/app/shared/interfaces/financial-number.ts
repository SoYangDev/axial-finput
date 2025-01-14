export type FinancialNumberSuffix = 'k' | 'm' | 'b'

export const FinancialSuffixMap: Record<FinancialNumberSuffix , number> = {
    k: 1000,
    m: 1000000,
    b: 1000000000
}