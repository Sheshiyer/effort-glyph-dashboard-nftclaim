import React from 'react';
import { Award } from 'lucide-react';

interface NFTCardProps {
  title: string;
  hours: number;
  project: string;
  imageUrl: string;
  isClaimed: boolean;
  onClaim: () => void;
}

export function NFTCard({ title, hours, project, imageUrl, isClaimed, onClaim }: NFTCardProps) {
  return (
    <div className="bg-white rounded-xl overflow-hidden border border-gray-200">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-semibold text-lg">{title}</h3>
          <Award className="text-blue-600" size={20} />
        </div>
        <div className="space-y-2">
          <p className="text-sm text-gray-600">
            <span className="font-medium">Hours:</span> {hours}
          </p>
          <p className="text-sm text-gray-600">
            <span className="font-medium">Project:</span> {project}
          </p>
        </div>
        {!isClaimed ? (
          <button
            onClick={onClaim}
            className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Claim NFT
          </button>
        ) : (
          <div className="mt-4 text-center py-2 px-4 bg-gray-100 rounded-lg text-gray-600">
            Claimed
          </div>
        )}
      </div>
    </div>
  );
}