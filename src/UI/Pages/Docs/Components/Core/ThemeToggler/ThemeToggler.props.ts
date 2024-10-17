import { TTableProps } from "../../../../../Components/Shared/PropsTable";

const props: TTableProps[] = [
    {
        prop: "darkIcon",
        type: "ReactNode",
        description: "The icon to display when the theme is light.",
        required: false,
        defaultValue: "☀️",
    },
    {
        prop: "lightIcon",
        type: "ReactNode",
        description: "The icon to display when the theme is dark.",
        required: false,
        defaultValue: "🌙",
    },
    {
        prop: "options",
        type: "CardOptions",
        description: "Style options for the ThemeToggler. see the Options table for more.",
        required: false,
        defaultValue: "null",
    },
    {
        prop: "...props",
        type: "any",
        description: "Supports all standard Button props such as 'onClick', 'className', 'style', etc.",
        required: false,
        defaultValue: "null",
    },
];


export { props };