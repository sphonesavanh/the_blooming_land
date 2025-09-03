import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";

const PieceOfMind: React.FC = () => {
  return (
    <>
      <Link to="/content">
        <ArrowBackIcon />
      </Link>
      <h1>Piece of Mind</h1>
    </>
  );
};

export default PieceOfMind;
