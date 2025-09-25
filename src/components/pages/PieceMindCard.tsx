import Data from "../../data/json/piecemind.json";
import { Link } from "react-router-dom";

const PieceCard: React.FC = () => {
  return (
    <div>
      {Data.map((data) => {
        return (
          <Link to={`/content/piece-of-mind/${data.id}`} key={data.id}>
            <div className="font-serif flex w-200 p-4 m-4 hover:border-4 border-[#493a2f] transition-border duration-100 cursor-pointer">
              <img src={data.img} alt="" className="w-50 h-30" />
              <div className="flex flex-col ml-6 pt-3">
                <h2 className="font-serif text-2xl font-bold text-[#493a2f]">
                  {data.title}
                </h2>
                <p className="text-[#493a2f]">{data.content}</p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default PieceCard;
