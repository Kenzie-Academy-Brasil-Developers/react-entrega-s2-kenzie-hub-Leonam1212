import React from "react";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Button from "../../Components/Button";
import api from "../../Services/api";
import Card from "../../Components/Card";
import { toast } from "react-toastify";
import { Container, InputContainer, CardsContainer } from "./style";
import {
  AppBar,
  Toolbar,
  MenuItem,
  TextField,
  FormControl,
} from "@material-ui/core";
import { Link, Redirect } from "react-router-dom";
import Input from "../../Components/Input";
import { SiReact, SiOpslevel } from "react-icons/si";
import { AiFillHome } from "react-icons/ai";
const Dashboard = ({ authenticated }) => {
  const [card, setCard] = useState([]);

  const [token] = useState(
    JSON.parse(localStorage.getItem("@KenzieHub:token")) || ""
  );
  const [user] = useState(
    JSON.parse(localStorage.getItem("@KenzieHub:user")) || ""
  );

  const { register, handleSubmit } = useForm();

  const loadCard = () => {
    api
      .get(`/users/${user}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          completed: false,
        },
      })
      .then((response) => setCard(response.data.techs))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    loadCard();
  }, []);

  console.log(card);
  const onSubmitFunction = (data) => {
    if (!data) {
      return toast.error("Complete o campo para enviar a tarefa");
    }
    api
      .post("/users/techs", data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => loadCard());
  };

  const handleRemoved = (id) => {
    const newCards = card.filter((card) => card.id !== id);
    api
      .delete(`/users/techs/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => setCard(newCards));
  };

  if (!authenticated) {
    return <Redirect to="login" />;
  }

  return (
    <Container>
      <AppBar>
        <Toolbar>
          <MenuItem>
            <span>
              <AiFillHome />
            </span>
          </MenuItem>
          <MenuItem>
            Kenzie<span>HUB</span>
          </MenuItem>
        </Toolbar>
      </AppBar>
      <InputContainer onSubmit={handleSubmit(onSubmitFunction)}>
        <section>
          <Input
            icon={SiReact}
            Placeholder="Nova tecnologia"
            name="title"
            register={register}
          />
          <Input
            icon={SiOpslevel}
            Placeholder="Nível - Ex.: Iniciante, Intermediário, Avançado"
            name="status"
            register={register}
          />
          <Button type="submit">Adicionar</Button>
        </section>
      </InputContainer>
      <CardsContainer>
        {card.map((card) => (
          <Card
            key={card._id}
            title={card.title}
            status={card.status}
            onClick={() => {
              handleRemoved(card.id);
            }}
          />
        ))}
      </CardsContainer>
    </Container>
  );
};
export default Dashboard;
