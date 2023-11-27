import React from "react";
interface IntructionsToCandidatesI {
  styleListRule?: any;
}
const IntructionsToCandidatesListening = (props: IntructionsToCandidatesI) => {
  //! State
  const { styleListRule } = props;

  //! Render
  return (
    <ul style={{ ...styleListRule }}>
      <li>Answer all the questions.</li>
      <li>You can change your answers at any time during the test.</li>
    </ul>
  );
};

export default IntructionsToCandidatesListening;
