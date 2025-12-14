// import React, { useState, useEffect } from "react";
// import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

// const GoogleMapComponent = () => {
//   const [currentPosition, setCurrentPosition] = useState(null);

//   // Get user location
//   useEffect(() => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           setCurrentPosition({
//             lat: position.coords.latitude,
//             lng: position.coords.longitude,
//           });
//         },
//         (error) => {
//           console.error(error);
//           // Default location if user denies permission (e.g., Phnom Penh)
//           setCurrentPosition({ lat: 11.5564, lng: 104.9282 });
//         }
//       );
//     } else {
//       alert("Geolocation is not supported by this browser.");
//       setCurrentPosition({ lat: 11.5564, lng: 104.9282 });
//     }
//   }, []);

//   const containerStyle = {
//     width: "100%",
//     height: "400px",
//   };

//   return (
//     <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
//       {currentPosition && (
//         <GoogleMap
//           mapContainerStyle={containerStyle}
//           center={currentPosition}
//           zoom={15}
//         >
//           <Marker position={currentPosition} />
//         </GoogleMap>
//       )}
//     </LoadScript>
//   );
// };

// export default GoogleMapComponent;
