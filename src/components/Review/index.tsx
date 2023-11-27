import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useState } from "react";
//
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import CreateIcon from "@mui/icons-material/Create";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import NoEncryptionGmailerrorredIcon from "@mui/icons-material/NoEncryptionGmailerrorred";
import HelpIcon from "@mui/icons-material/Help";
//
import EachTable from "./Components/EachTable";
import { TypeExamEnum } from "constants/enum";
import Card from "@mui/material/Card";

//
import TitleIntroExam from "components/TitleIntroExam/TitleIntroExam";
import Text from "components/Typography/index";
import { useIeltsResult } from "hooks/ielts/useIelts";
import { useLocation } from "react-router-dom";
//
// ! type
interface PropsBg {
  bg: {
    background2: string;
  };
}

const cssBotton = {
  width: "100%",
  color: "#8A8C91",

  "&:hover": {
    backgroundColor: "#ffffff",
    borderRadius: "15px",
  },
};
// const data = useLocation();
export default function BasicTable({ bg }: PropsBg) {
  let { state }: any = useLocation();

  const [panal, setPanal] = useState<any>(state?.type ?? TypeExamEnum.LISTENING);
  const { data } = useIeltsResult({ skill: "READING" });
  //
  const typeExams = [
    {
      id: TypeExamEnum.LISTENING,
      name: "Listening",
      icon: <HeadphonesIcon />,
    },
    {
      id: TypeExamEnum.READING,
      name: "Reading",
      icon: <AutoStoriesIcon sx={panal === "READING" ? { color: "#B0D909" } : {}} />,
    },
    {
      id: TypeExamEnum.WRITING,
      name: "Writing",
      icon: <CreateIcon sx={panal === "WRITING" ? { color: "#8CE5EC" } : {}} />,
    },
    {
      id: TypeExamEnum.SPEAKING,
      name: "Speaking",
      icon: <KeyboardVoiceIcon sx={panal === "SPEAKING" ? { color: "#FF9700" } : {}} />,
    },
  ];
  //
  const colorButon = () => {
    if (panal === TypeExamEnum.LISTENING) {
      return "red";
    }
    if (panal === TypeExamEnum.READING) {
      return "#B0D909";
    }
    if (panal === TypeExamEnum.WRITING) {
      return "#8CE5EC";
    }
    if (panal === TypeExamEnum.SPEAKING) {
      return "#FF9700";
    }
  };
  //
  const dataTitleIntroExam = {
    title: "Scores & Review",
    desc: "Check out your results, and see how you can improve your score.",
    background: "rgb(255,245,247)",
  };
  return (
    <Box>
      <Box
        sx={{
          p: "50px 10px 100px 10px",
          background: dataTitleIntroExam.background,
          position: "relative",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div className="container">
          <Box
            sx={{
              display: { xs: "block", sm: "flex" },
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box sx={{ width: { xs: "100%", sm: "50%", lg: "260px" } }}>
              <TitleIntroExam dataTitleIntroExam={dataTitleIntroExam} />
            </Box>
            <Card
              sx={{
                p: "20px 20px",
                borderRadius: "12px",
                maxWidth: "124px",
                m: { xs: "0 auto", sm: "0" },
                mt: { xs: "30px", sm: "0" },
              }}
            >
              <Box
                className="card-help"
                sx={{
                  p: "24px 22px",
                  borderRadius: "12px",
                  "&:hover": {
                    backgroundColor: "#f7f9fb",
                  },
                }}
              >
                <HelpIcon className="icon-help" sx={{ fontSize: "40px", mb: "5px", color: "#9ca3af" }} />
                <Text.Desc16 sx={{ textAlign: "center", color: "#9ca3af" }}>help</Text.Desc16>
              </Box>
            </Card>
          </Box>
        </div>
      </Box>
      <Box sx={{ background: bg.background2, pb: "100px" }}>
        <div className="container">
          <Box sx={{ width: "100%", position: "relative", transform: "translateY(-40px)" }}>
            <Box sx={{ background: "#fff", p: "10px 10px", borderTopLeftRadius: "20px", borderTopRightRadius: "20px" }}>
              <Box
                sx={{
                  display: "flex",
                  background: "#F3F4F6",
                  p: "5px 5px",
                  borderRadius: "15px",
                  justifyContent: "space-between",
                }}
              >
                {typeExams.map((item: any) => {
                  return (
                    <Box
                      key={item.id}
                      sx={{ display: "flex", justifyContent: "center", m: "0 3px", width: { xs: "24%" } }}
                    >
                      <Button
                        style={
                          item.id === panal
                            ? {
                                background: "#fff",
                                color: colorButon(),
                                boxShadow: "rgba(0, 0, 0, 0.30) 0px 5px 15px",
                                borderRadius: "15px",
                              }
                            : {}
                        }
                        onClick={() => setPanal(item.id)}
                        variant="text"
                        sx={cssBotton}
                        startIcon={item.icon}
                      >
                        {item.name}
                      </Button>
                    </Box>
                  );
                })}
              </Box>
            </Box>
            {typeExams.map((type) => {
              if (type.id === panal) {
                return <EachTable panelId={type.id} />;
              }

              return null;
            })}
            <Box
              sx={{
                display: { xs: "flex", lg: "none" },
                position: {
                  xs: "absolute",
                  lg: "unset",
                },
                top: "0",
                right: "0",
                left: "0",
                width: "100%",
                height: "100%",
                background: "#fff",
                justifyContent: "center",
                alignItems: "center",
                opacity: "0.7",
              }}
            >
              <NoEncryptionGmailerrorredIcon sx={{ fontSize: "200px" }} />
            </Box>
          </Box>
        </div>
      </Box>
    </Box>
  );
}
