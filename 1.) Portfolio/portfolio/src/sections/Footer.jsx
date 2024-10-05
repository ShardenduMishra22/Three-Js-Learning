/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { Twitter, Instagram, Code2, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const year = new Date().getFullYear();
  const typedElement = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        'I am Shardendu Mishra',
        'I am a Programmer',
        'I am a Developer',
        'I am a CP Enthusiast'
      ],
      typeSpeed: 40,
      backSpeed: 20,
      loop: true
    };

    const typed = new Typed(typedElement.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <footer className="w-full bg-gradient-to-r from-gray-800 to-gray-900 rounded-3xl text-white py-8 px-6">
      <div className="grid grid-cols-1">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center">
          <div className="text-center mr-20 md:text-left">
            <h2 className="text-2xl font-bold mb-2">Shardendu Mishra</h2>
            <p ref={typedElement} className="text-green-400 text-lg font-semibold h-8"></p>
          </div>
          <div className="flex justify-center gap-6 whitespace-nowrap"> 
            <SocialLink to="/leetcode" icon={Code2}>LeetCode</SocialLink>
            <SocialLink to="/github" icon={Github}>GitHub</SocialLink>
            <SocialLink to="/twitter" icon={Twitter}>Twitter</SocialLink>
            <SocialLink to="/instagram" icon={Instagram}>Instagram</SocialLink>
          </div>
          <div className="text-center ml-20 md:text-right">
            <p>&copy; {year} All rights reserved.</p>
            <p className="mt-2 ml-15 text-gray-400">Designed with ❤️ by Shardendu Mishra</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

import PropTypes from 'prop-types';

const SocialLink = ({ to, icon: Icon, children }) => (
  <Link
    to={to}
    className="flex items-center px-3 py-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors duration-300"
  >
    <Icon size={18} className="mr-2" />
    <span className="hidden sm:inline">{children}</span>
  </Link>
);

SocialLink.propTypes = {
  to: PropTypes.string.isRequired,
  icon: PropTypes.elementType.isRequired,
  children: PropTypes.node.isRequired
};

export default Footer;
