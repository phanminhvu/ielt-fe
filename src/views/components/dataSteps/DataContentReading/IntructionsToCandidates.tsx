import React from "react";

//! type
interface IntructionsToCandidatesI {
  styleListRule?: any;
}

const IntructionsToCandidates = (props: IntructionsToCandidatesI) => {
  //! State
  const { styleListRule } = props;

  //! Render
  return (
    <>
      <ul style={{ ...styleListRule, marginTop: "16px", marginBottom: "16px" }}>
        <li>Answer all the questions.</li>
        <li>You can change your answers at any time during the test.</li>
      </ul>
    </>
  );
};

export default IntructionsToCandidates;
