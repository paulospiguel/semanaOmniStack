import React, { useState, useMemo } from "react";
import api from "../../services/api";

import camera from "../../assets/camera.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEuroSign } from "@fortawesome/free-solid-svg-icons";
import numeral from "numeral";
import "./styles.css";

export default function New({ history }) {
  const [thumbnail, setThumbnail] = useState(null);
  const [company, setCompany] = useState("");
  const [price, setPrice] = useState("");
  const [techs, setTechs] = useState("");
  const [description, setDescription] = useState("");
  const [address, setAddress] = useState("");

  const preview = useMemo(() => {
    return thumbnail ? URL.createObjectURL(thumbnail) : null;
  }, [thumbnail]);

  async function handleSubmit(event) {
    event.preventDefault();
    const user_id = localStorage.getItem("@meetup/user");
    const data = new FormData();

    //Formulários utiliza "formData() »» append()"
    data.append("thumbnail", thumbnail);
    data.append("company", company);
    data.append("description", description);
    data.append("price", price);
    data.append("techs", techs);
    data.append("address", address);

    await api.post("/spots", data, {
      headers: { user_id }
    });

    history.push("/dashboard");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label
        id="thumbnail"
        style={{ backgroundImage: `url(${preview})` }}
        className={thumbnail ? "has-thumbnail" : ""}
      >
        <input
          id="thumbnail"
          type="file"
          onChange={event => setThumbnail(event.target.files[0])}
        />
        <img src={camera} alt="Select img" />
      </label>
      <label htmlFor="company">COMPANY *</label>
      <input
        id="company"
        type="text"
        value={company}
        onChange={event => setCompany(event.target.value)}
        placeholder="Your name company"
      />
      <label htmlFor="description">
        DESCRIPTION <span>(Describe how cool your company is)</span>
      </label>
      <textarea
        id="description"
        rows="5"
        cols="33"
        placeholder="How are your company?"
        value={description}
        onChange={event => setDescription(event.target.value)}
      ></textarea>
      <label htmlFor="techs">
        TECNOLOGIES * <span>(comma-separated technologies)</span>{" "}
      </label>
      <input
        id="techs"
        type="text"
        value={techs}
        onChange={event => setTechs(event.target.value)}
        placeholder="Offered technologies"
      />
       <label htmlFor="address">
        ADDRESS * <span>(Address full)</span>{" "}
      </label>
      <input
        id="address"
        type="text"
        value={address}
        onChange={event => setAddress(event.target.value)}
        placeholder="Address your company"
      />
      <label htmlFor="price">
        PRICE * <span>(If the field is empty, the price will be FREE)</span>
      </label>
      <div className="inputIcon">
        <div id="icon">
          <FontAwesomeIcon icon={faEuroSign}/>
        </div>
         <input
        id="price"
        type="text"
        value={price}
        onChange={event => setPrice(event.target.value)}
        onBlur={event => event.target.value = numeral(event.target.value).format('(0,0.00)')}
        placeholder="Insert price"
      />
      </div>
     
      <button className="btn" type="submit">
        Register
      </button>
    </form>
  );
}
