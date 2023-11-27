import BlockIcon from "@mui/icons-material/Block";
import SaveIcon from "@mui/icons-material/Save";
import { Stack, Typography } from "@mui/material";
import ButtonCancel from "components/Button/ButtonCancel";
import ButtonSave from "components/Button/ButtonSave";
import InputCommon from "components/Input";
import { useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useHistory, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import SelectField from "../../../../components/CustomField/SelectField";
import { TypeMapUserType, UserType } from "../../../../constants/constants";
import useGetAccountDetail from "../../../../hooks/AccountManagement/useGetAccountDetail";
import accountService from "../../../../services/accountService";
import "./styles.scss";

export interface Props {
  openCreateScreen: {
    type: string;
  };
}

const CreateAccount = (props: Props) => {
  //!State
  const { openCreateScreen } = props;
  const history = useHistory();
  const { search } = useLocation();
  const id = search.split("=")[1];
  console.log(`[Debug - id]:`, id);
  const { control, setValue, handleSubmit, reset, getValues } = useForm({});

  const [accountDetail] = useGetAccountDetail(id);

  //! Function

  const resetAsyncForm = useCallback(
    async (data: any) => {
      reset({
        username: data?.username,
        email: data?.email,
        fullname: data?.fullname,
        userType: data.userType,
        password: data?.password,
      });
    },
    [reset]
  );

  useEffect(() => {
    if (accountDetail?._id) {
      const initialData = {
        username: accountDetail?.username,
        email: accountDetail?.email,
        fullname: accountDetail?.fullname,
        userType: accountDetail.userType,
        password: accountDetail?.password,
      };
      console.log(`[Debug - initialData]:`, initialData);
      resetAsyncForm(initialData);
    }
  }, [accountDetail?._id]);

  const onSubmit = async (data: any) => {
    if (openCreateScreen.type === "create") {
      try {
        const body = {
          username: data?.username,
          email: data?.email,
          fullname: data?.fullname,
          userType: data?.userType,
          password: data?.password,
        };

        const response = await accountService.postCreateAccount(body);

        if (response.data?.statusCode === 200) {
          toast.success("Create account success");
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
          username: data?.username,
          email: data?.email,
          fullname: data?.fullname,
          userType: data?.userType,
          password: data?.password,
        };

        const response = await accountService.patchUpdateAccount(id, body);

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

  return (
    <form noValidate onSubmit={handleSubmit((data) => onSubmit(data))} autoComplete="off">
      <div>
        <div className="cardContainer">
          <div className="flex-1">
            <Typography className="username">User name:</Typography>
            <InputCommon
              name="username"
              control={control}
              id="standard-basic"
              variant="standard"
              className="inputName"
            />
          </div>
          <div className="flex-1 ml-[20px]">
            <Typography className="fullname">Full name</Typography>
            <InputCommon
              name="fullname"
              control={control}
              id="standard-basic"
              variant="standard"
              className="inputName"
            />
          </div>
        </div>
        <div className="cardContainer">
          <div className="flex-1">
            <Typography className="email">Email:</Typography>
            <InputCommon name="email" control={control} id="standard-basic" variant="standard" className="inputName" />
          </div>
          {openCreateScreen.type === "create" && (
            <div className="flex-1 ml-[20px]">
              <Typography className="password">Password</Typography>
              <InputCommon
                name="password"
                control={control}
                id="standard-basic"
                variant="standard"
                className="inputName"
              />
            </div>
          )}
        </div>
        <div className="cardContainer">
          <div className="flex-1">
            <Typography className="userType">User type:</Typography>
            <SelectField
              control={control}
              setValue={setValue}
              name={"userType"}
              options={Object.entries(UserType).map(([key, value]) => {
                return { label: TypeMapUserType[key as UserType], value: key };
              })}
            />
          </div>
        </div>

        {renderButton()}
      </div>
    </form>
  );
};

export default CreateAccount;
