import React from 'react';
import { Twitter, Facebook, Instagram } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 bg-white">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">
        About NoteHub
      </h1>
      <div className="space-y-6 mb-12">
        <p className="text-gray-700">
          NoteHub is a simple, efficient platform for storing and organizing your notes.
          We make it easy to capture your thoughts, ideas, and important information
          in one secure place.
        </p>

        <div className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            What We Offer
          </h2>
          <div className="space-y-2 text-gray-700">
            <p>✓ Easy note organization and storage</p>
            <p>✓ Secure cloud backup</p>
            <p>✓ Simple sharing options</p>
            <p>✓ Clean, distraction-free interface</p>
          </div>
        </div>
      </div>

      {/* Social Links */}
      <div>
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          Connect With Us
        </h2>
        <div className="flex space-x-4">
          <a href="#" className="text-gray-600 hover:text-blue-500">
            <Twitter className="w-5 h-5" />
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-600">
            <Facebook className="w-5 h-5" />
          </a>
          <a href="#" className="text-gray-600 hover:text-pink-600">
            <Instagram className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;