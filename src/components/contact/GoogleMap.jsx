import GoogleMapReact from "google-map-react";
import LocationPin from "./LocationPin";
function GoogleMap({ location }) {
	return (
		<div className="section">
  <div className="container">
    <div className="aximo-map-wrap">
      <div id="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2790.5731903818873!2d74.988034!3d12.870191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTLCsDUyJzEyLjciTiA3NMKwNTknMTYuOSJF!5e1!3m2!1sen!2sin!4v1729921739498!5m2!1sen!2sin"
          width="100%"
          height="590"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  </div>
</div>

	);
}

export default GoogleMap;
