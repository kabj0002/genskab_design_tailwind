import SecondaryButton from "./SecondaryButton";

const MemberCard = () => {
  const employees = [
    { fullname: "Lindsay Wolton", worktitle: "Front-end Developer" },
    { fullname: "Courtney Henry", worktitle: "Designer" },
    { fullname: "Tom Cook", worktitle: "Director of Product" },
  ];

  return (
    <ul class="my-6">
      {employees.map((employee, index) => (
        <li key={index} className="flex border-b-gray-500 border-t-gray-500">
          <div className="flex items-center">
            <div className="h-12 w-12 bg-gray-500 rounded-full m-4"></div>
            <div className="flex flex-col">
              <h2 className="font-bold">{employee.fullname}</h2>
              <p className="text-gray-400">{employee.worktitle}</p>
            </div>
          </div>
          <div className="flex items-center">
            <SecondaryButton />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default MemberCard;

//   return (
//     {employees.map((employee, index) => (
//     <li class="flex border-b-gray-500 border-t-gray-500">
//       <div className="flex items-center">
//         <div className="h-12 w-12 bg-gray-500 rounded-full m-4"></div>
//         <div className="flex-column">
//           <h2 className="font-bold">{employee.fullname}</h2>
//           <p className="text-gray-400">{employee.worktitle}</p>
//         </div>
//       </div>
//       <div className="flex items-center">
//         <SecondaryButton />
//       </div>
//     </li>
//   ))}
//     )
// }
