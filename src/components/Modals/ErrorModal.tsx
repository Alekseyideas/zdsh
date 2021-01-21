import React from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../../store/applicationState';
import { Button } from '../ui';

interface ErrorModalProps {}

export const ErrorModal: React.FC<ErrorModalProps> = () => {
  const { Modals } = useSelector((state: AppState) => state);

  if (!Modals.errorModal.isOpen) return null;

  return (
    <div className="modal fade show" tabIndex={-1} style={{ display: 'block' }}>
      <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Помилка</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <p>{Modals.errorModal.message}</p>
          </div>
          <div className="modal-footer">
            <Button title="Закрити" onClick={() => null} />
          </div>
        </div>
      </div>
    </div>
  );
};
