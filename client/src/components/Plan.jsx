import React from "react";
import { PricingTable } from "@clerk/clerk-react";

const Plan = () => {
  return (
    <div className="relative max-w-4xl mx-auto my-24 px-6 text-center">
      <div className="text-center">
        <h2 className="text-slate-800 text-[38px] sm:text-[44px] font-semibold leading-tight">
          Choose Your Plan
        </h2>

        <p className="text-gray-500 max-w-2xl mx-auto mt-4 text-lg leading-relaxed">
          Start for free and upgrade as you grow. Our flexible pricing plans are
          designed to fit your needs — whether you're an individual creator or a
          growing team. Enjoy full access to all features with no hidden costs
          or surprises.
        </p>
      </div>

      <div className="mt-14 max:sm:mx-8">
        <PricingTable />
      </div>
    </div>
  );
};

export default Plan;
