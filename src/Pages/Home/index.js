import { useHistory, Redirect } from "react-router-dom"
import { Container, Content, ImageHome } from "./style"

const Home = ({authenticated}) => {

    return (
        <Container>
            <Content>      
                <h1>
                    Kenzie<span>HUB</span>
                </h1>
                <span>Junte-se a essa incrível comunidade!!</span>
                <div>
                    <button>Cadastre-se</button>
                    <button>Login</button>
                </div>
            </Content>


            <ImageHome src = "https://miro.medium.com/max/1400/1*U2OC6Jc2W28l_AWzh7jaKQ.jpeg"/>
        </Container>
    )
}
export default Home