"use client"
import { Card, Divider, Avatar, Badge } from '@nextui-org/react';
import { useState } from 'react';

interface UserProfile {
  name: string;
  email: string;
  bio: string;
}

const ProfilePage: React.FC = () => {
  const [userProfile] = useState<UserProfile>({
    name: 'John Doe',
    email: 'john@example.com',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  });

  return (
    <div className=" min-h-screen p-8">
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center space-x-4">
          <Avatar size="lg" src="/avatar.jpg" alt="Profile Picture" />
          <div>
            <h3 className="text-xl font-semibold">{userProfile.name}</h3>
            <p className="text-gray-600">{userProfile.email}</p>
          </div>
        </div>
        <Badge color="primary" className="px-4 py-2">Edit Profile</Badge>
      </div>

      <Divider className="mb-8" />

      <div>
        <h4 className="text-lg font-semibold mb-4">About Me</h4>
        <p>{userProfile.bio}</p>
      </div>
    </div>
  );
};

export default ProfilePage;
