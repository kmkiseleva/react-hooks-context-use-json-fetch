import useJsonFetch from "./../hook/useJsonFetch";

const Data = () => {
  const [data, loading, error] = useJsonFetch(
    process.env.REACT_APP_DATA_URL,
    {}
  );
  return <div>{data && <p className="alert alert-success text-center">{data.status}</p>}</div>;
};

export default Data;
