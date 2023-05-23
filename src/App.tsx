import Navbar from './nav';
import Card from './cards';
import data from './data';

const App = () => {
  const places = data.map((place) => {
    return <Card key={place.id} place={place} />;
  });
  return (
    <div>
      <Navbar />
      <div>{places}</div>
    </div>
  );
};

export default App;
