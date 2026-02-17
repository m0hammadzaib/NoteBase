import React from 'react'
import Tabs from './Tabs';

const Sidebar = ({ open}) => {
  if (!open) return null;

  return (
    <div className="fixed left-0 top-16">
      <div className="fixed left-0 top-16 w-64 h-auto p-6 text-white">
        <Tabs/>
      </div>
    </div>
  );
};

export default Sidebar;

