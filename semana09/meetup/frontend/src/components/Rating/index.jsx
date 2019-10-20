import React from "react";
import Rating from "@material-ui/lab/Rating";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

export default function CustomizedRatings(props) {
  return (
    <div>
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Typography variant="subtitle1" color="primary" component="legend">
          Rating
        </Typography>
        <Rating
          name="customized-empty"
          value={props.value}
          precision={0.5}
          emptyIcon={<StarBorderIcon fontSize="inherit" />}
          size={props.size}
          readOnly={props.readOnly}
          className={props.className}
        />
      </Box>
    </div>
  );
}
