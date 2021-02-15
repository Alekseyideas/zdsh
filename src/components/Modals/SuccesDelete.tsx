import React from 'react';
import { useDispatch } from 'react-redux';
import { setSuccessRemoveModal } from '../../store/modals/actions';

interface SuccesCloneProps {
  title: string;
  closeHandler?: () => void;
  desc: string;
}

export const SuccesDelete: React.FC<SuccesCloneProps> = ({
  title,
  desc,
  closeHandler = () => null,
}) => {
  const [classActive, setClassActive] = React.useState('');
  const dispatch = useDispatch();
  const closeModal = () => {
    dispatch(setSuccessRemoveModal({ isOpen: false }));
    closeHandler();
  };

  React.useEffect(() => {
    setClassActive('show');
  }, []);

  return (
    <div
      className={`modal fade ${classActive}`}
      id="exampleModal"
      tabIndex={-1}
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      style={{ display: 'block' }}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              {title}
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              onClick={closeModal}
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">{desc}</div>
          <div className="modal-footer">
            {/* <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
              Close
            </button> */}
            <button type="button" className="btn btn-primary" onClick={closeModal}>
              Ок
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
