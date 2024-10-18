import { dataGridEx1, dataGridEx2 } from "./DataGrid.code";
import { props, options } from "./DataGrid.props";
import DocsPageGenerator from "../../../../../Components/Shared/DocsPageGenerator";
import DataGridExamples from "./DataGrid.example";

const DataGridPage = () => {
  return (
    <DocsPageGenerator
      title="Data Grid"
      upperText={`
        The Data Grid component is a powerful tool for displaying and managing tabular data. It provides features such as sorting, filtering, pagination, and custom cell rendering to create a highly interactive data presentation.
        With customizable columns, headers, and row styles, this component makes building data-intensive interfaces efficient and straightforward.
      `}
      examples={<DataGridExamples />}
      basicExample={dataGridEx1}
      customExample={dataGridEx2}
      customText={`
        You can easily customize the columns, data rendering, and other visual properties of the Data Grid component using the options prop:
      `}
      tableProps={props}
      tableOptions={options}
      dependsOnTheme
    />
  );
};

export default DataGridPage;
