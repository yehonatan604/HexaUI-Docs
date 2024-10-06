import { Flex, FlexDir, FlexTypes, Accordion, Variants } from "rainbow-plus-ui/src/";

const AccordionExamples = () => {
  return (
    <Flex
      direction={FlexDir.Col}
      justify={FlexTypes.Center}
      align={FlexTypes.Center}
      className="m-auto mb-5 gap-4 md:w-1/5 max-md:w-3/5"
    >
      <Accordion title="Accordion Standard">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam doloremque,
          voluptates, quos, quidem vel quibusdam voluptatum voluptatem quia iusto quas
          dolorem. Quisquam doloremque, voluptates, quos, quidem vel quibusdam voluptatum
          voluptatem quia iusto quas dolorem.
        </p>
      </Accordion>
      <Accordion title="Accordion Info" variant={Variants.Info}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam doloremque,
          voluptates, quos, quidem vel quibusdam voluptatum voluptatem quia iusto quas
          dolorem. Quisquam doloremque, voluptates, quos, quidem vel quibusdam voluptatum
          voluptatem quia iusto quas dolorem.
        </p>
      </Accordion>
      <Accordion title="Accordion Success" variant={Variants.Success}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam doloremque,
          voluptates, quos, quidem vel quibusdam voluptatum voluptatem quia iusto quas
          dolorem. Quisquam doloremque, voluptates, quos, quidem vel quibusdam voluptatum
          voluptatem quia iusto quas dolorem.
        </p>
      </Accordion>
    </Flex>
  );
};

export default AccordionExamples;
