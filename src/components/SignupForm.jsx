const SignupForm = ({ children }) => {
  return (
    <div className="flex flex-row">
      <input type="email" placeholder="Enter an email" className=" mr-4" />
      {children}
    </div>
  );
};
export default SignupForm;
