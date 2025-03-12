import { useState } from 'react';

export const Dropdown = ({ options, selection, onChange, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  const handleOptionClick = (opt) => {
    setIsOpen((_prev) => false);
    onChange(opt);
  };
  const renderOptions = options.map(({ value, label }) => {
    return (
      <option
        className="p-2 hover:cursor-pointer"
        onClick={() => handleOptionClick({ value, label })}
        key={value}
        value={value.replace('#', '').trim()}
      >
        {label}
      </option>
    );
  });

  let content = children || 'Select...';
  return (
    <div className="bg-slate-700 px-3 rounded-md">
      <div className="py-2 hover:cursor-pointer" onClick={handleClick}>
        {content}
      </div>
      {isOpen && renderOptions}
    </div>
  );
};
