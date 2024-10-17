import { TTableProps } from "../../../../../Components/Shared/PropsTable";

const props: TTableProps[] = [
    {
        prop: "children",
        type: "ReactNode",
        description: "The content inside the Ring. Usually div element.",
        required: false,
        defaultValue: "null",
    },
    {
        prop: "Options",
        type: "CardOptions",
        description: "Style options for the Ring. see the Options table for more.",
        required: false,
        defaultValue: "null",
    },
    {
        prop: "...props",
        type: "any",
        description: "Supports all standard React div element props such as padding, margin, etc.",
        required: false,
        defaultValue: "null",
    },
];

const options: TTableProps[] = [
    {
        prop: "ringThickness",
        type: "number",
        description: "The thickness of the Ring.",
        required: false,
        defaultValue: "4",
    },
    {
        prop: "borderThickness",
        type: "number",
        description: "The thickness of the Ring's inner border.",
        required: false,
        defaultValue: "2",
    },
    {
        prop: "ringVariant",
        type: "string",
        description: `The color variant of the Ring. (e.g., "success").`,
        required: false,
        defaultValue: "standard-d",
    },
    {
        prop: "borderVariant",
        type: "string",
        description: `The inner border color variant of the Ring. (e.g., "success").`,
        required: false,
        defaultValue: "standard",
    },
    {
        prop: "padding",
        type: "number",
        description: `The padding of the Ring.`,
        required: false,
        defaultValue: "0",
    },
    {
        prop: "rounded",
        type: "Sizes | string",
        description: `The border radius of the Ring. (e.g., "sm" | Sizes.Sm).`,
        required: false,
        defaultValue: "md",
    },
];

export { options, props };