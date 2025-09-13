import React from "react";
import Footer from "../components/Footer";

const CsrActivity = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* CSR Activity Header */}
      <div className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              CSR{" "}
              <span className="bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent">
                Activity
              </span>
            </h1>
            <p className="text-base sm:text-xl text-gray-600 max-w-2xl sm:max-w-3xl mx-auto">
              Our commitment to social responsibility and community development.
            </p>
          </div>

          {/* CSR Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-red-100 overflow-hidden">
              <img
                src="/images/career 1.jpg"
                alt="Education Initiative"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Education Initiative
                </h3>
                <p className="text-gray-600">
                  Building schools and providing educational resources in rural
                  areas.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-red-100 overflow-hidden">
              <img
                src="/images/project.jpg"
                alt="Healthcare Support"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Healthcare Support
                </h3>
                <p className="text-gray-600">
                  Supporting healthcare infrastructure and medical facilities.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-red-100 overflow-hidden">
              <img
                src="/images/projectdone.jpg"
                alt="Environmental Care"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Environmental Care
                </h3>
                <p className="text-gray-600">
                  Promoting sustainable construction and environmental
                  conservation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default CsrActivity;
