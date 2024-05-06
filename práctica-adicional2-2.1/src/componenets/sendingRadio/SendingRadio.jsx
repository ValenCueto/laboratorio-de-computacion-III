const SendingRadio = ({ onOptionSelected, selectedOption }) => {
  const handleOptionChange = (event) => {
    onOptionSelected(event.target.value);
  };

  return (
    <>
      <label htmlFor="local">Reitro en el local</label>
      <input
        type="radio"
        id="local"
        value="local"
        checked={selectedOption === "local"}
        onChange={handleOptionChange}
      />
      <br />
      <label htmlFor="express">Envío express</label>
      <input
        type="radio"
        id="express"
        value="express"
        checked={selectedOption === "express"}
        onChange={handleOptionChange}
      />
      <br />
      <label htmlFor="">Envío común</label>
      <input
        type="radio"
        id="common"
        value="common"
        checked={selectedOption === "common"}
        onChange={handleOptionChange}
      />
    </>
  );
};

export default SendingRadio;
