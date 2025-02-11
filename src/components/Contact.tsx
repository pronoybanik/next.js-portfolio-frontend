import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactForm({ id }: { id: string }) {
  return (
    <div id={id} className="mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-center min-h-screen  bg-purple-50 px-4 md:px-8">
        {/* Form Section */}
        <div className="bg-white p-8 rounded-2xl shadow-md w-full md:w-1/2 max-w-lg">
          <h2 className="text-2xl font-bold text-purple-700 mb-4 text-center md:text-left">
            Let's work together!
          </h2>
          <p className="text-gray-600 mb-6 text-center md:text-left">
            I design and code beautifully simple things and I love what I do.
            Just simple like that!
          </p>
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                placeholder="First name"
                className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <input
                type="text"
                placeholder="Last name"
                className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input
                type="email"
                placeholder="Email address"
                className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <input
                type="tel"
                placeholder="Phone number"
                className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div className="mb-4">
              <select className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-500">
                <option value="">Select an option</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
              </select>
            </div>
            <div className="mb-6">
              <textarea
                placeholder="Message"
                rows="4"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-500 to-purple-700 text-white py-3 rounded-lg shadow-md hover:from-purple-600 hover:to-purple-800"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info Section */}
        <div className="flex-1 space-y-6 mt-8 md:mt-0 md:ml-8 px-4 md:px-0">
          <ContactInfo icon={Phone} title="Phone" value="+01 123 654 8096" />
          <ContactInfo
            icon={Mail}
            title="Email"
            value="gerolddesign@mail.com"
          />
          <ContactInfo
            icon={MapPin}
            title="Address"
            value="Warne Park Street Pine, FL 33157, New York"
          />
        </div>
      </div>
    </div>
  );
}

const ContactInfo = ({ icon: Icon, title, value }) => (
  <div className="flex items-center space-x-4">
    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-purple-900 text-white shadow-md">
      <Icon className="w-6 h-6" />
    </div>
    <div>
      <h4 className="text-gray-500 text-sm">{title}</h4>
      <p className="text-gray-800 font-medium">{value}</p>
    </div>
  </div>
);
