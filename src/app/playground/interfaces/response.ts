export interface Response {
  tag: string;
  info: {
    code: number,
    name: string,
    message: string,
    error: boolean
  };
  data: any;
}
