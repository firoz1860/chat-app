import { generateUserAvatar } from './avatarGenerator';

export const mockUsers = [
  {
    uid: 'user-1',
    email: 'alice@example.com',
    displayName: 'Alice Johnson',
    photoURL: generateUserAvatar('alice')
  },
  {
    uid: 'user-2',
    email: 'bob@example.com',
    displayName: 'Bob Smith',
    photoURL: generateUserAvatar('bob')
  },
  {
    uid: 'user-3',
    email: 'charlie@example.com',
    displayName: 'Charlie Brown',
    photoURL: generateUserAvatar('charlie')
  },
  {
    uid: 'user-4',
    email: 'diana@example.com',
    displayName: 'Diana Prince',
    photoURL: generateUserAvatar('diana')
  },
  {
    uid: 'user-5',
    email: 'eve@example.com',
    displayName: 'Eve Wilson',
    photoURL: generateUserAvatar('eve')
  },
  {
    uid: 'user-6',
    email: 'frank@example.com',
    displayName: 'Frank Miller',
    photoURL: generateUserAvatar('frank')
  }
];

export const mockChatRooms = [
  {
    _id: 'chat-1',
    members: ['current-user', 'user-1'],
    createdAt: '2024-01-15T10:30:00Z'
  },
  {
    _id: 'chat-2',
    members: ['current-user', 'user-2'],
    createdAt: '2024-01-14T15:45:00Z'
  }
];

export const mockMessages = [
  {
    _id: 'msg-1',
    chatRoomId: 'chat-1',
    sender: 'user-1',
    message: 'Hey there! How are you doing?',
    createdAt: '2024-01-15T10:30:00Z'
  },
  {
    _id: 'msg-2',
    chatRoomId: 'chat-1',
    sender: 'current-user',
    message: 'Hi! I\'m doing great, thanks for asking. How about you?',
    createdAt: '2024-01-15T10:31:00Z'
  },
  {
    _id: 'msg-3',
    chatRoomId: 'chat-1',
    sender: 'user-1',
    message: 'I\'m doing well too! Just working on some exciting projects.',
    createdAt: '2024-01-15T10:32:00Z'
  },
  {
    _id: 'msg-4',
    chatRoomId: 'chat-1',
    sender: 'current-user',
    message: 'That sounds awesome! I\'d love to hear more about them.',
    createdAt: '2024-01-15T10:33:00Z'
  }
];