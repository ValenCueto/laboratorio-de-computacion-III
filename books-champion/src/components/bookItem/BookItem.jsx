import PropTypes from "prop-types";
import { Button, Card } from "react-bootstrap";
import { Star, StarFill } from "react-bootstrap-icons";

const BookItem = ({
  title,
  author,
  rating,
  pages,
  imageUrl,
  onBookSelected,
}) => {
  const clickHandler = () => {
    onBookSelected(title);
  };

  return (
    <Card className="mx-3 mb-2" style={{ width: "22rem" }}>
      <Card.Img
        height={400}
        variant="top"
        alt="Portada de libro"
        src={
          imageUrl !== ""
            ? imageUrl
            : "https://images.pexels.com/photos/13650913/pexels-photo-13650913.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
      />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle>{author}</Card.Subtitle>
        <div>
          {rating && rating.length > 0 ? (
            <>
              {[...Array(rating.length)].map((_, index) => (
                <StarFill key={index} />
              ))}
              {[...Array(5 - rating.length)].map((_, index) => (
                <Star key={index} />
              ))}
            </>
          ) : (
            "No ha dejado puntaje"
          )}{" "}
        </div>
        <p>{pages} páginas</p>
        <Button onClick={clickHandler}>Seleccionar Libro</Button>
      </Card.Body>
    </Card>
  );
};

export default BookItem;

BookItem.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  pages: PropTypes.number,
  rating: PropTypes.array,
};
