import { useState } from 'react';
import { Dropdown } from './components/ui/Dropdown/Dropdown';

export const AppTest = () => {
  //TODO: Refactor with the pattern of form controlled

  const [selection, setSelection] = useState(null);

  const handleSelect = (option) => {
    console.log(option);
    setSelection((_prev) => option);
  };

  const colors = [
    { value: '#FF5733', label: 'Bright Red' },
    { value: '#33FF57', label: 'Neon Green' },
    { value: '#3357FF', label: 'Electric Blue' },
  ];
  return (
    <div>
      <Dropdown {...{ onChange: handleSelect, options: colors }}>
        {selection?.label}
      </Dropdown>
    </div>
  );
};
