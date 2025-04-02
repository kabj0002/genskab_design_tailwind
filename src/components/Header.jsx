import { HiOutlineUserGroup } from "react-icons/hi";

const Header = ({ children }) => {
  return (
    <header class="flex flex-col items-center mx-32">
      <HiOutlineUserGroup class="w-16 h-16 stroke-gray-500 my-4" />
      <h1 class="font-bold text-2xl">Add team members</h1>
      <p className="text-center my-3 text-gray-400">
        You haven't added any team members to your project yet. As the owner of
        the project, you can manage team member permissions.
      </p>
      {children}
    </header>
  );
};
export default Header;
