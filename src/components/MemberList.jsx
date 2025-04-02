const MemberList = ({ children }) => {
  return (
    <section className="flex flex-col items-center my-8">
      <p className="text-gray-400">Team members previously added to projects</p>
      <ul class="my-6">{children}</ul>
    </section>
  );
};
export default MemberList;
