import React from 'react';
import Card from './ui/card';

export default function ImagesList({ imageAPI }) {
  const renderGridImage = imageAPI.results.map((item) => {
    return <Card key={item.id} itemImg={item} />;
  });

  return (
    <div
      // className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] my-6 gap-2 grid-flow-dense place-content-center max-w-7xl sm:mx-0 sm:gap-6 xl:mx-auto"
      className="columns-1 gap-2 md:columns-4 xl:columns-6"
    >
      {imageAPI !== null ? (
        renderGridImage
      ) : (
        <h1 className="text-balance">Nothing as been search 🧿</h1>
      )}
    </div>
  );
}
