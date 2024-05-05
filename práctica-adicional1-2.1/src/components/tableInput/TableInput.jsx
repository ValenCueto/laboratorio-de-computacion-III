const TableInput = ({ legsQuantity, onLegsChange }) => {
  const changeLegsHandler = (event) => {
    onLegsChange(event.target.value);
  };

  return (
    <>
      <input type="number" value={legsQuantity} onChange={changeLegsHandler} />
    </>
  );
};

export default TableInput;
