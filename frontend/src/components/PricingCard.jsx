import { Check } from "lucide-react";

const PricingCard = ({ title, price, features, popular = false }) => {
  return (
    <div className={`rounded-xl p-8 ${popular ? 'bg-blue-600 text-white ring-4 ring-blue-200' : 'bg-white shadow-lg'}`}>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <div className="mb-6">
        <span className="text-3xl font-bold">{price}</span>
        {price !== "Free" && <span className="text-sm">/month</span>}
      </div>
      <ul className="space-y-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center space-x-2">
            <Check className="h-5 w-5" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <button className={`w-full mt-8 py-3 rounded-lg font-medium ${
        popular 
          ? 'bg-white text-blue-600 hover:bg-blue-50' 
          : 'bg-blue-600 text-white hover:bg-blue-700'
      }`}>
        Get Started
      </button>
    </div>
  );
};

export default PricingCard