import { UserModel } from "./UserModel.js";

export class AppModel {
  static userModel = new UserModel();
}

//================================================
export class ExabyteAPIResponse {
  // api response
  status;
  statusCode;
  error;
  message;
  data;
  // parse data
  constructor(res) {
    if (res.httpCode == 200 && res.bodyJson != null) {
      this.status = res.bodyJson["status"];
      this.statusCode = res.bodyJson["statusCode"];
      switch (res.bodyJson["status"]) {
        case 200:
          this.message = res.bodyJson["message"];
          this.data = res.bodyJson["data"];
          break;
        case 400:
          this.error = res.bodyJson["error"];
          this.data = res.bodyJson["data"];
          break;
        default:
          this.error = res.bodyJson["error"];
          break;
      }
    } else {
      this.status = res.httpCode;
      this.error = res.bodyText;
    }
  }
  // run
  run({ s200, s400, s401, s403, s404, s500, sdefault }) {
    if (this.status == 200 && s200 != null) return s200();
    if (this.status == 400 && s400 != null) return s400();
    if (this.status == 401 && s401 != null) return s401();
    if (this.status == 403 && s403 != null) return s403();
    if (this.status == 404 && s404 != null) return s404();
    if (this.status == 500 && s500 != null) return s500();
    if (sdefault != null) return sdefault();
  }
}
