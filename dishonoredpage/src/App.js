import Card from './components/Card';
import data from './data/data.json';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="card-list">
        {data.map(item => (
          <Card
            key={item.id}
            title={item.title}
            eng_title={item.eng_title}
            painting={item.painting}
            images={item.images}
            content={item.content}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
