import { Link } from 'react-router-dom';
import { Code2, Github, Linkedin, Twitter, Mail, MapPin, Phone } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-black text-gray-300">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Code2 className="h-8 w-8 text-primary-500" />
              <span className="text-xl font-bold text-white">TechFlow</span>
            </div>
            <p className="text-sm text-gray-400">
              Transforming businesses through innovative software solutions and cutting-edge technology.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-gray-800 hover:bg-primary-500 transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-gray-800 hover:bg-primary-500 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-gray-800 hover:bg-primary-500 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-sm hover:text-primary-500 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-sm hover:text-primary-500 transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm hover:text-primary-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-sm hover:text-primary-500 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm hover:text-primary-500 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-sm">Web Development</li>
              <li className="text-sm">Mobile Development</li>
              <li className="text-sm">UI/UX Design</li>
              <li className="text-sm">Cloud Solutions</li>
              <li className="text-sm">AI & Machine Learning</li>
              <li className="text-sm">Software Consulting</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-sm">
                <MapPin className="h-5 w-5 text-primary-500 flex-shrink-0 mt-0.5" />
                <span>123 Tech Street, San Francisco, CA 94105</span>
              </li>
              <li className="flex items-center space-x-3 text-sm">
                <Phone className="h-5 w-5 text-primary-500 flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3 text-sm">
                <Mail className="h-5 w-5 text-primary-500 flex-shrink-0" />
                <span>hello@techflow.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-gray-400">
            &copy; {currentYear} TechFlow. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="hover:text-primary-500 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary-500 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-primary-500 transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
