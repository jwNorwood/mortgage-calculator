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
      className="flex flex-col justify-start pr-8 mr-8 border-r-2 border-gray-200"
    >
      <div className="flex flex-col pb-2">
        <label htmlFor="interestRate">Interest Rate %</label>
        <input
          type="number"
          name="interestRate"
          id="interestRate"
          step={0.01}
          value={interestRate}
          className="px-2 py-1 border-2 border-gray-200 rounded-md"
          onChange={(e) => onInterestRateChange(Number(e.target.value))}
          min={0}
        />
      </div>
      <div className="flex flex-col pb-2">
        <label htmlFor="loanAmount">Loan Amount</label>
        <input
          type="number"
          name="loanAmount"
          id="loanAmount"
          className="px-2 py-1 border-2 border-gray-200 rounded-md"
          value={loanAmount}
          onChange={(e) => onLoanAmountChange(Number(e.target.value))}
          min={0}
        />
      </div>
      <div className="flex flex-col pb-2">
        <label htmlFor="loanTerm">Loan Term</label>
        <input
          type="number"
          name="loanTerm"
          id="loanTerm"
          className="px-2 py-1 border-2 border-gray-200 rounded-md"
          value={loanTerm}
          onChange={(e) => onLoanTermChange(Number(e.target.value))}
          min={0}
        />
      </div>
    </div>
  );
};

export default Inputs;
