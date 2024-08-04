import { Box, Modal as MuiModal } from "@mui/material";
import { Pokemon } from "../../types/pokemonTypes";
import { lighterTypeColors } from "../../utils/utils";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: JSX.Element;
  pokemon: Pokemon | null;
}

export const Modal = ({ open, onClose, children, pokemon }: ModalProps) => {

  return (
    <MuiModal
      open={open}
      onClose={onClose}
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          boxShadow: 24,
          outline: 'none',
          padding: '2rem',
          borderRadius: '15px',
          background: pokemon ? lighterTypeColors[pokemon.types[0].type.name] : 'white'
        }}
      >
        {children}
      </Box>
    </MuiModal>
  )
}