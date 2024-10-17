import { TTableProps } from "../../../../../Components/Shared/PropsTable";

const props: TTableProps[] = [
    {
        prop: "children",
        type: "ReactNode",
        description: "The content inside the Accordion. Usually text. an icon or both.",
        required: true,
        defaultValue: "null",
    },
    {
        prop: "Options",
        type: "AccordionOptions",
        description: "Style options for the Accordion. see the Options table for more.",
        required: true,
        defaultValue: "null",
    },
    {
        prop: "...props",
        type: "any",
        description: "Supports all standard React Accordion element props such as onClick, disabled, etc.",
        required: false,
        defaultValue: "null",
    },
];

const options: TTableProps[] = [
    {
        prop: "Title",
        type: "string",
        description: `The Title displayed in the Accordion header.`,
        required: true,
        defaultValue: "null",
    },
    {
        prop: "titlePadding",
        type: "Sizes | string",
        description: `the Accordion's Title's padding.`,
        required: false,
        defaultValue: "null",
    },
    {
        prop: "TitleVariant",
        type: "Variant | string",
        description: `Predefined text color variant for the Title (e.g., "standard" | Variants.Standard).`,
        required: false,
        defaultValue: "secondary-l",
    },
    {
        prop: "contentPadding",
        type: "Sizes | string",
        description: `the Accordion's Content's padding.`,
        required: false,
        defaultValue: "null",
    },
    {
        prop: "chevronVariant",
        type: "Variant | string",
        description: `Predefined color variant for the chevron icon (e.g., "standard" | Variants.Standard).`,
        required: false,
        defaultValue: "same as textVariant",
    },
    {
        prop: "chevronSize",
        type: "number",
        description: `The size of the chevron icon in pixels (size prop of IconType).`,
        required: false,
        defaultValue: "20",
    },
    {
        prop: "chevronDirection",
        type: "up | down | left | right",
        description: `The direction the chevron icon should point.`,
        required: false,
        defaultValue: "down",
    },
    {
        prop: "icon",
        type: "IconType",
        description: `An Icon to display in the Accordion header instead of the Chevron Icon.`,
        required: false,
        defaultValue: "null",
    }
];

export { props, options };