import AddIcon from "@mui/icons-material/Add";
import { Card, Grid, IconButton, InputBase, MenuItem, Select, SelectChangeEvent, Typography } from "@mui/material";
import CommonActionMenu from "components/CommonActionMenu";
import CommonDataGrid from "components/CommonDataGrid";
import CommonStyles from "components/CommonStyles";
import LoadingCircular from "components/CommonStyles/LoadingCircular/LoadingCircular";
import { RouteBase } from "constants/routeUrl";
import React from "react";
import { Link, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import useAccountManagement from "../../../hooks/AccountManagement/useAccountManagemet";
import accountService from "../../../services/accountService";

const AccountManagement = () => {
  const history = useHistory();
  const [search, setSearch] = React.useState("email");
  const [
    dataAccount,
    loading,
    error,
    refetchDataTable,
    metaPart,
    onPageChange,
    onPageSizeChange,
    onFilterUserName,
    onFilterEmail,
  ] = useAccountManagement();

  const onDeleteTest = async (item: any) => {
    try {
      await accountService.deleteAccount(item?.id);
      toast.success("Delete test success!");
      refetchDataTable();
    } catch (error) {
      toast.error("error");
    }
  };

  const debounce = <F extends (...args: any[]) => void>(func: F, delay: number) => {
    let timer: NodeJS.Timeout;
    return (...args: Parameters<F>) => {
      clearTimeout(timer);
      timer = setTimeout(() => func(...args), delay);
    };
  };

  const onSearchSelectChange = (event: SelectChangeEvent) => {
    setSearch(event.target.value as string);
  };

  const onSearchInputChange = debounce((text: string) => {
    if (search === "email") {
      onFilterEmail(text);
    } else if (search === "userName") {
      onFilterUserName(text);
    }
  }, 300);

  return (
    <div>
      <Grid container direction="row" justifyContent="center" alignItems="center">
        <Grid item>
          <IconButton sx={{ p: "10px" }} aria-label="menu">
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={search}
              onChange={onSearchSelectChange}
            >
              <MenuItem value={"email"}>Email</MenuItem>
              <MenuItem value={"userName"}>User Name</MenuItem>
            </Select>
          </IconButton>
          <InputBase
            style={{ width: "500px" }}
            sx={{ ml: 1, flex: 1 }}
            type={"text"}
            placeholder="Please enter "
            onChange={(e) => {
              // @ts-ignore
              onSearchInputChange(e.target.value as string);
            }}
          />
        </Grid>
      </Grid>
      <div style={{ textAlign: "end", marginBottom: 10 }}>
        <Link to={RouteBase.CreateAccountManagement}>
          <CommonStyles.Button loading={loading} style={{ background: "#9155FE" }} onClick={() => {}}>
            <AddIcon />
            Create Account
          </CommonStyles.Button>
        </Link>
      </div>

      {loading ? (
        <LoadingCircular />
      ) : (
        <Card>
          <CommonDataGrid
            columns={[
              {
                flex: 1,
                field: "username",
                renderHeader: () => <Typography>User name</Typography>,
              },
              {
                flex: 1,
                field: "email",
                renderHeader: () => <Typography>Email</Typography>,
              },
              {
                flex: 1,
                field: "fullname",
                renderHeader: () => <Typography>Full name</Typography>,
              },
              {
                flex: 1,
                field: "userType",
                renderHeader: () => <Typography>User Type</Typography>,
              },
              {
                flex: 1,
                field: "createdAt",
                renderHeader: () => <Typography>Create at</Typography>,
              },
              {
                flex: 1,
                field: "updatedAt",
                renderHeader: () => <Typography>Update at</Typography>,
              },
              {
                flex: 0.3,
                field: "action",
                filterable: false,
                hideSortIcons: true,
                disableColumnMenu: true,
                renderHeader: () => <Typography>Action</Typography>,
                renderCell: (items: any) => {
                  return (
                    <CommonActionMenu
                      onEdit={() => {
                        history.push({
                          pathname: RouteBase.UpdateAccountManagementWId(items?.row?.username),
                          search: `?id=${items?.id}`,
                        });
                      }}
                      onSubmitRemove={onDeleteTest}
                      row={items}
                    />
                  );
                },
              },
            ]}
            pagination={{
              page: metaPart?.page,
              pageSize: metaPart?.pageSize,
              totalRow: metaPart?.totalRow,
            }}
            loading={loading}
            checkboxSelection
            rows={dataAccount}
            onPageChange={onPageChange}
            onPageSizeChange={onPageSizeChange}
          />
        </Card>
      )}
    </div>
  );
};

export default AccountManagement;
