import React from "react";

type Props = {};

export const useModal = (props: Props) => {
  const [open, setOpen] = React.useState<boolean>(false);

  return [open, setOpen];
};
