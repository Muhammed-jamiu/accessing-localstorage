import React from "react";
import { useState, useEffect } from "react";
function LocalStorage() {
  const [data, setData] = useState("");
  useEffect(() => {
    const storedData = localStorage.getItem("myData");
    if (storedData) {
      setData(storedData);
    }
  }, []);

  const handleChange = (e) => {
    setData(e.target.value);
  };
  const saveData = (e) => {
    localStorage.setItem("myData", data);
    alert("Data saved!");
    // if (e.target.value === "") {
    //   console.log("Sorry! something went wrong!");
    // } else {

    //   // e.target.value = "";
    // }
  };

  const checkData = () => {
    const storedData = localStorage.getItem("myData");

    if (storedData) {
      alert("Data exit in the LocalStorage");
    } else {
      alert("No Data found in local storage");
    }
  };
  const removeData = () => {
    const storedData = localStorage.removeItem("myData");

    if (storedData) {
      alert("Data Removed successfully");
    }
  };
  return (
    <div className="container">
      <h3>Local Storage Example</h3>
      <input
        value={data}
        type="text"
        placeholder=" Enter data here ..."
        onChange={handleChange}
      />

      <button className="save-btn" onClick={saveData}>
        Save Data
      </button>
      <button className="check-btn" onClick={checkData}>
        Check Data
      </button>

      <button className="remove-btn" onClick={removeData}>
        Remove Data
      </button>
    </div>
  );
}

export default LocalStorage;
