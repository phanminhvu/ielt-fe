import React from "react";
//
import Text from "components/Typography/index";
import Box from "@mui/material/Box";

import Stack from "@mui/material/Stack";
// ! type
interface Props {
  data: {
    img: any;
    title: string;
    bg?: string;
    color?: string;
  };
  onClick?: any;
}

const ItemSocial = ({ data, onClick }: Props) => {
  const item = {
    background: data.bg,
    p: "8px",
    borderRadius: "60px",
    alignItems: "center",
    border: "1px solid #ccc",
    cursor: "pointer",
  };
  const title = {
    fontWeight: "bold",
    color: data.color,
    width: "80%",
    textAlign: "center",
  };
  return (
    <Stack onClick={() => onClick()} direction="row" sx={item}>
      <img src={data.img} alt="" />
      <Text.Desc16 sx={title}>{data.title}</Text.Desc16>
    </Stack>
  );
};

export default ItemSocial;
