import React from "react";
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
        <div>
            <h1>Calculator</h1>
            <div className="flex flex-col md:flex-row md:justify-between">
                <Inputs
                    interestRate={interestRate}
                    loanAmount={loanAmount}
                    loanTerm={loanTerm}
                    onInterestRateChange={setInterestRate}
                    onLoanAmountChange={setLoanAmount}
                    onLoanTermChange={setLoanTerm}
                />
                <div className="flex-3">
                    <CalculatorValues  
                        monthlyPayment={monthlyPayment}
                        interestPaid={interestPaid}
                        totalPaid={totalPaid}
                    />

                    <div id="graph" />
                    <div className="flex flex-row">
                        <div className="flex flex-col mr-4">
                            <div className="flex flex-row 
                                justify-between items-center pb-2">
                                <strong>Total Payment</strong>
                                <div className="w-4 h-4 bg-blue-500 ml-2" />
                            </div>
                            <div className="flex flex-row justify-between items-center pb-2">
                                <strong>Total Interest Paid</strong>
                                <div className="w-4 h-4 bg-red-500 ml-2" />

                            </div>
                            <div className="flex flex-row justify-between items-center pb-2">
                                <strong>Total Amount Paid</strong>
                                <div className="w-4 h-4 bg-green-500 ml-2" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Calculator;

