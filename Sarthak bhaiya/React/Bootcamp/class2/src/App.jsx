import React from 'react'
import Card from './Components/Card';
import { useCharacterContext } from './Context/CharacterContext';


const App = () => {
  const { narutoCharacters } = useCharacterContext(); // Accessing context data
  
  
  return (
   <div className='w-full h-full overflow-x-hidden overflow-y-scroll scrollbar md:p-10 bg-gradient-to-bl from-[#D7D3BF] via-[#ECEBDE] to-[#C1BAA1]'>
    <h1 className='w-full md:text-8xl text-4xl text-center   font-sans font-bold uppercase  py-20 text-[#b1a374]'>Naruto Characters</h1>
 <div className="md:flex flex-wrap gap-5  w-full h-full p-5">
 {narutoCharacters.map(function (character){
  return(
    <Card key={character.name} character={character}/>
  )
})}
 </div>
 </div>
  
  )
}

export default App