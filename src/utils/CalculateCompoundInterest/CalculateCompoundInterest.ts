import { ICalculateCompoundInterest, ICalculateCompoundInterestResponse } from './interfaces'

export function CalculateCompoundInterest( data: ICalculateCompoundInterest ) : ICalculateCompoundInterestResponse {

    let amountWithInterest = data.initialValue
    let totalInvested = data.initialValue
    let interestAmountInTheLastMonth = 0

    //convert years to months if necessary
    const quantityMonths = data.investmentTimeType === 'year' ? (data.period * 12) : data.period
    
    //convert year interest to month interest if necessary
    const interestRateAdjust = data.interestRatePeriod === 'year' 
        ? 
            ((Math.pow((1 + (data.interestRate / 100)), (1 / 12)) - 1) * 100)
        : 
            parseFloat(data.interestRate.toFixed(2))

    //calculate compound interest
    for(let i = 0; i < quantityMonths; i++) {
        interestAmountInTheLastMonth = (amountWithInterest * (interestRateAdjust / 100))
        amountWithInterest = data.monthlyInvestment + (amountWithInterest + interestAmountInTheLastMonth)
        totalInvested += data.monthlyInvestment
    }

    const totalInInterest = amountWithInterest - totalInvested
    
    return {
        totalInvested: formatResponse(totalInvested),
        totalInInterest: formatResponse(totalInInterest),
        amountWithInterest: formatResponse(amountWithInterest),
        interestAmountInTheLastMonth: formatResponse(interestAmountInTheLastMonth)
    }
}

function formatResponse (value: number) {
    const valueSplit = value.toFixed(2).split('.')

    return 'R$' + (valueSplit[0].replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')) + ',' + valueSplit[1]
}