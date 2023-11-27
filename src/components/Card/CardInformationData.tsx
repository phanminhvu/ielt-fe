import React from "react";
//
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
//
import Text from "components/Typography/index";
// ! type
interface Data {
  data: {
    stats: string;
    type: string;
    content: string;
  };
}

const CardInformationData = ({ data }: Data) => {
  return (
    <Grid
      item
      xs={12}
      sm={12}
      md={12}
      lg={3}
      sx={{
        display: { xs: "flex", lg: "block" },
        alignItems: { xs: "center", lg: "" },
        mt: { xs: "80px", sm: "50px", lg: "0" },
      }}
    >
      <Box sx={{ width: { xs: "40%", lg: "100%" } }}>
        <img
          style={{ borderRadius: "50%", width: "100%" }}
          src="https://www.cuteeasydrawings.com/uploads/allimg/200914/1_200914131629_5.jpg"
          alt=""
        />
      </Box>
      <Box>
        <Stack direction="row" spacing={1} sx={{ width: "fit-content", margin: "0 auto", marginBottom: "20px" }}>
          <Text.TitleIntroPage sx={{ color: "#2196F3" }}>{data.stats}</Text.TitleIntroPage>
          <Typography sx={{ color: "text", fontWeight: "medium", marginTop: "32px !important" }}>
            {data.type}
          </Typography>
        </Stack>
        <Box sx={{ textAlign: "center", maxWidth: "272px", margin: "0 auto" }}>
          <Text.DescSmallCard>{data.content}</Text.DescSmallCard>
        </Box>
      </Box>
    </Grid>
  );
};

export default CardInformationData;
