import React from "react";
import { Card, CardMedia } from "@mui/material";

interface MediaCardProps {
  image?: string;
  width: string;
  height: string;
  borderRadiusOuter?: string;
  borderRadiusInner: string;

}

export default function MediaCard({
  image,
  width,
  height,
  borderRadiusOuter,
  borderRadiusInner,
  
}: MediaCardProps) {
  return (
    <Card
      sx={{
        borderRadius: borderRadiusOuter ,
      }}
    >
      <CardMedia
        component="img"
        image={image}
        alt="myphoto"
        sx={{
          width: { width },
          height: { height },
          borderRadius:  borderRadiusInner ,
        }}
      >
      </CardMedia>
    </Card>
  );
}
