import BlockIcon from "@mui/icons-material/Block";
import SaveIcon from "@mui/icons-material/Save";
import { Box, Button, Card, Grid, Stack, Typography } from "@mui/material";
import ButtonCancel from "components/Button/ButtonCancel";
import ButtonSave from "components/Button/ButtonSave";
import SelectField from "components/CustomField/SelectField";
import InputCommon from "components/Input";
import useGetParts from "hooks/QuestionBank/Listening/useGetParts";
import useGetPartReading from "hooks/QuestionBank/Reading/useGetPartReading";
import useGetDetailTest from "hooks/TestBank/useGetDetailTest";
import MTest from "models/TestBank/Test.model";
import { useCallback, useEffect, useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { useHistory, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import testBankService from "services/testBankService";
import "./styles.scss";

const partListening = [1, 2, 3, 4];
const partReading = [1, 2, 3];
// const partListening = [0, 1, 2, 3];
// const partReading = [0, 1, 2];
export interface Props {
  openCreateScreen: {
    type: string;
  };
}

const CreateTest = (props: Props) => {
  //!State
  const { openCreateScreen } = props;
  const history = useHistory();
  const { search } = useLocation();
  const id = search.split("=")[1];
  const { control, setValue, handleSubmit, reset, getValues } = useForm({});
  const [listeningIds, setListeningIds] = useState<any>({});
  const [readingIds, setReadingIds] = useState<any>({});

  const {
    data: dataListening,
    loading,
    error,
    refetchDataTable,
    meta: metaPart,
    onPageChange,
    onPageSizeChange,
  } = useGetParts();
  const [dataParts, , , , , ,] = useGetPartReading();
  const [dataTestDetail, convertListening, convertReading, , , refetchData] = useGetDetailTest(id);

  //! Function

  const resetAsyncForm = useCallback(
    async (data: any) => {
      setListeningIds(data.partNumberListening);
      setReadingIds(data.partNumberReading);
      reset({
        examName: data?.examName,
        partNumberListening: data.partNumberListening,
        partNumberReading: data.partNumberReading,
      });
    },
    [reset]
  );

  useEffect(() => {
    if (dataTestDetail?._id) {
      const initialData = {
        examName: dataTestDetail.examName,
        partNumberListening: dataTestDetail.listeningIds,
        partNumberReading: dataTestDetail.readingIds,
      };
      resetAsyncForm(initialData);
    }
  }, [dataTestDetail?._id]);

  const filterListening = (partNumber: number) => {
    const convertSelectPartListening = dataListening
      ?.filter((el: any) => el?.partNumber === partNumber)
      ?.map((el: any) => {
        return { label: el?.partTitle, value: el?.id };
      });
    return convertSelectPartListening;
  };
  const filterReading = (partNumber: number) => {
    const convertSelectPartListening = dataParts
      ?.filter((el: any) => el?.partNumber === partNumber)
      ?.map((el: any) => {
        return { label: el?.passageTitle, value: el?.id };
      });
    return convertSelectPartListening;
  };

  const getListeningIds = (id: string, partNumber: number) => {
    const newObj = { ...listeningIds };
    newObj[`${partNumber}`] = id;
    setListeningIds(newObj);
  };

  const getReadingIds = (id: string, partNumber: number) => {
    const newObj = { ...readingIds };
    // newObj[`part${partNumber}`] = id;
    newObj[`${partNumber}`] = id;
    setReadingIds(newObj);
  };

  const onSubmit = async (data: any) => {
    if (openCreateScreen.type === "create") {
      try {
        const body = {
          examName: data?.examName,
          readingIds: Object.values(readingIds || {}),
          listeningIds: Object.values(listeningIds || {}),
        };

        const response = await testBankService.postCreateTest(body);

        if (response.data?.statusCode === 200) {
          toast.success("Create test success");
          history.goBack();
        }
      } catch (error: any) {
        toast.error(error?.response?.data?.message, {
          autoClose: 3000,
        });
      }
    }
    if (openCreateScreen.type === "update") {
      try {
        const body = {
          examName: data?.examName,
          readingIds: Object.values(readingIds || {}),
          listeningIds: Object.values(listeningIds || {}),
        };

        const response = await testBankService.putUpdateTest(id, body);

        if (response.data?.statusCode === 200) {
          toast.success("Update test success");
          history.goBack();
        }
      } catch (error: any) {
        toast.error(error?.response?.data?.message, {
          autoClose: 3000,
        });
      }
    }
  };

  //!Render

  const renderButton = () => {
    return (
      <Stack spacing={2} direction="row" className="justify-center mt-[14px]">
        <ButtonSave type="submit" icon={<SaveIcon sx={{ fontSize: "20px" }} />} title="Save" />
        <ButtonCancel icon={<BlockIcon sx={{ fontSize: "20px" }} />} onClick={() => history.goBack()} />{" "}
      </Stack>
    );
  };

  const renderPartReading = (partNumber: number) => {
    return (
      <div className="partHeader">
        <Typography className="partName">Part: {partNumber}</Typography>
        <SelectField
          control={control}
          setValue={setValue}
          name={`partNumberReading[${partNumber - 1}]`}
          options={filterReading(partNumber)}
          onChangeExtra={(e: any) => {
            getReadingIds(e.value, partNumber - 1);
          }}
        />
      </div>
    );
  };

  const renderPartListening = (partNumber: number) => {
    return (
      <div className="partHeader">
        <Typography className="partName">Part: {partNumber}</Typography>
        <SelectField
          control={control}
          setValue={setValue}
          name={`partNumberListening[${partNumber - 1}]`}
          options={filterListening(partNumber)}
          onChangeExtra={(e: any) => {
            getListeningIds(e.value, partNumber - 1);
          }}
        />
      </div>
    );
  };

  return (
    <form noValidate onSubmit={handleSubmit((data) => onSubmit(data))} autoComplete="off">
      <div>
        <Card className="topicHeader">
          <Typography className="topicName">TOPIC:</Typography>
          <InputCommon name="examName" control={control} id="standard-basic" variant="standard" className="inputName" />
        </Card>
        <div className="listeningContainer">
          <Typography className="listening">LISTENING</Typography>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              {partListening?.map((el: number) => (
                <Grid item xs={6}>
                  <div className="partContainer">{renderPartListening(el)}</div>
                </Grid>
              ))}
            </Grid>
          </Box>
        </div>
        <div className="listeningContainer">
          <Typography className="listening">READING</Typography>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              {partReading?.map((el: number) => (
                <Grid item xs={6}>
                  <div className="partContainer">{renderPartReading(el)}</div>
                </Grid>
              ))}
            </Grid>
          </Box>
        </div>
        {renderButton()}
      </div>
    </form>
  );
};

export default CreateTest;
