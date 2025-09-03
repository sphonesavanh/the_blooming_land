import { useParams } from "react-router-dom";
import BookData from "../data/json/books.json";

const BookDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const book = BookData.find((b) => b.id === Number(id));

  if (!book) {
    return <div>Book not found</div>;
  }

  return (
    <div className="min-h-screen bg-amber-100 flex justify-center items-center p-8">
      <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-2xl w-full">
        <img
          src={book.pic}
          alt={book.title}
          className="w-48 h-72 object-cover rounded-lg mb-6 mx-auto"
        />
        <h1 className="text-3xl font-bold text-center mb-2">{book.title}</h1>
        <p className="text-gray-600 text-center mb-4">by {book.author}</p>
        <p className="italic text-center mb-4">"{book.quote}"</p>
        <p className="mb-4 text-gray-700">{book.desc}</p>
        <p className="font-semibold text-gray-800 text-center">
          Recommended by: {book.recommendedBy}
        </p>
      </div>
    </div>
  );
};

export default BookDetail;
