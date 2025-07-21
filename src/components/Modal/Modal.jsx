import { useEffect } from 'react';
import ReactDOM from 'react-dom';

function Modal(props) {
  useEffect(() => {
    document.body.classList.add('overflow-hidden');

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, []);

  return ReactDOM.createPortal(
    <div className="">
      <div
        className="fixed inset-0 bg-gray-600 bg-opacity-60"
        onClick={props.handleShow}
      ></div>
      <div className="fixed bg-blue-900 inset-40 flex items-center justify-center p-10 rounded-lg shadow-md">
        <p>Hello my modal</p>
      </div>
    </div>,
    document.querySelector('.modal-container')
  );
}
export default Modal;
