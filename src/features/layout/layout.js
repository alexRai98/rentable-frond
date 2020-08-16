import React, { Fragment } from "react";
import Navbar from "./navBar";
import Footer from "./footer";

function Layout({ children }) {
  const fetchPhoto = async (photo) => {
    const response = await fetch("http://localhost:3000/properties", {
      method: "POST",
      body: JSON.stringify({images: [photo], addres: "tu casa"}),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok){
        console.log("exito")
    }else{
        console.log("error")
    }
  };

  const submitPhoto =async (event) => {
    event.preventDefault();
    const photoInput = document.getElementById("images-property");
    console.log(photoInput.files[0]);
    await fetchPhoto(photoInput.files[0]);

  };
  return (
    <Fragment>
      <Navbar />
      {children}
      <form onSubmit={submitPhoto}>
        <input
          type="file"
          id="images-property"
          name="images"
          accept="image/png, image/jpeg"
        />
        <input className="submit-input" type="submit" value="Upload" />
      </form>

      <Footer />
    </Fragment>
  );
}

export default Layout;
