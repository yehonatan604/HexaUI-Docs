import { componentsPath, hooksPath } from "../Paths";

const accordionEx1 = `import { Accordion } from '${componentsPath}';

<>
  <Accordion
    options={{
      title: "Accordion Standard",
      border: { show: true, variant: "standard" },
      textVariant: "standard",
    }}
  >
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
      doloremque, voluptates, quos, quidem vel quibusdam voluptatum voluptatem
      quia iusto quas dolorem. Quisquam doloremque, voluptates, quos, quidem vel
      quibusdam voluptatum voluptatem quia iusto quas dolorem.
    </p>
  </Accordion>
</>
`;

const accordionEx2 = `import { Accordion } from '${componentsPath};
import { useTheme } from '${hooksPath}';
const { colors } = useTheme();

function App () {
  return (
    <>
      {/* Accordion style by using Variants */}
      <Accordion
        options={{
          title: "Accordion",
          textVariant: colors.select,
          titleVariant: colors.primary,
          border: {
            variant: colors.primaryDark,
            show: true,
            radius: "0",
          },
        }}
      >
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam doloremque,
        voluptates, quos, quidem vel quibusdam voluptatum voluptatem quia iusto quas
        dolorem. Quisquam doloremque, voluptates, quos, quidem vel quibusdam voluptatum
        voluptatem quia iusto quas dolorem.
      </p>
      </Accordion>

      {/* Accordion style by using Tailwind classes */}
      <Accordion
        options={{
          title: "Accordion",
          border: {
            variant: "zinc-300",
            show: true,
          },
          titleVariant: 'sky-300',
          textVariant: 'sky-500',
        }}
      >
       <p>
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam doloremque,
         voluptates, quos, quidem vel quibusdam voluptatum voluptatem quia iusto quas
         dolorem. Quisquam doloremque, voluptates, quos, quidem vel quibusdam voluptatum
         voluptatem quia iusto quas dolorem.
       </p>
      </Accordion>
    </>
  );
}

exoprt default App;
`;

export { accordionEx1, accordionEx2 };