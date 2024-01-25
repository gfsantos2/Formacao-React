import { ButtonContainer } from "./styles";
import { IButtonProps } from "./types";

const Button = ({ title, enabled, onClick }: IButtonProps) => {
  return <ButtonContainer enabled={enabled} onClick={onClick}>{title}</ButtonContainer>;
};

export default Button;
