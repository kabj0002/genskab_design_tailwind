import SecondaryButton from "./SecondaryButton";

const MemberCard = () => {
  return (
    <li class="flex border-b-gray-500 border-t-gray-500">
      <div className="flex items-center">
        <div className="h-12 w-12 bg-gray-500 rounded-full m-4"></div>
        <div className="flex-column">
          <h2 className="font-bold">Lindsay Walton</h2>
          <p className="text-gray-400">Front-end Developer</p>
        </div>
      </div>
      <div className="flex items-center">
        <SecondaryButton />
      </div>
    </li>
  );
};
export default MemberCard;
