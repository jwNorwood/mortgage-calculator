import React from "react";

interface Props {
  monthlyPayment: number;
  interestPaid: number[];
  totalPaid: number[];
}

const CalculatorValues = ({
  monthlyPayment,
  interestPaid,
  totalPaid
}: Props) => {

  console.log(monthlyPayment);
  const monthlyPaymentFormatted = monthlyPayment.toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
  });
  const totalInterestPaid = interestPaid[interestPaid.length - 1];
  const totalInterestPaidFormatted = totalInterestPaid?.toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
  });

  const totalAmountPaid = totalPaid[totalPaid.length - 1];
  const totalAmountPaidFormatted = totalAmountPaid?.toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
  });
  return (
    <>
      <div className="pb-1">
        <strong>Monthly Payment</strong>:{" "}
        {monthlyPaymentFormatted ? monthlyPaymentFormatted : "0.00"}
      </div>
      <div className="pb-1">
        <strong>Total Interest Paid</strong>:{" "}
        {totalInterestPaidFormatted ? totalInterestPaidFormatted : "0.00"}
      </div>
      <div className="pb-1">
        <strong>Total Amount Paid</strong>:{" "}
        {totalAmountPaidFormatted ? totalAmountPaidFormatted : "0.00"}
      </div>
    </>
  );
};

export default CalculatorValues;
