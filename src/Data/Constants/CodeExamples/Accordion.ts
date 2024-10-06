const accordionEx1 = `<Accordion title="Accordion Standard">
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam doloremque,
        voluptates, quos, quidem vel quibusdam voluptatum voluptatem quia iusto quas
        dolorem. Quisquam doloremque, voluptates, quos, quidem vel quibusdam voluptatum
        voluptatem quia iusto quas dolorem.
    </p>
</Accordion>
`;

const accordionEx2 = `{/* Accordion Variants by using string */}
<div className="w-1/5">
    <Accordion title="Accordion Info" variant={"info"}>
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam doloremque,
        voluptates, quos, quidem vel quibusdam voluptatum voluptatem quia iusto quas
        dolorem. Quisquam doloremque, voluptates, quos, quidem vel quibusdam
        voluptatum voluptatem quia iusto quas dolorem.
        </p>
    </Accordion>
</div>

{/* Accordion Variants by using Variants */}
<div className="w-1/5">
    <Accordion title="Accordion Success" variant={Variants.Success}>
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam doloremque,
        voluptates, quos, quidem vel quibusdam voluptatum voluptatem quia iusto quas
        dolorem. Quisquam doloremque, voluptates, quos, quidem vel quibusdam
        voluptatum voluptatem quia iusto quas dolorem.
        </p>
    </Accordion>
</div>
`;

export { accordionEx1, accordionEx2 };