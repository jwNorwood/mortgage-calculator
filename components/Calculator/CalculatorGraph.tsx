import GraphGuide from "./GraphGuide";

const CalculatorGraph = () => {
    return (
        <div>
            <div className="flex flex-col items-center">
                <div className="flex flex-row pb-2">
                    <div className="flex items-center justify-center w-6">
                        <strong className="-rotate-90 whitespace-nowrap">Loan Term Payment</strong>
                    </div>
                    <div className="flex flex-col items-center justify-between pb-2">
                        <div id="graph" />
                        <strong  >Loan Term Payment</strong>
                    </div>
                </div>
            </div>

            <GraphGuide />
        </div>
    );
};

export default CalculatorGraph;