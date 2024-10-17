import { Checkbox, useTheme } from "react-hexa-dev";

const CheckboxExamples = () => {
  const { colors } = useTheme();

  return (
    <>
      <Checkbox label="is checked" />
      <Checkbox label="is checked" defaultChecked />
      <Checkbox
        label="is checked"
        defaultChecked
        options={{
          ring: {
            thickness: 2,
            variant: colors.primary,
          },
        }}
      />
      <Checkbox
        label="is checked"
        defaultChecked
        options={{
          ring: {
            thickness: 2,
            variant: colors.warning,
          },
        }}
      />
      <Checkbox
        label="is checked"
        defaultChecked
        options={{
          ring: {
            thickness: 2,
            variant: colors.failure,
          },
        }}
      />
      <Checkbox
        label="is checked"
        defaultChecked
        options={{
          ring: {
            thickness: 2,
            variant: colors.success,
          },
        }}
      />
      <Checkbox
        label="is checked"
        defaultChecked
        options={{
          ring: {
            thickness: 2,
            variant: colors.standrad,
          },
        }}
      />
    </>
  );
};

export default CheckboxExamples;
