import { Box, Chip, LinearProgress, Typography, useMediaQuery, useTheme } from "@mui/material";
import { capitalize, darkerTypeColors, getBackgroundColor, lighterTypeColors, typeColors } from "../../utils/utils";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

export const Details = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const pokemon = useSelector((state: RootState) => state.pokemon.selected);

  return (pokemon &&
    <Box display='flex' gap='2rem' flexDirection={{ md: 'row', xs: 'column' }}>
      <Box
        sx={{
          backgroundColor: lighterTypeColors[pokemon.types[0].type.name],
          padding: '1rem',
          borderRadius: '15px',
          width: { xs: 'auto', sm: 'auto', md: '350px' },
          boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px'
        }}
      >
        <Box
          sx={{
            background: getBackgroundColor(pokemon),
          }}
          borderRadius={'110px'}
          border='5px solid #000'
          width='120px'
          height='120px'
          display='flex'
          justifyContent='center'
          alignItems='center'
          margin='0 auto'
          boxShadow='rgba(0, 0, 0, 0.24) 0px 3px 8px'
        >
          <img src={pokemon.sprites.other['official-artwork'].front_default} alt={pokemon.name} height={100} />
        </Box>
        <Typography variant={isSmallScreen ? 'h4' : 'h3'} textAlign='center' fontWeight='bold'>{capitalize(pokemon.name)}</Typography>
        <Box display='flex' justifyContent='center' gap='0.5rem' margin='0.3rem 0rem'>
          {pokemon.types.map(type => (
            <Chip label={capitalize(type.type.name)} key={type.slot} sx={{ backgroundColor: typeColors[type.type.name], color: 'white', userSelect: 'none', boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px' }} />
          ))}
        </Box>
        <Typography variant="h5"><strong>Height:</strong> {(pokemon.height / 10).toFixed(1)} m</Typography>
        <Typography variant="h5"><strong>Weight:</strong> {(pokemon.weight / 10).toFixed(1)} kg</Typography>
        <Typography variant="h5"><strong>Ability:</strong> {capitalize(pokemon.abilities.filter(ability => !ability.is_hidden)[0].ability.name)}</Typography>
        <Typography variant="h5"><strong>Hidden ability:</strong> {capitalize(pokemon.abilities.filter(ability => ability.is_hidden)[0]?.ability.name) || 'None'}</Typography>
      </Box>
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
    </Box>
  );
}