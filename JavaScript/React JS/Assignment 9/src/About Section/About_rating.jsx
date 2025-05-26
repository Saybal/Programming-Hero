import React from "react";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

const About_rating = ({isdisabled}) => {
  return (
    <Stack spacing={1}>
      <Rating disabled={isdisabled} className={`text-xl sm:text-2xl font-semibold ${
                          isdisabled ? "opacity-50 cursor-not-allowed" : ""
                        }`} name="half-rating" defaultValue={2.5} precision={0.5} />
    </Stack>
  );
};

export default About_rating;
