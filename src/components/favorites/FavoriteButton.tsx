import { IconButton } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

type FavoriteButtonProps = {
  isFavorite: boolean;
  onToggle: () => void;
};

export default function FavoriteButton({
  isFavorite,
  onToggle,
}: FavoriteButtonProps) {
  return (
    <IconButton
      onClick={onToggle}
      sx={{
        "&:focus": { outline: "none" },
        "&:focus-visible": { outline: "none" },
      }}
    >
      {isFavorite ? <StarIcon color="warning" /> : <StarBorderIcon />}
    </IconButton>
  );
}
