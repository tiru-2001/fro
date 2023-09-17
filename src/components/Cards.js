import {
  Card,
  CardContent,
  CardActionArea,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";

const Cards = ({ age, course, name, section, usn }) => {
  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea
          sx={{
            background:
              "linear-gradient(to left, #ffffff, #dcdddd, #b9bbbc, #979b9a, #797c79)",
          }}
        >
          <CardMedia
            component="img"
            height="140"
            image="https://static.vecteezy.com/system/resources/thumbnails/009/734/564/small/default-avatar-profile-icon-of-social-media-user-vector.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom component="div">
              Name:{name}
            </Typography>
            <Typography gutterBottom component="div">
              Age:{age}
            </Typography>
            <Typography gutterBottom component="div"></Typography>
            <Typography gutterBottom component="div">
              Section:{section}
            </Typography>
            <Typography gutterBottom component="div">
              Course:{course}
            </Typography>

            <Typography gutterBottom component="div">
              Usn:{usn}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
};

export default Cards;
