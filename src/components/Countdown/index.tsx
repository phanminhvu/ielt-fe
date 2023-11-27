import Countdown from "react-countdown";

export const CountDowns = ({ secondsPass }: any) => {
  const renderer = ({ minutes, seconds, completed }: any) => {
    return (
      <span style={{ textAlign: "center", fontSize: 30 }}>
        {" "}
        {minutes}:{seconds}
      </span>
    );
  };

  return <Countdown date={Date.now() + secondsPass} renderer={renderer} />;
};
