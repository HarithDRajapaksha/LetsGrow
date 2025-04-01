import React, { useState } from 'react';
import "./startupProfile.css";

export default function StartupProfile() {
  const [profileImage, setProfileImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleImageUpload = () => {
    if (!imagePreview) return alert("Please select an image first!");
    alert("Image upload functionality is disabled.");
  };

  return (
    <div>
      <div id="startup-profile-content">
        {/* Top Area */}
        <div id="startup-profile-top-area">
          <div id="startup-profile-dashboard-button">
            <button>DASHBOARD</button>
          </div>
        </div>

        {/* Middle Area */}
        <div id="startup-profile-middle-area">
          <div id="startup-profile-photo">
            <img src={imagePreview || profileImage || "placeholder.png"} alt="Profile" />
            <input
              type="file"
              id="fileInput"
              onChange={handleImageChange}
              onClick={handleImageUpload}
              accept="image/*"
            />
          </div>
          <div id="startup-profile-details">
            <h1>John Doe</h1>
            <h2>Founder</h2>
            <h2>johndoe@example.com</h2>
            <h2>+123456789</h2>
            <button id="startup-edit-button">EDIT</button>
          </div>
        </div>

        {/* Bottom Area */}
        <div id="startup-profile-bottom-area">
          <div id="startup-gig-title">
            <h1>My Gigs</h1>
          </div>
          <div id="add-gig">
            <button id="add-new-gig">Add +</button>
          </div>
        </div>
      </div>
    </div>
  );
}