"use client";
import React, { useEffect, useState } from "react";
import { Flag, Clock, Trophy, Youtube, Loader2 } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Tmatch } from "@/app/Types/types";

const dummyData: Tmatch[] = [
  {
    playerOneName: "Parichay",
    playerOneCountry: "IND",
    playerTwoName: "Nishchay",
    playerTwoCountry: "IND",
    playerOneId: 1,
    playerTwoId: 2,
    tournamentId: 129,
    tournamentName: "Chess World Ship",
    vods: ["youtube"],
    timestamp: new Date().toString(),
    tournamentRound: "Finals",
  },
  {
    playerOneName: "Alice",
    playerOneCountry: "USA",
    playerTwoName: "Bob",
    playerTwoCountry: "CAN",
    playerOneId: 3,
    playerTwoId: 4,
    tournamentId: 130,
    tournamentName: "World Chess League 2024",
    vods: [],
    timestamp: new Date(Date.now() + 86400000).toString(), // Tomorrow
    tournamentRound: "Semi-Finals",
  },
];

const MatchCard: React.FC<{ match: Tmatch }> = ({ match }) => {
  const dateObj = new Date(match.timestamp);
  const matchDate = dateObj.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
  const matchTime = dateObj.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });

  const isLive = Math.abs(new Date().getTime() - dateObj.getTime()) < 3600000;

  return (
    <div className="group relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="relative p-6 bg-gray-900/90 backdrop-blur-sm border border-gray-800 rounded-xl hover:border-gray-700 transition-all ">
        {/* Live indicator */}
        {isLive && (
          <div className="absolute top-4 right-4 flex items-center space-x-2">
            <span className="relative h-3 w-3 rounded-full bg-red-500"></span>
            <span className="text-red-500 text-sm font-medium">LIVE</span>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Players Section */}
          <div className="col-span-2 space-y-4">
            {/* Player One */}
            <div className="flex items-center space-x-3">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-800">
                <Flag className="w-4 h-4 text-gray-400" />
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-2">
                  <span className="text-lg font-medium text-white hover:text-red-400 cursor-pointer ease-in duration-100">
                    {match.playerOneName}
                  </span>
                  <Badge variant="outline" className="text-xs">
                    {match.playerOneCountry}
                  </Badge>
                </div>
              </div>
            </div>

            {/* VS Divider */}
            <div className="flex items-center space-x-4">
              <div className="flex-1 h-px bg-gray-800"></div>
              <span className="text-sm font-medium text-gray-500">VS</span>
              <div className="flex-1 h-px bg-gray-800"></div>
            </div>

            {/* Player Two */}
            <div className="flex items-center space-x-3">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-800">
                <Flag className="w-4 h-4 text-gray-400" />
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-2">
                  <span className="text-lg font-medium text-white hover:text-red-400 cursor-pointer ease-in duration-100">
                    {match.playerTwoName}
                  </span>
                  <Badge variant="outline" className="text-xs">
                    {match.playerTwoCountry}
                  </Badge>
                </div>
              </div>
            </div>
          </div>

          {/* Tournament Info Section */}
          <div className="space-y-4 md:border-l md:border-gray-800 md:pl-4">
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <span className="text-sm font-medium text-gray-300 hover:text-red-400 cursor-pointer ease-in duration-100">
                  {match.tournamentName}
                </span>
              </div>
              <Badge className="bg-gray-800 text-gray-300">
                {match.tournamentRound == "Finals" && (
                  <Trophy className="w-4 h-4 text-yellow-500 mx-1" />
                )}
                {match.tournamentRound}
              </Badge>
            </div>

            <div className="space-y-1">
              <div className="flex items-center space-x-2 text-gray-400">
                <Clock className="w-4 h-4" />
                <span className="text-sm">{matchDate}</span>
              </div>
              <div className="text-sm text-gray-500">{matchTime}</div>
            </div>

            {match.vods.length > 0 && (
              <div className="flex items-center space-x-2 text-red-500 hover:text-red-400 transition-colors cursor-pointer">
                <Youtube className="w-4 h-4" />
                <span className="text-sm">Watch VOD</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const MatchComponent = () => {
  const [data, setData] = useState<Tmatch[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulating API call with dummy data
    setTimeout(() => {
      setData(dummyData);
      setIsLoading(false);
    }, 0);
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-8">
        <Loader2 className="w-8 h-8 animate-spin text-blue-500" />
      </div>
    );
  }

  if (!data) {
    return (
      <Alert variant="destructive">
        <AlertDescription>{error || "Failed to load matches"}</AlertDescription>
      </Alert>
    );
  }

  return (
    <ScrollArea className="h-[calc(100vh-100px)]">
      <div className="space-y-4 p-4">
        {data.map((match, index) => (
          <MatchCard key={index} match={match} />
        ))}
      </div>
    </ScrollArea>
  );
};

export default MatchComponent;
