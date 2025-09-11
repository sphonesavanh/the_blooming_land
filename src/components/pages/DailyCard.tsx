const DailyCard: React.FC = () => {
  return (
    <div className="w-200 p-4 m-4 hover:border-4 border-[#493a2f] transition-border duration-100 cursor-pointer">
      <h2 className="font-serif text-2xl text-[#493a2f]">Daily Thought</h2>
      <p className="text-[#493a2f]">
        This is a placeholder for the daily thought content.
      </p>
    </div>
  );
};

export default DailyCard;
