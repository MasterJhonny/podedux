import { useEffect } from 'react';
import { Col } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import Searcher from './components/Searcher';
import PokemonList from './components/PokemonList';
import { getPokemon } from './api';
import { setPokemons } from './actions/index';

import logo from './assets/logo.svg';
import './App.css'

function App() {

  const pokemones = useSelector(state => state.pokemones);
  // console.log("🚀 ~ file: App.jsx ~ line 15 ~ App ~ pokemones", pokemones)
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPoke = async () => {
      const data = await getPokemon();
      dispatch(setPokemons(data))
    }
    fetchPoke();
  }, [])

  return (
    <div className="App">
      <Col span={4} offset={10}>
        <img src={logo} alt="logo"/>
      </Col>
      <Col span={8} offset={8}>
        <Searcher/>
      </Col>
      <PokemonList pokemones={pokemones}/>
    </div>
  )
}

export default App;
