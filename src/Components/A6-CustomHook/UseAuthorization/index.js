import { useAuth } from './useAuth'; // Import the useAuth hook

// Custom hook for authorization
export const useAuthorization = (requiredRole) => {
    const { getUserRole } = useAuth();

    const hasPermission = () => {
        const userRole = getUserRole();
        return requiredRole ? userRole === requiredRole : false;
    };

    return { hasPermission };
};
