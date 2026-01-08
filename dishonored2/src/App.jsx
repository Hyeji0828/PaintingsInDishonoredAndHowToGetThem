import Card from './components/Card';
import data from './data/data.json';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="space-y-8">
        {data.map(item => (
          <Card
            key={item.game+item.mission+item.type+item.id}
            id={item.id}
            game={item.game}
            type={item.type}
            mission={item.mission}
            title={item.title}
            eng_title={item.eng_title}
            images_count={item.images_count}
            content={item.content}
            details={item.details}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
