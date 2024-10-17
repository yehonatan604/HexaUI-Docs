import { Flex, Accordion, useTheme } from "react-hexa-dev";

const AccordionExamples = () => {
  const { colors } = useTheme();

  return (
    <Flex options={{ direction: "col" }} className="w-1/4 gap-4">
      <Accordion
        options={{
          title: "Accordion",
          border: { show: true, variant: colors.standrad },
          textVariant: colors.standradLight,
          titleVariant: colors.warning,
        }}
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam doloremque,
          voluptates, quos, quidem vel quibusdam voluptatum voluptatem quia iusto quas
          dolorem. Quisquam doloremque, voluptates, quos, quidem vel quibusdam voluptatum
          voluptatem quia iusto quas dolorem.
        </p>
      </Accordion>

      {/* Accordion Variants by using string */}
      <Accordion
        options={{
          title: "Accordion",
          border: { show: true, variant: colors.primaryDark },
          textVariant: colors.select,
          titleVariant: colors.primary,
        }}
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam doloremque,
          voluptates, quos, quidem vel quibusdam voluptatum voluptatem quia iusto quas
          dolorem. Quisquam doloremque, voluptates, quos, quidem vel quibusdam voluptatum
          voluptatem quia iusto quas dolorem.
        </p>
      </Accordion>

      {/* Accordion Variants by using Variants */}
      <Accordion
        options={{
          title: "Accordion",
          border: { show: true, variant: "zinc-300" },
          textVariant: "sky-500",
          titleVariant: "sky-300",
        }}
      >
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
