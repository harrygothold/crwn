import React from "react";
import { CustomButtonContainer } from "./Custom-Button.styles";

const CustomButton = props => (
  <CustomButtonContainer {...props}>{props.children}</CustomButtonContainer>
);

export default CustomButton;
