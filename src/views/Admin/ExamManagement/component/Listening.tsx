import { Card, Typography } from "@mui/material";

export interface Props {
  dataListening?: any;
}
const Listening = (props: Props) => {
  const { dataListening } = props;

  return (
    <Card className="mt-[10px] p-[20px]">
      <Typography sx={{ fontWeight: "bold" }}>Score: {dataListening?.score?.listening}</Typography>
      <Typography sx={{ fontWeight: "bold", textTransform: "uppercase" }}>Listening Part Exam</Typography>
      <p>
        {(dataListening?.listeningDetail || []).map((e: any, index: number) => {
          return (
            <>
              <div>
                <div className=" mb-2 mt-3 text-xl">
                  Part {index + 1}:<span className="ml-3 font-bold">{e?.partTitle}</span>
                </div>
              </div>{" "}
              {(e?.groups || []).map((group: any, index: number) => {
                return (
                  <>
                    <div>
                      <p className="font-bold mt-2">
                        Type of question:{" "}
                        <span style={{ fontWeight: "normal" }}>{group.questionType.replaceAll("_", " ")}</span>
                      </p>
                    </div>
                    {(group?.questions || []).map((question: any) => {
                      return (
                        <>
                          <div className="flex justify-between ml-5 mr-5">
                            {question?.isCorrect === true ? (
                              <p className="text-green-600 ">
                                Your Answer: {question?.studentAnswer === null ? "V" : question?.studentAnswer}
                              </p>
                            ) : (
                              <p className="text-red-600 ">
                                Your Answer: {question?.studentAnswer === null ? "X" : question?.studentAnswer}
                              </p>
                            )}

                            <span className="text-black">
                              Correct Answer: <span className="text-green-600">{question?.question?.answer}</span>
                            </span>
                            <span>
                              Score: <span>{question?.score}</span>
                            </span>
                          </div>
                        </>
                      );
                    })}
                  </>
                );
              })}
            </>
          );
          // return e.directionText;
        })}
        {/* {questionAnswer?.map((item: any) => {
          return <p>{item.answer}</p>;
        })} */}
      </p>
    </Card>
  );
};
export default Listening;
