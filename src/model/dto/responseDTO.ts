export class ResponseBodyDTO {
  code: number;
  message: string;
  data?: object;
}

export class ResponseDTO {
  statusCode: number;
  body: string;
}