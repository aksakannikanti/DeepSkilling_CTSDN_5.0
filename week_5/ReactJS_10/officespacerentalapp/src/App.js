import "./App.css";
import office from "./office.jpg";

function App() {

  const element = "Office Space";

  const ItemName = {
    Name: "DBS",
    Rent: 50000,
    Address: "Chennai"
  };

  const officeList = [
    {
      Name: "DBS",
      Rent: 50000,
      Address: "Chennai"
    },
    {
      Name: "Regus",
      Rent: 75000,
      Address: "Bangalore"
    },
    {
      Name: "WeWork",
      Rent: 65000,
      Address: "Hyderabad"
    }
  ];

  return (
    <div>

      <h1>{element}, at Affordable Range</h1>

      <img
        src={office}
        width="25%"
        height="25%"
        alt="Office Space"
      />

      <h2>Single Office</h2>

      <h3>Name : {ItemName.Name}</h3>

      <h3 className={ItemName.Rent <= 60000 ? "textRed" : "textGreen"}>
        Rent : Rs. {ItemName.Rent}
      </h3>

      <h3>Address : {ItemName.Address}</h3>

      <hr />

      <h2>Office Space List</h2>

      {
        officeList.map((item, index) => (

          <div key={index}>

            <h3>Name : {item.Name}</h3>

            <h3 className={item.Rent <= 60000 ? "textRed" : "textGreen"}>
              Rent : Rs. {item.Rent}
            </h3>

            <h3>Address : {item.Address}</h3>

            <hr />

          </div>

        ))
      }

    </div>
  );
}

export default App;