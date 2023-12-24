import { Alert, AlertTitle } from "@mui/material";

const Error = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <Alert severity="error" variant="filled">
        <AlertTitle>Something went wrong!</AlertTitle>
        <strong>Please refresh the page or recheck after a while.</strong>
        <p>Sorry for the inconvenience.</p>
      </Alert>
    </div>
  );
};

export default Error;
