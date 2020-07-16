import React , {useState, useEffect} from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import getGifs from './services/getGifs';
import ListOfGifs from './components/ListOfGifs';

const SectionContent = styled.section`
    ${tw`flex flex-col p-10 bg-gray-900 min-h-screen` }
`

function App() {
  const [gifs, setGifs] = useState([])

  useEffect(() => {
    getGifs({keyword: 'panda'}).then(gifs => setGifs(gifs))
  }, [])

  return (
    <div className="App">
      <SectionContent>
          <ListOfGifs  gifs={gifs}/>
      </SectionContent>
    </div>
  );
}

export default App;
