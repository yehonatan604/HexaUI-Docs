import { Flex } from "react-hexa-dev";
import HighLighter from "../../../../Components/Common/HighLighter/Component";
import {
  componentEx1,
  componentEx2,
  componentEx3,
  componentEx4,
} from "../../../../../Data/Constants/CodeExamples/ComponentTypes";
//test
const Main = () => {
  return (
    <Flex options={{ justify: "center" }}>
      <Flex
        options={{
          direction: "col",
          justify: "start",
          align: "center",
        }}
        className={`pb-1 gap-y-9 w-3/5 mx-auto`}
      >
        <h2 className="text-4xl font-extrabold font-serif mt-10">TComponent&lt;T&gt;</h2>
        <p className="mt-4 text-lg max-md:p-10">
          The <strong>TComponent&lt;T&gt;</strong> type is designed to provide consistency
          across all components by extending the properties of standard React elements. It
          allows you to extend the default props provided by React with additional,
          component-specific properties.
        </p>
        <h3 className="text-2xl font-bold mt-6">Type Definition</h3>
        <p className="mt-4 text-lg">
          The <strong>TComponent&lt;T&gt;</strong> type extends the{" "}
          <strong>React.ComponentProps</strong> for a given HTML element type{" "}
          <strong>T</strong>, adding one more optional prop: <code>options</code>. This
          ensures that each component retains all of the native props of the original HTML
          element while providing flexibility for additional customization.
        </p>
        <HighLighter>{componentEx1}</HighLighter>

        <h3 className="text-2xl font-bold mt-6">ComponentOptions Type</h3>
        <p className="mt-4 text-lg">
          The <strong>ComponentOptions</strong> type provides additional customization
          props for each component in Hexa UI:
        </p>
        <HighLighter>{componentEx2}</HighLighter>

        <h3 className="text-2xl font-bold mt-6">
          Extending ComponentOptions for Specific Components
        </h3>
        <p className="mt-4 text-lg">
          Every component in Hexa UI uses the <strong>options</strong> prop to provide
          additional customization. When a specific component requires further
          customization, the <strong>TComponent&lt;T&gt;</strong> type can be extended
          with component-specific options. Here is an example with the{" "}
          <strong>TButton</strong> type:
        </p>
        <HighLighter>{componentEx3}</HighLighter>

        <h3 className="text-2xl font-bold mt-6">Usage Example</h3>
        <p className="mt-4 text-lg">
          Here is an example of how the <strong>TMyComponent</strong> type is used to
          define the props for a component:
        </p>
        <HighLighter lang="js">{componentEx4}</HighLighter>
      </Flex>
    </Flex>
  );
};

export default Main;
