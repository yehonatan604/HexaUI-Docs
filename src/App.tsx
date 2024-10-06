import { BrowserRouter } from "react-router-dom";
import Navbar from "./UI/Components/Layout/Navbar/Navbar";
import AppRouter from "./UI/Router/AppRouter";
import { useTheme } from "rainbow-plus-ui/src";

function App() {
  const mode = useTheme().mode;
  const bgColor = mode === "light" ? "bg-zinc-100" : "bg-zinc-900";
  const textColor = mode === "light" ? "text-zinc-900" : "text-zinc-300";

  return (
    <div className={`${bgColor} ${textColor}`}>
      <BrowserRouter>
        <Navbar />
        {/* <Flex
        direction={FlexDir.Col}
        justify={FlexTypes.Center}
        className={`${bgColor} pb-1`}
      >
        <Title size={Sizes.Xl}>Rainbow UI</Title>
        <Hr borderWidth="w-1/3" />
        <ButtonExamples />
        <Hr
          borderWidth={Sizes.Lg}
          borderHeight={Sizes.Md}
          borderColor="border-yellow-600"
        />
        <CardExamples />
        <RingExamples />
        <RainbowBordersExample />
        <FormInputExamples />
        <SelectExamples />
        <AccordionExamples />
        <GridExample />
        <Hr borderWidth="w-1/2" />
        <ListExample />
        <SidebarExample />
      </Flex> */}
        <div className={`max-h-[93vh] overflow-y-auto`}>
          <AppRouter />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
