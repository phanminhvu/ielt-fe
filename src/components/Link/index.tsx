import * as React from "react";
import { Link, LinkProps, NavLink } from "react-router-dom";

interface ILinkProps extends LinkProps {}

export default function LinkCustom(props: ILinkProps) {
  return (
    <NavLink style={{ textDecoration: "none" }} {...props}>
      {props.children}
    </NavLink>
  );
}
