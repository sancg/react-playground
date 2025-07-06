import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { useEffect, useRef, useState } from 'react';
import { Panel } from '../Panel';

export const Dropdown = ({ options, value, onChange }) => {
  const dropRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const observerClick = (event) => {
      if (!dropRef.current) {
        return;
      }
      // IMPROVE: Here I've select the reference DOM and its compared with the DOM that was clicked
      if (!dropRef?.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', observerClick, true);

    return () => {
      document.removeEventListener('click', observerClick);
      console.log('clean up function Dropdown');
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
        className="p-2 rounded-md hover:bg-indigo-800 w-full"
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
      <Panel
        className="flex items-center justify-between bg-indigo-800 py-2 cursor-pointer"
        onClick={handleClick}
      >
        {content}
        <ChevronDownIcon width={24} />
      </Panel>
      {isOpen && (
        <Panel className="absolute top-full cursor-pointer bg-indigo-600 px-0">
          {renderOptions}
        </Panel>
      )}
    </div>
  );
};
