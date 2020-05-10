export interface Config {
  title: string;
  version: string;
  description: string;
  playgroundUrl: string;

  currentPage: 'editor' | 'playground';
}
