import { yupResolver } from "@hookform/resolvers/yup";
import { Card, Typography } from "@mui/material";
import { IMAGE_URL } from "constants/constants";
import { useForm } from "react-hook-form";
import "./styles.scss";
import * as yup from "yup";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import { useState } from "react";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import examServices from "services/examServices";
import { toast } from "react-toastify";

export interface Props {
  dataWriting?: any;

  idGrade?: any;

  refetchData?: any;
}

const validationSchema = yup.object().shape({});

const Writing = (props: Props) => {
  const { dataWriting, idGrade, refetchData } = props;
  const [isEdit, setIsEdit] = useState(-1);
  const [score, setScore] = useState<number>();

  const onSubmitScore = async () => {
    const body = {
      answers: [
        {
          questionId: isEdit,
          score: score,
        },
      ],
    };
    try {
      await examServices.patchMark(idGrade, body).then((res) => {
        if (res?.data?.statusCode === 200) {
          toast.success("Marked success");
          setIsEdit(-1);
          refetchData();
        }
      });
    } catch (error: any) {
      toast.error(error?.response?.data?.message, {
        autoClose: 3000,
      });
    }
  };

  return (
    <div className="writingContainer">
      <div>
        {dataWriting?.writingDetail?.map((el: any, index: number) => {
          return (
            <div>
              <Card sx={{ minWidth: 275 }} className="p-[20px] mt-[20px]">
                <div className="partContainer">
                  <div className="flex items-center">
                    <Typography className="partText">Part {el?.questionNumber}</Typography>
                    <Typography className="title">{el?.question?.title}</Typography>
                  </div>
                </div>
              </Card>
              <div className="answerContainer">
                <Card className="tipsContainer" sx={{ mr: 2 }}>
                  <div dangerouslySetInnerHTML={{ __html: el?.question?.tips }}></div>
                  <Typography className="text">{el?.question?.text}</Typography>
                  {el?.question?.image && <img alt="image" src={IMAGE_URL + el?.question?.image} />}
                  <Typography className="partText">Model answer</Typography>
                  <div dangerouslySetInnerHTML={{ __html: el?.question?.modelAnswer }}></div>
                </Card>
                <Card className="tipsContainer">
                  <Typography className="text">{el?.question?.studentAnswer}</Typography>
                  <div className="scoreContainer">
                    <Typography className="partText">Score:</Typography> &nbsp;
                    <input
                      value={isEdit === el?.questionId ? score : el?.score}
                      style={{ width: 50, height: 30 }}
                      onChange={(e: any) => setScore(e.target.value)}
                      disabled={isEdit !== el?.questionId}
                    />
                    {isEdit !== el?.questionId ? (
                      <BorderColorOutlinedIcon
                        sx={{ cursor: "grab", marginLeft: "10px" }}
                        onClick={() => setIsEdit(el?.questionId)}
                      />
                    ) : (
                      <div>
                        <CheckOutlinedIcon sx={{ color: "green", cursor: "grab" }} onClick={onSubmitScore} />
                        <CloseOutlinedIcon
                          sx={{ color: "red", cursor: "grab" }}
                          onClick={() => {
                            refetchData();
                            setIsEdit(-1);
                            setScore(el?.score);
                          }}
                        />
                      </div>
                    )}
                  </div>
                </Card>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Writing;
