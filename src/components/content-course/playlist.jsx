import { Panel } from '../ui/Panel';
import { XMarkIcon } from '@heroicons/react/20/solid';

function Playlist({ title, data = [], actions }) {
  const { dispatch, add, remove } = actions;

  const handleRemoveItem = (index) => {
    dispatch(remove(index));
  };

  const renderList = data.map((list, index) => {
    return (
      <div className="flex justify-between items-center" key={index}>
        <div>{list}</div>
        <button className="m-1 p-1" onClick={() => handleRemoveItem(index)}>
          <XMarkIcon width={20} />
        </button>
      </div>
    );
  });

  const renderAction = actions ? (
    <button
      className="p-1"
      onClick={() => {
        dispatch(add);
      }}
    >
      Add
    </button>
  ) : null;

  return (
    <div className="pb-4">
      <div className="flex items-center justify-between my-2">
        <h2>{title}</h2>
        {renderAction}
      </div>
      <Panel>{renderList}</Panel>
    </div>
  );
}

export default Playlist;
