import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { IMG_CDN } from "../Config";

function BasicExample(
  {
    cloudinaryImageId,
    name,
    locality,
    cuisines
  }
) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={IMG_CDN+ cloudinaryImageId}/>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
        {locality}{cuisines.join(", ")}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;