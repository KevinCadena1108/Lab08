import React, { useState } from "react";
import Button from "@mui/material/Button";
import axios from "axios";
import { useTheme } from "@mui/material/styles";

function FollowButton() {
  const [isFollowing, setIsFollowing] = useState(false);
  const theme = useTheme();

  const handleButtonClick = () => {
    setIsFollowing(!isFollowing);

    const mensagem = isFollowing ? "Recebi um unfollow" : "Recebi um follow";

    axios
      .post("http://localhost:3010/api/follow", { follow: mensagem })
      .then((response) => {
        console.log(response.data);
      });
  };

  const buttonStyle = {
    marginTop: "20px",
    marginLeft: "20px",
    backgroundColor: isFollowing
      ? theme.palette.grey[500]
      : theme.palette.primary.main,
    color: isFollowing
      ? theme.palette.primary.main
      : theme.palette.getContrastText(theme.palette.primary.main),
    "&:hover": {
      backgroundColor: isFollowing
        ? theme.palette.grey[500]
        : theme.palette.primary.dark,
    },
  };

  return (
    <Button variant="contained" onClick={handleButtonClick} sx={buttonStyle}>
      {isFollowing ? "Unfollow" : "Follow"}
    </Button>
  );
}

export default FollowButton;
