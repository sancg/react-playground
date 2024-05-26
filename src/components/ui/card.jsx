import defaultImg from '../../assets/test.png';
import { HeartIcon } from '@heroicons/react/20/solid';

export default function Card({ itemImg }) {
  const {
    alt_description,
    urls: { thumb, small },
  } = itemImg;
  console.log(itemImg);

  return (
    <article className="mb-4">
      <div className="ctr_image">
        <img src={small} alt={alt_description} className="w-full mb-2" />
      </div>
      <div className="ctr_action">
        <HeartIcon className="w-6" fill="none" stroke="white" />
      </div>
    </article>
  );
}
