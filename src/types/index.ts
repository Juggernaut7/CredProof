// Global type definitions for CredProof

export interface User {
  email: string;
  firstName: string;
  lastName?: string;
  avatar?: string;
}

export interface Credential {
  id: string;
  title: string;
  description: string;
  status: 'pending' | 'under_review' | 'approved' | 'rejected' | 'minted';
  type: 'development' | 'design' | 'security' | 'research' | 'integration';
  githubUrl?: string;
  attachments?: string[];
  reviewScore?: number;
  reviewer?: string;
  submittedAt: Date;
  reviewedAt?: Date;
  mintedAt?: Date;
  views: number;
  downloads: number;
}

export interface WalletContextType {
  account: string | null;
  provider: any | null;
  connectWallet: () => Promise<void>;
  disconnectWallet: () => void;
  isConnecting: boolean;
}

export interface AuthContextType {
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
}

export interface FormData {
  email: string;
  password: string;
}

export interface CredentialFormData {
  title: string;
  description: string;
  githubUrl: string;
  attachments?: File[];
}

export interface NavLink {
  label: string;
  href: string;
  icon?: React.ComponentType;
}

export interface StatCard {
  label: string;
  value: string | number;
  icon: React.ComponentType;
  color: string;
  change?: number;
}

export interface AnimationProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

// Ethereum types
declare global {
  interface Window {
    ethereum?: {
      request: (args: { method: string; params?: any[] }) => Promise<any>;
      on: (event: string, callback: (...args: any[]) => void) => void;
      removeListener: (event: string, callback: (...args: any[]) => void) => void;
      isMetaMask?: boolean;
    };
  }
}

export {}; 