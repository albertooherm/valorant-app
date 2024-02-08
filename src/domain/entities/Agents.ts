export interface Role {
    uuid: string;
    displayName: string;
    description: string;
    displayIcon: string;
    assetPath: string;
  }
  
  export interface Ability {
    slot: string;
    displayName: string;
    description: string;
    displayIcon: string;
  }
  
  export interface Agent {
    uuid: string;
    displayName: string;
    description: string;
    developerName: string;
    characterTags: null | string[]; // Asumiendo que puede ser null o un arreglo de strings
    displayIcon: string;
    displayIconSmall: string;
    bustPortrait: string;
    fullPortrait: string;
    fullPortraitV2: string;
    killfeedPortrait: string;
    background: string;
    backgroundGradientColors: string[];
    assetPath: string;
    isFullPortraitRightFacing: boolean;
    isPlayableCharacter: boolean;
    isAvailableForTest: boolean;
    isBaseContent: boolean;
    role: Role;
    recruitmentData: null; // Ajusta según sea necesario si este campo tiene una estructura específica
    abilities: Ability[];
    voiceLine: null; // Ajusta según sea necesario si este campo tiene una estructura específica
  }
  