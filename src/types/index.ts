export type UnknownObjectType = Record<string, any>;

export interface apiRequestParams {
  onError?: (err: any, context?: any) => void;
  onSuccess?: (res: any, context?: any) => void;
}

export interface queryData {
  Page: number;
  PageSize: number;
  // Search?: string;
}
