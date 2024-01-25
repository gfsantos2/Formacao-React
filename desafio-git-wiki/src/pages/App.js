
import { useState } from 'react';
import gitLogo from '../assets/github.png'
import Input from '../components/Input';
import Button from '../components/Button';
import ItemRepo from '../components/ItemRepo';
import { api } from '../services/api';

import { Container } from './styles';

function App() {

  const [currentRepo, setCurrentRepo] = useState('');
  const [repos, setRepos] = useState([]);

  const handleSearchRepo = async () => {
    setRepos((prevRepos) => []);

    try {
      const { data } = await api.get(`search/repositories?q=${currentRepo}`)
      if (data.items.length == 0) {
        alert('Repositório não encontrado!')
        return
      }

      data.items.forEach(item => {
        if (item.id) {
          const isExist = repos.find(repo => repo.id === item.id);
          if (!isExist) {
            setRepos(prev => [...prev, item]);
            setCurrentRepo('')
            return
          }
        }
      });
    }
    catch (e) {
      alert('Repositório não encontrado')
      return
    }
  }

  const handleRemoveRepo = (id) => {
    setRepos((prevRepos) => [
      ...prevRepos.filter((value) => value.id != id)
    ]
    )

    alert('Repositório removido')
  }

  return (
    <Container>
      <img src={gitLogo} width={72} height={72} alt="github logo" />
      <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)} />
      <Button onClick={handleSearchRepo} />
      {repos.map(repo => <ItemRepo handleRemoveRepo={handleRemoveRepo} repo={repo} />)}
    </Container>
  );
}

export default App;
