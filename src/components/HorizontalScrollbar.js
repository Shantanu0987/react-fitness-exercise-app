import React from "react";
import { Box } from "@mui/material";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import BodyPart from "./BodyPart";

// import RightArrowIcon from "../assets/icons/right-arrow.png";
// import LeftArrowIcon from "../assets/icons/left-arrow.png";

// const LeftArrow = ({ scrollPrev }) => (
//   <Typography onClick={scrollPrev} className="left-arrow">
//     <img src={LeftArrowIcon} alt="Left-arrow" />
//   </Typography>
// );

// const RightArrow = ({ scrollNext }) => (
//   <Typography onClick={scrollNext} className="right-arrow">
//     <img src={RightArrowIcon} alt="Right-arrow" />
//   </Typography>
// );

function HorizontalScrollbar({ data, bodyPart, setBodyPart }) {
  return (
    <ScrollMenu
    // LeftArrow={LeftArrow} RightArrow={RightArrow}
    >
      <Box sx={{ display: "flex", overflow: "scroll" }}>
        {data.map((item) => (
          <Box key={item.id || item} itemID={item.id || item} m="0 10px">
            <BodyPart
              item={item}
              bodyPart={bodyPart}
              setBodyPart={setBodyPart}
            />
          </Box>
        ))}
      </Box>
    </ScrollMenu>
  );
}

export default HorizontalScrollbar;
