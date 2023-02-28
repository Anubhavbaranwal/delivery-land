import { useRouteError } from "react-router-dom";
const Error = () => {
  const err = useRouteError();

  return (
    <div className="error">
      <h1>{err.status + ":" + err.statusText}</h1>
      <h2> please enter the correct link address</h2>
    </div>
  );
};

export default Error;
