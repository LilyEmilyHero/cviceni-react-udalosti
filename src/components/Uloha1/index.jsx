import React from 'react';

// Zadání: Po kliku na tlačítko zobrazte alert s textem „Ahoj“.

export const Uloha1 = () => {
  return (
    <button
      onClick={() => {
        console.log('Ahoj');
      }}
    >
      Ukaž bublinu
    </button>
  );
};
