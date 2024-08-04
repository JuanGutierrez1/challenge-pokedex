import { Box, Typography } from "@mui/material";
import { Pokemon } from "../../types/pokemonTypes";
import { capitalize, getBackgroundColor, typeColors } from "../../utils/utils";

export const Details = ({ pokemon }: { pokemon: Pokemon | null }) => {
  return (pokemon &&
    <Box
      sx={{
        backgroundColor: typeColors[pokemon.types[0].type.name],
        padding: '1rem',
        borderRadius: '15px',
      }}
    >
      <Box
        sx={{
          background: getBackgroundColor(pokemon),
        }}
        borderRadius={'110px'}
        border='5px solid #000'
        width='110px'
        height='110px'
        display='flex'
        justifyContent='center'
        alignItems='center'
        margin='0 auto'
      >
        <img src={pokemon.sprites.other['official-artwork'].front_default} alt={pokemon.name} height={100} />
      </Box>
      <Typography variant="h2" textAlign='center' fontWeight='bold'>{capitalize(pokemon.name)}</Typography>
      <Typography variant="h4"><strong>Height:</strong> {(pokemon.height / 10).toFixed(1)} m</Typography>
      <Typography variant="h4"><strong>Weight:</strong> {(pokemon.weight / 10).toFixed(1)} kg</Typography>
    </Box>
  );
}