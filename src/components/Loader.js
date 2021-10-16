import useJsonFetch from "./../hook/useJsonFetch";

const Loader = () => {
  const [data, loading, error] = useJsonFetch(
    process.env.REACT_APP_LOADING_URL,
    {}
  );
  return (
    <div>
      {loading && <p className="alert alert-info text-center">Loading...</p>}
    </div>
  );
};

export default Loader;
