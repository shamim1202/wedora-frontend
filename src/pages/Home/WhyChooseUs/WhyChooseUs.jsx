const WhyChooseUs = () => {
  const reasons = [
    {
      title: "Verified Decorators",
      desc: "Every decorator is approved and verified by our admin.",
      icon: "✅",
    },
    {
      title: "Secure Payments",
      desc: "All payments are safe and protected through our platform.",
      icon: "💳",
    },
    {
      title: "Transparent Pricing",
      desc: "No hidden fees. You know exactly what you are paying for.",
      icon: "💰",
    },
    {
      title: "Professional Support",
      desc: "Our team is always ready to help you plan your perfect wedding.",
      icon: "🎯",
    },
  ];

  return (
    <section className="bg-pink-50 py-16 md:py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-8">
          Why Choose Us
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {reasons.map((reason, i) => (
            <div
              key={i}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="text-4xl mb-4">{reason.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {reason.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
