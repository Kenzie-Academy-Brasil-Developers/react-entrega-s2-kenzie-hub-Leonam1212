import React from "react";
import { useState, useEffect } from "react"
import { useForm } from "react-hook-form"
import Button from "../../Components/Button"
import api from "../../Services/api"
// import Card from "../../Components/"
import { toast } from "react-toastify"
import { Container, InputContainer, CardsContainer} from "./style"

import { Link } from "react-router-dom"


const Dashboard = () => {
    return (
        <Container>
            <InputContainer>
                {/* Aqui vem os Inputs para adicionar um card de tecnologias */}
            </InputContainer>
            <CardsContainer>
                {/* Aqui serão renderizados os Cards*/}
            </CardsContainer>
        </Container>
    )
}
export default Dashboard