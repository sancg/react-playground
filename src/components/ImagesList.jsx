import React from 'react';
import Card from './ui/card';
import { useLocation } from 'react-router-dom';

export default function ImagesList({
  props: { apiResult, onSaveFavorite, favItems },
}) {
  const { pathname } = useLocation();

  const renderGridImage = apiResult?.results?.map((item) => {
    return <Card key={item.id} props={{ item, onSaveFavorite }} />;
  });

  const renderFavItems = favItems?.map((item) => (
    <Card key={item.id} props={{ item, onSaveFavorite }} />
  ));
  return (
    <div
      className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] my-6 gap-2 grid-flow-dense place-content-center max-w-7xl sm:mx-0 sm:gap-6 xl:mx-auto"
      //className="columns-1 gap-2 md:columns-4 xl:columns-6"
    >
      {apiResult ? (
        renderGridImage
      ) : pathname.includes('favorite') && favItems?.length > 0 ? (
        renderFavItems
      ) : (
        <h1 className="text-balance">Nothing to show here 🧿</h1>
      )}
    </div>
  );
}
