import { HttpHeaders } from "@angular/common/http";

export function httpClientOptions() {
  const httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      "Authorization": `Bearer ${sessionStorage.getItem('token')}`
    })
  }
  return httpOptions;
}