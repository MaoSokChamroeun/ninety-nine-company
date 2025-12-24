import React from 'react'
import poster from '../assets/poster/cover3.jpg'
import Layout from '../layout/Layout'

const Contact = () => {
  return (
    <Layout>
      <div className="container-fluid mt-30 px-4">
        <div className="max-w-7xl mx-auto">
          <p className="text-center font-semibold mb-6"
            data-aos="fade-up"
            data-aos-duration="300"
            data-aos-delay="300"
            data-aos-easing="ease-in-out"
          >Contact Us</p>

          {/* Responsive grid */}
          <div className="mt-10 grid md:grid-cols-1 lg:grid-cols-2 sm:grid-cols-1 gap-6">
            {/* Image */}
            <div className="w-full" data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="500"
            data-aos-easing="ease-in-out">
              <img
                src={poster}
                alt="Contact Poster"
                className="
                w-full h-full object-cover rounded-lg md:w-[800px] mx-auto lg:w-[600px] lg:h-[600px]"
              />
            </div>

            {/* Form */}
            <div className="w-full" data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="500"
            data-aos-easing="ease-in-out">
              <h1 className="text-xl font-semibold mb-2">Get in Touch</h1>
              <p className="mt-2 text-gray-700 mb-4">
                We'd love to hear from you! Whether you have a question, need support, or just want to say hello, drop us a message and we'll get back to you shortly.
              </p>

              <form className="space-y-4 mt-20" data-aos="fade-up"
            data-aos-duration="700"
            data-aos-delay="700"
            data-aos-easing="ease-in-out">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block mb-1 font-medium">Name</label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Your name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block mb-1 font-medium">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Your email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block mb-1 font-medium">Message</label>
                  <textarea
                    id="message"
                    rows="5"
                    placeholder="Write your message here..."
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                  ></textarea>
                </div>

                {/* Submit button */}
                <div className="text-right">
                  <button
                    type="submit"
                    className="px-6  py-2 bg-pink-600 roue text-white font-semibold hover:bg-pink-700 transition"
                  >
                    Contact
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
       <div className="mt-32">
            <h2 className="text-xl font-semibold mb-4 text-center" data-aos="fade-up"
            data-aos-duration="300"
            data-aos-delay="300"
            data-aos-easing="ease-in-out">Our Location</h2>
            <div className="w-full h-96 md:h-96 rounded-lg shadow-md overflow-hidden" 
            data-aos="fade-up"
            data-aos-duration="700"
            data-aos-delay="700"
            data-aos-easing="ease-in-out">
              <iframe
                title="Location Map"
                className="w-full h-full border-0"
                src="https://maps.google.com/maps?q=11.522890,104.803582&z=16&output=embed"
                allowFullScreen
              ></iframe>
            </div>
          </div>
    </Layout>
  )
}

export default Contact
