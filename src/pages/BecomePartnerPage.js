import React, { useState } from 'react';
import { Building2, Users, Award, CheckCircle, Handshake, TrendingUp, Shield, Star } from 'lucide-react';
import Footer from '../components/Footer';

const BecomePartnerPage = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    contactPerson: "",
    email: "",
    phone: "",
    partnershipType: "",
    experience: "",
    location: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const partnershipTypes = [
    { title: "Contractor Partner", type: "Sub-contractor", location: "Nagpur & Surrounding", tags: ["Civil Work", "Execution"] },
    { title: "Material Supplier", type: "Vendor", location: "Pan India", tags: ["Quality Materials", "Timely Supply"] },
    { title: "Technology Partner", type: "Service Provider", location: "Remote", tags: ["Software", "Innovation"] },
    { title: "Financial Partner", type: "Investment", location: "Flexible", tags: ["Funding", "Growth"] },
  ];

  const validateEmail = (email) => {
    if (!email) return 'Email is required';
    const re = /^\S+@\S+\.\S+$/;
    return re.test(email) ? '' : 'Enter a valid email address';
  };

  const validatePhone = (phone) => {
    if (!phone) return '';
    const re = /^[0-9+\-()\s]{8,20}$/;
    return re.test(phone) ? '' : 'Enter a valid phone number';
  };

  const validateField = (name, value) => {
    switch (name) {
      case 'companyName':
        return value ? (value.trim().length >= 2 ? '' : 'Company name must be at least 2 characters') : 'Company name is required';
      case 'contactPerson':
        return value ? (value.trim().length >= 2 ? '' : 'Contact person name must be at least 2 characters') : 'Contact person is required';
      case 'email':
        return validateEmail(value);
      case 'partnershipType':
        return value ? '' : 'Please select a partnership type';
      case 'phone':
        return validatePhone(value);
      case 'location':
        return value ? (value.trim().length >= 2 ? '' : 'Location must be at least 2 characters') : 'Location is required';
      default:
        return '';
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (touched[name]) {
      const error = validateField(name, value);
      setErrors((prev) => ({ ...prev, [name]: error }));
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const error = validateField(name, formData[name]);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const validateForm = () => {
    const fields = ['companyName', 'contactPerson', 'email', 'partnershipType', 'phone', 'location'];
    const newErrors = {};
    fields.forEach((f) => {
      newErrors[f] = validateField(f, formData[f]);
    });
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    setErrors(newErrors);
    setTouched((prev) => ({ ...prev, companyName: true, contactPerson: true, email: true, partnershipType: true, phone: !!formData.phone, location: true }));
    const hasError = Object.values(newErrors).some((msg) => msg);
    if (hasError) return;
    setFormData({ companyName: "", contactPerson: "", email: "", phone: "", partnershipType: "", experience: "", location: "", message: "" });
    setErrors({});
    setTouched({});
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative flex items-center justify-center text-white overflow-hidden"
        style={{
          backgroundImage: "url('/images/Become-Patner1.jpg')",
          backgroundSize: "100% 100%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: '90vh',
        }}
      >
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 right-20 w-72 h-72 bg-white rounded-full blur-2xl"></div>
          <div className="absolute bottom-20 left-20 w-64 h-64 bg-white rounded-full blur-2xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            <span className="bg-gradient-to-r from-white to-red-200 bg-clip-text text-transparent">
              Become Our
            </span>
            <br />
            <span className="text-white">Trusted Partner</span>
          </h1>
          <p className="text-lg md:text-xl text-red-100 max-w-3xl mx-auto leading-relaxed">
            Join hands with Madhuprabha Construction and grow your business while contributing to our vision of building excellence.
          </p>
        </div>
      </section>

      {/* Application Form */}
      <section id="partner-form" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-stretch">

            {/* Left Form */}
            <div className="flex flex-col justify-center h-full">
              <h2 className="text-3xl sm:text-4xl md:text-5xl  font-bold text-gray-900 mb-6">
                Business Opportunity
              </h2>

              <p className="text-lg text-gray-600 mb-6">
                People interested in getting into joint ventures, real estate property dealings or property development and investment in our projects can contact us by filling this form below. Thank you.
              </p>
              <div className="relative rounded-2xl p-px bg-gradient-to-br from-red-500/30 via-red-300/20 to-transparent h-full">
                <div className="rounded-2xl bg-white p-6 shadow-lg border border-red-100 h-full">
                  <form onSubmit={handleSubmit} className="space-y-4 h-full flex flex-col justify-between">

                    {/* Company & Contact */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
                        <input
                          name="companyName"
                          value={formData.companyName}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          type="text"
                          className={`w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 ${touched.companyName && errors.companyName ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-red-500"
                            }`}
                          placeholder="Enter company name"
                        />
                        {touched.companyName && errors.companyName && <p className="mt-1 text-xs text-red-600">{errors.companyName}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Contact Person</label>
                        <input
                          name="contactPerson"
                          value={formData.contactPerson}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          type="text"
                          className={`w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 ${touched.contactPerson && errors.contactPerson ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-red-500"
                            }`}
                          placeholder="Enter contact person name"
                        />
                        {touched.contactPerson && errors.contactPerson && <p className="mt-1 text-xs text-red-600">{errors.contactPerson}</p>}
                      </div>
                    </div>

                    {/* Email & Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          type="email"
                          className={`w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 ${touched.email && errors.email ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-red-500"
                            }`}
                          placeholder="company@email.com"
                        />
                        {touched.email && errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                        <input
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          type="tel"
                          className={`w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 ${touched.phone && errors.phone ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-red-500"
                            }`}
                          placeholder="+91-XXXXXXXXXX"
                        />
                        {touched.phone && errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone}</p>}
                      </div>
                    </div>

                    {/* Partnership & Location */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Partnership Type</label>
                        <select
                          name="partnershipType"
                          value={formData.partnershipType}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className={`w-full rounded-lg border px-3 py-2 bg-white focus:outline-none focus:ring-2 ${touched.partnershipType && errors.partnershipType ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-red-500"
                            }`}
                        >
                          <option value="">Select partnership type</option>
                          {partnershipTypes.map((p, i) => (
                            <option key={i} value={p.title}>{p.title}</option>
                          ))}
                        </select>
                        {touched.partnershipType && errors.partnershipType && <p className="mt-1 text-xs text-red-600">{errors.partnershipType}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                        <input
                          name="location"
                          value={formData.location}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          type="text"
                          className={`w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 ${touched.location && errors.location ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-red-500"
                            }`}
                          placeholder="City, State"
                        />
                        {touched.location && errors.location && <p className="mt-1 text-xs text-red-600">{errors.location}</p>}
                      </div>
                    </div>

                    {/* Experience */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Experience (Years)</label>
                      <input
                        name="experience"
                        value={formData.experience}
                        onChange={handleChange}
                        type="number"
                        min="0"
                        className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                        placeholder="e.g., 5"
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Tell us about your business</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="4"
                        className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                        placeholder="Describe your company, capabilities, and why you want to partner with us"
                      ></textarea>
                    </div>

                    {/* Submit */}
                    <div className="flex items-center justify-between">
                      <p className="text-xs text-gray-500">By applying, you agree to our partnership terms and conditions.</p>
                      <button
                        type="submit"
                        className="inline-flex items-center justify-center rounded-lg bg-[#011321] px-6 py-2.5 text-white text-sm font-semibold shadow hover:bg-[#022840] transition-colors"
                      >
                        Submit Application
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="flex items-stretch h-full">
              <div className="relative w-full h-full">
                <div className="absolute -inset-6 bg-gradient-to-br from-red-100 to-transparent rounded-3xl -z-10" />
                <div className="h-full w-full rounded-3xl overflow-hidden shadow-xl border border-red-100">
                  <img
                    src="/images/vecteezy_business-people-view_12110410.jpg"
                    alt="Partnership with Madhuprabha Construction"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BecomePartnerPage;
