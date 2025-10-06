import React, { useState } from "react";
import Footer from "../../components/Footer";

// --- SVG Icon Components ---

const UserIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
  </svg>
);

const LocationIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
);

const ProjectIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
    <path d="M16 21V5a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16"></path>
    <line x1="6" y1="11" x2="10" y2="11" />
  </svg>
);

const PlusIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="12" y1="5" x2="12" y2="19"></line>
    <line x1="5" y1="12" x2="19" y2="12"></line>
  </svg>
);

// --- FAQ Data and Component ---

const faqData = [
  {
    question: "How does slice work?",
    answer:
      "Slice works by integrating seamlessly with your existing data sources, providing real-time analytics and insights without complex setup processes.",
  },
  {
    question: "Is my data course?",
    answer:
      "Yes, your data is completely secure. We use end-to-end encryption and comply with all major data protection regulations to ensure your information is safe.",
  },
  {
    question: "Does slice work well large team?",
    answer:
      "Absolutely. Slice is designed for scalability and collaboration, offering features that allow large teams to work together efficiently on data analysis and reporting.",
  },
  {
    question: "How do create a new account?",
    answer:
      "You can create a new account by clicking the 'Try for free' button and following the simple on-screen instructions. It only takes a couple of minutes to get started.",
  },
];

const AccordionItem = ({ faq, onToggle, isActive }) => (
  <div className="py-6 border-b border-gray-700">
    <button
      onClick={onToggle}
      className="w-full flex justify-between items-center text-left"
    >
      <span className="text-lg text-white">{faq.question}</span>
      <span
        className={`transform transition-transform duration-300 ${
          isActive ? "rotate-45" : ""
        }`}
      >
        <PlusIcon />
      </span>
    </button>
    <div
      className={`overflow-hidden transition-all duration-300 ease-in-out ${
        isActive ? "max-h-40 mt-4" : "max-h-0"
      }`}
    >
      <p className="text-[#A9A9A9]">{faq.answer}</p>
    </div>
  </div>
);

// --- Main Page Component ---

const ServicesPage = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const handleFaqToggle = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const stats = [
    { icon: <UserIcon />, value: "90+", label: "Clients" },
    { icon: <LocationIcon />, value: "30+", label: "Countries" },
    { icon: <ProjectIcon />, value: "50+", label: "Projects" },
  ];

  return (
    <div className=" mt-10 h-full text-white font-sans">
      {/* Header Section */}
      <header className="text-center align-center px-auto  lg:max-w-4xl lg:mx-auto">
        <nav className="text-sm mb-4">
          <a href="#" className="text-[#A9A9A9] hover:text-white">
            Home
          </a>
          <span className="mx-2 text-[#A9A9A9]">&gt;</span>
          <span className="text-[#E6007A]">Services</span>
        </nav>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Lorem Ipsum is simply dummy text of the printing and.
        </h1>
        <p className="text-[#A9A9A9] text-lg">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </header>

      {/* Stats Section */}
      <section className="max-w-4xl mx-auto my-16 bg-[#1C1C3A] rounded-xl p-8">
        <div className="flex flex-col md:flex-row justify-around items-center text-center">
          {stats.map((stat, index) => (
            <React.Fragment key={index}>
              <div className="flex items-center space-x-4 my-4 md:my-0">
                <div className="bg-pink-500/20 text-[#E6007A] p-3 rounded-full">
                  {stat.icon}
                </div>
                <div>
                  <p className="text-3xl font-bold">{stat.value}</p>
                  <p className="text-[#A9A9A9]">{stat.label}</p>
                </div>
              </div>
              {index < stats.length - 1 && (
                <div className="hidden md:block h-16 w-px bg-gray-700"></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </section>
      <div className="container mx-5 lg:mx-auto px-6 py-16">
        {/* FAQ Section */}
        <section className="lg:ml-20 w-[90%] grid grid-cols-1 md:grid-cols-2 gap-16 items-start mt-24">
          <div className="md:pr-8">
            <h2 className="text-4xl font-bold mb-6">
              Frequently asked Questions
            </h2>
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-3 px-8 rounded-full mb-8 hover:opacity-90 transition-opacity">
              Try for free
            </button>
            <p className="text-[#A9A9A9] leading-relaxed">
              Nunc scelerisque tincidunt elit. Vestibulum non mi ipsum. Cras
              pretium suscipit tellus sit amet aliquet. Vestibulum maximus
              lacinia massa non porttitor.
            </p>
          </div>

          <div>
            {faqData.map((faq, index) => (
              <AccordionItem
                key={index}
                faq={faq}
                onToggle={() => handleFaqToggle(index)}
                isActive={openFaqIndex === index}
              />
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default ServicesPage;
