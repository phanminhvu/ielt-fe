import Text from "components/Typography/index";
// ! type
interface Props {
  children?: string;
  addCss?: object;
}
const Title = (props: Props) => {
  const { children, addCss } = props;
  const titleCss = {
    fontWeight: 700,
    margin: "10px 0",
  };
  return (
    <>
      <Text.DescSmall sx={{ ...titleCss, ...addCss }}>{children}</Text.DescSmall>
    </>
  );
};
export default Title;
