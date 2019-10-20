import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";

import numeral from "numeral";
import { makeStyles } from "@material-ui/core/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

import Rating from "../../components/Rating";

import "./styles.css";

const useStyles = makeStyles({
  root: {
    "& span": {},
    "& label": {
      color: "#f1c40f"
    }
  }
});

export default function Dashboard() {
  const classes = useStyles();
  const [spots, setSpots] = useState([]);

  // Carrega informações ao iniciar a página
  useEffect(() => {
    async function loaderSpots() {
      const user_id = localStorage.getItem("@meetup/user");
      const response = await api.get("/dashboard", {
        headers: { user_id }
      });
      setSpots(response.data);
    }
    loaderSpots();
  }, []);

  return (
    <>
      <ul className="spot-list">
        {spots.map(spot => (
          <li key={spot._id}>
            <header style={{ backgroundImage: `url(${spot.thumbnail_url})` }} />
            <strong>{spot.company}</strong>
            <span className="span">
              {spot.price ? `€ ${numeral(spot.price).format('(0,0.00)')}/day` : "Free"}
            </span>
            <h4>Description</h4>
            <small>{spot.description}</small>
            {spot.address && (
              <div className="spot-address">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
                <span className="span-address">{spot.address}</span>
              </div>
            )}
            {/* <Rating className={classes.root} value={4.6} readOnly={true} /> */}
          </li>
        ))}
      </ul>
      <Link to="/new">
        <button className="btn">Register new Spot</button>
      </Link>
    </>
  );
}
