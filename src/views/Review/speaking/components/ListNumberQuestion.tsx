import Box from "@mui/material/Box";
import React from "react";
interface Props {
  onClickPage?: any;
  questions?: any;
  handleDisplayNumber?: any;
}
const box = {
  width: "200px",
  height: "100vh",
};
const eachQuestion = {
  background: "#333",
  color: "#fff",
  width: "24px",
  height: "24px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "8px",
  fontSize: "14px",
  fontWeight: "bold",
  cursor: "pointer",
};
const ListNumberQuestion = (props: Props) => {
  const [hightLightPage, setHightLightPage] = React.useState("1");
  const { questions, onClickPage, handleDisplayNumber } = props;
  const renderPartValues = (partValues: any, index: number) => {
    let sectionRender: any = {};

    return partValues?.groups?.map((partGroup: any, groupIndex: number) => {
      return partGroup.questions.map((item: any, index: number) => {
        const handleClickQuestion = (part: any, group: any) => {
          sectionRender.part = partValues.partNumber - 1;
          sectionRender.group = partGroup.groupNumber - 1;
          onClickPage(sectionRender);
          setHightLightPage(item.question.displayNumber);
          handleDisplayNumber(item.question.displayNumber);
        };

        const hightLightNumberPageOnclickQuestion = () => {
          if (hightLightPage === item.question.displayNumber) {
            return { background: "#4C80F1", borderRadius: "50%" };
          }
        };
        return (
          <>
            <Box
              key={item.id}
              onClick={() => handleClickQuestion(partValues, partGroup)}
              style={hightLightNumberPageOnclickQuestion()}
              sx={eachQuestion}
            >
              <span>{item.question.displayNumber}</span>
            </Box>
          </>
        );
      });
    });
  };
  return (
    <>
      <Box sx={box}>
        <Box>
          <Box sx={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
            <Box sx={{ width: { md: "100%", display: "flex", flexWrap: "wrap", gap: 4 } }}>
              {questions?.map((group: any, index: number) => {
                return <>{renderPartValues(group, index)}</>;
              })}
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ListNumberQuestion;
