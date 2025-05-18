import React from 'react';

const statusStyles = {
  Minted: 'bg-green-100 text-green-700',
  Pending: 'bg-yellow-100 text-yellow-700',
  Rejected: 'bg-red-100 text-red-700',
};

const CredentialCard = ({ title, status, date }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 border hover:shadow-lg transition-all">
      <h3 className="font-semibold text-lg mb-1">{title}</h3>
      <p className="text-sm text-gray-500 mb-2">Submitted on: {date}</p>
      <span className={`px-3 py-1 text-xs rounded-full font-medium ${statusStyles[status]}`}>
        {status}
      </span>
    </div>
  );
};

export default CredentialCard;
