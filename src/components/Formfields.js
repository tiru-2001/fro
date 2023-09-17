import { InputAdornment, TextField } from "@mui/material";
import React, { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";

const Formfields = ({
  types,
  placeholders,
  names,
  handleinput,
  valueobject,
}) => {
  const [view, setview] = useState(true);

  const changeType = () => {
    setview(!view);
  };

  return (
    <>
      {types === "password" ? (
        <>
          <TextField
            name={names}
            value={valueobject}
            variant="outlined"
            color="success"
            label={placeholders}
            type={view ? "password" : "text"}
            required
            onChange={handleinput}
            helperText="Do not share your password"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <VisibilityIcon
                    sx={{ cursor: "pointer" }}
                    onClick={changeType}
                  />
                </InputAdornment>
              ),
            }}
          ></TextField>
        </>
      ) : (
        <>
          <TextField
            autoComplete="off"
            name={names}
            value={valueobject}
            variant="outlined"
            color="success"
            label={placeholders}
            type={types}
            required
            onChange={handleinput}
          ></TextField>
        </>
      )}
    </>
  );
};

export default Formfields;
