import { useState } from "react";
import data from "./data";
import List from "./List";
const App = () => {
  const [person, setPerson] = useState(data);
  return (
    <main>
      <section className='container'>
        <h3>{person.length} Birthdays Today</h3>
        <List person={person} />
        <button className='btn btn-block' onClick={() => setPerson([])}>
          Clear Birthdays
        </button>
      </section>
    </main>
  );
};
export default App;
