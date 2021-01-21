import React from 'react';

interface AlertsProps {
  type?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
  text?: string;
}

export const Alert: React.FC<AlertsProps> = ({ type = 'danger', text = 'Error' }) => {
  return (
    <div className={`alert alert-${type}`} role="alert">
      {type === 'danger' ? <h3>Виникла помилка</h3> : null}

      <iframe title="error" srcDoc={text} />

      {/* <span dangerouslySetInnerHTML={{ __html: text.replace(/\\n/g, '') }} /> */}
      {/* {text} */}
    </div>
  );
};
