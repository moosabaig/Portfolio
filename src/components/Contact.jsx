import { MdOutlineMailOutline, MdLocationOn } from 'react-icons/md';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const EMAIL = 'moosabaig06@gmail.com';

const socials = [
  { label: 'GitHub', href: 'https://github.com/moosabaig', icon: FaGithub },
  { label: 'LinkedIn', href: 'https://in.linkedin.com/in/moosa-baig', icon: FaLinkedin },
];

const inputClass =
  'w-full bg-neutral-800 text-white px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = data.get('subject');
    const body = `${data.get('message')}\n\n— ${data.get('name')} (${data.get('email')})`;
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" className="bg-black min-h-screen text-gray-300 p-8">
      <div className="max-w-7xl mx-auto py-16 flex flex-col lg:flex-row items-start gap-12">

        {/* Left Column: Contact Info & Socials */}
        <div className="lg:w-1/3 w-full space-y-12">

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="uppercase text-sm font-semibold text-white tracking-wider mb-4">Contact Info</h3>

            {/* Mail */}
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-gray-800 rounded-full">
                <MdOutlineMailOutline className="text-blue-500 w-5 h-5" />
              </div>
              <div>
                <span className="block text-blue-500 text-xs font-semibold">EMAIL</span>
                <a href={`mailto:${EMAIL}`} className="block text-white hover:text-blue-400 transition-colors">
                  {EMAIL}
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-gray-800 rounded-full">
                <MdLocationOn className="text-blue-500 w-5 h-5" />
              </div>
              <div>
                <span className="block text-blue-500 text-xs font-semibold">LOCATION</span>
                <address className="block text-white not-italic">
                  Bangalore, Karnataka, India
                </address>
              </div>
            </div>
          </div>

          {/* Social Info */}
          <div className="space-y-6">
            <h3 className="uppercase text-sm font-semibold text-gray-400 tracking-wider mb-4">Social</h3>
            <div className="flex space-x-4">
              {socials.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-3 bg-gray-800 rounded-full text-gray-400 hover:text-white hover:bg-gray-700 transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:w-2/3 w-full bg-[#111] border border-white/5 p-8 md:p-12 rounded-2xl shadow-lg">

          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-white">
            Let's work <span className="text-blue-500">together.</span>
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="sm:w-1/2">
                <label htmlFor="name" className="sr-only">Name</label>
                <input type="text" id="name" name="name" placeholder="Name *" required className={inputClass} />
              </div>
              <div className="sm:w-1/2">
                <label htmlFor="email" className="sr-only">Email</label>
                <input type="email" id="email" name="email" placeholder="Email *" required className={inputClass} />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="sr-only">Subject</label>
              <input type="text" id="subject" name="subject" placeholder="Subject *" required className={inputClass} />
            </div>

            <div>
              <label htmlFor="message" className="sr-only">Message</label>
              <textarea id="message" name="message" rows="6" placeholder="Your Message *" required className={inputClass} />
            </div>

            <button
              type="submit"
              className="w-full py-4 px-6 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors duration-200"
            >
              Send Message
            </button>
            <p className="text-xs text-gray-500 text-center">Opens your email app with the message pre-filled.</p>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;
