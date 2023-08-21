import { useState, useEffect } from 'react';
import './App.css';
import { db } from './firebase-config';
import { collection, getDocs, addDoc } from 'firebase/firestore';

function App() {
  const [newDream, setNewDream] = useState('');
  const [newTitle, setNewTitle] = useState('');
  const [dreams, setDreams] = useState([]);
  const dreamsCollectionRef = collection(db, 'dreamscape/app/dreams');

  const createDream = async () => {
    await addDoc(dreamsCollectionRef, { desc: newDream , title: newTitle});
  };

  useEffect(() => {
    const getDreams = async () => {
      const data = await getDocs(dreamsCollectionRef);
      setDreams(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getDreams();
  }, []); 

  return (
    <div className="App">
      <label>
        Post title: <input 
        name="Title" 
        defaultValue="Cosmos"
        value={newTitle}
        onChange={(event) => {
          setNewTitle(event.target.value);
        }} />
      </label>
      <br/>
      <textarea
        placeholder="dream"
        value={newDream}
        onChange={(event) => {
          setNewDream(event.target.value);
        }}
      />
      <button onClick={createDream}>Add Dream</button>
      {dreams.map((dream) => (
        <div className='dream_container'>
          <div key={dream.id} className="dream_div">
            <h3>{dream.title}</h3>
            <h5>{dream.desc}</h5>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
