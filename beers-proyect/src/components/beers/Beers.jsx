import { useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";

const beersList = [
  {
    id: 1,
    beerName: "American",
    beerStyle: "IPA",
    price: 3,
    available: true,
  },
  {
    id: 2,
    beerName: "Argenta",
    beerStyle: "IPA",
    price: 4,
    available: false,
  },
  {
    id: 3,
    beerName: "Irish",
    beerStyle: "Red",
    price: 4,
    available: true,
  },
  {
    id: 4,
    beerName: "Scotish",
    beerStyle: "Red",
    price: 3,
    available: true,
  },
  {
    id: 5,
    beerName: "DeEssoCiTratta",
    beerStyle: "APA",
    price: 3,
    available: true,
  },
  {
    id: 6,
    beerName: "Santa APA",
    beerStyle: "APA",
    price: 3,
    available: true,
  },
  {
    id: 7,
    beerName: "German",
    beerStyle: "Pilsen",
    price: 1,
    available: true,
  },
  {
    id: 8,
    beerName: "London Porter",
    beerStyle: "Porter",
    price: 2,
    available: false,
  },
  {
    id: 9,
    beerName: "Scotish ALE",
    beerStyle: "Red",
    price: 5,
    available: false,
  },
];

const Beers = () => {
  const [name, setName] = useState("");
  const [style, setStyle] = useState("");
  const [price, setPrice] = useState("");
  const [available, setAvailable] = useState("");

  const changeNameHandler = (event) => {
    setName(event.target.value);
  };
  const changeStyleHandler = (event) => {
    setStyle(event.target.value);
  };
  const changePriceHandler = (event) => {
    setPrice(event.target.value);
  };
  const changeAvailable = (event) => {
    setAvailable(event.target.value);
  };

  const submitBeerHandler = (event) => {
    event.preventDefault();
    const newBeer = {
      name,
      style,
      price,
      available,
    };
    console.log(newBeer);
    setName("");
    setStyle("");
    setPrice("");
    setAvailable("");
  };

  const [priceDollar, setPriceDollar] = useState(1000);
  const changeDollar = (event) => {
    setPriceDollar(event.target.value);
  };

  const [buttonView, setButtonView] = useState(false);
  const clickHandler = () => {
    setButtonView(!buttonView);
  };

  const beersMapped = beersList.map((beer) => (
    <>
      <ul key={beer.id}>
        <li>Nombre: {beer.beerName}</li>
        <li>Estilo: {beer.beerStyle}</li>
        <li>Precio: {beer.price * priceDollar}</li>
        <li>{beer.available ? "Esta disponible" : "No esta disponible"}</li>
      </ul>
    </>
  ));
  return (
    <>
      <button value={buttonView} onClick={clickHandler}>
        Mostrar/Ocultar
      </button>
      {buttonView ? (
        <input
          type="number"
          onChange={changeDollar}
          placeholder="Nuevo valor del dolar"
        />
      ) : (
        ""
      )}
      {beersMapped}
      <Card className="m-4 w-50" bg="success">
        <Card.Body>
          <Form className="text-white" onSubmit={submitBeerHandler}>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="beerName">
                  <Form.Label>Nombre:</Form.Label>
                  <Form.Control
                    type="text"
                    required
                    value={name}
                    placeholder="Ingrese el nombre de la creveza"
                    onChange={changeNameHandler}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="beerStyle">
                  <Form.Label>Estilo:</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ingrese el estilo de la cerveza"
                    onChange={changeStyleHandler}
                    value={style}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="beerPrice">
                  <Form.Label>Precio:</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Ingrese el precio de la cerveza"
                    onChange={changePriceHandler}
                    value={price}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="beerAvailable">
                  <Form.Label>Disponibilidad:</Form.Label>
                  <Form.Control
                    type="checkbox"
                    placeholder="Ingrese la disponibilidad de la cerveza"
                    onChange={changeAvailable}
                    value={available}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row className="justify-content-between"></Row>
            <Row className="justify-content-end">
              <Col md={3} className="d-flex justify-content-end">
                <Button variant="primary" type="submit">
                  Agregar cerveza
                </Button>
              </Col>
            </Row>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
};

export default Beers;
