import { XMarkIcon } from '@heroicons/react/20/solid';
import { Panel } from '../ui/Panel';

function Playlist({ title, data = [], actions }) {
  const { dispatch, ...rest } = actions;
  const ACTION_TYPE = Object.values(rest)[0]; // Quite sketchy

  const renderList = data.map((list, index) => {
    return (
      <div className="flex justify-between items-center" key={index}>
        <div>{list}</div>
        <button className="m-1 p-1">
          <XMarkIcon width={20} />
        </button>
      </div>
    );
  });

  const renderAction = actions ? (
    <button
      className="p-1"
      onClick={() => {
        dispatch({ type: ACTION_TYPE });
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
