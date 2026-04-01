import coracaoPuzzle from "@/assets/coracao-puzzle.png";

const TopBanner = () => {
  return (
    <div className="bg-primary text-primary-foreground text-center py-2.5 px-4 text-sm font-medium flex items-center justify-center gap-2">
      <img src={coracaoPuzzle} alt="" className="h-4 w-4 object-contain" />
      Dobre sua ajuda! A cada doação feita hoje, a Ajudaki contribui junto.
    </div>
  );
};

export default TopBanner;
