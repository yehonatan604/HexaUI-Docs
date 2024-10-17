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
];


export { props };