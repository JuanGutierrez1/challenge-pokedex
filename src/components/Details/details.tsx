import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { BasicDetails } from "./basic/basicDetails";
import { StatDetails } from "./stats/statsDetails";

export const Details = () => {

  const pokemon = useSelector((state: RootState) => state.pokemon.selected);

  return (pokemon &&
    <Box display='flex' gap='2rem' flexDirection={{ md: 'row', xs: 'column' }}>
      <BasicDetails />
      <StatDetails />
    </Box>
  );
}