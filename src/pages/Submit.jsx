import React from 'react';
import { useForm } from 'react-hook-form';
import UserLayout from '../layouts/UserLayout';

const Submit = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log('Submitted Credential:', data);
    // Later: send to backend or IPFS
    reset();
  };

  return (
    <UserLayout>
      <h2 className="text-2xl font-semibold mb-6">Submit New Credential</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-6 rounded-lg shadow-md space-y-5 max-w-xl"
      >
        <div>
          <label className="block text-sm font-medium mb-1">Project Title</label>
          <input
            {...register('title', { required: true })}
            type="text"
            className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
            placeholder="e.g. Fullstack dApp with NFT"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Description</label>
          <textarea
            {...register('description')}
            className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
            rows="4"
            placeholder="Brief overview of your work"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">GitHub Link</label>
          <input
            {...register('github')}
            type="url"
            className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
            placeholder="https://github.com/your-repo"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Attach File (Optional)</label>
          <input
            {...register('attachment')}
            type="file"
            className="w-full border border-gray-300 rounded px-3 py-1 text-sm"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 text-sm"
        >
          Submit for Review
        </button>
      </form>
    </UserLayout>
  );
};

export default Submit;
