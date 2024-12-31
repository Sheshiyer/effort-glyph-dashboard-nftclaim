import { useState, useCallback } from 'react';
import { ethers } from 'ethers';

export function useWallet() {
  const [address, setAddress] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const connectWallet = useCallback(async () => {
    if (!window.ethereum) {
      setError('Please install MetaMask to use this feature');
      return;
    }

    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const accounts = await provider.send('eth_requestAccounts', []);
      setAddress(accounts[0]);
      setError(null);
    } catch (err) {
      setError('Failed to connect wallet');
      console.error(err);
    }
  }, []);

  return {
    address,
    error,
    connectWallet,
  };
}