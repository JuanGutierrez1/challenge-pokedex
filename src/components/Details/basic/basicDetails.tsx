import { Box, Chip, CircularProgress, Typography, useMediaQuery, useTheme } from "@mui/material"
import { capitalize, getBackgroundColor, typeColors } from "../../../utils/utils"
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { useState } from "react";

export const BasicDetails = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const [imageLoaded, setImageLoaded] = useState(false);

  const pokemon = useSelector((state: RootState) => state.pokemon.selected);

  return (
    pokemon && (
      <Box
        sx={{
          backgroundColor: typeColors[pokemon.types[0].type.name].light,
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
          <img
            src={pokemon.sprites.other['official-artwork'].front_default || 'pokeball.png'}
            alt={pokemon.name}
            height={100}
            style={{ display: imageLoaded ? 'block' : 'none' }}
            onLoad={() => setImageLoaded(true)}
          />
          {
            !imageLoaded && (
              <Box height='100px' width='100px' display='flex' justifyContent='center' alignItems='center'>
                <CircularProgress size={60} thickness={4} sx={{
                  color: typeColors[pokemon.types[0].type.name].main,
                }} />
              </Box>
            )
          }
        </Box>
        <Typography variant={isSmallScreen ? 'h4' : 'h3'} textAlign='center' fontWeight='bold'>{capitalize(pokemon.name)}</Typography>
        <Box display='flex' justifyContent='center' gap='0.5rem' margin='0.3rem 0rem'>
          {pokemon.types.map(type => (
            <Chip
              label={capitalize(type.type.name)}
              key={type.slot}
              sx={{
                backgroundColor: typeColors[type.type.name].main,
                color: 'white',
                userSelect: 'none',
                boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px'
              }}
            />
          ))}
        </Box>
        <Typography variant="h5">
          <strong>Height:</strong> {(pokemon.height / 10).toFixed(1)} m
        </Typography>
        <Typography variant="h5">
          <strong>Weight:</strong> {(pokemon.weight / 10).toFixed(1)} kg
        </Typography>
        <Typography variant="h5">
          <strong>Ability:</strong> {capitalize(pokemon.abilities.filter(ability => !ability.is_hidden)[0].ability.name)}
        </Typography>
        <Typography variant="h5">
          <strong>Hidden ability:</strong> {capitalize(pokemon.abilities.filter(ability => ability.is_hidden)[0]?.ability.name) || 'None'}
        </Typography>
      </Box>)
  )
}