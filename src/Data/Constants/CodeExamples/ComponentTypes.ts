const componentEx1 = `export type TComponent<T extends keyof JSX.IntrinsicElements> = React.ComponentProps<T> & {
  options?: ComponentOptions;
};`

const componentEx2 = `export type ComponentOptions = {
  bgVariant?: TColorPalette | string;
  textVariant?: TColorPalette | string;
  shadow?: TShadow;
  border?: TBorder;
};`

const componentEx3 = `import { ComponentProps, JSXElementConstructor, JSX } from "react";
import {IconType} from 'react-icons';

export type TMyComponent = TComponent<'div'> & {
  options: MyComponentOptions;
  };
  
export type MyComponentOptions = ComponentOptions & {
  label: string;
  icon: IconType;
};`

const componentEx4 = `import { TMyComponent } from './myComponent';

const MyComponent = ({ options, ...props }: TMyComponent) => {
  return (
    <div {...props} classname="flex gap-4">
      <span>{options.label}</span>
      <span>{options.icon}</span>
    </div>
  );
};

export default MyComponent;
`


export { componentEx1, componentEx2, componentEx3, componentEx4 }
