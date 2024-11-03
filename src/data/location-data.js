const data = [
  { location: "London", latitude: 51.5074, longitude: -0.1278 },
  { location: "Paris", latitude: 48.8566, longitude: 2.3522 },
  { location: "New York", latitude: 40.7128, longitude: -74.006 },
  { location: "Berlin", latitude: 52.52, longitude: 13.405 },
  { location: "Tokyo", latitude: 35.6895, longitude: 139.6917 },
  { location: "Sydney", latitude: -33.8688, longitude: 151.2093 },
  { location: "Cape Town", latitude: -33.9249, longitude: 18.4241 },
  { location: "Rio de Janeiro", latitude: -22.9068, longitude: -43.1729 },
  { location: "Buenos Aires", latitude: -34.6037, longitude: -58.3816 },
  { location: "Lima", latitude: -12.0464, longitude: -77.0428 },
  { location: "Mexico City", latitude: 19.4326, longitude: -99.1332 },
  { location: "Los Angeles", latitude: 34.0522, longitude: -118.2437 },
  { location: "Toronto", latitude: 43.6511, longitude: -79.347 },
  { location: "Moscow", latitude: 55.7558, longitude: 37.6176 },
  { location: "Mumbai", latitude: 19.076, longitude: 72.8777 },
  { location: "Cairo", latitude: 30.0444, longitude: 31.2357 },
  { location: "Cape Town", latitude: -33.9249, longitude: 18.4241 },
  { location: "Dubai", latitude: 25.276987, longitude: 55.296249 },
  { location: "Hong Kong", latitude: 22.3193, longitude: 114.1694 },
  { location: "Singapore", latitude: 1.3521, longitude: 103.8198 },
  { location: "Seoul", latitude: 37.5665, longitude: 126.978 },
  { location: "Shanghai", latitude: 31.2304, longitude: 121.4737 },
  { location: "Beijing", latitude: 39.9042, longitude: 116.4074 },
  { location: "Bangkok", latitude: 13.7563, longitude: 100.5018 },
  { location: "Kuala Lumpur", latitude: 3.139, longitude: 101.6869 },
  { location: "Jakarta", latitude: -6.2088, longitude: 106.8456 },
  { location: "Manila", latitude: 14.5995, longitude: 120.9842 },
  { location: "Sydney", latitude: -33.8688, longitude: 151.2093 },
  { location: "Auckland", latitude: -36.8485, longitude: 174.7633 },
  { location: "Wellington", latitude: -41.2865, longitude: 174.7762 },
  { location: "Christchurch", latitude: -43.5321, longitude: 172.6362 },
  { location: "Melbourne", latitude: -37.8136, longitude: 144.9631 },
  {
    location: "Dhaka",
    latitude: 23.777176,
    longitude: 90.399452,
  },
  {
    location: "Karachi",
    latitude: 24.8607,
    longitude: 67.0011,
  },
  {
    location: "Lahore",
    latitude: 31.5497,
    longitude: 74.3436,
  },
  {
    location: "Islamabad",
    latitude: 33.6844,
    longitude: 73.0479,
  },
  {
    location: "Lahore",
    latitude: 31.5497,
    longitude: 74.3436,
  },
  {
    location: "Mumbai",
    latitude: 19.076,
    longitude: 72.8777,
  },
  {
    location: "Delhi",
    latitude: 28.6139,
    longitude: 77.209,
  },
  {
    location: "Kolkata",
    latitude: 22.5726,
    longitude: 88.3639,
  },
  {
    location: "Chennai",
    latitude: 13.0827,
    longitude: 80.2707,
  },
  {
    location: "Bangalore",
    latitude: 12.9716,
    longitude: 77.5946,
  },
  {
    location: "Hyderabad",
    latitude: 17.385,
    longitude: 78.4867,
  },
  {
    location: "Pune",
    latitude: 18.5204,
    longitude: 73.8567,
  },
  {
    location: "Ahmedabad",
    latitude: 23.0225,
    longitude: 72.5714,
  },
  {
    location: "Kathmandu",
    latitude: 27.7172,
    longitude: 85.324,
  },
  {
    location: "Thimphu",
    latitude: 27.4728,
    longitude: 89.639,
  },
  {
    location: "Colombo",
    latitude: 6.9271,
    longitude: 79.8612,
  },
];

// Helper function to get all locations
function getLocation() {
  return data;
}

// Helper function to get location details by name
function getLocationByName(location) {
  if (!location) return null;
  const filtered = data.filter(
    (item) => item.location.toLowerCase() === location.toLowerCase()
  );
  return filtered.length > 0
    ? filtered[0]
    : { location: "", latitude: 0, longitude: 0 };
}

export { getLocation, getLocationByName };
