import { Stack, Box } from "@mui/material";

const TopAgentCard = () => {
  return (
    <Stack className="top-agents-card">
      <Box className="img-box">
        <img src={"/img/profile/girl.svg"} alt="" />
        <strong className={"title"}>Jack</strong>
        <span className={"desc"}>Agent</span>
      </Box>
    </Stack>
  );
};

export default TopAgentCard;