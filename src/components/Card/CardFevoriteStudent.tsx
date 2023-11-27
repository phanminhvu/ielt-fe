//
import Text from "components/Typography/index";

//
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
//! type
interface User {
  user: {
    content: string;
    name: string;
  };
}
const CardFevoriteStudent = ({ user }: User) => {
  const card = {
    padding: "30px 30px",
    margin: "0 10px",
    marginTop: "30px",
    borderRadius: "20px",
    boxShadow: "rgba(0, 0, 0, 0.2) 0px 5px 15px",
  };
  const cardContent = {
    padding: "0 0 15px 0",
    borderBottom: "1px solid #ccc",
    minHeight: "120px",
  };
  const cardUser = {
    paddingTop: "15px",
    justifyContent: "flex-end",
  };
  return (
    <Grid item xs={2.5} sx={{ minWidth: "320px" }}>
      <Card sx={card}>
        <Box sx={cardContent}>
          <Text.DescSmallCard>{user.content}</Text.DescSmallCard>
        </Box>
        <Stack sx={cardUser} direction="row" spacing={2}>
          <Text.DescMedium>{user.name}</Text.DescMedium>
          <AccountCircleIcon sx={{ fontSize: "30px", color: "#ACC5FF", background: "#fff" }} />
        </Stack>
      </Card>
    </Grid>
  );
};

export default CardFevoriteStudent;
