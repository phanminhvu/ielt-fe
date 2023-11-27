import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import CreateIcon from "@mui/icons-material/Create";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import { TypeExamEnum } from "constants/enum";
import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
//
import LoadingPage from "components/Loading";
import { format } from "date-fns";
import { useIeltsResult } from "hooks/ielts/useIelts";
import Pagination from "components/Pagination";
import useSagaCreators from "hooks/useSagaCreators";
import { IeltsActions } from "redux/creators/modules/ielts";

const tbRow = {
  borderTop: "1.5px solid #eeeeee",
  "&:hover": {
    boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px",
  },
};
const buttonReview = {
  color: "red",
  border: "1px solid red",
  "&:hover": { border: "1px solid red", background: "#fff" },
};

interface EachTableI {
  panelId: TypeExamEnum;
}

const EachTable = ({ panelId }: EachTableI) => {
  //! State
  const [results, setResults] = useState([]);
  const [page, setPage] = useState(1);
  const { dispatch } = useSagaCreators();
  const { data, isLoading, refetch } = useIeltsResult({ skill: panelId, page });
  const history = useHistory();
  // !Effect
  useEffect(() => {
    setResults(data?.data?.data?.data);
  }, [isLoading, page]);
  useEffect(() => {
    refetch();
  }, [page]);

  //! Function
  const handleReview = (testCode: number, skill: string) => {
    dispatch(IeltsActions.saveTestCode, { testCode });
    history.push(`/ielts/review/${panelId.toLocaleLowerCase()}/${testCode}`);
  };

  //! Render
  const renderIconByPanel = () => {
    if (panelId === TypeExamEnum.LISTENING) {
      return <HeadphonesIcon sx={{ color: "red" }} />;
    }

    if (panelId === TypeExamEnum.READING) {
      return <AutoStoriesIcon sx={{ color: "#B0D909" }} />;
    }
    if (panelId === TypeExamEnum.WRITING) {
      return <CreateIcon sx={{ color: "#8CE5EC" }} />;
    }
    if (panelId === TypeExamEnum.SPEAKING) {
      return <KeyboardVoiceIcon sx={{ color: "#FF9700" }} />;
    }

    return <HeadphonesIcon sx={{ color: "red" }} />;
  };

  //! Pagination
  const handleChangePage = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <Box sx={{ width: "100%" }}>
      <TableContainer
        component={Paper}
        sx={{
          borderBottomLeftRadius: "20px",
          borderBottomRightRadius: "20px",
          borderTopLeftRadius: "0px",
          borderTopRightRadius: "0px",
        }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead sx={{ background: "#fff", borderTop: "1px solid #eeeeee", color: "#B8BCC0 ", p: "0 44px" }}>
            <TableRow>
              <TableCell
                sx={{
                  color: "#B8BCC0 !important",
                  width: "150px",
                  textTransform: "capitalize !important",
                  fontWeight: "500 !important",
                  fontSize: "14px !important",
                  pl: "44px !important",
                }}
              >
                Section
              </TableCell>
              <TableCell
                sx={{
                  color: "#B8BCC0 !important",
                  width: "120px",
                  textTransform: "capitalize !important",
                  fontWeight: "500 !important",
                  fontSize: "14px !important",
                }}
                size="small"
              >
                Band Score
              </TableCell>
              <TableCell
                sx={{
                  color: "#B8BCC0 !important",
                  textTransform: "capitalize !important",
                  fontWeight: "500 !important",
                  fontSize: "14px !important",
                  width: "300px !important",
                }}
              >
                Name
              </TableCell>
              <TableCell
                sx={{
                  color: "#B8BCC0 !important",
                  textTransform: "capitalize !important",
                  fontWeight: "500 !important",
                  fontSize: "14px !important",
                }}
                size="small"
                align="center"
              >
                Session Date
              </TableCell>
              <TableCell sx={{ color: "#B8BCC0 !important", pr: "44px" }} size="small"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody sx={{ p: "0 44px" }}>
            {results?.map((item: any) => (
              <TableRow key={item.id} sx={tbRow}>
                <TableCell
                  sx={{
                    pl: "44px !important",
                  }}
                  component="th"
                >
                  {renderIconByPanel()}
                </TableCell>
                <TableCell>
                  <Typography
                    align="center"
                    sx={{ fontWeight: "bold", display: "inline", fontSize: "20px", color: "#36373B" }}
                  ></Typography>
                  <Typography sx={{ color: "#8A8C91 ", display: "inline", fontSize: "20px" }}>
                    {panelId === TypeExamEnum.READING && item.score.reading}
                    {panelId === TypeExamEnum.WRITING && item.score.writing}
                    {panelId === TypeExamEnum.LISTENING && item.score.listening}
                    {panelId === TypeExamEnum.SPEAKING && item.score.speaking}
                  </Typography>
                </TableCell>
                <TableCell sx={{ fontWeight: "bold", color: "#36373B" }}>{item.testCode}</TableCell>
                <TableCell sx={{ color: "#8A8C91 " }} align="center">
                  {format(new Date(item.finishedDate), "dd-MM-yyyy")}
                </TableCell>
                <TableCell sx={{ pr: "44px" }} align="right">
                  <Button variant="outlined" sx={buttonReview} onClick={() => handleReview(item.testCode, item.skill)}>
                    REVIEW
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Box sx={{ display: "flex", justifyContent: "center", p: "30px 0", borderTop: "1px solid #eeeeee" }}>
          <Pagination totalPage={data?.data?.data?.paging?.totalPage} onChangePage={handleChangePage} page={page} />
        </Box>
      </TableContainer>
    </Box>
  );
};

export default EachTable;
