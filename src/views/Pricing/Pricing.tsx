import React from "react";
import { Link } from "react-router-dom";
import "App.css";
//
import Box from "@mui/material/Box";
import TitleSection from "components/TitleSection/TitleSection";
import Card from "components/HomePage/ChoosePlan/Card";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

//
import Text from "components/Typography/index";
import ButtonCommon from "components/Button/ButtonCommon";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ImgBrand from "assets/image/pricing/item-left.png";
import Img50 from "assets/image/pricing/50+.svg";
//
import ImgTime2p from "assets/image/pricing/time2p.webp";
import ImgDetailedExplan from "assets/image/pricing/detailed-explan.webp";
import ImgSmartAnswers from "assets/image/pricing/smart-aswers.webp";
//
import ChromeReaderModeIcon from "@mui/icons-material/ChromeReaderMode";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import CreateIcon from "@mui/icons-material/Create";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
//
import ImgReading from "assets/image/pricing/reading.svg";
import ImgListening from "assets/image/pricing/listening.svg";
import ImgWriting from "assets/image/pricing/writing.svg";
import ImgSpeaking from "assets/image/pricing/speaking.svg";
import ImgRoadMap from "assets/image/pricing/roadmap.svg";
//
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
//
import Footer from "components/Footer/index";
// ! type
interface DataWhyTestGliderWorks {
  data: {
    title: string;
    desc: string;
    image: string;
  };
}
//
interface PropsYourSchedule {
  data: {
    title: string;
    desc: string;
    bgTitle: string;
    bgDesc: string;
    image: string;
    icon: React.ReactNode;
  };
}
//
interface PropsSayStudents {
  data: {
    title: string;
    desc: string;
    video: string;
  };
}
const Pricing = () => {
  // ! State
  const titleSection = {
    title: "Get Accurate TOEFL® Scores in 2 Minutes",
    desc: "Study for the TOEFL® test with the actual test environment at home",
    colorTitle: "#0B2283",
    colorDesc: "#114AC6",
  };
  //
  const yourSchedule = {
    title: "Study According to Your Schedule",
    desc: "Study with numerous individual pop quiz questions and 12 practice test sets.You can either solve the 12 sets by section or as a full test, just like the real test.",
    colorTitle: "#114AC6",
    // colorDesc: "#114AC6",
  };
  const titleSayStudents = {
    title: "What Our Students Say",
    desc: "Our average users have reported a score boost of 12.5 points within 4 weeks!",
    colorTitle: "#fff",
    colorDesc: "#fff",
  };
  const time = {
    title: "Scores in 2 minutes!",
    desc: "TestGlider can grade your Speaking and Writing responses within 2 minutes",
    image: ImgTime2p,
  };
  const detailedExplan = {
    title: "Detailed Explanations",
    desc: "Created by TOEFL experts insightful answer explanations and tips to help you in all 4 sections of TOEFL!",
    image: ImgDetailedExplan,
  };
  const smartAnswers = {
    title: "Smart Model Answers",
    desc: "Get real answer examples in the Writing and Speaking sections to help you improve your own answers!",
    image: ImgSmartAnswers,
  };
  //
  const dataReading = {
    title: "Section Test 54 mins",
    desc: "Pop Quiz 2-5 mins",
    bgTitle: "#ABC5FE",
    bgDesc: "#175ffc",
    image: ImgReading,
    icon: <ChromeReaderModeIcon sx={{ fontSize: "32px" }} />,
  };
  //
  const dataListeing = {
    title: "Section Test 41 mins",
    desc: "Pop Quiz 1-2 mins",
    bgTitle: "#FEB69E",
    bgDesc: "#FD6636",
    image: ImgListening,
    icon: <HeadphonesIcon sx={{ fontSize: "32px" }} />,
  };
  const dataSpeaking = {
    title: "Section Test 17 mins",
    desc: "Pop Quiz 4-6 mins ",
    bgTitle: "#FEE49B",
    bgDesc: "#FEC62E",
    image: ImgSpeaking,
    icon: <CreateIcon sx={{ fontSize: "32px" }} />,
  };
  const dataWriting = {
    title: "Section Test 50 mins",
    desc: "Pop Quiz 20 mins",
    bgTitle: "#E8CCFF",
    bgDesc: "#D094FF",
    image: ImgWriting,
    icon: <KeyboardVoiceIcon sx={{ fontSize: "32px" }} />,
  };
  //
  const dataSayStudentsLeft = {
    title: "Learn Study Tips From A DJ Who Is Studying Abroad In Norway After Graduating TOEFL",
    desc: "“The most surprising thing about TestGlider was that it was very similar to the actual TOEFL test. It really helped me a lot so I want to recommend a test glider to those who are having a hard time with TOEFL.”",
    video: "https://www.youtube.com/embed/AHDOYVmJt9A",
  };
  const CardWhyTestGliderWorks = ({ data }: DataWhyTestGliderWorks) => {
    return (
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", width: { xs: "100%", md: "33%" } }}>
        <Box sx={{ mb: "20px", width: "176px" }}>
          <img src={data.image} alt="" style={{ width: "100%" }} />
        </Box>
        <Text.CardTitle sx={{ mb: "20px", textAlign: "center" }}>{data.title}</Text.CardTitle>
        <Text.Desc16 sx={{ textAlign: "center" }}>{data.desc}</Text.Desc16>
      </Box>
    );
  };
  //
  const YourSchedule = ({ data }: PropsYourSchedule) => {
    return (
      <Box sx={{ width: { xs: "100%", md: "50%", lg: "25%" }, my: { xs: "50px", lg: "0" }, maxWidth: "221px" }}>
        <Box sx={{ m: "0 20px" }}>
          <Box sx={{ mb: "5px", display: "flex", justifyContent: "center" }}>
            <img src={data.image} alt="" style={{ width: "140px" }} />
          </Box>
          <Text.Desc16
            sx={{
              background: data.bgTitle,
              p: "4px 12px",
              mb: "10px",
              borderRadius: "10px",
              color: "#111114",
              fontWeight: "500 !important",
            }}
          >
            {data.title}
          </Text.Desc16>
          <Stack direction="row" spacing={1}>
            <Text.DescSmall
              sx={{
                p: "4px 12px",
                background: data.bgDesc,
                borderRadius: "10px",
                color: "#fff",
                fontWeight: "500 !important",
              }}
            >
              {data.desc}
            </Text.DescSmall>
            <Box sx={{ color: data.bgDesc, display: "flex", alignItems: "center", fontSize: "30px !important" }}>
              {data.icon}
            </Box>
          </Stack>
        </Box>
      </Box>
    );
  };
  //
  const SayStudentsItem = ({ data }: PropsSayStudents) => {
    return (
      <Box sx={{ width: { xs: "100%", md: "50%" }, background: "#fff", borderRadius: "12px" }}>
        <Box sx={{ mb: "20px", height: { xs: "200px", sm: "200px", md: "190px", lg: "240px" } }}>
          <iframe
            style={{ borderTopRightRadius: "12px", borderTopLeftRadius: "12px", objectFit: "contain" }}
            width="100%"
            height="100%"
            src={data.video}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </Box>
        <Box sx={{ p: "0 20px" }}>
          <Text.Desc16 sx={{ color: "#175FFC", mb: "5px", fontWeight: "bold" }}>{data.title}</Text.Desc16>
          <Text.Desc16 sx={{ mb: "20px" }}>{data.desc}</Text.Desc16>
        </Box>
      </Box>
    );
  };
  // ! Render
  return (
    <Box>
      <div className="container">
        <Box sx={{ p: "80px 0 30px 0" }}>
          <TitleSection data={titleSection} />
          <Card />
          <Box sx={{ mt: "80px", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Text.DescSmall sx={{ color: "#114AC6", fontWeight: 700 }}>
              SCROLL DOWN TO SEE WHAT YOU CAN GET
            </Text.DescSmall>
            <KeyboardArrowDownIcon sx={{ color: "#114AC6" }} />
          </Box>
        </Box>
      </div>
      <Box sx={{ background: "#E4EDFE" }}>
        <div className="container">
          <Grid container sx={{ alignItems: "center", justifyContent: "space-between", py: { xs: "20px", md: "0" } }}>
            <Grid item xs={0} md={5.5} sx={{ display: { xs: "none", md: "block" } }}>
              <img src={ImgBrand} alt="" style={{ width: "100%" }} />
            </Grid>
            <Grid item xs={12} md={5.5}>
              <Stack direction="row" spacing={1}>
                <Text.Title>Trusted by</Text.Title>
                <img style={{ width: "129px", height: "49px" }} src={Img50} alt="" />
              </Stack>
              <Text.Title>Educational Institutions</Text.Title>
              <a href="https://www.data-bank.ai/partnership">
                <ButtonCommon.ButtonFullBg
                  endIcon={<ChevronRightIcon sx={{ color: "#114AC6", fontSize: "28px !important" }} />}
                  sx={{
                    textTransform: "uppercase",
                    mt: "20px",
                    background: "#fff",
                    p: "12px 42px !important",
                    color: "#175ffc",
                    borderRadius: "12px",
                    fontWeight: "700 !important",
                    letterSpacing: "2px",
                    "&: hover": {
                      background: "#fff",
                    },
                  }}
                >
                  business inquiry
                </ButtonCommon.ButtonFullBg>
              </a>
            </Grid>
          </Grid>
        </div>
      </Box>
      <div className="container">
        <Box sx={{ py: "50px" }}>
          <Text.Title sx={{ textAlign: "center" }}>Why TestGlider Works</Text.Title>
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={5}
            sx={{ mt: "70px", display: { xs: "block", md: "flex" } }}
          >
            <CardWhyTestGliderWorks data={time} />
            <CardWhyTestGliderWorks data={detailedExplan} />
            <CardWhyTestGliderWorks data={smartAnswers} />
          </Stack>
        </Box>
        <Box sx={{ p: "64px 0", m: { xs: "0", md: "0 50px" } }}>
          <TitleSection data={yourSchedule} />
          <Box sx={{ mt: "30px" }}>
            <Stack
              direction="row"
              spacing={0}
              sx={{
                background: "#E4EDFE",
                p: { xs: "10px 10px", md: "44px 48px" },
                borderRadius: "16px",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              <YourSchedule data={dataReading} />
              <YourSchedule data={dataListeing} />
              <YourSchedule data={dataSpeaking} />
              <YourSchedule data={dataWriting} />
            </Stack>
            <Box sx={{ display: "flex", justifyContent: "center", mt: "20px" }}>
              <img src={ImgRoadMap} alt="" />
            </Box>
          </Box>
        </Box>
      </div>
      <Box sx={{ p: "50px 0 50px 0", background: "#175FFC" }}>
        <div className="container">
          <TitleSection data={titleSayStudents} />
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={{ xs: 10, md: 5, lg: 10 }}
            sx={{ mt: "50px", p: { xs: "0 10px", md: "0 ", lg: "0 70px" } }}
          >
            <SayStudentsItem data={dataSayStudentsLeft} />
            <SayStudentsItem data={dataSayStudentsLeft} />
          </Stack>
          <Box sx={{ display: "flex", justifyContent: "flex-end", p: "10px 70px 0 70px" }}>
            <Link to="/">
              <ButtonCommon.ButtonFullBg
                endIcon={<ChevronRightIcon sx={{ fontSize: "24px !important" }} />}
                sx={{ background: "#175FFC", textTransform: "uppercase", "&:hover": { background: "#175FFC" } }}
              >
                See more reviews
              </ButtonCommon.ButtonFullBg>
            </Link>
          </Box>
        </div>
      </Box>
      <div className="container">
        <Box sx={{ p: { xs: "100px 0", md: "100px 15px", lg: "100px 166px" } }}>
          <Text.Title sx={{ color: "#114AC6" }}>Frequently Asked Questions</Text.Title>
          <Stack direction="column" spacing={7} sx={{ mt: "50px" }}>
            <Stack direction={{ xs: "column", lg: "row" }} spacing={{ xs: 2, lg: 0 }}>
              <Box sx={{ width: { xs: "100%", lg: "25%" } }}>
                <Text.CardTitle>Practice</Text.CardTitle>
              </Box>
              <Box sx={{ width: { xs: "100%", lg: "75%" } }}>
                <Stack direction="column" spacing={1}>
                  <Accordion className="accordion">
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                      sx={{ p: "0 !important" }}
                    >
                      <Text.Desc16 sx={{ fontSize: "18px", fontWeight: "bold" }}>How can I take the tests?</Text.Desc16>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Text.Desc16 sx={{ color: "#36373B" }}>To take a test,</Text.Desc16>
                      <Text.Desc16 sx={{ color: "#36373B" }}>1. Go to the Practice page.</Text.Desc16>
                      <Text.Desc16 sx={{ color: "#36373B" }}>
                        2. Choose the type of test you want to take (Pop Quiz, Section Test, Full Test).
                      </Text.Desc16>
                      <Text.Desc16 sx={{ color: "#36373B", mt: "30px" }}>
                        After you click on the test type, a test will be recommended to you. You will get a new test
                        every time you click on the test type. The tests will be repeated once you have taken all the
                        tests available.
                      </Text.Desc16>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion className="accordion">
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel2a-content"
                      id="panel2a-header"
                      sx={{ p: "0 !important" }}
                    >
                      <Text.Desc16 sx={{ fontSize: "18px", fontWeight: "bold" }}>
                        How similar are the questions to the actual TOEFL® exam?
                      </Text.Desc16>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Text.Desc16 sx={{ color: "#36373B" }}>
                        All content is the original property of TestGlider, and is produced by professional TOEFL®
                        researchers. The content is blind-tested to ensure that the quality of the tests is similar to
                        the actual TOEFL® exam.
                      </Text.Desc16>
                    </AccordionDetails>
                  </Accordion>
                </Stack>
              </Box>
            </Stack>
            <Stack direction={{ xs: "column", lg: "row" }} spacing={{ xs: 2, lg: 0 }}>
              <Box sx={{ width: { xs: "100%", lg: "25%" } }}>
                <Text.CardTitle>Scores</Text.CardTitle>
              </Box>
              <Box sx={{ width: { xs: "100%", lg: "75%" } }}>
                <Stack direction="column" spacing={1}>
                  <Accordion className="accordion">
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                      sx={{ p: "0 !important" }}
                    >
                      <Text.Desc16 sx={{ fontSize: "18px", fontWeight: "bold" }}>
                        How does TestGlider calculate my scores?
                      </Text.Desc16>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Text.Desc16 sx={{ color: "#36373B" }}>
                        TestGlider's grading system has been trained and continues to learn from the large amounts of
                        speaking and writing data submitted by test-takers. Instead of relying on conventional
                        rule-based procedures, TestGlider scores are produced by various deep learning techniques that
                        accurately process, analyze, and evaluate writing and speaking answers.
                      </Text.Desc16>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion className="accordion">
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel2a-content"
                      id="panel2a-header"
                      sx={{ p: "0 !important" }}
                    >
                      <Text.Desc16 sx={{ fontSize: "18px", fontWeight: "bold" }}>
                        How quickly can I get my score?
                      </Text.Desc16>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Text.Desc16 sx={{ color: "#36373B" }}>
                        It will take approximately 2 minutes to receive your score for the Speaking section and 20-30
                        seconds for the Writing section. Access to Reading and Listening scores and answer explanations
                        are available after completing the test.
                      </Text.Desc16>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion className="accordion">
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel2a-content"
                      id="panel2a-header"
                      sx={{ p: "0 !important" }}
                    >
                      <Text.Desc16 sx={{ fontSize: "18px", fontWeight: "bold" }}>
                        Will I get the same score on my real TOEFL® exam?
                      </Text.Desc16>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Text.Desc16 sx={{ color: "#36373B" }}>
                        Many users have seen similarity in the scores they received on TestGlider compared to their
                        actual TOEFL® test scores. To get the most accurate speaking score, it's best to test in a
                        silent environment and avoid noises that detract from your answer.
                      </Text.Desc16>
                      <Text.Desc16 sx={{ color: "#36373B" }}>
                        Here are common noises to avoid while recording your answer: • Outside noises, such as cars and
                        loud conversations • Other voices, including tutor instructions and unrelated conversations
                      </Text.Desc16>
                    </AccordionDetails>
                  </Accordion>
                </Stack>
              </Box>
            </Stack>
            <Stack direction={{ xs: "column", lg: "row" }} spacing={{ xs: 2, lg: 0 }}>
              <Box sx={{ width: { xs: "100%", lg: "25%" } }}>
                <Text.CardTitle>Payment</Text.CardTitle>
              </Box>
              <Box sx={{ width: { xs: "100%", lg: "75%" } }}>
                <Stack direction="column" spacing={1}>
                  <Accordion className="accordion">
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                      sx={{ p: "0 !important" }}
                    >
                      <Text.Desc16 sx={{ fontSize: "18px", fontWeight: "bold" }}>I want to cancel my plan.</Text.Desc16>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Text.Desc16 sx={{ color: "#36373B" }}>
                        You can receive a full refund if you have not used our service within 7 days of purchase. Please
                        contact our customer service representative for a refund through our live chat. Our refund
                        policy can be found here.
                      </Text.Desc16>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion className="accordion">
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel2a-content"
                      id="panel2a-header"
                      sx={{ p: "0 !important" }}
                    >
                      <Text.Desc16 sx={{ fontSize: "18px", fontWeight: "bold" }}>
                        What payment methods do you offer?
                      </Text.Desc16>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Text.Desc16 sx={{ color: "#36373B" }}>
                        We accept credit and debit cards from Visa, Mastercard, JCB, and Union Pay, as well as Paypal.
                      </Text.Desc16>
                      <Text.Desc16 sx={{ color: "#36373B" }}>
                        For Korean payment options, we accept all types of credit and debit cards.
                      </Text.Desc16>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion className="accordion">
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel2a-content"
                      id="panel2a-header"
                      sx={{ p: "0 !important" }}
                    >
                      <Text.Desc16 sx={{ fontSize: "18px", fontWeight: "bold" }}>
                        What currency are the prices listed in?
                      </Text.Desc16>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Text.Desc16 sx={{ color: "#36373B" }}>
                        Our passes are listed in USD (United States Dollars), and your payment will automatically
                        convert to the USD value when you purchase a pass. To see this price in KRW (Korean won), switch
                        our website to the Korean-language version.
                      </Text.Desc16>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion className="accordion">
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel2a-content"
                      id="panel2a-header"
                      sx={{ p: "0 !important" }}
                    >
                      <Text.Desc16 sx={{ fontSize: "18px", fontWeight: "bold" }}>
                        When is the billing date for the Subscription Pass?
                      </Text.Desc16>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Text.Desc16 sx={{ color: "#36373B", mb: "20px" }}>
                        Your billing date will be the same date as your first payment date every month. However, if your
                        billing date does not occur every month(29th, 30th, 31st), your billing date will be
                        automatically adjusted to the 1st of every month, starting from the next billing. All our
                        subscription payments are billed based on the Korean Standard Time (KST/GMT+9). Because of
                        differences in time zones, please note that your bill may get charged a day earlier than your
                        billing date.
                      </Text.Desc16>
                      <Text.Desc16 sx={{ color: "#36373B", mb: "20px" }}>
                        Ex. If you make your first payment on December 21st, your next billing date will be January
                        21st. If you make your first payment on January 31st, your next bill will be charged on March
                        1st. Note that no bill was charged in February, but the billing cycle is roughly 30 days.
                      </Text.Desc16>
                      <Text.Desc16 sx={{ color: "#36373B" }}>
                        Please keep in mind that it may take a few days for the billing to appear on your payment log.
                      </Text.Desc16>
                    </AccordionDetails>
                  </Accordion>{" "}
                  <Accordion className="accordion">
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel2a-content"
                      id="panel2a-header"
                      sx={{ p: "0 !important" }}
                    >
                      <Text.Desc16 sx={{ fontSize: "18px", fontWeight: "bold" }}>
                        Where can I see my receipt?
                      </Text.Desc16>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Text.Desc16 sx={{ color: "#36373B" }}>
                        You can check your payment receipt by clicking on the Profile icon at the top right corner of
                        our website and going to the "Payment Log." You can then check the receipt of your payment by
                        clicking on the details of that payment.
                      </Text.Desc16>
                    </AccordionDetails>
                  </Accordion>
                </Stack>
              </Box>
            </Stack>
          </Stack>
        </Box>
      </div>
      <Footer />
    </Box>
  );
};

export default Pricing;
