import { Box, LinearProgress, Typography, useMediaQuery, useTheme } from "@mui/material"
import { capitalize, darkerTypeColors, lighterTypeColors, typeColors } from "../../../utils/utils"
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";

export const StatDetails = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const pokemon = useSelector((state: RootState) => state.pokemon.selected);
  return (
    pokemon && (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          backgroundColor: lighterTypeColors[pokemon.types[0].type.name],
          boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
          borderRadius: '15px',
          padding: '1rem',
          width: { xs: 'auto', sm: 'auto', md: '350px' },
        }}
      >
        <Typography variant={isSmallScreen ? 'h4' : 'h3'} textAlign='center' fontWeight='bold'>Stats</Typography>
        {pokemon.stats.map(stat => (
          <Box sx={{ width: '100%' }}>
            <Box display='flex' justifyContent='space-between'>
              <Typography fontWeight='bold'>{capitalize(stat.stat.name)}</Typography>
              <Typography fontWeight='bold'>{stat.base_stat}</Typography>
            </Box>
            <LinearProgress
              sx={{
                height: '10px',
                backgroundColor: typeColors[pokemon.types[0].type.name],
                borderRadius: '5px',
                '.MuiLinearProgress-bar	': {
                  backgroundColor: darkerTypeColors[pokemon.types[0].type.name],
                }
              }}
              variant="determinate"
              value={(stat.base_stat / 255) * 100}
            />
          </Box>
        ))}
      </Box>
    )
  )
}