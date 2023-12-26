import { Box, Button, Paper, TextField } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [signinOrSignup, setSigninOrSignup] = useState("signin");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSigninOrSignup((event.target as HTMLInputElement).value);
  };

  return (
    <>
      <div className="bg-nav-secondary text-white font-bold text-3xl py-2 pl-4">
        <Link to={"/"}>Wamazo</Link>
      </div>
      <div className="bg-bg-white min-h-screen flex justify-center">
        <div className="w-[24rem] md:w-[26rem]">
          <h1 className="my-4 text-2xl">Welcome</h1>
          <Paper className="pt-2 pb-5 px-4">
            <FormControl>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={signinOrSignup}
                onChange={handleChange}
              >
                <FormControlLabel
                  value="signup"
                  control={
                    <Radio
                      sx={{
                        "&.Mui-checked": {
                          color: "orange",
                        },
                      }}
                    />
                  }
                  label={
                    <>
                      <span className="font-bold">Create account.</span>&nbsp;
                      <span className="text-sm">New to Wamazo?</span>
                    </>
                  }
                />
                <FormControlLabel
                  value="signin"
                  control={
                    <Radio
                      sx={{
                        "&.Mui-checked": {
                          color: "orange",
                        },
                      }}
                    />
                  }
                  label={
                    <>
                      <span className="font-bold">Sign in.</span>&nbsp;
                      <span className="text-sm font-bold">
                        Already a customer??
                      </span>
                    </>
                  }
                />
              </RadioGroup>
            </FormControl>
            <Box>
              {signinOrSignup === "signup" && (
                <Box>
                  <p className="font-bold my-2">First and last name</p>
                  <TextField variant="outlined" className="w-full" />
                </Box>
              )}
              <Box>
                <p className="font-bold my-2">Email address</p>
                <TextField variant="outlined" className="w-full" />
              </Box>
              {signinOrSignup === "signin" && (
                <Box>
                  <p className="font-bold my-2">Wamazo password</p>
                  <TextField variant="outlined" className="w-full" />
                </Box>
              )}
              {signinOrSignup === "signup" && (
                <>
                  <Box>
                    <p className="font-bold my-2">Create a password</p>
                    <TextField variant="outlined" className="w-full" />
                  </Box>
                  <Box>
                    <p className="font-bold my-2">Confirm password</p>
                    <TextField variant="outlined" className="w-full" />
                  </Box>
                </>
              )}
              <Button
                className="bg-yellow-400 w-full"
                sx={{
                  backgroundColor: "#FFD814",
                  borderColor: "#FCD200",
                  color: "black",
                  textTransform: "capitalize",
                  paddingTop: "8px",
                  paddingBottom: "8px",
                  marginTop: "1rem",
                  fontWeight: "bold",
                }}
              >
                Continue
              </Button>
            </Box>
          </Paper>
        </div>
      </div>
    </>
  );
};

export default SignUp;
