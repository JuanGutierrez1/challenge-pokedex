import { Box, Modal as MuiModal } from "@mui/material";
import { typeColors } from "../../utils/utils";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: JSX.Element;
}

export const Modal = ({ open, onClose, children }: ModalProps) => {
  const pokemon = useSelector((state: RootState) => state.pokemon.selected);

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
          background: pokemon ? typeColors[pokemon.types[0].type.name].main : 'white',
          width: { xs: '80%', sm: '70%', md: 'auto' },
        }}
      >
        {children}
      </Box>
    </MuiModal>
  )
}