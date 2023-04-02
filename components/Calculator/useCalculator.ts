import React, {useState, useEffect} from "react";
import * as d3 from "d3";

const useCalculator = () => {
  const [interestRate, setInterestRate] = useState(3.6);
  const [loanAmount, setLoanAmount] = useState(100000);
  const [loanTerm, setLoanTerm] = useState(30);

  const [principalPaid, setPrincipalPaid] = useState([]);
  const [interestPaid, setInterestPaid] = useState([]);
  const [totalPaid, setTotalPaid] = useState([]);
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  useEffect(() => {
    const monthlyPayment = calculateMonthlyPayment(
      loanAmount,
      interestRate,
      loanTerm
    );
    setMonthlyPayment(monthlyPayment);

    const {
      principalPaid: pp,
      interestPaid: ip,
      totalPaid: tp,
    } = calculatePaymentSchedule(
      loanAmount,
      interestRate,
      loanTerm,
      monthlyPayment
    );
    setPrincipalPaid(pp);
    setInterestPaid(ip);
    setTotalPaid(tp);
  }, [interestRate, loanAmount, loanTerm]);

  const calculateMonthlyPayment = (
    loanAmount: number,
    interestRate: number,
    loanTerm: number
  ) => {
    const monthlyInterestRate = interestRate / 100 / 12;
    const numberOfPayments = loanTerm * 12;
    const monthlyPayment =
      (loanAmount * monthlyInterestRate) /
      (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));
    return monthlyPayment;
  };

  const calculatePaymentSchedule = (
    loanAmount: number,
    interestRate: number,
    loanTerm: number,
    monthlyPayment: number
  ) => {
    const monthlyInterestRate = interestRate / 100 / 12;
    const numberOfPayments = loanTerm * 12;
    const principalPaid: any[] = [];
    const interestPaid: any[] = [];
    const totalPaid: any[] = [];
    let balance = loanAmount;
    for (let i = 0; i < numberOfPayments; i++) {
      const interest = balance * monthlyInterestRate;
      const principal = monthlyPayment - interest;

      balance = balance - principal;
      principalPaid.push(
        principalPaid[i - 1] ? principalPaid[i - 1] + principal : principal
      );
      interestPaid.push(
        interestPaid[i - 1] ? interestPaid[i - 1] + interest : interest
      );
      totalPaid.push(
        totalPaid[i - 1]
          ? totalPaid[i - 1] + interest + principal
          : interest + principal
      );
    }
    return { principalPaid, interestPaid, totalPaid };
  };

  const createGraph = () => {
    const width = 600;
    const height = 400;
    const margin = { top: 20, right: 20, bottom: 30, left: 50 };
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    const svg = d3
      .select("#graph")
      .append("svg")
      .attr("width", width)
      .attr("height", height);

    const g = svg
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    const xScale = d3
      .scaleLinear()
      .domain([0, loanTerm * 12])
      .range([0, innerWidth]);

    const yScale = d3
      .scaleLinear()
      .domain([0, totalPaid[totalPaid.length - 1]])
      .range([innerHeight, 0]);

    const xAxis = d3.axisBottom(xScale);

    const yAxis = d3.axisLeft(yScale);

    const xAxisG = g
      .append("g")
      .call(xAxis)
      .attr("transform", `translate(0,${innerHeight})`);

    const yAxisG = g.append("g").call(yAxis);

    const line = d3
      .line()
      .x((d, i) => xScale(i))
      // @ts-ignore
      .y((d) => yScale(d))
      .curve(d3.curveBasis);

    g.append("path")
      .datum(principalPaid)
      .attr("class", "line")
      .attr("d", line)
      .attr("fill", "none")
      .attr("stroke", "rgb(34 197 94)")
      .attr("stroke-width", 5);

    g.append("path")
      .datum(interestPaid)
      .attr("class", "line")
      .attr("d", line)
      .attr("fill", "none")
      .attr("stroke", "rgb(239 68 68)")
      .attr("stroke-width", 5);

    g.append("path")
      .datum(totalPaid)
      .attr("class", "line")
      .attr("d", line)
      .attr("fill", "none")
      .attr("stroke", "rgb(59 130 246)")
      .attr("stroke-width", 3);
  };

  const removeGraph = () => {
    d3.select("#graph").selectAll("svg").remove();
  };

  const updateGraph = () => {
    removeGraph();
    createGraph();
  };

  useEffect(() => {
    updateGraph();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [monthlyPayment]);

  return {
    interestRate,
    setInterestRate,
    loanAmount,
    setLoanAmount,
    loanTerm,
    setLoanTerm,
    monthlyPayment,
    principalPaid,
    interestPaid,
    totalPaid,
  };
};

export default useCalculator;
