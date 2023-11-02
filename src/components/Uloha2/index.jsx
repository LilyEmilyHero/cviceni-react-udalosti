import hradUrl from './hrad.svg';

// Zadání: Po najetí myši, `onMouseEnter` na obrázek zobrazte alert s textem „Na hradě je myš!“

export const Uloha2 = () => {
  return (
    <img
      onMouseEnter={() => {
        console.log('Na hradě je myš!');
      }}
      src={hradUrl}
      width={60}
      height={60}
      alt="hrad"
    />
  );
};
