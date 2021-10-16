import Data from "./components/Data";
import Loader from "./components/Loader";
import Error from "./components/Error";

export default function App() {
  return (
    <div>
      <div>
        <Data />
      </div>
      <div>
        <Loader />
      </div>
      <div>
        <Error />
      </div>
    </div>
  );
}
