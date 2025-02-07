const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="text-center p-6 rounded-xl bg-white shadow-lg">
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2 text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default FeatureCard