import { Alert, Box, Button, Paper, TextField } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
  const [signinOrSignup, setSigninOrSignup] = useState("signin");
  const [error, setError] = useState<string | null>(null);

  const fullNameRef = useRef<HTMLDivElement>(null);
  const emailAddressRef = useRef<HTMLDivElement>(null);
  const passwordRef = useRef<HTMLDivElement>(null);
  const confirmPasswordRef = useRef<HTMLDivElement>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSigninOrSignup((event.target as HTMLInputElement).value);
  };

  const submitHandler = async () => {
    try {
      const fullName = fullNameRef?.current?.children[0]?.children[0]?.value;
      const email = emailAddressRef?.current?.children[0]?.children[0]?.value;
      const password = passwordRef?.current?.children[0]?.children[0]?.value;
      const confirmPassword =
        confirmPasswordRef?.current?.children[0]?.children[0]?.value;

      if (signinOrSignup === "signin") {
        if (!email || !password) {
          throw new Error("All fields are mandatory.");
        }
      }
      if (signinOrSignup === "signup") {
        if (!fullName || !email || !password || !confirmPassword) {
          throw new Error("All fields are mandatory.");
        }
      }

      setError(null);
      const serverUrl = import.meta.env.VITE_DATABASE_BASE_URL;
      await axios
        .post(`${serverUrl}/signup`, {
          name: fullName,
          email,
          password,
          confirmPassword,
        })
        .catch(function (error) {
          if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            setError(error.response.data.message);
          }
        });
    } catch (error) {
      let err;
      if (typeof error === "string") {
        err = error.toUpperCase();
      } else if (error instanceof Error) {
        err = error.message;
      }
      setError(err as string);
    }
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
                onChange={(e) => {
                  handleChange(e);
                  setError(null);
                  if (emailAddressRef.current) {
                    emailAddressRef.current.children[0].children[0].value = "";
                  }
                  if (passwordRef.current) {
                    passwordRef.current.children[0].children[0].value = "";
                  }
                }}
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
                <input type="text" name="" id="" />
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
                    type="email"
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
                <div className="relative h-8">
                  <div className="absolute flex items-center h-full">
                    {/* <Alert
                      variant="outlined"
                      severity="error"
                      sx={{ height: "100%", padding: 0, margin: 0 }}
                    >
                      This is an error alert — check it out!
                    </Alert> */}
                    <p className="text-sm text-[#EF5350]">{error}</p>
                  </div>
                </div>
                <Button
                  className="bg-yellow-400 w-full hover:bg-red-500"
                  variant="outlined"
                  sx={{
                    backgroundColor: "#FFD814",
                    borderColor: "#FCD200",
                    color: "black",
                    paddingTop: "8px",
                    paddingBottom: "8px",
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
              </Box>
            </FormControl>
          </Paper>
        </div>
      </div>
    </>
  );
};

export default SignUp;
