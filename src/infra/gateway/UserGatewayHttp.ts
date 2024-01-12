import httpAdapter from "../http/HttpClientAdapter.ts";

export default class UserGatewayHttp {
   async login(email: string, password: string): Promise<any>
   {
       const device_name = `vue_app${navigator.userAgent}`;
      return await httpAdapter.post('/auth', {
           email,
           password,
           device_name
       });
   }

}