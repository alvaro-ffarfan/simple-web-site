import React from "react";
import Button from "@mui/material/Button";

function App() {
  return (
    <div>
      <Button color="primary">color</Button>
      <Button color="primary" variant="contained">
        color
      </Button>
      <Button color="primary" variant="contained" disableElevation>
        color
      </Button>
      <Button color="primary" variant="contained" href="https://google.com">
        google
      </Button>
      <Button color="primary" variant="contained" fullWidth>
        fullWidth
      </Button>
      <Button color="primary" variant="contained" size="small">
        fullWidth
      </Button>
      <Button color="primary" variant="contained" size="large">
        fullWidth
      </Button>
      <Button color="primary" variant="contained" size="medium">
        fullWidth
      </Button>
    </div>
  );
}

export default App;
