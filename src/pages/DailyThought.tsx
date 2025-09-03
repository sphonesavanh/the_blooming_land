import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';

const DailyThought: React.FC = () => {
  return (
    <div>
      <Link to="/content">
        <ArrowBackIcon />
      </Link>
      <h1>Daily Thoughts</h1>
    </div>
  );
};

export default DailyThought;
