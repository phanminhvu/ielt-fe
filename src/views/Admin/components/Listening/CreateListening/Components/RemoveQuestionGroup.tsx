import CommonStyles from "components/CommonStyles";

import React from "react";
import HighlightOffOutlinedIcon from "@mui/icons-material/HighlightOffOutlined";
import useToggleDialog from "hooks/useToggleDialog";

interface RemoveI {
  item: any;
  onDelete: (item: any) => void;
}
const RemoveQuestionGroup = ({ item, onDelete = () => {} }: any) => {
  //! State

  const RemoveModal = ({ item, onDelete }: RemoveI) => {
    //! State
    const { open: openRemove, toggle: toggleRemove, shouldRender: shouldRenderRemove } = useToggleDialog();
    //! Render

    return (
      <>
        {shouldRenderRemove && (
          <CommonStyles.Modal
            open={openRemove}
            toggle={toggleRemove}
            header="Delete Confirmation"
            content={<div>Are you sure you want to delete?</div>}
            footer={
              <React.Fragment>
                <CommonStyles.Button
                  variant="outlined"
                  sx={{ color: "black", fontWeight: "500" }}
                  onClick={toggleRemove}
                >
                  Cancel
                </CommonStyles.Button>
                <CommonStyles.Button
                  variant="contained"
                  style={{ background: "#9155FF" }}
                  // onClick={() => onDelete(item.id)}
                  onClick={() => onDelete(item.id)}
                >
                  Delete
                </CommonStyles.Button>
              </React.Fragment>
            }
          />
        )}

        <HighlightOffOutlinedIcon
          style={{ color: "#f44336", fontSize: "20px", cursor: "grab" }}
          onClick={toggleRemove}
        />
      </>
    );
  };
  //!Render
  return (
    <div>
      <RemoveModal item={item} onDelete={onDelete} />
    </div>
  );
};

export default RemoveQuestionGroup;
