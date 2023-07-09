import React, { useEffect, useState } from "react";
import Papa from "papaparse";
import GoogleMapReact from "google-map-react";
import HoverInfo from "./HoverInfo";

const Marker = () => <img style={{
  position : "relative",
  zIndex: 1,
  width: '35px',
  height: '35px',
}} src='/Visuals/slice77@10x.png' alt='marker' />;

const DisplayPoints = () => {
  const [coordinates, setCoordinates] = useState([]);
  const [hoveredMarkers, setHoveredMarkers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/Points/countries.csv");
      const text = await response.text();

      // Parse the CSV data using Papa Parse
      const result = Papa.parse(text, { header: true });

      // Extract the necessary coordinates from the parsed data
      const parsedMarkers = result.data.map((row, index) => ({
        id: index,
        Lat: parseFloat(row.Lat),
        Lon: parseFloat(row.Lon),
      }));

      // Set the markers state with the parsed data
      setCoordinates(parsedMarkers.slice(0, 774));
    };

    fetchData();
  }, []);

  const handleMarkerHover = (markerId) => {
    setHoveredMarkers((prevMarkers) => {
      const updatedMarkers = [...prevMarkers];
      updatedMarkers[markerId] = true;
      return updatedMarkers;
    });
  };

  const handleMarkerLeave = (markerId) => {
    setHoveredMarkers((prevMarkers) => {
      const updatedMarkers = [...prevMarkers];
      updatedMarkers[markerId] = false;
      return updatedMarkers;
    });
  };

  const defaultProps = {
    center: {
      lat: 31.4427071,
      lng: 74.2716663,
    },
    zoom: 1,
  };

  const mapOptions = {
    styles: [
      {
        featureType: "water",
        elementType: "geometry",
        stylers: [{ color: "#042F38" }],
      },
      {
        featureType: "landscape",
        elementType: "geometry",
        stylers: [{ color: "#0B6E85" }],
      },
      {
        featureType: "road",
        elementType: "geometry",
        stylers: [{ color: "#0B6E85" }],
      },
      {
        featureType: "landscape",
        elementType: "labels",
        stylers: [{ visibility: "off" }],
      },
      {
        featureType: "water",
        elementType: "labels",
        stylers: [{ visibility: "off" }],
      },
      {
        featureType: "cou"
      },
      {
        featureType: "road",
        elementType: "labels",
        stylers: [{ visibility: "off" }],
      }
      // Add more styles for other map elements as needed
    ],
    gestureHandling: "greedy",
    disableDefaultUI: true,
  };

  return (
    <div style={{ height: "101vh", width: "80%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{key: "AIzaSyA9E6uWz77o_rcaq9v8hVtIiYRB7h2oE6U" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        options={mapOptions}
      >
         {coordinates?.map((coordinate) => (
          <div
            key={coordinate.id}
            lat={coordinate.Lat}
            lng={coordinate.Lon}
            onMouseEnter={() => handleMarkerHover(coordinate.id)}
            onMouseLeave={() => handleMarkerLeave(coordinate.id)}
          >
            <Marker />
            {hoveredMarkers[coordinate.id] && (
              <div style={{ position: "relative" }}>
                <HoverInfo />
              </div>
            )}
          </div>
        ))}
    
      </GoogleMapReact>
    </div>
  );
};

export default DisplayPoints;
