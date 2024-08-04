import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { POKEMON_PER_PAGE } from "../utils/utils";
import { setPokemonList } from "../store/slices/pokemonSlice";
import { pokemonService } from "../services/pokemonService";

export const useFetchPokemon = () => {
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [search, setSearch] = useState('');

  const fetchPokemon = async (page: number = currentPage) => {
    setIsLoading(true);
    const response = await pokemonService.getPokemon(search, (page - 1) * POKEMON_PER_PAGE);
    setCurrentPage(page);
    dispatch(setPokemonList(response.results));
    setTotalPages(Math.ceil(response.data.count / POKEMON_PER_PAGE));
    setIsLoading(false);
  }

  useEffect(() => {
    fetchPokemon()
  }, []);

  return {
    fetchPokemon,
    isLoading,
    currentPage,
    setCurrentPage,
    totalPages,
    search,
    setSearch
  };

}