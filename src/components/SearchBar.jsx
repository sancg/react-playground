import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import { useRef } from 'react';

export default function SearchBar({ onSubmit }) {
  const searchTerm = useRef(null);

  const handleFormSubmit = (event, term) => {
    event.preventDefault();

    onSubmit(term.current.value);
  };
  return (
    <div>
      <form className="mt-4" onSubmit={(e) => handleFormSubmit(e, searchTerm)}>
        <div className="w-full flex relative max-w-7xl xl:mx-auto">
          <input
            type="search"
            className="p-3 rounded-xl w-full"
            id="search"
            ref={searchTerm}
            placeholder="Search images"
            autoComplete="false"
          />
          <button type="submit" className="w-10 hover:ring-2">
            <MagnifyingGlassIcon className="h-5 w-5 mx-auto" />
          </button>
        </div>
      </form>
    </div>
  );
}
