import Text from "components/Typography/index";
// ! type
interface Props {
  children?: string;
  addCss?: any;
}
const TextDesc = (props: Props) => {
  const { children, addCss } = props;
  const text = {
    margin: "10px 0",
    fontSize: "12px",
  };
  return (
    <>
      <Text.DescSmall sx={{ ...text, addCss }}>{children}</Text.DescSmall>
    </>
  );
};
export default TextDesc;
