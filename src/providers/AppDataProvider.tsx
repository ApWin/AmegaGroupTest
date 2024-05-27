import React, {createContext, useState, useContext} from 'react';

type NetworkInfoType = {
  ipAddress: string;
  location: string;
  timezone: string;
  isp: string;
} | null;

type AppDataProps = {
  networkInfo: NetworkInfoType;
  selectedImage: number;
  setNetworkInfo: (networkInfo: NetworkInfoType) => void;
  setSelectedImage: (image: number) => void;
};

type AppDataProviderProps = {
  children: React.ReactNode;
};

const AppDataContext = createContext<AppDataProps | undefined>(undefined);

const AppDataProvider: React.FC<AppDataProviderProps> = ({children}) => {
  const [networkInfo, setNetworkInfo] = useState<NetworkInfoType>(null);
  const [selectedImage, setSelectedImage] = useState<number>(0);

  const contextValue = {
    networkInfo,
    selectedImage,
    setNetworkInfo,
    setSelectedImage,
  };

  return (
    <AppDataContext.Provider value={contextValue}>
      {children}
    </AppDataContext.Provider>
  );
};

const useAppData = (): AppDataProps => {
  const context = useContext(AppDataContext);
  if (!context) {
    throw new Error('useAppData must be used within an AppDataProvider');
  }
  return context;
};

export {AppDataProvider, useAppData};
