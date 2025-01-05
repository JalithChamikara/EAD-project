import React, { useEffect, useState } from "react";
import "./profile.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

const Profile = () => {
  const [fields, setFields] = useState({
    name: "",
    displayName: "",
    email: "",
    phone: "",
    dob: "",
    nationality: "",
    gender: "",
    address: "",
    passport: "Not provided",
  });

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if(user){
      setFields({
        name: user.username || "",
        displayName: user.displayName || "",
        email: user.email || "",
        phone: user.phone || "",
        dob: user.dob || "",
        nationality: user.nationality || "",
        gender: user.gender || "",
        address: user.address || "",
        passport: user.passport || "Not provided"

      })
    }
  },[]);

  const [editingField, setEditingField] = useState(null);
  const [tempValue, setTempValue] = useState("");

  const startEditing = (field) => {
    setEditingField(field);
    setTempValue(fields[field]);
  };

  const cancelEditing = () => {
    setEditingField(null);
    setTempValue("");
  };

  const saveEditing = () => {
    setFields({ ...fields, [editingField]: tempValue });
    setEditingField(null);
  };

  return (
    <div>
      <Navbar />
      <div className="profile-container">
        <h2>Personal details</h2>
        <p>Update your information and find out how it's used.</p>

        <div className="profile-row">
          <span className="field-label">Name</span>
          {editingField === "name" ? (
            <div className="edit-container">
              <input
                type="text"
                placeholder="First name"
                value={tempValue.split(" ")[0]}
                onChange={(e) =>
                  setTempValue(e.target.value + " " + tempValue.split(" ")[1])
                }
              />
              <input
                type="text"
                placeholder="Last name"
                value={tempValue.split(" ")[1]}
                onChange={(e) =>
                  setTempValue(tempValue.split(" ")[0] + " " + e.target.value)
                }
              />
              <button onClick={saveEditing} className="saveButton">Save</button>
              <button onClick={cancelEditing} className="cancelButton">Cancel</button>
            </div>
          ) : (
            <div>
              <span>{fields.name}</span>
              <button className="edit-button" onClick={() => startEditing("name")}>
                Edit
              </button>
            </div>
          )}
        </div>

        <div className="profile-row">
          <span className="field-label">Display name</span>
          {editingField === "displayName" ? (
            <div className="edit-container">
              <input
                type="text"
                value={tempValue}
                onChange={(e) => setTempValue(e.target.value)}
              />
              <button onClick={saveEditing} className="saveButton">Save</button>
              <button onClick={cancelEditing} className="cancelButton">Cancel</button>
            </div>
          ) : (
            <div>
              <span>{fields.displayName}</span>
              <button
                className="edit-button"
                onClick={() => startEditing("displayName")}
              >
                Edit
              </button>
            </div>
          )}
        </div>

        <div className="profile-row">
          <span className="field-label">Email address</span>
          {editingField === "email" ? (
            <div className="edit-container">
              <input
                type="email"
                value={tempValue}
                onChange={(e) => setTempValue(e.target.value)}
              />
              <button onClick={saveEditing} className="saveButton">Save</button>
              <button onClick={cancelEditing} className="cancelButton">Cancel</button>
            </div>
          ) : (
            <div>
              <span>{fields.email} <span className="verified">Verified</span></span>
              <button className="edit-button" onClick={() => startEditing("email")}>
                Edit
              </button>
            </div>
          )}
        </div>

        {["phone", "dob", "nationality", "gender", "address", "passport"].map(
          (field) => (
            <div className="profile-row" key={field}>
              <span className="field-label">
                {field.charAt(0).toUpperCase() + field.slice(1).replace(/_/g, " ")}
              </span>
              {editingField === field ? (
                <div className="edit-container">
                  <input
                    type="text"
                    value={tempValue}
                    onChange={(e) => setTempValue(e.target.value)}
                  />
                  <button onClick={saveEditing} className="saveButton">Save</button>
                  <button onClick={cancelEditing} className="cancelButton">Cancel</button>
                </div>
              ) : (
                <div>
                  <span>{fields[field]}</span>
                  <button className="edit-button" onClick={() => startEditing(field)}>
                    Edit
                  </button>
                </div>
              )}
            </div>
          )
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Profile;