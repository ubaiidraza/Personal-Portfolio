import React, { useState } from 'react';
import { db } from '../config/firebase/firebaseconfig'; 
import { collection, addDoc } from 'firebase/firestore';

// skill work
const skills = [
  { name: 'HTML - 5', level: '80%' },
  { name: 'CSS - 3', level: '75%' },
  { name: 'Bootstrap', level: '60%' },
  { name: 'JavaScript', level: '50%' },
  { name: 'React Js', level: '65%' },
  { name: 'Tailwind css', level: '60%' },
];

// SkillBar Component
const SkillBar = ({ skill }) => (
  <div className="mb-4">
    <div className="flex justify-between text-white mb-1">
      <span>{skill.name}</span>
      <span>{skill.level}</span>
    </div>
    <div className="w-full bg-gray-800 rounded-full h-3">
      <div
        className="bg-orange-500 h-3 rounded-full"
        style={{ width: skill.level }}
      ></div>
    </div>
  </div>
);

// WorkItem Component
const WorkItem = ({ image, sourceLink, demoLink }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="relative group"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img src={image} alt="Work item" className="w-full h-full object-cover rounded-lg" />

      {/* Hover overlay with buttons */}
      <div
        className={`absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-75 transition-opacity ${
          hover ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <a
          href={sourceLink}
          className="mb-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          target="_blank"
          rel="noopener noreferrer"
        >
          Source Code
        </a>
        <a
          href={demoLink}
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
          target="_blank"
          rel="noopener noreferrer"
        >
          Live Demo
        </a>
      </div>
    </div>
  );
};

// Home Component
const Home = () => {
  const workItems = [
    {
      image: '/img/buysell.png',
      sourceLink: 'https://github.com/ubaiidraza/Buy--sell-corner',
      demoLink: 'https://buy-sell-corner-caea9.web.app/',
      
    },
    {
      image: '/img/blog.png',
      sourceLink: 'https://github.com/ubaiidraza/React-Blogging-App',
      demoLink: 'https://react-blogging-app-omega.vercel.app/',
    },
  ];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handling form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Add form data to the "contacts" collection in Firestore
      const docRef = await addDoc(collection(db, 'contacts'), {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
        timestamp: new Date(),
      });
      
      console.log('Document written with ID: ', docRef.id);
      alert('Message sent successfully!');
    } catch (error) {
      console.error('Error adding document: ', error);
      alert('Error sending message. Please try again.');
    }

    setIsSubmitting(false);
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' }); // Reset form
  };

  return (
    <div className="bg-purple-900 min-h-screen">
      
      {/* Home Section */}
      <section id="home" className="py-20 w-full">
        <div className="flex flex-col md:flex-row items-center justify-between max-w-5xl mx-auto">
          <div className="text-white px-6 md:px-12 lg:px-20 max-w-xl text-left">
            <h3 className="text-yellow-400 text-lg font-semibold">Hi, It's me</h3>
            <h1 className="text-4xl md:text-5xl font-extrabold mt-2">Ubaid Raza</h1>
            <h2 className="text-orange-400 text-2xl md:text-3xl font-semibold mt-4">And I'm a Frontend Developer</h2>
            <p className="text-gray-300 mt-4">
            I am a passionate frontend developer with expertise in web development and user experience design. My goal is to create modern, responsive websites and applications that provide a seamless and intuitive experience for users. I specialize in React, JavaScript, and Tailwind CSS, utilizing these technologies to deliver unique, user-friendly projects.
            </p>
            <div className="flex justify-start space-x-4 mt-6">
              <a href="#facebook" className="text-white hover:text-orange-500 text-xl">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#linkedin" className="text-white hover:text-orange-500 text-xl">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#twitter" className="text-white hover:text-orange-500 text-xl">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#instagram" className="text-white hover:text-orange-500 text-xl">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
            <a href="/img/ubaid.pdf" download="Ubaid_Raza_CV">
              <button className="mt-6 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded-full transition duration-300">
                Download CV
              </button>
            </a>
          </div>
          <div className="mt-10 md:mt-0">
            <img src="/img/Untitled design.png" alt="Your Image" className="w-80 h-80 object-cover rounded-lg shadow-lg" />
          </div>
        </div>
      </section>
    
      {/* About Me Section */}
      <section id="about" className="bg-violet-950 py-20">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="w-1/3">
            <img src="/img/ubaid.jpg" alt="Developer Image" className="rounded-lg shadow-lg w-full" />
          </div>
          <div className="w-2/3 pl-10">
            <h2 className="text-4xl font-bold text-gray-50 mb-4">
              About <span className="text-orange-400">Me</span>
            </h2>
            <h3 className="text-2xl font-semibold text-gray-50 mb-4">Frontend Developer </h3>
            <p className="text-gray-300 mb-4">
            "I am Ubaid Raza, a frontend developer with a deep passion for creating dynamic user interfaces and engaging web experiences. With a blend of creativity and technical skills, I specialize in developing visually appealing websites and applications that are both user-friendly and functional."
            </p>
            <p className="text-gray-300 mb-6">
            My experience spans frontend technologies such as HTML, CSS, JavaScript, React, and Tailwind CSS, and I combine these with my graphic design skills to craft pixel-perfect designs. I believe that good design goes beyond aesthetics; it should offer seamless functionality and a great user experience.
            </p>
            <button className="px-6 py-2 bg-gray-100 text-violet-950 font-bold rounded-full hover:bg-gray-200 transition">
              Read More...
            </button>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="bg-purple-900 py-20">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-50">My Work</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8 max-w-6xl mx-auto">
            {workItems.map((item, index) => (
              <WorkItem
                key={index}
                image={item.image}
                sourceLink={item.sourceLink}
                demoLink={item.demoLink}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="bg-purple-800 py-20">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-50">My <span className="text-orange-400">Skills</span></h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <SkillBar key={index} skill={skill} />
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-violet-900 py-20">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-50">Contact <span className="text-orange-400">Me</span></h2>
        </div>
        <div className="max-w-4xl mx-auto">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Your Name"
              required
              className="py-3 px-4 rounded-lg bg-purple-700 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Your Email"
              required
              className="py-3 px-4 rounded-lg bg-purple-700 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="Your Phone Number"
              required
              className="py-3 px-4 rounded-lg bg-purple-700 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              placeholder="Subject"
              required
              className="py-3 px-4 rounded-lg bg-purple-700 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Your Message"
              required
              className="col-span-2 py-3 px-4 h-32 rounded-lg bg-purple-700 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
            ></textarea>
            <button
              type="submit"
              className="col-span-2 py-3 px-6 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 transition"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
          <div className="text-center mt-10 text-gray-300">
            <p>Call Us: <span className="text-orange-500">+923172046095</span></p>
            <p>Email: <span className="text-orange-500">ubairaza200@gmail.com</span></p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
