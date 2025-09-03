// This file simulates our Firebase database.

export const MOCK_USERS = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john.d@example.com',
    profileImageUrl: 'https://i.pravatar.cc/150?u=1',
    role: 'user',
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane.s@example.com',
    profileImageUrl: 'https://i.pravatar.cc/150?u=2',
    role: 'user',
  },
  {
    id: '99',
    name: 'Admin User',
    email: 'admin@example.com',
    profileImageUrl: 'https://i.pravatar.cc/150?u=99',
    role: 'admin',
  },
];

export const MOCK_ATTENDANCE = {
  '1': [ // Corresponds to John Doe's ID
    { id: 'a1', date: '2025-09-03', timeIn: '09:01 AM', status: 'On Time' },
    { id: 'a2', date: '2025-09-02', timeIn: '09:15 AM', status: 'Late' },
  ],
  '2': [ // Corresponds to Jane Smith's ID
    { id: 'b1', date: '2025-09-03', timeIn: '08:58 AM', status: 'On Time' },
    { id: 'b2', date: '2025-09-02', timeIn: '09:00 AM', status: 'On Time' },
  ],
  '99': [ // Corresponds to Admin's ID
    { id: 'c1', date: '2025-09-03', timeIn: '08:45 AM', status: 'On Time' },
  ]
};