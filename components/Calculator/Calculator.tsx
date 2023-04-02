import React from "react";
import CalculatorGraph from "./CalculatorGraph";
import CalculatorValues from "./CalculatorValues/CalculatorValues";
import Inputs from "./Inputs";
import useCalculator from "./useCalculator";

const Calculator = () => {
    const {
        interestRate,
        setInterestRate,
        loanAmount,
        setLoanAmount,
        loanTerm,
        setLoanTerm,
        monthlyPayment,
        interestPaid,
        totalPaid,
    } = useCalculator();

    return (
        <div className="flex flex-col md:flex-row">
            <Inputs
                interestRate={interestRate}
                loanAmount={loanAmount}
                loanTerm={loanTerm}
                onInterestRateChange={setInterestRate}
                onLoanAmountChange={setLoanAmount}
                onLoanTermChange={setLoanTerm}
            />
            <div className="flex flex-col flex-grow">
                <CalculatorValues
                    monthlyPayment={monthlyPayment}
                    interestPaid={interestPaid}
                    totalPaid={totalPaid}
                />
                <CalculatorGraph />
            </div>
        </div>
    );
};

export default Calculator;

