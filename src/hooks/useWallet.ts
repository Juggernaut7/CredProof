import { useContext } from 'react';
import { WalletContext } from '../context/walletContext';

export interface WalletContextType {
  account: string | null;
  provider: any | null;
  connectWallet: () => Promise<void>;
  disconnectWallet: () => void;
  isConnecting: boolean;
}

export const useWallet = (): WalletContextType => {
  const context = useContext(WalletContext);
  if (!context) {
    throw new Error('useWallet must be used within a WalletProvider');
  }
  return context;
}; 