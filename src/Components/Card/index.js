import { Container } from "./style";
import { FiCalendar } from "react-icons/fi";
import {GiLevelFourAdvanced} from "react-icons/gi"
import Button from "../Button";
import { SiReact } from "react-icons/si";
const Card = ({ title, status, onClick }) => {
  return (
    <Container>
      <figure>
        <img src = "https://picsum.photos/300"/>
      </figure>
      <div>
        <span>
          {title}
        </span>
        <p>
           {status}
        </p>
      </div>
   
      <Button onClick={onClick}>Remove</Button>
    </Container>
  );
};
export default Card;
