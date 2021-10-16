import useJsonFetch from "./../hook/useJsonFetch";

const Error = () => {
  const [data, loading, error] = useJsonFetch(
    process.env.REACT_APP_ERROR_URL,
    {}
  );
  return (
    <div>
      {error && <p className="alert alert-danger text-center">{error}</p>}
    </div>
  );
};

export default Error;
