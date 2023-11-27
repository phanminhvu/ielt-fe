import React from "react";
import Text from "components/Typography/index";
//
interface Props {
  children?: string;
}
const Desc16My15 = (props: Props) => {
  const { children } = props;
  const text = {
    margin: "15px 0",
  };
  return (
    <>
      <Text.Desc16 sx={text}>{children}</Text.Desc16>
    </>
  );
};

export default Desc16My15;
