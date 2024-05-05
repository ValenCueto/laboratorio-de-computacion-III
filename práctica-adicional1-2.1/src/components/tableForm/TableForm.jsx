import { useState } from "react";
import TableInput from "../tableInput/TableInput";

const TableForm = () => {
  const [legs, setLegs] = useState("");

  const legsChangeHandler = (legs) => {
    setLegs(legs);
  };

  return (
    <>
      <h2>Ingrese la cantidad de patas que tendrá la mesa</h2>
      <TableInput legsQuantity={legs} onLegsChange={legsChangeHandler} />
      {legs && <p>{legs !== "4" ? "Mesa inestable" : "Mesa correcta"}</p>}
    </>
  );
};

export default TableForm;
