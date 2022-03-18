export interface ICalculateCompoundInterest{
    initialValue: number, 
    monthlyInvestment: number,
    interestRate: number,
    interestRatePeriod: string,
    period: number,
    investmentTimeType: string
}

export interface ICalculateCompoundInterestResponse {
    totalInvested: string;
    totalInInterest: string;
    amountWithInterest: string;
    interestAmountInTheLastMonth: string;
}