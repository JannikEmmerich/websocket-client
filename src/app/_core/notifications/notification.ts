export interface Notification {
  text: string;
  type: 'info' | 'success' | 'warning' | 'error';
  time: number;
}
