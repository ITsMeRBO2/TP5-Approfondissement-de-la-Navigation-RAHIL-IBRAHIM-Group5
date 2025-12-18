import { useEffect } from 'react';

export default function Logout({ onLogout }) {
  useEffect(() => {
    onLogout(); 
  }, []);

  return null; 
}
