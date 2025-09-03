import BookData from "../data/json/books.json";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const Books: React.FC = () => {
  return (
    <div>
      <Link to="/content">
        <ArrowBackIcon />
      </Link>
      <div className="relative min-h-screen bg-amber-200 p-8 flex justify-center items-center">
        <div className="absolute right-50 bottom-20 p-3 bg-white grid grid-cols-4 gap-4 rounded-3xl shadow-2xl">
          {BookData.map((book) => (
            <Link to={`/content/books/${book.id}`} key={book.id}>
              <div className="p-4 hover:scale-105 transition-transform duration-200">
                <img
                  src={book.pic}
                  alt={book.title}
                  className="w-40 h-60 m-5 object-cover cursor-pointer shadow-2xl rounded-lg"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Books;
