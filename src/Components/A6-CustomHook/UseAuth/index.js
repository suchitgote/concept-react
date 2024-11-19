// import { useState, useEffect } from 'react';

// // Mock function to simulate API request
// const mockLogin = async (username, password) => {
//     // In a real application, replace this with an actual API call to login
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (username === 'admin' && password === 'admin') {
//                 resolve({ username: 'admin', token: 'fakeToken123', role: 'admin' });
//             } else {
//                 reject('Invalid username or password');
//             }
//         }, 1000);
//     });
// };

// const mockLogout = async () => {
//     // Simulate logging out by removing user data
//     return new Promise((resolve) => {
//         setTimeout(() => resolve(true), 500);
//     });
// };

// // Custom hook for authentication
// export default useAuth = () => {
//     const [user, setUser] = useState(null); // User state
//     const [loading, setLoading] = useState(false); // Loading state for async operations
//     const [error, setError] = useState(null); // Error state for login failures

//     useEffect(() => {
//         const savedUser = JSON.parse(localStorage.getItem('user'));
//         if (savedUser) {
//             setUser(savedUser);
//         }
//     }, []);

//     const login = async (username, password) => {
//         setLoading(true);
//         setError(null);
//         try {
//             const user = await mockLogin(username, password);
//             setUser(user);
//             localStorage.setItem('user', JSON.stringify(user));
//         } catch (err) {
//             setError(err);
//         } finally {
//             setLoading(false);
//         }
//     };

//     const logout = async () => {
//         await mockLogout();
//         setUser(null);
//         localStorage.removeItem('user');
//     };

//     const isAuthenticated = () => {
//         return !!user;
//     };

//     const getUserRole = () => {
//         return user ? user.role : null;
//     };

//     return { user, login, logout, isAuthenticated, getUserRole, loading, error };
// };



import { useState, useEffect } from 'react';

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Replace with actual auth check logic
    const authStatus = localStorage.getItem('authToken') ? true : false;
    setIsAuthenticated(authStatus);
  }, []);

  const login = (token) => {
    localStorage.setItem('authToken', token);
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem('authToken');
    setIsAuthenticated(false);
  };

  return { isAuthenticated, login, logout };
};

// Usage:
// const { isAuthenticated, login, logout } = useAuth();
