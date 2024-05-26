import defaultImg from '../../assets/test.png';
import { HeartIcon } from '@heroicons/react/20/solid';

export default function Card({ props: { item, onSaveFavorite } }) {
  const { alt_description } = item;
  // console.log({ item, onSaveFavorite });

  return (
    <article className="mb-4 relative h-64">
      <div className="ctr_image">
        <img
          src={item?.urls?.small ?? item.img}
          alt={alt_description}
          className="w-full h-64 mb-2 object-cover"
        />
      </div>
      <div className="ctr_action absolute right-0">
        <button
          type="button"
          className="hover:ring-0 hover:outline-none"
          onClick={(e) => {
            onSaveFavorite({
              id: item.id,
              img: item?.urls?.small,
              alt_description,
              urls: {
                regular: item?.urls?.regular,
                thumb: item?.urls?.thumb,
              },
            });
          }}
        >
          <HeartIcon
            className="w-6 hover:outline-2"
            fill="none"
            stroke="white"
          />
        </button>
      </div>
    </article>
  );
}
