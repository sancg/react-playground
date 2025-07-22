import { useState } from 'react';
import { Dropdown } from '../../components/content-course/Dropdown/Dropdown';

const DropdownPage = () => {
  const [value, setValue] = useState(null);
  const handleValue = (opt) => {
    setValue(opt);
  };
  return (
    <Dropdown
      options={[
        { label: 'mandarina', value: 'orange' },
        { label: 'Cielo', value: 'blue sky' },
      ]}
      value={value}
      onChange={handleValue}
    />
  );
};

export default DropdownPage;
