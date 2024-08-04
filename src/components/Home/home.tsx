import { Box, Pagination, Skeleton, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useState } from "react";
import { Pokemon } from "../../types/pokemonTypes";
import { Card } from "../../ui/card/Card";
import { POKEMON_PER_PAGE } from "../../utils/utils";
import { Details } from "../Details/details";
import { Modal } from "../../ui/modal/Modal";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { selectPokemon } from "../../store/slices/pokemonSlice";
import { TextField } from "../../ui/textfield/TextField";
import { useFetchPokemon } from "../../hooks/useFetchPokemon";

export const Home = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const pokemonList = useSelector((state: RootState) => state.pokemon.list);
  const [modalOpen, setModalOpen] = useState(false);

  const {
    fetchPokemon,
    isLoading,
    currentPage,
    setCurrentPage,
    totalPages,
    setSearch
  } = useFetchPokemon();


  const handleSearch = () => {
    setCurrentPage(1);
    fetchPokemon(1);
  }

  const handleCardClick = (pokemon: Pokemon) => {
    dispatch(selectPokemon(pokemon));
    setModalOpen(true);
  }

  return (
    <Box display={'flex'} flexDirection={'column'} gap='2rem' justifyContent='center'>
      <Box>
        <img src="logo.png" alt="site logo" height={isSmallScreen ? 92 : 184} width={isSmallScreen ? 250 : 500} />
      </Box>
      <TextField onSearch={handleSearch} onChange={(value) => setSearch(value)} />
      <Box display={'grid'} gridTemplateColumns={'repeat(auto-fill, minmax(300px, 1fr))'} gap={'1rem'}>
        {!isLoading && pokemonList.length > 0 && pokemonList.map((pokemon) => (
          <Card key={pokemon.id} pokemon={pokemon} onClick={() => handleCardClick(pokemon)} />
        ))}
        {isLoading && (
          [...Array(POKEMON_PER_PAGE)].map((_, index) => (
            <Skeleton key={index} variant="rounded" height={135} />
          ))
        )}
        {!isLoading && pokemonList.length === 0 && (
          <Box gridColumn='span 2' textAlign='center' width='100%'>
            <Typography variant="h4" fontWeight='bold'>No pokemon found</Typography>
          </Box>
        )}
      </Box>
      <Pagination
        sx={{ '.MuiPagination-ul': { justifyContent: 'center' } }}
        count={totalPages}
        page={currentPage}
        onChange={(_, value) => fetchPokemon(value)}
      />
      <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
        <Details />
      </Modal>
    </Box>
  );
}