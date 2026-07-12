import ListofPlayers from "./ListofPlayers";
import IndianPlayersComponent from "./IndianPlayers";

function App() {

  const flag = false;

  return (
    <div>

      {flag ? <ListofPlayers /> : <IndianPlayersComponent />}

    </div>
  );
}

export default App;