import React, { useState } from 'react';
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';

function Pokemon() {
  const [pokemonName, setPokemonName] = useState('');
  const [pokemonInfo, setPokemonInfo] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`);
      setPokemonInfo(response.data);
    } catch (error) {
      console.error('Error fetching Pokemon data:', error);
    }
  };

  const handleCloseModal = () => {
    setPokemonInfo(null);
  };

  return (
    <div>
      <Header />
      <div className="tw-flex tw-items-center tw-justify-center tw-min-h-screen">
        <div className="tw-w-full tw-max-w-md tw-mx-4 tw-my-4 tw-bg-white tw-shadow-lg tw-rounded-lg tw-flex-grow tw-basis-[25%] tw-p-4 tw-relative">
          <h1 className="tw-text-2xl tw-font-bold tw-mb-4">Pesquisa de Pokémon</h1>
          <input
            type="text"
            placeholder="Digite o nome do Pokémon"
            value={pokemonName}
            onChange={(e) => setPokemonName(e.target.value)}
            className="tw-border tw-rounded tw-py-2 tw-px-4 tw-mb-4 tw-w-full"
          />
          <button
            onClick={handleSearch}
            className="tw-bg-blue-500 tw-hover:tw-bg-blue-700 tw-text-white tw-font-bold tw-py-2 tw-px-4 tw-rounded tw-mb-4 tw-w-full"
          >
            Pesquisar
          </button>

          {pokemonInfo && (
            <div className="tw-bg-gray-900 tw-bg-opacity-50 tw-fixed tw-inset-0 tw-flex tw-items-center tw-justify-center">
              <div className="tw-bg-white tw-p-4 tw-rounded-lg tw-max-w-md tw-w-full tw-relative">
                <span
                  className="tw-absolute tw-top-0 tw-right-0 tw-m-4 tw-cursor-pointer tw-text-2xl"
                  onClick={handleCloseModal}
                >
                  &times;
                </span>
                <h2 className="tw-text-2xl tw-font-bold">{pokemonInfo.name}</h2>
                <img
                  src={pokemonInfo.sprites.front_default}
                  alt={pokemonInfo.name}
                  className="tw-mb-4"
                />
                <p><strong>Height:</strong> {pokemonInfo.height}</p>
                <p><strong>Weight:</strong> {pokemonInfo.weight}</p>
                <p><strong>Abilities:</strong> {pokemonInfo.abilities.map(ability => ability.ability.name).join(', ')}</p>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Pokemon;
