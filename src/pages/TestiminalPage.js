import React from 'react';
import { Award, Users, Target, CheckCircle } from 'lucide-react';
import Footer from '../components/Footer';

const testimonials = [
  {
    image: "/images/TestiminalProfile.png",
    name: "Siddarth Wasnik",
    text: "Prajakta Greenfinty project is good.it is situated very hart of city in nagpur.as per my son recommended this project is very fine & ashish sir is aware of project very well"
  },
  {
    image: "/images/TestiminalProfile.png",
    name: "Dr.Vivek Nagarle",
    text: "Ashish construction has build a very good project.all the team member are very good. Ashish londhe and his team done very good job.In compact space build a specious apartment.Thank you for giving us our DREAM HOME"
  },
  {
    image: "/images/TestiminalProfile.png",
    name: "Manoj Sharma",
    text: "An absolutely phenomenal project with amazing construction quality."
  },
  {
    image: "/images/TestiminalProfile.png",
    name: "Anjali Fule",
    text: "Prajakta greenfinity project its quality of construction is upto the mark. its fine to the best of my knowledge. its beautiful design and aminities in such limited space ,its fabulous."
  },
  {
    image: "/images/TestiminalProfile.png",
    name: "Dr.Ankita Randhir",
    text: "Very good and well contructed project.Happy with the interior and furniture of gym and party area.Satisfied with the builders and his staff regarding cooperation."
  },
  {
    image: "/images/TestiminalProfile.png",
    name: "Dr.Milind Suryawanshi",
    text: "It perfect project as per my opinion.Its customer friendly.I think Mr.ashish sir has passionate to make home."
  },
  {
    image: "/images/TestiminalProfile.png",
    name: "Dinesh Badoniya",
    text: "The construction of the scheme is very good, there is adequate lighting, full care has been taken of sunlight, the outer look and arrangement is very excellent."
  }
];

const TestimonialCard = ({ image, name, role, text }) => (
  <div
    className="bg-white shadow-lg rounded-xl p-6 max-w-md text-center border-t-4"
    style={{ borderTopColor: "#011321" }}
  >
    <div className="flex justify-center">
      <img
        src={image}
        alt={name}
        className="w-24 h-24 rounded-full border-4 border-white shadow-md"
      />
    </div>

    <h4 className="text-[#011321] font-bold mt-4">{name}</h4>
    <p className="text-gray-500 text-sm mb-4">{role}</p>

    <p className="text-gray-600 text-sm italic">“{text}”</p>

    <div className="flex justify-center mt-4 text-[#011321]">
      {Array(5).fill("⭐").map((star, i) => (
        <span key={i}>{star}</span>
      ))}
    </div>
  </div>
);

const TestimonialPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        className="relative pt-24 sm:pt-28 pb-16 sm:pb-20 text-white overflow-hidden"
        style={{
          backgroundImage: "url('/images/TestiminalImages.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "90vh",
        }}
      >
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 sm:top-20 right-10 sm:right-20 w-48 sm:w-96 h-48 sm:h-96 bg-white rounded-full blur-2xl"></div>
          <div className="absolute bottom-10 sm:bottom-20 left-10 sm:left-20 w-40 sm:w-64 h-40 sm:h-64 bg-white rounded-full blur-2xl"></div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-800 mb-12">
            What Our Clients Say
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {testimonials.map((t, index) => (
              <TestimonialCard key={index} {...t} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TestimonialPage;
