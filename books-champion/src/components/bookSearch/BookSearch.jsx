import { Form } from "react-bootstrap";
import { useState } from "react";

const BookSearch = ({ onSearch }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleInputChange = (event) => {
    const { value } = event.target;
    setSearchValue(value);
    onSearch(value);
  };

  return (
    <>
      <Form.Group className="mb-3" controlId="searchBook">
        <Form.Control
          type="text"
          value={searchValue}
          placeholder="Buscar libro..."
          onChange={handleInputChange}
        />
      </Form.Group>
    </>
  );
};

export default BookSearch;
