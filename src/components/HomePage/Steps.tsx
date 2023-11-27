//
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";

import FlutterDashIcon from "@mui/icons-material/FlutterDash";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import WbTwilightIcon from "@mui/icons-material/WbTwilight";

//
import ImgStep1 from "assets/image/home/step1.png";
import ImgStep2 from "assets/image/home/step2.png";
import ImgStep3 from "assets/image/home/step3.png";
import CardStep from "components/Card/CardStep";
//
//
import Text from "components/Typography/index";

const Steps = () => {
  const StepsForGoodLeft = () => {
    const card = {
      padding: { xs: "50px 20px", sm: "20px 24px", md: "50px 50px" },
      boxShadow: "rgba(0, 0, 0, 0.25) 0px 5px 15px",
    };
    const rounded = {
      border: "2px solid #ccc",
      borderRadius: "50%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "20px",
      width: "28px",
      height: "28px",
      color: "#8A8C91",
    };
    const itemRight = {
      width: { xs: "100%", md: "70%" },
      p: { xs: "12px", sm: "12px", md: "20px 30px" },
      background: "#F7F9FB",
      borderRadius: "10px",
      color: "#8A8C91",
      ml: { xs: "20px !important", md: "40px" },
      "&:hover": {
        backgroundColor: "#bbdefb",
        // color: "#2196f3 ",
      },
    };
    return (
      <Box sx={{ pr: { xs: "0", lg: "100px" }, transform: { md: "translateX(-120px)", lg: "translateX(0)" } }}>
        <Card sx={card}>
          <Stack direction="row" spacing={5} sx={{ alignItems: "center", mb: "50px" }}>
            <Box sx={{ width: "40px" }}>
              <Box sx={rounded}>1</Box>
            </Box>
            <Stack direction="row" spacing={2} sx={itemRight}>
              <FlutterDashIcon sx={{ fontSize: "30px" }} />
              <Text.Sub20Bold>Take a Practice Test</Text.Sub20Bold>
            </Stack>
          </Stack>
          <Stack direction="row" spacing={5} sx={{ alignItems: "center", mb: "50px" }}>
            <Box sx={{ width: "40px" }}>
              <Box sx={rounded}>2</Box>
            </Box>
            <Stack direction="row" spacing={2} sx={itemRight}>
              <LibraryBooksIcon sx={{ fontSize: "30px", color: "#8A8C91" }} />
              <Text.Sub20Bold>Get Scores Instantly</Text.Sub20Bold>
            </Stack>
          </Stack>
          <Stack direction="row" spacing={5} sx={{ alignItems: "center" }}>
            <Box sx={{ width: "40px" }}>
              <Box sx={rounded}>3</Box>
            </Box>
            <Stack direction="row" spacing={2} sx={itemRight}>
              <WbTwilightIcon sx={{ fontSize: "30px", color: "#8A8C91" }} />
              <Text.Sub20Bold>Review & Improve</Text.Sub20Bold>
            </Stack>
          </Stack>
        </Card>
      </Box>
    );
  };
  const StepsForGoodRight = () => {
    const steps = {
      title: "Increase your TOEFL® score using our 3 easy steps!",
      desc: "We analyze your performance and give you advice on how to improve your scores. Our students have reported a score boost after just 1 week of practice.*",
    };
    return (
      <Box sx={{ mt: { xs: "50px", lg: "0" }, transform: { xs: "0", md: "translateX(200px)", lg: "translateX(0)" } }}>
        <Box sx={{ maxWidth: "400px" }}>
          <Text.Title>{steps.title}</Text.Title>
        </Box>
        <Box sx={{ maxWidth: "400px" }}>
          <Text.DescNormal>{steps.desc}</Text.DescNormal>
        </Box>
        <Button sx={{ color: "#5B5C61" }} variant="text" endIcon={<KeyboardArrowDownIcon />}>
          SEE HOW
        </Button>
      </Box>
    );
  };
  //
  const step1 = {
    step: "STEP 1",
    title: "Choose how  YOU want to practice.",
    desc: "Select your practice based on your schedule and learning style to improve your score at your own pace.",
    desc2:
      "Timed with spoken instructions, our tests are modeled after real TOEFL exam materials and created by TOEFL experts.",
    image: ImgStep1,
  };
  const step2 = {
    step: "STEP 1",
    title: "Get your results immediately.",
    desc: "Select your practice based on your schedule and learning style to improve your score at your own pace.",
    desc2:
      "Timed with spoken instructions, our tests are modeled after real TOEFL exam materials and created by TOEFL experts.",
    image: ImgStep2,
  };
  const step3 = {
    step: "STEP 1",
    title: "Focus on what you need to improve.",
    desc: "Select your practice based on your schedule and learning style to improve your score at your own pace.",
    desc2:
      "Timed with spoken instructions, our tests are modeled after real TOEFL exam materials and created by TOEFL experts.",
    image: ImgStep3,
  };
  const Left = () => {
    return (
      <Box>
        <Text.DescNormal sx={{ color: "#0B2283", fontWeight: "500" }}>{step1.step}</Text.DescNormal>
        <Box sx={{ maxWidth: "400px" }}>
          <Text.Title>{step1.title}</Text.Title>
          <Text.DescNormal>{step1.desc}</Text.DescNormal>
          <Text.DescNormal>{step1.desc2}</Text.DescNormal>
        </Box>
      </Box>
    );
  };
  const Right = () => {
    return (
      <Box>
        <img style={{ width: "100%", borderRadius: "20px" }} src={step1.image} alt="" />
      </Box>
    );
  };
  //
  const Left2 = () => {
    return (
      <Box>
        <Text.DescNormal sx={{ color: "#0B2283", fontWeight: "500" }}>{step2.step}</Text.DescNormal>
        <Box sx={{ maxWidth: "400px" }}>
          <Text.Title>{step2.title}</Text.Title>
          <Text.DescNormal>{step2.desc}</Text.DescNormal>
          <Text.DescNormal>{step2.desc2}</Text.DescNormal>
        </Box>
      </Box>
    );
  };
  const Right2 = () => {
    return (
      <Box>
        <img style={{ width: "100%", borderRadius: "20px" }} src={step2.image} alt="" />
      </Box>
    );
  };
  //
  const Left3 = () => {
    return (
      <Box>
        <Text.DescNormal sx={{ color: "#0B2283", fontWeight: "500" }}>{step3.step}</Text.DescNormal>
        <Box sx={{ maxWidth: "400px" }}>
          <Text.Title>{step3.title}</Text.Title>
          <Text.DescNormal>{step3.desc}</Text.DescNormal>
          <Text.DescNormal>{step3.desc2}</Text.DescNormal>
        </Box>
      </Box>
    );
  };
  const Right3 = () => {
    return (
      <Box>
        <img style={{ width: "100%", borderRadius: "20px" }} src={step3.image} alt="" />
      </Box>
    );
  };
  //
  const bg = {
    background: "#F7F9FB",
  };
  return (
    <Box>
      <CardStep reverse left={<StepsForGoodRight />} right={<StepsForGoodLeft />} bg={bg} />
      <CardStep left={<Left />} right={<Right />} />
      <CardStep left={<Left2 />} right={<Right2 />} bg={bg} />
      <CardStep left={<Left3 />} right={<Right3 />} />
    </Box>
  );
};

export default Steps;
