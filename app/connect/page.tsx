"use client"
import { Card, Divider, Avatar, Badge } from '@nextui-org/react';
import { useState } from 'react';

interface Exercise {
  id: string;
  name: string;
}

interface Appointment {
  id: string;
  date: string;
  time: string;
}

interface PhysicalTherapist {
  name: string;
}

const ConnectPage: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<'exercises' | 'appointments'>('exercises');

  // Dummy data for exercises
  const exercises: Exercise[] = [
    { id: '1', name: 'Exercise 1' },
    { id: '2', name: 'Exercise 2' },
    { id: '3', name: 'Exercise 3' },
  ];

  // Dummy data for appointments
  const appointments: Appointment[] = [
    { id: '1', date: '2024-05-05', time: '10:00 AM' },
    { id: '2', date: '2024-05-06', time: '11:00 AM' },
    { id: '3', date: '2024-05-07', time: '12:00 PM' },
  ];

  // Dummy data for physical therapist
  const therapist: PhysicalTherapist = {
    name: 'Dr. John Doe',
  };

  return (
    <div className='min-h-screen p-6'>
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center space-x-4">
          <Avatar size="lg" src="/avatar.jpg" alt="Physical Therapist" />
          <div>
            <h3 className="text-xl font-semibold">{therapist.name}</h3>
            <Badge color="success">Online</Badge>
          </div>
        </div>
        <Badge color="primary" className="px-4 py-2">Connect</Badge>
      </div>

      <Divider className="mb-8" />

      <div>
        <div className="flex space-x-4 mb-4">
          <button
            className={`text-lg focus:outline-none ${selectedTab === 'exercises' ? 'font-semibold text-primary' : 'text-gray-500'}`}
            onClick={() => setSelectedTab('exercises')}
          >
            Assigned Exercises
          </button>
          <button
            className={`text-lg focus:outline-none ${selectedTab === 'appointments' ? 'font-semibold text-primary' : 'text-gray-500'}`}
            onClick={() => setSelectedTab('appointments')}
          >
            Scheduled Appointments
          </button>
        </div>

        {selectedTab === 'exercises' && (
          <div>
            {exercises.map((exercise) => (
              <div key={exercise.id} className="flex justify-between items-center py-2 border-b border-gray-300">
                <h1>{exercise.name}</h1>
              </div>
            ))}
          </div>
        )}

        {selectedTab === 'appointments' && (
          <div>
            {appointments.map((appointment) => (
              <div key={appointment.id} className="flex justify-between items-center py-2 border-b border-gray-300">
                <h1>{appointment.date}</h1>
                <h1>{appointment.time}</h1>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ConnectPage;
 