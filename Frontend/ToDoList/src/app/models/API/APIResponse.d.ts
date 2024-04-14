import { Type } from "@angular/core"

export interface APIResponse<Type> {
  data: Type,
  errorMessage: any,
  success: boolean
}

export interface APIResponseError {
  errorMessage: string,
  success: boolean
}