import React from 'react';
import './App.css';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './redux/store'; 

import { getPetsFetch } from './redux/state/petState';

function App() {
  const pets = useSelector((state: RootState) => state.pets.pets);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPetsFetch());
  }, [dispatch]);

  console.log(pets);

  return (
    <div className="App">
      <div>
        <h1>MY CATS</h1>
        <div>
          {pets.map( pet =>
            <div key={pet.pet_id} className="row">
              <div className='col-left'>
                  <h2>{pet.pet_name}</h2>
                  <h2>{pet.pet_age}</h2>
                  <h2>{pet.pet_breed}</h2>
                  <h2>{pet.pet_gender_id}</h2>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;