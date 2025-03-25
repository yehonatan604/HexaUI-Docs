import { TTableProps } from "../../../../../Components/Shared/PropsTable";

const props: TTableProps[] = [
    {
        prop: "options",
        type: "AutoGridOptions",
        description: "Style options for the AutoGrid. see the options table for more.",
        required: false,
        defaultValue: "null",
    },
    {
        prop: "rowsArr",
        type: "React.ReactNode[]",
        description: "The list of React nodes to display in the AutoGrid.",
        required: true,
        defaultValue: "null",
    },
    {
        prop: "...props",
        type: "any",
        description: "Supports all standard React div element props such as 'id', 'style', etc.",
        required: false,
        defaultValue: "null",
    },
];

const options: TTableProps[] = [
    {
        prop: "borderVariant",
        type: "string",
        description: `The border color variant for the AutoGrid, e.g., 'primary'.`,
        required: false,
        defaultValue: "standard-l/standrad-d *",
    },
    {
        prop: "headerControls",
        type: "'none' | 'filter' | 'sort' | 'search' | 'colHeaders' | 'all'",
        description: `The type of header controls to display in the DataGrid. 'none' will display no controls, 'filter' will display filter controls, 'sort' will display sort controls, 'search' will display search controls, 'colHeaders' will display column headers, and 'all' will display all controls.`,
        required: false,
        defaultValue: "all",
    },
    {
        prop: "headerBgColor",
        type: "string",
        description: "The background color for the header row of the DataGrid.",
        required: false,
        defaultValue: "standard-l/standard-d *",
    },
    {
        prop: "headerTextColor",
        type: "string",
        description: "The text color for the header row of the DataGrid.",
        required: false,
        defaultValue: "standard-l/standard-d *",
    },
    {
        prop: "rowBgColor",
        type: "string",
        description: "The background color for the data rows of the DataGrid.",
        required: false,
        defaultValue: "standard-l/standard-d *",
    },
    {
        prop: "rowTextColor",
        type: "string",
        description: "The text color for the data rows of the DataGrid.",
        required: false,
        defaultValue: "standard-l/standard-d *",
    },
    {
        prop: "rowHoverBgColor",
        type: "string",
        description: "The background color for the data rows of the DataGrid when hovered.",
        required: false,
        defaultValue: "standard-l/standard-d *",
    },
    {
        prop: "rowHoverTextColor",
        type: "string",
        description: "The text color for the data rows of the DataGrid when hovered.",
        required: false,
        defaultValue: "standard-l/standard-d *",
    },
    {
        prop: " striped",
        type: "boolean",
        description: "Whether to stripe the data rows of the DataGrid.",
        required: false,
        defaultValue: "false",
    },
    {
        prop: "stripedBgColor",
        type: "string",
        description: "The background color for the striped data rows of the DataGrid.",
        required: false,
        defaultValue: "standard-l/standard-d *",
    },
    {
        prop: "stripedTextColor",
        type: "string",
        description: "The text color for the striped data rows of the DataGrid.",
        required: false,
    }
];

export { options, props };