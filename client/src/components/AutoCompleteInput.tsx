import * as React from "react";
import Autocomplete from "@mui/material/Autocomplete";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { Product } from "@/types/Types";
import { Box } from "@mui/material";

type AutoCompleteInputProps = {
  products: Product[] | [];
  handleSearchItems: (items: string) => void;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setSearchedItems: React.Dispatch<React.SetStateAction<string>>;
};

export default function AutoCompleteInput({
  products,
  handleSearchItems,
  open,
  setOpen,
  setSearchedItems,
}: AutoCompleteInputProps) {
  return (
    <Stack spacing={1} className="w-full h-auto">
      <Autocomplete
        clearOnEscape
        clearOnBlur={false}
        open={open}
        options={products}
        onOpen={() => setOpen(true)}
        onBlur={() => setOpen(false)}
        getOptionLabel={(option: Product) => option.title}
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder="Search Items"
            onChange={(e) => setSearchedItems(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                (e.target as HTMLElement).blur();
                handleSearchItems((e.target as HTMLTextAreaElement).value);
                setOpen(false);
              }
            }}
          />
        )}
        renderOption={(props, option) => (
          <Box
            component="li"
            sx={{ display: "flex", flexWrap: "wrap" }}
            {...props}
            onClick={() => {
              handleSearchItems(option.title);
            }}
          >
            <p className="whitespace-nowrap">{option.title}</p>
            <p className="whitespace-nowrap text-gray-600">
              &nbsp;in {option.category}
            </p>
          </Box>
        )}
      />
    </Stack>
  );
}
