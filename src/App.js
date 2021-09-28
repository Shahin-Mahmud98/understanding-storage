import logo from './logo.svg';
import './App.css';
import Card from './Components/Card/Card';

function App() {
  const items = [
    {
      name: 'first item', description: 'jksdief nnsdckmwefu sdhnnkszcnhwe', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Shaheed_Minar.JPG/240px-Shaheed_Minar.JPG'
    },
    {
      name: 'first item', description: 'jksdief nnsdckmwefu sdhnnkszcnhwe', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Shaheed_Minar.JPG/240px-Shaheed_Minar.JPG'
    },
    {
      name: 'first item', description: 'jksdief nnsdckmwefu sdhnnkszcnhwe', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Shaheed_Minar.JPG/240px-Shaheed_Minar.JPG'
    },
    {
      name: 'first item', description: 'jksdief nnsdckmwefu sdhnnkszcnhwe', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Shaheed_Minar.JPG/240px-Shaheed_Minar.JPG'
    },
    {
      name: 'first item', description: 'jksdief nnsdckmwefu sdhnnkszcnhwe', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Shaheed_Minar.JPG/240px-Shaheed_Minar.JPG'
    },
  ]
  return (

    <div className="row row-cols-1 row-cols-md-4 g-4">
      {
        items.map(item => <Card item={item}></Card>)
      }




    </div>
  );
}

export default App;
