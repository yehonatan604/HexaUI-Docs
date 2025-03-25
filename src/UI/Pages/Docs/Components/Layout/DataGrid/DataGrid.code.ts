import { hexaPath } from "../../../../../../Data/Constants/Paths";

const dataGridEx1 = `import { AutoGrid, Flex, FlexTypes } from '${hexaPath}'

const App = () => {  
  const rows = [
    // Header row
    ["Name", "Age", "email", "Location"],
    // Data rows
    ["John Doe", 25, "john@email.com", "New York"],
    ["Jane Smith", 30, "jane@email.com", "London"],
    ["Bob Johnson", 28, "bob@email.com", "Paris"],
    ["Alice Brown", 28, "alice@email.com", "Tokyo"],
    ["Eve White", 35, "eve@email.com", "Berlin"],
    ["Sam Black", 40, "sam@email.com", "Sydney"],
  ].map((row) => row.map((cell) => <div>{cell}</div>));

  return (
    <Flex
      options={{
        justify: FlexTypes.Center,
        align: FlexTypes.Center,
      }}
      className="m-auto gap-4 w-4/5 text-2xl"
    >
      <DataGrid rowsArr={rows} />
    </Flex>
  );
};
`;

const dataGridEx2 = `import { AutoGrid, Flex, FlexTypes } from '${hexaPath}'

const App = () => {  
  const rows = [
    // Header row
    ["Name", "Age", "email", "Location"],
    // Data rows
    ["John Doe", 25, "john@email.com", "New York"],
    ["Jane Smith", 30, "jane@email.com", "London"],
    ["Bob Johnson", 28, "bob@email.com", "Paris"],
    ["Alice Brown", 28, "alice@email.com", "Tokyo"],
    ["Eve White", 35, "eve@email.com", "Berlin"],
    ["Sam Black", 40, "sam@email.com", "Sydney"],
  ].map((row) => row.map((cell) => <div>{cell}</div>));

  return (
    <Flex
      options={{
        justify: FlexTypes.Center,
        align: FlexTypes.Center,
      }}
      className="m-auto gap-4 w-4/5 text-2xl"
    >
      <DataGrid rowsArr={rows} />
    </Flex>
  );
};
`;

export { dataGridEx1, dataGridEx2 };