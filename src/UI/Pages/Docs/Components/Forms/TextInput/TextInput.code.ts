import { hexaPath } from "../../../../../../Data/Constants/Paths";

const textInputEx1 = `import { TextInput } from '${hexaPath}';

const App = () => {
  return (
    <TextInput label="Name" defaultValue="John" />
  );
};
`;

const textInputEx2 = `import { TextInput, Flex, useTheme } from '${hexaPath}'

const App = () => {  
  const { colors } = useTheme();
  
  return (
    <Flex.Center className="m-auto gap-x-4 gap-y-8 w-3/4">
      <TextInput
          label="Name"
          placeholder="Please enter name"
          options={{
            helperText: "required",
            helperTextVariant: colors.standradLight,
          }}
        />
        <TextInput
          label="Email"
          type="email"
          defaultValue={"john@email.com"}
          options={{
            textVariant: colors.success,
            border: {
              variant: colors.success,
              thickness: "2",
            },
          }}
        />
        <TextInput
          label="Password"
          type="password"
          options={{
            textVariant: colors.failure,
            helperText: "Please enter a valid password",
            border: {
              variant: colors.failure,
              thickness: "2",
            },
          }}
          defaultValue={"password"}
        />
    </Flex.Center>
  );
};
`;

export { textInputEx1, textInputEx2 };