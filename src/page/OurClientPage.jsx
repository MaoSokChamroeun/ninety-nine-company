import React, { useState } from 'react'
import Layout from '../layout/Layout'
import clients from '../data/clients'
import '../App.css'
const OurClientPage = () => {
  const [selectedClient, setSelectedClient] = useState(null)

  return (
    <Layout>
      <div className="max-w-7xl mx-auto mt-30 px-4">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl lg:text-[120px] font-extrabold" style={{fontSize : "120px" , fontWeight : 'bolder'}} data-aos="fade-up"
            data-aos-duration="300"
            data-aos-delay="300"
            data-aos-easing="ease-in-out">
            Our <span className="text-pink-500" style={{fontWeight : "bolder"}} data-aos="fade-up"
            data-aos-duration="300"
            data-aos-delay="300"
            data-aos-easing="ease-in-out">Client</span>
          </h1>
          <p className="text-sm md:text-2xl font-bold mt-4" data-aos="fade-up"
            data-aos-duration="350"
            data-aos-delay="350"
            data-aos-easing="ease-in-out">
            Take a Look at our clients
          </p>
        </div>

        <div className="max-w-7xl mx-auto mt-14">
          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              md:grid-cols-2
              lg:grid-cols-3
              xl:grid-cols-4
              gap-8
              justify-items-center
            "
            data-aos="fade-up"
            data-aos-duration="300"
          >
            {clients.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedClient(item)}
                className="
                  flex items-center justify-center
                  shadow-lg
                  w-[300px] h-[200px]
                  rounded-xl
                  cursor-pointer
                  bg-white
                  hover:shadow-xl
                  hover:scale-[1.03]
                  transition
                "
                data-aos="fade-up"
                data-aos-duration="800"
              >
                <img
                  src={item.image}
                  alt={item.name || 'Client logo'}
                  className="
                    object-contain
                    w-[150px] h-[150px]
                    rounded-full
                  "
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* MODAL */}
      {selectedClient && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4"
          onClick={() => setSelectedClient(null)}
        >
          <div
            className="bg-white
                      max-w-xl
                      w-full
                      max-h-[90vh]
                      overflow-y-auto
                      rounded-2xl
                      p-6
                      relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-black text-xl bg-scroll"
              onClick={() => setSelectedClient(null)}
            >
              ✕
            </button>

            <div className="flex flex-col items-center">
              <img
                src={selectedClient.image}
                alt={selectedClient.name}
                className="w-24 h-24
                          sm:w-32 sm:h-32
                          object-contain
                          mb-4
                          rounded-full"
              />

              <h2 className="text-2xl font-bold text-black text-center">
                {selectedClient.name}
              </h2>

              <p className="mt-3
                          text-black
                          max-h-32
                          sm:max-h-40
                          overflow-y-auto
                          text-center
                          px-2 scrollbar-thin scrollbar-thumb-gray-400">
                {selectedClient.description || 'Client description goes here.'}
              </p>
            </div>
          </div>
        </div>
      )}
    </Layout>
  )
}

export default OurClientPage
