import { TTableProps } from "../../../../../Components/Shared/PropsTable";

const props: TTableProps[] = [
    {
        prop: "Options",
        type: "SelectOptions",
        description: "Style options for the Select. see the Options table for more.",
        required: false,
        defaultValue: "null",
    },
    {
        prop: "items",
        type: "TSelectOption[]",
        description: "The list of items to display in the Select dropdown.",
        required: true,
        defaultValue: "null",
    },
    {
        prop: "...props",
        type: "any",
        description: "Supports all standard React select element props such as 'id', 'value', 'onChange', etc.",
        required: false,
        defaultValue: "null",
    },
];

const options: TTableProps[] = [
    {
        prop: "listItemsVariant",
        type: "string",
        description: `The color variant for the Select's list items.`,
        required: false,
        defaultValue: "standard-l/standrad-d *",
    },
    {
        prop: "listItemsBgVariant",
        type: "string",
        description: `The background color variant for the Select's list items.`,
        required: false,
        defaultValue: "transparent",
    },
];

export { options, props };