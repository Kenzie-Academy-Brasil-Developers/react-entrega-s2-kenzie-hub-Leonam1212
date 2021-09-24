import { useHistory, Redirect } from "react-router-dom";
import { Container, Content, ImageHome } from "./style";
import Button from "../../Components/Button/";
const Home = ({ authenticated }) => {

  const history = useHistory()
  const handleNavigation = (path) => {
      return history.push(path)
  }  

//   if(authenticated) {
//       return <Redirect to = "dashboard" />
//   }
  return (
    <Container>
      <Content>
        <h1>
          Kenzie<span>HUB</span>
        </h1>
        <span>Junte-se a essa incrível comunidade!!</span>
        <div>
          <Button onClick ={()=> handleNavigation("/signup")}>Cadastre-se</Button>
          <Button onClick ={()=> handleNavigation("/login")} blackSchema>Login</Button>
        </div>
      </Content>

      <ImageHome src="https://miro.medium.com/max/1400/1*U2OC6Jc2W28l_AWzh7jaKQ.jpeg" />
    </Container>
  );
};
export default Home;
