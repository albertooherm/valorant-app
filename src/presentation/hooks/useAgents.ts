import { useState, useEffect } from 'react';
import axios from 'axios';
import { Agent } from '../../domain/entities/Agents';


const useAgents = () => {
  const [agents, setAgents] = useState<Agent[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchAgents = async () => {
      try {
        const response = await axios.get('https://valorant-api.com/v1/agents', {
          params: { isPlayableCharacter: true },
        });
        setAgents(response.data.data.map((agentData: any): Agent => ({
          uuid: agentData.uuid,
          displayName: agentData.displayName,
          description: agentData.description,
          developerName: agentData.developerName,
          characterTags: agentData.characterTags,
          displayIcon: agentData.displayIcon,
          displayIconSmall: agentData.displayIconSmall,
          bustPortrait: agentData.bustPortrait,
          fullPortrait: agentData.fullPortrait,
          fullPortraitV2: agentData.fullPortraitV2,
          killfeedPortrait: agentData.killfeedPortrait,
          background: agentData.background,
          backgroundGradientColors: agentData.backgroundGradientColors,
          assetPath: agentData.assetPath,
          isFullPortraitRightFacing: agentData.isFullPortraitRightFacing,
          isPlayableCharacter: agentData.isPlayableCharacter,
          isAvailableForTest: agentData.isAvailableForTest,
          isBaseContent: agentData.isBaseContent,
          role: {
            uuid: agentData.role.uuid,
            displayName: agentData.role.displayName,
            description: agentData.role.description,
            displayIcon: agentData.role.displayIcon,
            assetPath: agentData.role.assetPath,
          },
          recruitmentData: agentData.recruitmentData,
          abilities: agentData.abilities.map((ability: any) => ({
            slot: ability.slot,
            displayName: ability.displayName,
            description: ability.description,
            displayIcon: ability.displayIcon,
          })),
          voiceLine: agentData.voiceLine,
        })));
      } catch (error) {
        setError(error as Error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAgents();
  }, []);

  return { agents, isLoading, error };
};

export default useAgents;
