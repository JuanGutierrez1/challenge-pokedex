import { Typography, Box, Chip, CircularProgress } from "@mui/material";
import { Pokemon } from "../../types/pokemonTypes";
import { capitalize, getBackgroundColor, typeColors } from "../../utils/utils";
import { useState } from "react";

interface CardProps {
  pokemon: Pokemon;
  onClick?: () => void;
}

export const Card = ({ pokemon, onClick }: CardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <Box
      onClick={onClick}
      sx={{
        background: getBackgroundColor(pokemon),
        display: 'flex',
        padding: '0.5rem 1rem',
        justifyContent: 'space-between',
        borderRadius: '15px',
        boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
        transition: 'transform 0.2s',
        cursor: 'pointer',
        '&:hover': {
          transform: 'scale(1.05)',
        }
      }}
    >
      <Box display='flex' flexDirection='column' justifyContent='center' gap='0.3rem' >
        <Typography
          sx={{
            userSelect: 'none',
            textAlign: 'start',
            fontWeight: 'bold',
            lineHeight: 'normal'
          }}
        >
          #{pokemon.id}
        </Typography>
        <Typography
          sx={{
            userSelect: 'none',
            fontSize: '1.5rem',
            fontWeight: 'bold',
            color: '#f5f5f5',
            textAlign: 'start',
            lineHeight: 'normal'
          }}
        >
          {capitalize(pokemon.name)}
        </Typography>
        <Box display='flex' gap='1rem' justifyContent='start' marginTop='0.2rem' >
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
      </Box>
      <img
        height={120}
        onLoad={() => setImageLoaded(true)}
        style={{
          userSelect: 'none',
          display: imageLoaded ? 'block' : 'none',
        }}
        src={pokemon.sprites.other['official-artwork'].front_default || 'pokeball.png'}
        alt={pokemon.name}
      />
      {
        !imageLoaded && (
          <Box height='120px' width='120px' display='flex' justifyContent='center' alignItems='center'>
            <CircularProgress size={60} thickness={4} sx={{
              color: typeColors[pokemon.types[0].type.name].main,
            }} />
          </Box>
        )
      }
    </Box>
  );
}