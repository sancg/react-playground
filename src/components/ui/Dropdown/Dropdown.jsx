import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { useEffect, useRef, useState } from 'react';

export const Dropdown = ({ options, value, onChange }) => {
  const dropRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const observerClick = (event) => {
      if (dropRef?.current) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', observerClick, true);

    return () => {
      document.removeEventListener('click', observerClick);
      console.log('clean up function');
    };
  }, []);

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
        className="p-2 rounded-md hover:bg-slate-700"
        onClick={() => handleOptionClick({ value, label })}
        key={value}
        value={value.replace('#', '').trim()}
      >
        {label}
      </option>
    );
  });

  let content = value?.label || 'Select...';
  return (
    <div ref={dropRef} className="relative w-full min-w-fit">
      <div
        className="py-2 flex items-center justify-between cursor-pointer bg-slate-700 px-3 rounded-md shadow-md border border-slate-500"
        onClick={handleClick}
      >
        {content} <ChevronDownIcon width={24} />
      </div>
      {isOpen && (
        <div className="absolute top-full cursor-pointer bg-slate-600 w-full left-0 rounded-md shadow-sm border border-slate-500">
          {renderOptions}
        </div>
      )}
    </div>
  );
};
