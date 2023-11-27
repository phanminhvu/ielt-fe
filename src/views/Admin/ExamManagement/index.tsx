import { Button, Card, Typography, Grid } from "@mui/material";
import CommonDataGrid from "components/CommonDataGrid";
import LoadingCircular from "components/CommonStyles/LoadingCircular/LoadingCircular";
import { RouteBase } from "constants/routeUrl";
import useExamManagement from "hooks/examManagement/useExamManagement";
import moment from "moment";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { default as testService } from "services/testBankService";
import * as XLSX from "xlsx";
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import SelectField from "../../../components/CustomField/SelectField";
const styles = {
  titleTable: {
    fontSize: 14,
    fontWeight: "bold",
  },
  buttonOpenModal: {
    borderRadius: 20,
    background: "#7C89CC",
  },
};
const ExamManagement = () => {
  const history = useHistory();
  const [dataExam, loading, error, refetchDataTable, metaPart, onPageChange, onPageSizeChange , onFilterName, onFilterCode] = useExamManagement();


  const onSearchSelectChange = (event: SelectChangeEvent) => {
    setSearch(event.target.value as string);
  };

  const onSearchInputChange = ( text : string ) => {
    const highlight = (text : string)=> {
      console.log(text, 'text')
      if(search === 'code') {
        var inputText =  search === 'code' ?  document.querySelectorAll(  '[data-field=msv]' ) : document.querySelectorAll('[data-field=fullname]');
        // @ts-ignore
        for (let el of inputText) {
          var innerHTML = el.innerHTML;
          var index = innerHTML.indexOf(text);
          if (index >= 0) {
            innerHTML = innerHTML.substring(0,index) + "<span class='highlight'>" + innerHTML.substring(index,index+text.length) + "</span>" + innerHTML.substring(index + text.length);
            // @ts-ignore
            el.innerHTML = innerHTML;
          }
        }
      }



    }
    highlight(text)
    if (search === 'code' ) {
      const code = parseInt(text)
      onFilterCode(code)
    }
    else if( search === 'name') {
      onFilterName(text)
    }


  };

  const rows = dataExam?.map((el: any) => ({
    id: el?.id,
    msv: el?.userDetail?.username,
    fullname: el?.userDetail?.fullname,
    email: el?.userDetail?.email,
    finishedDate: moment(el?.finishedDate).format("DD-MM-YYYY"),
    status: el?.status,
  }));
  const [openModal, setOpenModal] = useState({});
  const [search, setSearch] = React.useState('code');
  const exportExcel = async (item: any) => {
    const result = await testService.getDataExportExcel(item.id);
    console.log(result?.data?.data, 'result')
    const ws = XLSX.utils.json_to_sheet(result?.data?.data, {
      skipHeader: true,
    });

    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Ket_qua");
    XLSX.writeFile(wb, `Ket_qua_${moment().valueOf()}.xlsx`);
  };





  return (
    <>
      <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
      >
        <Grid item>
        <IconButton sx={{ p: '10px' }} aria-label="menu">
          <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={search}
              onChange={onSearchSelectChange}
          >
            <MenuItem value={'code'}>Code</MenuItem>
            <MenuItem value={'name'}>Full Name</MenuItem>
          </Select>
        </IconButton>
        <InputBase
            style={{width: '500px'}}
            sx={{ ml:1, flex: 1 }}
            type= {search === 'code' ? 'number' : 'text'}
            placeholder="Please enter student code"
            onChange = { (e) => {
                // @ts-ignore
              onSearchInputChange(e.target.value as string)
            }}
        />
          </Grid>
      </Grid>

      {loading ? (
        <LoadingCircular />
      ) : (
        <Card>
          <CommonDataGrid
            columns={[
              {
                flex: 1,
                field: "msv",
                renderHeader: () => <Typography style={styles.titleTable}>Student Code</Typography>,
              },
              {
                flex: 1,
                field: "fullname",
                renderHeader: () => <Typography style={styles.titleTable}>Full name</Typography>,
              },
              {
                flex: 1,
                field: "email",
                renderHeader: () => <Typography style={styles.titleTable}>Email</Typography>,
              },
              {
                flex: 0.7,
                field: "exam",
                renderHeader: () => <Typography style={styles.titleTable}>View exam</Typography>,
                renderCell: (items: any) => {
                  return (
                    <Button
                      variant="contained"
                      style={styles.buttonOpenModal}
                      onClick={() =>
                        history.push({
                          pathname: RouteBase.ViewExamId(items?.row?.email),
                          search: `?id=${items?.id}`,
                        })
                      }
                    >
                      View exam
                    </Button>
                  );
                },
              },
              {
                flex: 0.7,
                field: "Export excel",
                renderHeader: () => <Typography style={styles.titleTable}>Export excel</Typography>,
                renderCell: (items: any) => {
                  return (
                    <Button variant="contained" style={styles.buttonOpenModal} onClick={() => exportExcel(items)}>
                      Export excel
                    </Button>
                  );
                },
              },
              {
                flex: 1,
                field: "finishedDate",
                renderHeader: () => <Typography style={styles.titleTable}>Finished date</Typography>,
              },
              {
                flex: 1,
                field: "status",
                renderHeader: () => <Typography style={styles.titleTable}>Status</Typography>,
              },
            ]}
            checkboxSelection={false}
            pagination={{
              page: metaPart?.page,
              pageSize: metaPart?.pageSize,
              totalRow: metaPart?.totalRow,
            }}
            loading={loading}
            rows={rows}
            // onPageChange={onPageChange}
            // onPageSizeChange={onPageSizeChange}
          />
        </Card>
      )}
    </>
  );
};

export default ExamManagement;
