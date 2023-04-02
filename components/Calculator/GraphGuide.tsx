import React from "react";

const GraphGuide = () => {
    return (
        <div className="flex flex-row">
                <div className="flex flex-col mr-4">
                    <div className="flex flex-row items-center justify-between pb-2">
                        <strong>Total Payment</strong>
                        <div className="w-4 h-4 ml-2 bg-blue-500" />
                    </div>
                    <div className="flex flex-row items-center justify-between pb-2">
                        <strong>Total Interest Paid</strong>
                        <div className="w-4 h-4 ml-2 bg-red-500" />

                    </div>
                    <div className="flex flex-row items-center justify-between pb-2">
                        <strong>Total Amount Paid</strong>
                        <div className="w-4 h-4 ml-2 bg-green-500" />
                    </div>
                </div>
            </div>
    );
};

export default GraphGuide;