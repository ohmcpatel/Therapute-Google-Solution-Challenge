"use client"
import { useState } from 'react';
import { Tabs, Tab } from "@nextui-org/react";
import { Card, Button } from '@nextui-org/react';
import Chatbot from "@/components/Chatbot"

interface CardButtonProps {
  exerciseName: string;
  completionTime: string;
  accuracyScore: number;
  isPending: boolean;
  onClick: () => void;
}

const Dashboard: React.FC = () => {
  const [cardContent, setCardContent] = useState<JSX.Element | null>(null);

  const openCard = (content: JSX.Element) => {
    setCardContent(content);
  };

  // Example JSON data structure
  const cardButtonData: CardButtonProps[] = [
    {
      "exerciseName": "Exercise 1",
      "completionTime": "2024-05-01",
      "accuracyScore": 95,
      "isPending": true,
      "onClick": () => openCard(<ChatbotModal />)
    },
    // Rest of your data
  ];

  return (
    <div className='flex min-h-screen'>
      <Tabs placement="top" style={{ marginLeft: '110px', marginTop: '30px' }}>
        <Tab title="Pending Analysis">
          <div className="overflow-auto mt-3 ml-7 mr-7" style={{ height: '650px' }}>
            {cardButtonData.filter(item => item.isPending).map((cardButton, index) => (
              <CardButton
                key={index}
                {...cardButton}
              />
            ))}
          </div>
        </Tab>

        <Tab title="Completed">
          <div className="overflow-auto mt-3 ml-7 mr-7" style={{ height: '400px' }}>
            {cardButtonData.filter(item => !item.isPending).map((cardButton, index) => (
              <CardButton
                key={index}
                {...cardButton}
              />
            ))}
          </div>
        </Tab>
      </Tabs>

      {/* Big card on the right side */}
      <div className="w-96 p-8">
        {cardContent && (
          <Card style={{ width: "1100px", height: "720px"}} >
            <div className="p-4">
              <span className="absolute top-0 right-0 p-2 pr-4  cursor-pointer" onClick={() => setCardContent(null)}>×</span>
              {cardContent}
            </div>
          </Card>
        )}
      </div>
    </div>
  );
};

const CardButton: React.FC<CardButtonProps> = ({ exerciseName, completionTime, accuracyScore, isPending, onClick }) => {
  return (
    <Card style={{ width: '400px', height: '200px', marginBottom: '10px' }}>
      <div className="p-6">
        <h2 className="text-lg font-semibold mb-2">{exerciseName}</h2>
        <p className="text-sm text-gray-600 mb-4">{completionTime}</p>
        <div className="flex justify-between items-center">
          <p className="text-sm text-gray-600">Accuracy Score: {accuracyScore}</p>
          <Button onClick={onClick} color="primary">{isPending ? 'Complete Analysis' : 'View History'}</Button>
        </div>
      </div>
    </Card>
  );
};

const ChatbotModal: React.FC = () => {
  // Chatbot modal content goes here
  return (
    <div>
      <Chatbot />
    </div>
  );
};

const StatsModal: React.FC = () => {
  // Stats modal content goes here
  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Stats</h2>
      <p>This is the stats modal content.</p>
    </div>
  );
};

export default Dashboard;
