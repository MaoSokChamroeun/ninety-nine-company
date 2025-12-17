// import React from 'react'
// import Layout from '../layout/Layout'

// const VideoEditing = () => {
//   return (
//         <Layout>
//         <div className="container-fluid mt-20 py-15">
//             <div className="max-w-3xl mx-auto">
//                 <h1 className='text-center' style={{fontWeight : 'bolder'}} data-aos="fade-up"
//                 data-aos-duration="300"
//                 data-aos-delay="300"
//                 data-aos-easing="ease-in-out"><span className='text-pink-500' style={{fontWeight : 'bolder'}}>Video</span> Editing</h1>
//                 <p className='text-center' data-aos="fade-up"
//             data-aos-duration="500"
//             data-aos-delay="500"
//             data-aos-easing="ease-in-out"> Professional graphic design services for logos, posters, banners, and branding artwork.</p>
//             </div>
//             <div className="max-w-7xl mt-10 mx-auto ">
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-6">
//                 <div className="relative w-[350px] h-[600px] mx-auto" data-aos="fade-up"
//                 data-aos-duration="500"
//                 data-aos-delay="500"
//                 data-aos-easing="ease-in-out">
//                 <iframe
//                     className="absolute top-0 left-0 w-full h-full rounded-lg"
//                     src="https://www.youtube-nocookie.com/embed/43qadMOeSAY"
//                     title="YouTube video"
//                     frameBorder="0"
//                     allow="encrypted-media; picture-in-picture"
//                     allowFullScreen
//                 ></iframe>
//                 </div>

//                 <div className="relative w-[350px] h-[600px] mx-auto" data-aos="fade-up"
//                 data-aos-duration="700"
//                 data-aos-delay="700"
//                 data-aos-easing="ease-in-out">
//                     <iframe
//                         className="absolute top-0 left-0 w-full h-full rounded-lg"
//                         src="https://www.youtube-nocookie.com/embed/AghyCNo0veM"
//                         title="YouTube video"
//                          frameBorder="0"
//                         allow="encrypted-media; picture-in-picture"
//                         allowFullScreen
//                     ></iframe>
//                     </div>
//                 <div className="relative w-[350px] h-[600px] mx-auto" data-aos="fade-up"
//                 data-aos-duration="900"
//                 data-aos-delay="900"
//                 data-aos-easing="ease-in-out">
//                 <iframe
//                     className="absolute top-0 left-0 w-full h-full rounded-lg"
//                     src="https://www.youtube-nocookie.com/embed/QVUSv56Rpbo"
//                     title="YouTube video"
//                     frameBorder="0"
//                     allow="encrypted-media; picture-in-picture"
//                     allowFullScreen
//                 ></iframe>
//                 </div>

//                 <div className="relative w-[350px] h-[600px] mx-auto" 
//                 data-aos="fade-up"
//                 data-aos-duration="500"
//                 data-aos-delay="500"
//                 data-aos-easing="ease-in-out">
//                 <iframe
//                     className="absolute top-0 left-0 w-full h-full rounded-lg"
//                     src="https://www.youtube-nocookie.com/embed/78P2b5Cth6w"
//                     title="YouTube video"
//                     frameBorder="0"
//                     allow="encrypted-media; picture-in-picture"
//                     allowFullScreen
//                 ></iframe>
//                 </div>

//                 <div className="relative w-[350px] h-[600px] mx-auto" 
//                 data-aos="fade-up"
//                 data-aos-duration="700"
//                 data-aos-delay="700"
//                 data-aos-easing="ease-in-out">
//                 <iframe
//                     className="absolute top-0 left-0 w-full h-full rounded-lg"
//                     src="https://www.youtube-nocookie.com/embed/GDBKNiAb9Rk"
//                     title="YouTube video"
//                     frameBorder="0"
//                     allow="encrypted-media; picture-in-picture"
//                     allowFullScreen
//                 ></iframe>
//                 </div>


//                 <div className="relative w-[350px] h-[600px] mx-auto" 
//                 data-aos="fade-up"
//                 data-aos-duration="900"
//                 data-aos-delay="900"
//                 data-aos-easing="ease-in-out">
//                 <iframe
//                     className="absolute top-0 left-0 w-full h-full rounded-lg"
//                     src="https://www.youtube-nocookie.com/embed/ilQ2O1-W9TY"
//                     title="YouTube video"
//                     frameBorder="0"
//                     allow="encrypted-media; picture-in-picture"
//                     allowFullScreen
//                 ></iframe>
//                 </div>

//                 <div className="relative w-[350px] h-[600px] mx-auto" 
//                 data-aos="fade-up"
//                 data-aos-duration="500"
//                 data-aos-delay="500"
//                 data-aos-easing="ease-in-out">
//                 <iframe
//                     className="absolute top-0 left-0 w-full h-full rounded-lg"
//                     src="https://www.youtube-nocookie.com/embed/px3_Ei_I9Gg"
//                     title="YouTube video"
//                     frameBorder="0"
//                     allow="encrypted-media; picture-in-picture"
//                     allowFullScreen
//                 ></iframe>
//                 </div>

//                 <div className="relative w-[350px] h-[600px] mx-auto"
//                 data-aos="fade-up"
//                 data-aos-duration="700"
//                 data-aos-delay="700"
//                 data-aos-easing="ease-in-out">
//                 <iframe
//                     className="absolute top-0 left-0 w-full h-full rounded-lg"
//                     src="https://www.youtube-nocookie.com/embed/vZBStMN6_uQ"
//                     title="YouTube video"
//                     frameBorder="0"
//                     allow="encrypted-media; picture-in-picture"
//                     allowFullScreen
//                 ></iframe>
//                 </div>



//                 </div>
//             </div>
//         </div>
//     </Layout>
//   )
// }

// export default VideoEditing
import React from "react";
import Layout from "../layout/Layout";
import videos from "../data/videos";

const VideoEditing = () => {
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
            <span className="text-pink-500">Video</span> Editing
          </h1>

          <p
            className="text-center"
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="500"
          >
            Professional graphic design services for logos, posters, banners,
            and branding artwork.
          </p>
        </div>

        <div className="max-w-7xl mt-10 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video, index) => (
              <div
                key={index}
                className="relative w-[350px] h-[600px] mx-auto"
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-delay={video.delay}
              >
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-lg"
                  src={`https://www.youtube-nocookie.com/embed/${video.id}`}
                  title="YouTube video"
                  frameBorder="0"
                  allow="encrypted-media; picture-in-picture"
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
