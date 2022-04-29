export class UserModel {
  CID = null;
  userdata = null;

  async prelogin({ email = null }) {
    let data = new FormData();
    data.append("email", email);

    let xhr = new mzXhr({
      requestMethod: "POST",
      requestURL:
        "https://development.exabyte-eg.com/explorer/__/marowan/new/API/access/pre-login",
      requestBodyData: data,
    });

    await xhr.send();

    console.log(xhr.httpCode, xhr.bodyJson);
  }
}
