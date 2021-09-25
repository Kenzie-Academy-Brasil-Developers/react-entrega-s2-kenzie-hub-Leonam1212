import React from "react";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Button from "../../Components/Button";
import api from "../../Services/api";
// import Card from "../../Components/"
import { toast } from "react-toastify";
import { Container, InputContainer, CardsContainer } from "./style";
import {
  AppBar,
  Toolbar,
  MenuItem,
  TextField,
  FormControl,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import Input from "../../Components/Input";
import { SiReact, SiOpslevel } from "react-icons/si";
const Dashboard = () => {
  const [task, setTask] = useState([]);
  const [token] = useState(
      JSON.parse(localStorage.getItem("@KenzieHub:token")) || ""
  )
  const { register, handleSubmit } = useForm();
  return (
    <Container>
      <AppBar>
        <Toolbar>
          <MenuItem>
            Kenzie<span>HUB</span>
          </MenuItem>
        </Toolbar>
      </AppBar>
      <InputContainer>
        <section>
          <Input
            icon={SiReact}
            Placeholder="Nova tecnologia"
            name="tech"
            register={register}
          />
          <Input
            icon={SiOpslevel}
            Placeholder="Nível - Ex.: Iniciante, Intermediário, Avançado"
            name="nivelTech"
            register={register}
          />
          <Button type="submit">Adicionar</Button>
        </section>
      </InputContainer>
    </Container>
  );
};
export default Dashboard;
