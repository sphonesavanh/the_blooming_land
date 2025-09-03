import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";

const Byelinguals: React.FC = () => {
  return (
    <div>
      <Link to="/content">
        <ArrowBackIcon />
      </Link>
      <h1>Byelinguals</h1>
    </div>
  );
};

export default Byelinguals;
