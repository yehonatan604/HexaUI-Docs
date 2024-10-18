import { Flex, FlexTypes, FlexWrap, TextInput, useTheme } from "react-hexa-dev";

const TextInputExamples = () => {
  const { colors } = useTheme();

  return (
    <form className="w-full">
      <Flex
        options={{
          justify: FlexTypes.Center,
          align: FlexTypes.Start,
          wrap: FlexWrap.Wrap,
        }}
        className="m-auto gap-x-4 gap-y-8 w-3/4"
      >
        <TextInput label="Name" defaultValue="John" />
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
      </Flex>
    </form>
  );
};

export default TextInputExamples;
