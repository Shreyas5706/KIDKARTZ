import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import yourPhoto from '../assets/Shreyas.jpg'; // Temporary - will change later
import friendPhoto from '../assets/Shreyas.jpg'; // Temporary - same photo for now

const About = () => {
  const teamMembers = [
    {
      photo: yourPhoto,
      name: "Shreyas Solanki",
      role: "Co-Founder & Developer",
      description: "Passionate about creating safe, fun products for kids. Loves coding and child psychology.",
      socialLinks: [
        { name: "GitHub", url: "https://github.com/Shreyas5706", icon: <FaGithub /> },
        { name: "LinkedIn", url: "https://www.linkedin.com/in/shreyas-solanki-1b6458285/", icon: <FaLinkedin /> }
      ],
      reverse: false
    },
    {
      photo: friendPhoto,
      name: "Akshat name",
      role: "Co-Founder & Designer",
      description: "Design wizard who ensures every product is visually appealing and kid-friendly.",
      socialLinks: [
        { name: "GitHub", url: "https://github.com/Shreyas5706", icon: <FaGithub /> },
        { name: "LinkedIn", url: "https://www.linkedin.com/in/shreyas-solanki-1b6458285/", icon: <FaLinkedin /> }
      ],
      reverse: true
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 font-sans">
      {/* Header */}
      <h1 className="text-4xl font-bold text-center text-purple-600 mb-8">
        About <span className="text-orange-400">KidKartz</span>
      </h1>

      {/* Section 1: Introduction */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Who We Are</h2>
        <p className="text-gray-600 mb-4">
          Welcome to <span className="font-bold text-purple-600">KidKartz</span>, your one-stop destination for 
          high-quality, fun, and safe products for kids! We are passionate about bringing joy to children 
          and convenience to parents by offering a carefully curated selection of toys, clothing, accessories, 
          and more.
        </p>
        <p className="text-gray-600">
          At KidKartz, we believe childhood should be filled with creativity, learning, and endless fun—and 
          we're here to make that happen with products that are as delightful as they are dependable.
        </p>
      </section>

      {/* Section 2: Mission */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
        <p className="text-gray-600 mb-4">
          We're on a mission to redefine kids' shopping by focusing on three core pillars:
        </p>
        <ul className="list-disc pl-6 text-gray-600 space-y-2">
          <li>
            <span className="font-semibold">Safety & Quality:</span> Every product is rigorously tested to meet 
            international safety standards, ensuring peace of mind for parents.
          </li>
          <li>
            <span className="font-semibold">Affordability:</span> Premium doesn't have to mean pricey. We work 
            directly with manufacturers to keep costs low without compromising quality.
          </li>
          <li>
            <span className="font-semibold">Joyful Learning:</span> From STEM toys to eco-friendly art supplies, 
            we prioritize products that inspire creativity and growth.
          </li>
        </ul>
      </section>

      {/* Section 3: Why Choose Us */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Why Choose KidKartz?</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-pink-50 p-6 rounded-lg hover:shadow-md transition">
            <h3 className="font-bold text-lg text-purple-600 mb-2">Kid-Approved Fun</h3>
            <p className="text-gray-600">
              Our products are tested by real kids (and their parents!) to ensure they're engaging, durable, 
              and worth every penny.
            </p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg hover:shadow-md transition">
            <h3 className="font-bold text-lg text-blue-600 mb-2">Eco-Conscious Choices</h3>
            <p className="text-gray-600">
              We offer sustainable options—from organic cotton clothing to biodegradable toys—because we care 
              about the planet your children will inherit.
            </p>
          </div>
          <div className="bg-green-50 p-6 rounded-lg hover:shadow-md transition">
            <h3 className="font-bold text-lg text-green-600 mb-2">Parent-Trusted</h3>
            <p className="text-gray-600">
              Every item in our collection is handpicked by our team of parents who understand what matters most.
            </p>
          </div>
          <div className="bg-yellow-50 p-6 rounded-lg hover:shadow-md transition">
            <h3 className="font-bold text-lg text-yellow-600 mb-2">Hassle-Free Experience</h3>
            <p className="text-gray-600">
              Easy returns, fast shipping, and friendly customer service—we make shopping stress-free.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-center text-purple-600 mb-12">Meet the Team</h2>
        
        <div className="space-y-16">
          {teamMembers.map((member, index) => (
            <div key={index} className={`flex flex-col md:flex-row ${member.reverse ? 'md:flex-row-reverse' : ''} gap-8 items-center`}>
              {/* Photo */}
              <div className="md:w-1/3 flex justify-center">
                <img 
                  src={member.photo} 
                  alt={member.name}
                  className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-purple-100 shadow-lg hover:scale-105 transition-transform"
                />
              </div>

              {/* Content */}
              <div className="md:w-2/3 bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-purple-600">{member.name}</h3>
                <p className="text-orange-500 mb-4">{member.role}</p>
                <p className="text-gray-600 mb-6">{member.description}</p>
                
                {/* Social Links */}
                <div className="flex space-x-4">
                  {member.socialLinks.map((link, i) => (
                    <a 
                      key={i}
                      href={link.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-purple-600 transition text-xl"
                      aria-label={`${member.name}'s ${link.name}`}
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="text-center bg-gradient-to-r from-purple-50 to-orange-50 p-8 rounded-lg hover:shadow-md transition">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Join the KidKartz Family!</h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Have questions or feedback? We'd love to hear from you! Reach out via our{' '}
          <Link to="/contact" className="text-purple-600 font-bold hover:underline">
            Contact Us
          </Link>{' '}
          page.
        </p>
        <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-6 rounded-full transition">
          <Link to="/contact">Get in Touch</Link>
        </button>
      </section>

      {/* Tech Stack Footnote */}
      <div className="mt-12 text-center text-sm text-gray-500">
        <p>Built with ❤️ using React, React Router, and Tailwind CSS.</p>
      </div>
    </div>
  );
};

export default About;