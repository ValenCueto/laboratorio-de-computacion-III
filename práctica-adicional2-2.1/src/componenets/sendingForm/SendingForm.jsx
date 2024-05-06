import SendingRadio from "../sendingRadio/SendingRadio";
import { useState } from "react";

const SendingForm = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const onOptionSelected = (option) => {
    setSelectedOption(option);
  };

  return (
    <>
      <h2>Seleccione el tipo de envío</h2>
      <SendingRadio
        selectedOption={selectedOption}
        onOptionSelected={onOptionSelected}
      />
      {selectedOption && (
        <p>
          {selectedOption === "local" ? "No hay recargo" : "Tendrá recargo"}
        </p>
      )}
    </>
  );
};

export default SendingForm;
