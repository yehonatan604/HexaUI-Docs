import { TTableProps } from "../../../../../Components/Shared/PropsTable";

const props: TTableProps[] = [
    {
        prop: "children",
        type: "ReactNode",
        description: "The content inside the Card. Usually text or an image.",
        required: true,
        defaultValue: "null",
    },
    {
        prop: "Options",
        type: "CardOptions",
        description: "Style options for the Card. see the Options table for more.",
        required: false,
        defaultValue: "null",
    },
    {
        prop: "...props",
        type: "any",
        description: "Supports all standard React Div element props such as padding, margin, etc.",
        required: false,
        defaultValue: "null",
    },
];

const options: TTableProps[] = [
    {
        prop: "padding",
        type: "Sizes | string",
        description: `The padding of the Card. (e.g., "sm" | Sizes.Sm).`,
        required: false,
        defaultValue: "2",
    },
    {
        prop: "rounded",
        type: "Sizes | string",
        description: `The border radius of the Card. (e.g., "sm" | Sizes.Sm).`,
        required: false,
        defaultValue: "md",
    },
    {
        prop: "gap",
        type: "number",
        description: `The gap between the Card's children.`,
        required: false,
        defaultValue: "4",
    },
];

const headerProps: TTableProps[] = [
    {
        prop: "children",
        type: "ReactNode",
        description: "The content inside the Card's header. Usually text or image.",
        required: true,
        defaultValue: "null",
    },
    {
        prop: "Options",
        type: "ComponentOptions",
        description: "Style options for the Card's header. see the Options table for more.",
        required: false,
        defaultValue: "null",
    },
    {
        prop: "...props",
        type: "any",
        description: "Supports all standard React Div element props such as padding, margin, etc.",
        required: false,
        defaultValue: "null",
    },
];

const footerProps: TTableProps[] = [
    {
        prop: "children",
        type: "ReactNode",
        description: "The content inside the Card's Footer. Usually icons or buttons.",
        required: true,
        defaultValue: "null",
    },
    {
        prop: "Options",
        type: "CardFooterOptions",
        description: "Style options for the Card. see the Options table for more.",
        required: false,
        defaultValue: "null",
    },
    {
        prop: "...props",
        type: "any",
        description: "Supports all standard React Div element props such as padding, margin, etc.",
        required: false,
        defaultValue: "null",
    },
];

const footerOptions: TTableProps[] = [
    {
        prop: "justify",
        type: "FlexTypes",
        description: `The justify content property of the Card Fotter's Flex container.`,
        required: false,
        defaultValue: "start",
    },
];

export { props, options, footerProps, footerOptions, headerProps };