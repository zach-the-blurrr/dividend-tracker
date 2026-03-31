import { TextField } from "@mui/material";

interface CustomInputProps {
  label?: string;
  value: number;
  onChange: (value: string) => void;
  type?: string;
  placeholder?: string;
}

const CustomInput = ({
  label,
  value,
  onChange,
  type,
  placeholder,
}: CustomInputProps) => {
  return (
    <TextField
      label={label}
      value={value}
      type={type}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
      variant="outlined"
      size="small"
      fullWidth
      sx={{ mt: 3, mb: 1 }}
      slotProps={{
        input: {
          inputProps: {
            min: 0,
          },
        },
      }}
    />
  );
};

export default CustomInput;
