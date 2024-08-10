'use client';
import { useUser } from '@auth0/nextjs-auth0/client';
import {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useState,
} from 'react';

export interface UserProfile {
  email?: string | null;
  name?: string | null;
  sub?: string | null;
  [key: string]: unknown; // Any custom claim which could be in the profile
}


export const getAccessToken = async (): Promise<string> => {
  const accessToken = await fetch(`/api/access-token`);
  return accessToken.json();
};


interface ContextProviderProps {
  children: ReactNode;
}

interface AuthenticationContextProps {
  user?: UserProfile;
  error?: Error;
  isLoading: boolean;
  accessToken?: string;
}

export const AuthenticationContext = createContext<AuthenticationContextProps>({
  isLoading: true,
});

function AuthenticationContextProvider({
  children,
}: ContextProviderProps): JSX.Element {
  const { user: auth0User, error, isLoading } = useUser();
  const [accessToken, setAccessToken] = useState<string>();
  const user: UserProfile | undefined = auth0User;

  useEffect(() => {
    if(!user){
      setAccessToken(undefined);
      return;
    }
    const run = async () => {
      const accessToken = await getAccessToken();
      setAccessToken(accessToken);
    };
    run();
  }, [user]);

  return (
    <AuthenticationContext.Provider
      value={{
        user,
        error,
        isLoading,
        accessToken,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
}

export default AuthenticationContextProvider;
