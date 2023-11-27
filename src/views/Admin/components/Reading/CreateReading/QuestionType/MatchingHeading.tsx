import TinyMceCommon from "components/TinyMceCommon";
import React, { useRef } from "react";

const MatchingHeading = () => {
  const matchingRef = useRef<any>();
  return (
    <>
      <TinyMceCommon initialValue="Matching heading" ref={matchingRef} disabled={true} />

      {/* {openModal.type !== "detailQuestion" && (
        <div className="text-end">
          <AddCircleOutlineIcon className="text-[#9155FF] cursor-grab mt-[20px]" onClick={onAddQuestion} />
        </div>
      )}
      {fields.map((field, index) => {
        return (
          <div className="flex items-end justify-between mt-2">
            <InputCommon
              control={control}
              id="standard-basic"
              label="Section"
              variant="standard"
              name={`questions[${index}].questionText`}
              disabled={openModal.type === "detailQuestion"}
            />
            <InputCommon
              control={control}
              id="standard-basic"
              label="Answer"
              variant="standard"
              name={`questions[${index}].answer`}
              disabled={openModal.type === "detailQuestion"}
              style={{ marginLeft: 20 }}
            />
            {fields.length > 1 && openModal.type !== "detailQuestion" && (
              <RemoveCircleOutlineIcon
                className="text-[#F44335] cursor-grab ml-[20px]"
                onClick={() => onRemoveQuestion(index)}
              />
            )}
          </div>
        );
      })} */}
    </>
  );
};
export default MatchingHeading;
