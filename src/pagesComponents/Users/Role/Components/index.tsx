import React from 'react';
import RoleCard from './RoleCard';

const RoleComponent: React.FC = () => {
  return (
    <div className="grid">
      <div className="col-12 col-sm-6 col-xl-4">
        <RoleCard role="Administrator" />
      </div>
      <div className="col-12 col-sm-6 col-xl-4">
        <RoleCard role="Administrator" />
      </div>
      <div className="col-12 col-sm-6 col-xl-4">
        <RoleCard role="Administrator" />
      </div>
      <div className="col-12 col-sm-6 col-xl-4">
        <RoleCard role="Administrator" />
      </div>
      <div className="col-12 col-sm-6 col-xl-4">
        <RoleCard role="Administrator" />
      </div>
      <div className="col-12 col-sm-6 col-xl-4">
        <RoleCard role="Administrator" />
      </div>
    </div>
  );
};

export default RoleComponent;
