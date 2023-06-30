import { useState } from 'react';
import Profile from '../src/components/Profile';

function Home() {
  const [profile, setProfile] = useState('')
  const cpf = '02983245047'
  const orgao = '26246'
  const handleClick = () => {
    setProfile(document.getElementById('profileName').value) 
    console.log(profile)
  }
  return (
    <div>
      <input id='profileName' type="text" />
      <button onClick={handleClick}>Procurar</button>
      {profile && <Profile cpf={cpf} nome={profile} orgao={orgao}/>}
    </div>
  );
}

export default Home;
