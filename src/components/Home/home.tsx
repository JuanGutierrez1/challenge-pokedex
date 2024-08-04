import { Box, Pagination, Skeleton, TextField, useMediaQuery, useTheme } from "@mui/material";
import { useEffect, useState } from "react";
import { pokemonService } from "../../services/pokemonService";
import { Pokemon } from "../../types/pokemonTypes";
import { Card } from "../../ui/card/Card";
import SearchIcon from '@mui/icons-material/Search';
import { POKEMON_PER_PAGE } from "../../utils/utils";
import { Details } from "../Details/details";
import { Modal } from "../../ui/modal/Modal";

export const Home = () => {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | null>(null);
  const [search, setSearch] = useState('');
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleSearch = async () => {
    fetchPokemon()
  }

  const fetchPokemon = async (page: number = currentPage) => {
    setIsLoading(true);
    const response = await pokemonService.getPokemon(search, (page - 1) * POKEMON_PER_PAGE);
    setCurrentPage(page);
    setPokemonList(response.results);
    setTotalPages(Math.ceil(response.data.count / POKEMON_PER_PAGE));
    setIsLoading(false);
  }

  const handleOnKeyDown = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  }

  const handleCardClick = (pokemon: Pokemon) => {
    setSelectedPokemon(pokemon);
    setModalOpen(true);
  }

  useEffect(() => {
    fetchPokemon()
  }, []);

  return (
    <Box display={'flex'} flexDirection={'column'} gap='2rem' justifyContent='center'>
      <Box>
        <img src="logo.png" alt="site logo" height={isSmallScreen ? 92 : 184} width={isSmallScreen ? 250 : 500} />
      </Box>
      <TextField
        sx={{ backgroundColor: 'white' }}
        onChange={(e) => setSearch(e.target.value)}
        label="Search a pokemon!"
        variant="outlined"
        onKeyDown={handleOnKeyDown}
        InputProps={{
          endAdornment: <SearchIcon sx={{ cursor: 'pointer' }} onClick={handleSearch} />,
        }}
      />
      <Box display={'grid'} gridTemplateColumns={'repeat(auto-fill, minmax(300px, 1fr))'} gap={'1rem'}>
        {!isLoading && pokemonList.length > 0 && pokemonList.map((pokemon) => (
          <Card key={pokemon.id} pokemon={pokemon} onClick={() => handleCardClick(pokemon)} />
        ))}
        {isLoading && (
          [...Array(POKEMON_PER_PAGE)].map((_, index) => (
            <Skeleton key={index} variant="rounded" width={300} height={135} />
          ))
        )}
      </Box>
      <Pagination
        sx={{ '.MuiPagination-ul': { justifyContent: 'center' } }}
        count={totalPages}
        page={currentPage}
        onChange={(e, value) => fetchPokemon(value)}
      />
      <Modal open={modalOpen} onClose={() => setModalOpen(false)} pokemon={selectedPokemon}>
        <Details pokemon={selectedPokemon} />
      </Modal>
    </Box>
  );
}