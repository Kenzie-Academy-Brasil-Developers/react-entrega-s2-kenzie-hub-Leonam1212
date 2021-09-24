import { Container } from "./style";

const Button = ({ children, blackSchema = false, ...rest }) => {
  return (
    <Container blackSchema={blackSchema} type="button" {...rest}>
      {children}
    </Container>
  );
};

export default Button;
