import React from "react";

interface Props {
  interestRate: number;
  loanAmount: number;
  loanTerm: number;
  onInterestRateChange: (interestRate: number) => void;
  onLoanAmountChange: (loanAmount: number) => void;
  onLoanTermChange: (loanTerm: number) => void;
}

const Inputs = ({
  interestRate,
  loanAmount,
  loanTerm,
  onInterestRateChange,
  onLoanAmountChange,
  onLoanTermChange,
}: Props) => {
  return (
    <div
      className="flex flex-1 flex-col justify-start mr-8 pr-8 
        border-r-2 border-gray-200"
    >
      <div className="flex flex-col pb-2">
        <label htmlFor="interestRate">Interest Rate</label>
        <input
          type="number"
          name="interestRate"
          id="interestRate"
          step={0.01}
          value={interestRate}
          className="border-2 border-gray-200 rounded-md px-2 py-1"
          onChange={(e) => onInterestRateChange(Number(e.target.value))}
        />
      </div>
      <div className="flex flex-col pb-2">
        <label htmlFor="loanAmount">Loan Amount</label>
        <input
          type="number"
          name="loanAmount"
          id="loanAmount"
          className="border-2 border-gray-200 rounded-md px-2 py-1"
          value={loanAmount}
          onChange={(e) => onLoanAmountChange(Number(e.target.value))}
        />
      </div>
      <div className="flex flex-col pb-2">
        <label htmlFor="loanTerm">Loan Term</label>
        <input
          type="number"
          name="loanTerm"
          id="loanTerm"
          className="border-2 border-gray-200 rounded-md px-2 py-1"
          value={loanTerm}
          onChange={(e) => onLoanTermChange(Number(e.target.value))}
        />
      </div>
    </div>
  );
};

export default Inputs;
