const MemberList = ({ children }) => {
  return (
    <section className="flex flex-col items-center my-8">
      <p className="text-gray-400">Team members previously added to projects</p>
      {children}
    </section>
  );
};
export default MemberList;
