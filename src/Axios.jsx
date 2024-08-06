import React, { useEffect, useState } from "react";
import axios from "axios";

const Axios = () => {
  const [phones, setPhones] = useState([]);

  useEffect(() => {
    axios
      .get("https://openapi.programming-hero.com/api/phones?search=iphone")
      .then((response) => {
        console.log(response.data.data); // Logs the fetched data
        setPhones(response.data.data); // Updates the state with fetched data
      })
      .catch((error) => {
        console.error("Error fetching data: ", error); // Error handling
      });
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <div>
      {phones.map((phone) => (
        <div key={phone.slug}>
          <h2>{phone.phone_name}</h2>
          <p>{phone.brand}</p>
        </div>
      ))}
    </div>
  );
};

export default Axios;
