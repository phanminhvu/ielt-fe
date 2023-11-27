import { yupResolver } from "@hookform/resolvers/yup";
import { Card, Typography } from "@mui/material";
import { AUDIO_URL, IMAGE_URL } from "constants/constants";
import { useForm } from "react-hook-form";
import "./styles.scss";
import * as yup from "yup";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import { useState } from "react";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import examServices from "services/examServices";
import { toast } from "react-toastify";

import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

export interface Props {
  dataSpeaking?: any;

  idGrade?: any;

  refetchData?: any;
}

const validationSchema = yup.object().shape({});

const Speaking = (props: Props) => {
  const { dataSpeaking, idGrade, refetchData } = props;
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
        {dataSpeaking?.speakingDetail?.map((el: any, index: number) => {
          return (
            <div>
              <Card sx={{ minWidth: 275 }} className="p-[20px] mt-[20px]">
                <div className="partContainer">
                  <div className="flex items-center">
                    <Typography className="partText">Part {el?.partNumber}</Typography>
                  </div>
                </div>
                {el?.groups?.map((group: any) => {
                  return (
                    <div>
                      {group?.questions?.map((items: any, indexScore: number) => {
                        return (
                          <div className="audioContainer">
                            <div className="flex-1 mb-[20px]">
                              <Typography className="text">{items?.question?.questionText}</Typography>
                              {items?.question?.questionAudio && (
                                <AudioPlayer
                                  preload="none"
                                  style={{
                                    borderRadius: "1rem",
                                    textAlign: "center",
                                    marginTop: 20,
                                    marginBottom: 20,
                                  }}
                                  src={`${AUDIO_URL}${items?.question?.questionAudio}`}
                                  onPlay={(e) => console.log("onPlay")}
                                  showJumpControls={false}
                                  loop={false}
                                  autoPlayAfterSrcChange={false}
                                />
                              )}
                            </div>
                            <div className="flex-1 ml-5 mb-[20px]">
                              <Typography className="text">Student answer</Typography>
                              {items?.question?.studentAnswerAudio && (
                                <AudioPlayer
                                  preload="none"
                                  style={{
                                    borderRadius: "1rem",
                                    textAlign: "center",
                                    marginTop: 20,
                                    marginBottom: 20,
                                  }}
                                  src={`${AUDIO_URL}${items?.question?.studentAnswerAudio}`}
                                  onPlay={(e) => console.log("onPlay")}
                                  showJumpControls={false}
                                  loop={false}
                                  autoPlayAfterSrcChange={false}
                                />
                              )}
                            </div>
                            <div className="scoreSpeakingContainer">
                              <Typography className="partText">Score:</Typography> &nbsp;
                              <input
                                value={isEdit === items?.questionId ? score : items?.score}
                                style={{ width: 50, height: 30 }}
                                onChange={(e: any) => setScore(e.target.value)}
                                disabled={isEdit !== items?.questionId}
                              />
                              {isEdit !== items?.questionId ? (
                                <BorderColorOutlinedIcon
                                  sx={{ cursor: "grab", marginLeft: "10px" }}
                                  onClick={() => setIsEdit(items?.questionId)}
                                />
                              ) : (
                                <div>
                                  <CheckOutlinedIcon sx={{ color: "green", cursor: "grab" }} onClick={onSubmitScore} />
                                  <CloseOutlinedIcon
                                    sx={{ color: "red", cursor: "grab" }}
                                    onClick={() => {
                                      refetchData();
                                      setIsEdit(-1);
                                      // if (items?.score) {
                                      //   setScore(items?.score);
                                      // } else {
                                      //   setScore(0);
                                      // }
                                    }}
                                  />
                                </div>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  );
                })}
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Speaking;
