import { useState } from "react";

function AccordionItem({ number, title, content }) {
  const [isOpen, setIsOpen] = useState(false);
  function openHandle() {
    setIsOpen((isOpen) => !isOpen);
  }
  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={openHandle}>
      <p className="number">{number < 9 ? `0${number + 1}` : number}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "- " : "+"}</p>
      {isOpen && <div className="content-box">{content}</div>}
    </div>
  );
}

export default AccordionItem;
