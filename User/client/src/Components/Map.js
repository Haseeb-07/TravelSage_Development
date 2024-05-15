import React, { useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';

const Map = () => {
  const [inputLocation, setInputLocation] = useState('');
  const [map, setMap] = useState(null);
  const [marker, setMarker] = useState(null);
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    mapboxgl.accessToken ='your token here';

    const initializeMap = () => {
      const newMap = new mapboxgl.Map({
        container: 'map-container',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [73.0479, 33.6844], // Rawalpindi's coordinates
        zoom: 10
      });

      newMap.on('load', () => {
        setMap(newMap);
        getUserLocation();
      });
    };

    if (!map) initializeMap();

    return () => map?.remove();
  }, [map]);

  const getUserLocation = () => {
    if (!navigator.geolocation) {
      console.error('Geolocation is not supported by your browser');
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserLocation([position.coords.longitude, position.coords.latitude]);
      },
      (error) => {
        console.error('Error getting user location:', error);
      }
    );
  };

  const handleNavigation = async () => {
    if (!inputLocation.trim()) return;
  
    try {
      const response = await fetch(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(inputLocation)}.json?bbox=72.7651,33.4475,73.2602,33.7894&access_token=${mapboxgl.accessToken}`
      );
      const data = await response.json();
  
      if (data.features.length === 0) {
        console.error('Location not found');
        return;
      }
  
      const [destinationLongitude, destinationLatitude] = data.features[0].center;
  
      if (marker) marker.remove();
      const newMarker = new mapboxgl.Marker().setLngLat([destinationLongitude, destinationLatitude]).addTo(map);
      setMarker(newMarker);
  
      map.flyTo({ center: [destinationLongitude, destinationLatitude], zoom: 14 });
  
      if (userLocation) {
        const directionsResponse = await fetch(
          `https://api.mapbox.com/directions/v5/mapbox/driving/${userLocation[0]},${userLocation[1]};${destinationLongitude},${destinationLatitude}?geometries=geojson&access_token=${mapboxgl.accessToken}`
        );
        const directionsData = await directionsResponse.json();
  
        const route = directionsData.routes[0];
        if (route) {
          if (map.getLayer('route')) {
            map.removeLayer('route');
            map.removeSource('route');
          }
  
          map.addLayer({
            id: 'route',
            type: 'line',
            source: {
              type: 'geojson',
              data: {
                type: 'Feature',
                properties: {},
                geometry: route.geometry
              }
            },
            layout: {
              'line-join': 'round',
              'line-cap': 'round'
            },
            paint: {
              'line-color': '#3887be',
              'line-width': 5,
              'line-opacity': 0.75
            }
          });
        }
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
        <input
          type="text"
          placeholder="Enter location"
          value={inputLocation}
          onChange={(e) => setInputLocation(e.target.value)}
        />
        <button onClick={handleNavigation}>Navigate</button>
      <div id="map-container" style={{ width: '100%', height: '400px' }} />
      <div>
      
      </div>
    </div>
  );
};

export default Map;
