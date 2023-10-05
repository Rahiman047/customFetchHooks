import "./App.css";
import customFetch from "./customFetch";
import ShowUser from "./ShowUser";

const url = "https://api.github.com/users/QuincyLarson";

function App() {
  const { data, loading, error } = customFetch(url);
  return (
    <div>
      {loading && <h1>Please wait while we fetch the user</h1>}
      {error && <h1>Oops Something went wrong</h1>}
      <ShowUser data={data} />
    </div>
  );
}

export default App;
