import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import { SelectQuantityProps } from "@/types/Types";

export default function SelectQuantity({
  setQuantity,
  stockAvailable,
}: SelectQuantityProps) {
  const handleQuantity = (quantity: number) => {
    if (quantity > 0) {
      setQuantity(quantity);
    }
  };
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl>
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
          Quantity:
        </InputLabel>
        <NativeSelect
          defaultValue={30}
          inputProps={{
            name: "quantity",
            id: "uncontrolled-native",
          }}
          className="min-w-[5rem]"
          disableUnderline
          disabled={!stockAvailable ? true : false}
        >
          {Array(10)
            .fill(null)
            .map((_, id) => (
              <option
                value={id}
                key={`productQuantity-${id}`}
                onClick={() => handleQuantity(id)}
              >
                {id + 1}
              </option>
            ))}
        </NativeSelect>
      </FormControl>
    </Box>
  );
}
