import HelpListening from "./Listening/HelpListening";
import { TypeExam } from "constants/enum";
import HelpReading from "./Reading/HelpReading";
//! Type
interface TestHelpI {
  typeExam?: string;
}
const TestHelp = (props: TestHelpI) => {
  //! State
  const { typeExam } = props;
  //! Function
  const showModalHelpExam = () => {
    if (TypeExam.LISTENING === typeExam) {
      return <HelpListening />;
    }
    if (TypeExam.READING === typeExam) {
      return <HelpReading />;
    }
  };
  //! Render
  return (
    <>
      <div
        style={{
          overflowY: "scroll",
          maxHeight: "420px",
        }}
      >
        {showModalHelpExam()}
      </div>
    </>
  );
};

export default TestHelp;
