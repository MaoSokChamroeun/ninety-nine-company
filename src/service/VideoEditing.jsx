import React, { useContext, useState } from "react";
import Layout from "../layout/Layout";
import videos from "../data/videos";
import branding from "../data/branding";
import { LanguageContext } from "../context/LanguageContext";
import sells from "../data/sell";

const VideoEditing = () => {
  const { text } = useContext(LanguageContext);

  const [activeTab, setActiveTab] = useState("all-video"); 

  return (
    <Layout>
      <div className="container-fluid mt-20 py-15">
        <div className="max-w-3xl mx-auto">
          <h1
            className="text-center font-extrabold"
            data-aos="fade-up"
            data-aos-duration="300"
            data-aos-delay="300"
          >
            <span className="text-pink-600">Video</span> Editing
          </h1>

          <p
            className="text-center p-2 nav-link"
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="500"
          >
            {text?.video_editing?.video_desc}
          </p>
        </div>

        {/* Tabs */}
        <div className="w-full flex justify-center items-center gap-6 mt-6">
          <button
            onClick={() => setActiveTab("all-video")}
            className={`text-[20px] nav-link  ${
              activeTab === "all-video"
                ? "bg-gray-800"
                : "text-gray-900"
            }`}
          >
            All Video
          </button>

          <button
            onClick={() => setActiveTab("branding")}
            className={`text-[20px] nav-link ${
              activeTab === "branding"
                ? "text-pink-600 font-bold border-b-2 border-pink-600"
                : "text-gray-900"
            }`}
          >
            Personal Branding
          </button>
          <button
            onClick={() => setActiveTab("sell")}
            className={`text-[20px] nav-link ${
              activeTab === "sell"
                ? "text-pink-600 font-bold border-b-2 border-pink-600"
                : "text-gray-900"
            }`}
          >
            Video Sell
          </button>
        </div>

        {/* Content */}
        <div className="max-w-7xl mt-10 mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* Sell Videos */}
            {activeTab === "all-video" &&
              videos.map((video, index) => (
                <div
                  key={index}
                  className="relative w-[350px] h-[600px] mx-auto"
                  data-aos="fade-up"
                  data-aos-duration="400"
                  data-aos-delay={video.delay}
                >
                  <iframe
                    className="absolute top-0 left-0 w-full h-full rounded-lg"
                    src={`https://www.youtube-nocookie.com/embed/${video.id}`}
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
              ))}

            {/* Branding Videos */}
            {activeTab === "branding" &&
              branding.map((video, index) => (
                <div
                  key={index}
                  className="relative w-[350px] h-[600px] mx-auto"
                >
                  <iframe
                    className="absolute top-0 left-0 w-full h-full rounded-lg"
                    src={`https://www.youtube-nocookie.com/embed/${video.id}`}
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
              ))}


               {activeTab === "sell" &&
              sells.map((video, index) => (
                <div
                  key={index}
                  className="relative w-[350px] h-[600px] mx-auto"
                >
                  <iframe
                    className="absolute top-0 left-0 w-full h-full rounded-lg"
                    src={`https://www.youtube-nocookie.com/embed/${video.id}`}
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
              ))}

          </div>
        </div>
      </div>
    </Layout>
  );
};

export default VideoEditing;