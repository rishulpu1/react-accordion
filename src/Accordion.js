import AccordionItem from "./AccordionItem";
function Accordion({ data }) {
  return (
    <div className="accordion">
      {data.map((item, index) => {
        return (
          <AccordionItem
            number={index}
            title={item.title}
            content={item.text}
            key={item.title}
          />
        );
      })}
    </div>
  );
}

export default Accordion;
