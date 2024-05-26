import Card from "react-bootstrap/Card";
import Tags from "./Tags";
const MyCard = (props) => {
  return (
    <>
      <Card style={{ width: "18rem", margin: "15px" }}>
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>{props.text}</Card.Text>
        </Card.Body>
        <div className="mt-auto">
          <Tags color={props.bcolor} text={props.btext} />
        </div>
      </Card>
    </>
  );
};
export default MyCard;
