import { TTableProps } from "../../../../../Components/Shared/PropsTable";

const props: TTableProps[] = [
    {
        prop: "children",
        type: "ReactNode",
        description: "The content inside the Rainbow Border. Usually div element.",
        required: true,
        defaultValue: "null",
    },
    {
        prop: "Options",
        type: "CardOptions",
        description: "Style options for the Rainbow Border. see the Options table for more.",
        required: false,
        defaultValue: "null",
    },
    {
        prop: "innerClassname",
        type: "string",
        description: "className for the Rainbow Border's inner content.",
        required: false,
        defaultValue: "",
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
        prop: "thickness",
        type: "Sizes | string",
        description: `The thickness of the Rainbow Border. (e.g., "sm" | Sizes.Sm).`,
        required: false,
        defaultValue: "[1.5px]",
    },
    {
        prop: "gradient",
        type: "string",
        description: `The gradient color variant of the Rainbow Border. (e.g., "success").`,
        required: false,
        defaultValue: "primary",
    },
    {
        prop: "innerBgVariant",
        type: "string",
        description: `The background color variant of the Rainbow Border's inner content. (e.g., "success-d").`,
        required: false,
        defaultValue: "black",
    },
    {
        prop: "innerTextVariant",
        type: "string",
        description: `The text color variant of the Rainbow Border's inner content. (e.g., "failure").`,
        required: false,
        defaultValue: "white",
    },
    {
        prop: "rounded",
        type: "Sizes | string",
        description: `The border radius of the Rainbow Border. (e.g., "sm" | Sizes.Sm).`,
        required: false,
        defaultValue: "rounded",
    },
    {
        prop: "innerRounded",
        type: "Sizes | string",
        description: `The border radius of the Rainbow Border's inner content. (e.g., "sm" | Sizes.Sm).`,
        required: false,
        defaultValue: "rounded",
    },
];

export { options, props };