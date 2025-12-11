// types.ts

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'moderator' | 'user';
}

export interface DashboardStats {
  totalUsers: number;
  activeUsers: number;
  pendingUsers: number;
}

export interface UserDashboardData {
  users: User[];
  stats: DashboardStats;
}

export enum UserRole {
  Admin = 'admin',
  Moderator = 'moderator',
  User = 'user',
}

export interface ErrorResponse {
  message: string;
  statusCode: number;
}

export type ApiResult<T> = Promise<T | ErrorResponse>;

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    currentPage: number;
    totalPages: number;
    pageSize: number;
    totalItems: number;
  };
}