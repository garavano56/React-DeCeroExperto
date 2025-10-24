import { useState, type PropsWithChildren, createContext } from "react"
import { users, type User } from "../data/user.mock.data";

// interface UserContextProps {
//     children: React.ReactNode;
// }

type AuthStatus = 'checking' | 'authenticated' | 'not-authenticated';

interface UserContextProps {
    // state
    authStatus: AuthStatus;
    user: User | null;
    // Methods
    login: (userId: number) => boolean;
    logout: () => void;
}

export const UserContext = createContext({} as UserContextProps);

export const UserContextProvider = ({ children }: PropsWithChildren) => {

    const [authStatus, setAuthStatus] = useState<AuthStatus>('checking');
    const [user, setUser] = useState<User | null>(null);

    const handleLogin = (userId: number) => {
        console.log({ userId });
        const user = users.find(user => user.id === userId);
        if (!user) {
            console.log(`User not found ${userId}`);
            setUser(null);
            setAuthStatus('not-authenticated');
            return false;
        }

        setUser(user);
        setAuthStatus('authenticated');
        return true;
    }

    const handleLogout = () => {
        console.log('logout');
        setAuthStatus('not-authenticated');
        setUser(null);
    }

    return (
        <UserContext 
            value= {{
                authStatus: authStatus,
                user: user,
                login: handleLogin,
                logout: handleLogout
            }}
        >
            { children }
        </UserContext>
    )
}
