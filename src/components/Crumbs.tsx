import React from 'react';
import { Link } from 'react-router-dom';

export interface ICrumb {
  title: string;
  isLink: boolean;
  active?: boolean;
  path?: string;
  id: number;
}

interface CrumbsProps {
  data: ICrumb[];
}

export const Crumbs: React.FC<CrumbsProps> = ({ data }) => {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb mt-3">
        {data.map((link) => (
          <li className={`breadcrumb-item ${link.active ? 'active' : ''}`} key={link.id}>
            {link.isLink ? <Link to={link.path || '/'}>{link.title}</Link> : <>{link.title}</>}
          </li>
        ))}
      </ol>
    </nav>
  );
};
