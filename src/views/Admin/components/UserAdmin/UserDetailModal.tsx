import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import useToggleDialog from "hooks/useToggleDialog";
import CommonStyles from "components/CommonStyles";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import useGetPartDetail from "hooks/UserManagement/useGetPartDetail";
import { useLocation } from "react-router-dom";
import { Typography } from "@mui/material";
interface TableCellActionsI {
  row: any;
}
export default function CommonActionMenu({ row }: any) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const [dataPartDetail, , , refetchData] = useGetPartDetail(row.id);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const TableCellActions = ({ row }: TableCellActionsI) => {
    //! State
    const { open: openInfo, toggle: toggleInfo, shouldRender: shouldRenderInfo } = useToggleDialog();
    //! Render
    return (
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        {/* Modal remove each row */}
        {shouldRenderInfo && (
          <CommonStyles.Modal
            open={openInfo}
            toggle={toggleInfo}
            header="User Information"
            content={
              <>
                <Typography variant="h5">Username: {dataPartDetail.username}</Typography>
                <Typography variant="h5">Email: {dataPartDetail.email}</Typography>
                <Typography variant="h5">Fullname: {dataPartDetail.fullname || ""}</Typography>
                <Typography variant="h5">UserType: {dataPartDetail.userType}</Typography>
              </>
            }
          />
        )}
        <MenuItem onClick={toggleInfo}>
          <InfoOutlinedIcon style={styles.iconEdit} /> Info
        </MenuItem>
        {/* <MenuItem onClick={toggleRemove}>
          <DeleteForeverOutlinedIcon style={styles.iconDelete} /> Delete
        </MenuItem> */}
      </Menu>
    );
  };

  return (
    <div>
      <Button
        id="demo-positioned-button"
        aria-controls={open ? "demo-positioned-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <MoreVertOutlinedIcon />
      </Button>
      <TableCellActions row={row} />
    </div>
  );
}

const styles = {
  iconEdit: {
    fontSize: 18,
    color: "#9155FF",
    marginRight: 10,
  },
  iconDelete: {
    fontSize: 18,
    color: "#F44335",
    marginRight: 10,
  },
};
