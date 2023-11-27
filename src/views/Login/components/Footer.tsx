import React from "react";
//
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Text from "components/Typography/index";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";
//
import { useHistory } from "react-router-dom";
import { RouteBase } from "constants/routeUrl";
//  type
interface Props {
  onClick?: any;

  content?: {
    desc: string;
    title: string;
  };

  pathName?: any;
}
const Footer = ({ onClick, content, pathName }: Props) => {
  const hanldeChangLogin = () => {
    onClick();
  };
  return (
    <>
      <Stack direction="row" spacing={0.5} sx={{ justifyContent: "center", margin: "10px 10px" }}>
        <Text.DescSmall sx={{ fontSize: "12px", color: "#5b5c61", fontWeight: "bold" }}>{content?.desc}</Text.DescSmall>
        <Link to={pathName}>
          <Text.DescSmall sx={{ color: "#0b2283", fontSize: "12px", fontWeight: "bold" }}>
            {content?.title}
          </Text.DescSmall>
        </Link>
      </Stack>
      <Stack direction="row">
        <Box sx={{ fontSize: "12px", color: "#b8bcc0", textAlign: "center", fontWeight: 400 }}>
          By logging in, you acknowledge that you have read and agree to TestGlider’s
          <a
            style={{ color: "#114ac6", margin: " 0 5px", fontWeight: 500 }}
            href="https://docs.google.com/document/d/e/2PACX-1vStVJ3W5A5nxHutiTiPtzRnWeSfFWm5nxeBvHX0bpJhlSl7TYxy0Zmx9ZGQAei-HYyTukwI23KZFOid/pub"
          >
            Terms of Use
          </a>
          and
          <a
            style={{ color: "#114ac6", margin: "5px", fontWeight: 500 }}
            href="https://docs.google.com/document/d/e/2PACX-1vRS-iSwxMz7FaD1YVxV9bZru3VX1_w1U-cPXSNqo4g2-NzSEBpBLJCxx4Fqaoi03b0HPN9b-9K3OTcf/pub"
          >
            Privacy Policy
          </a>
        </Box>
      </Stack>
    </>
  );
};

export default Footer;
