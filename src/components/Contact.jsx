import React from 'react';
// Note: You will need to install and import an icon library like 'react-icons' or 'heroicons'
// For this example, we'll assume you are using 'react-icons'.
// To use, install with: npm install react-icons
import { MdOutlineMailOutline, MdPhone, MdLocationOn } from 'react-icons/md';
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa6';

const Contact = () => {
  return (
    <div id="Contact" className="bg-black min-h-screen text-gray-300 p-8 font-['Inter']">
      <div className="max-w-7xl mx-auto py-16 flex flex-col lg:flex-row items-start gap-12">

        {/* Left Column: Contact Info & Socials */}
        <div className="lg:w-1/3 w-full space-y-12">
          
          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="uppercase text-sm font-semibold text-white tracking-wider mb-4">CONTACT INFO</h3>
            
            {/* Mail */}
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-gray-800 rounded-full">
                <MdOutlineMailOutline className="text-blue-500 w-5 h-5" />
              </div>
              <div>
                <span className="block text-blue-500 text-xs font-semibold">MAIL US</span>
                <a href="mailto:moosabaig06@gmail.com" className="block text-white">moosabaig06@yahoo.com</a>
              </div>
            </div>
            {/* Phone */}
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-gray-800 rounded-full">
                <MdPhone className="text-blue-500 w-5 h-5" />
              </div>
              <div>
                <span className="block text-blue-500 text-xs font-semibold">CONTACT US</span>
                <span className="block text-white">+91 90005-00178</span>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-gray-800 rounded-full">
                <MdLocationOn className="text-blue-500 w-5 h-5" />
              </div>
              <div>
                <span className="block text-blue-600 text-xs font-semibold">LOCATION</span>
                <address className="block text-white not-italic">
                  Bangalore<br />
                  Karnataka<br />
                  India
                </address>
              </div>
            </div>
          </div>
          
          {/* Social Info */}
          <div className="space-y-6">
            <h3 className="uppercase text-sm font-semibold text-gray-400 tracking-wider mb-4">SOCIAL INFO</h3>
            <div className="flex space-x-4">
              <a href="#" className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors">
                <FaTwitter className="w-5 h-5 text-gray-400 hover:text-white" />
              </a>
              <a href="#" className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors">
                <FaLinkedin className="w-5 h-5 text-gray-400 hover:text-white" />
              </a>
            </div>
          </div>

        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:w-2/3 w-full bg-[#1e1e1e] p-8 md:p-12 rounded-2xl shadow-lg">
          
          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-white font-['Montserrat']">
            Let's work <span className="text-blue-500">together.</span>
          </h2>
          
          {/* Form */}
          <form className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-6">
              {/* Name */}
              <div className="sm:w-1/2">
                <label htmlFor="name" className="sr-only">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  placeholder="Name *" 
                  required 
                  className="w-full bg-neutral-600 text-white px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              {/* Email */}
              <div className="sm:w-1/2">
                <label htmlFor="email" className="sr-only">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  placeholder="Email *" 
                  required 
                  className="w-full bg-neutral-600 text-white px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            
            {/* Subject */}
            <div>
              <label htmlFor="subject" className="sr-only">Your Subject</label>
              <input 
                type="text" 
                id="subject" 
                placeholder="Your Subject *" 
                required 
                className="w-full bg-neutral-600 text-white px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="sr-only">Your Message</label>
              <textarea 
                id="message" 
                rows="6" 
                placeholder="Your Message *" 
                required 
                className="w-full bg-neutral-600 text-white px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            
            {/* Submit Button */}
            <button 
              type="submit" 
              className="w-full py-4 px-6 bg-zinc-600 text-white font-semibold rounded-xl hover:bg-gray-600 transition-colors duration-200"
            >
              Send Message
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Contact;
