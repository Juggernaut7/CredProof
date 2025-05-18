import React from 'react';
import UserLayout from '../layouts/UserLayout';
import CredentialCard from '../components/CredentialCard';

const Dashboard = () => {
  const credentials = [
    { title: 'Smart Contract Audit', status: 'Minted', date: '2025-05-14' },
    { title: 'Frontend Build', status: 'Pending', date: '2025-05-10' }
  ];

  return (
    <UserLayout>
      <h2 className="text-2xl font-semibold mb-6">My Credentials</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {credentials.map((item, index) => (
          <CredentialCard key={index} {...item} />
        ))}
      </div>
    </UserLayout>
  );
};

export default Dashboard;
