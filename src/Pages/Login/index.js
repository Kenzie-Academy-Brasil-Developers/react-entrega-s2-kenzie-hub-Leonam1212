import React from "react";
import { TextField } from "@material-ui/core";
import { Container, Background, Content, AnimationContainer } from "./style";
import { Link, Redirect, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "../../Components/Button";
import { toast } from "react-toastify";
import api from "../../Services/api";
const Login = ({ authenticated }) => {
  const history = useHistory();

  const schema = yup.object().shape({
    email: yup.string().email("Email invalido").required("Campo obrigatório!"),
    password: yup
      .string()
      .min(6, "Minimo de 6 digitos")
      .required("Campo obrigatório!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitFunction = (data) => {
    api
      .post("/sessions", data)
      .then((response) => {
        const { token, user } = response.data;
        console.log(response.data);
        localStorage.setItem("@KenzieHub:token", JSON.stringify(token));
        localStorage.setItem("@KenzieHub:user", JSON.stringify(user.id));
        return history.push("/dashboard");
      })
      .catch((err) => toast.error("Email ou Senha invalidos"));
  };

  if (authenticated) {
    return <Redirect to="dashboard" />;
  }
  return (
    <Container>
      <Content>
        <AnimationContainer>
          <form onSubmit={handleSubmit(onSubmitFunction)}>
            <h1>
              Kenzie<span>HUB</span>
            </h1>
            <div>
              <TextField
                label="E-mail"
                margin="normal"
                variant="outlined"
                size="medium"
                color="primary"
                {...register("email")}
                error={!!errors.email}
                helperText={errors.email?.message}
              />
            </div>
            <div>
              <TextField
                label="Senha"
                margin="normal"
                variant="outlined"
                size="medium"
                color="primary"
                type="password"
                {...register("password")}
                error={!!errors.password}
                helperText={errors.password?.message}
              />
            </div>
            <Button type="submit">Login</Button>
            <p>
              Não possui uma conta? Faça seu <Link to="/signup">Cadastro</Link>
            </p>
          </form>
        </AnimationContainer>
      </Content>
      <Background />
    </Container>
  );
};
export default Login;
