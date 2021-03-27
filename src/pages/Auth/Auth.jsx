import { Box, Card, Typography } from "@material-ui/core";
import React, { useState } from "react";
import Login from "./Login/Login";
import Register from "./Register/Register";
import useStyles from "./style";

export default function Auth() {
  const [activeTabID, setActiveTabID] = useState(1);
  const classes = useStyles();

  const handleChangeTab = (tabID) => {
    setActiveTabID(tabID);
  };

  return (
    <div className={classes.paper}>
      <Card className={classes.card}>
        <Box display="flex">
          <Typography
            onClick={() => handleChangeTab(1)}
            className={activeTabID === 1 && classes.activeTab}
          >
            Login
          </Typography>
          <Typography
            onClick={() => handleChangeTab(2)}
            style={{ marginLeft: "20px" }}
            className={activeTabID === 2 && classes.activeTab}
          >
            Register
          </Typography>
        </Box>

        {activeTabID === 1 ? <Login /> : <Register />}
      </Card>
    </div>
  );
}
