import { TextField as MuiTextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

interface TextFieldProps {
  value: string;
  onChange: (value: string) => void;
  onSearch: () => void;
}

export const TextField = ({ value, onSearch, onChange }: TextFieldProps) => {
  const handleOnKeyDown = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onSearch();
    }
  }

  return (
    <MuiTextField
      sx={{ backgroundColor: 'white' }}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      label="Search a pokemon!"
      variant="outlined"
      onKeyDown={handleOnKeyDown}
      InputProps={{
        endAdornment: <SearchIcon sx={{ cursor: 'pointer' }} onClick={() => onSearch()} />,
      }}
    />
  )
}