import { Box, Button, Paper, TextField } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
  const [signinOrSignup, setSigninOrSignup] = useState("signin");

  const fullNameRef = useRef<HTMLDivElement>(null);
  const emailAddressRef = useRef<HTMLDivElement>(null);
  const passwordRef = useRef<HTMLDivElement>(null);
  const confirmPasswordRef = useRef<HTMLDivElement>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSigninOrSignup((event.target as HTMLInputElement).value);
  };

  const submitHandler = async () => {
    const fullName = fullNameRef?.current?.children[0]?.children[0]?.value;
    const email = emailAddressRef?.current?.children[0]?.children[0]?.value;
    const password = passwordRef?.current?.children[0]?.children[0]?.value;
    const confirmPassword =
      confirmPasswordRef?.current?.children[0]?.children[0]?.value;

    if (signinOrSignup === "signin") {
      if (!email || !password) {
        console.log("required signin");
        return;
      }
    }
    if (signinOrSignup === "signup") {
      if (!fullName || !email || !password || !confirmPassword) {
        console.log("required signup");
        return;
      }
    }

    const databaseUrl = import.meta.env.VITE_DATABASE_BASE_URL;
    const res = await axios.get(databaseUrl);
    console.log(res.data);
    console.log(databaseUrl);
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
            <FormControl className="w-full">
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
              <Box className="flex flex-col">
                {signinOrSignup === "signup" && (
                  <Box>
                    <p className="font-bold my-2">Full name</p>
                    <TextField
                      variant="outlined"
                      className="w-full"
                      ref={fullNameRef}
                    />
                  </Box>
                )}
                <Box>
                  <p className="font-bold my-2">Email address</p>
                  <TextField
                    variant="outlined"
                    className="w-full"
                    ref={emailAddressRef}
                  />
                </Box>
                <Box>
                  <p className="font-bold my-2">
                    {signinOrSignup === "signup"
                      ? "Create a password"
                      : "Wamazo password"}
                  </p>
                  <TextField
                    variant="outlined"
                    className="w-full"
                    ref={passwordRef}
                  />
                </Box>
                {signinOrSignup === "signup" && (
                  <Box>
                    <p className="font-bold my-2">Confirm password</p>
                    <TextField
                      variant="outlined"
                      className="w-full"
                      ref={confirmPasswordRef}
                    />
                  </Box>
                )}

                <Button
                  className="bg-yellow-400 w-full hover:bg-red-500"
                  variant="outlined"
                  sx={{
                    backgroundColor: "#FFD814",
                    borderColor: "#FCD200",
                    color: "black",
                    paddingTop: "8px",
                    paddingBottom: "8px",
                    marginTop: "1rem",
                    fontWeight: "bold",
                    textTransform: "capitalize",
                    "&:hover": {
                      backgroundColor: "#FFD814",
                      borderColor: "#0062cc",
                      boxShadow: "none",
                    },
                  }}
                  onClick={() => submitHandler()}
                >
                  Continue
                </Button>
                {/* <Button
                  variant="contained"
                  sx={{
                    "&:hover": {
                      backgroundColor: "black",
                      borderColor: "#0062cc",
                      boxShadow: "none",
                    },
                  }}
                >
                  Contained
                </Button> */}
              </Box>
            </FormControl>
          </Paper>
        </div>
      </div>
    </>
  );
};

export default SignUp;
