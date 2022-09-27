import { useSigninCheck } from "reactfire";
import Channel from "./components/Channel";
import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import ResponsiveAppBar from "./components/AppBar";

export default function App() {
  const { status, data: signInCheckResult } = useSigninCheck();

  if (status === "loading") {
    return <CircularProgress />;
  }

  return (
    <>
      <ResponsiveAppBar />
      {signInCheckResult.signedIn && <Channel />}
    </>
  );
}