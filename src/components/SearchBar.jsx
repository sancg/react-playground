import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import React, { useRef } from 'react';
export default function SearchBar({ onSubmit }) {
  const text = useRef();

  const handleSubmit = (event, ref) => {
    event.preventDefault();

    onSubmit(ref.current.value);
  };
  return (
    <div>
      <form className="mt-4" onSubmit={(e) => handleSubmit(e, text)}>
        <div className="w-full flex relative ">
          <input
            type="search"
            className="p-3 rounded-xl w-full"
            id="search"
            ref={text}
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
