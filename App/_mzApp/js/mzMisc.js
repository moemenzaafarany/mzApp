//================================================
class mzXhr {
  //
  request = new XMLHttpRequest();
  requestMethod = null;
  requestURL = null;
  requestHeaders = null;
  requestURLData = null;
  requestBodyData = null;
  requestResponseType = null;
  onStateChange = null;
  //
  httpCode = null;
  state = null;
  stateText = null;
  error = null;
  message = null;
  bodyText = null;
  bodyJson = null;
  //
  upload = {
    total: 0,
    loaded: 0,
    time: 0,
    duration: 0,
    percentage: 0,
    speed: 0,
    estimate: 0,
  };
  //
  constructor({
    requestMethod = null,
    requestURL = null,
    requestHeaders = null,
    requestURLData = null,
    requestBodyData = null,
    requestResponseType = null,
    onStateChange = null,
  }) {
    this.requestMethod = requestMethod;
    this.requestURL = requestURL;
    this.requestHeaders = requestHeaders;
    this.requestURLData = requestURLData;
    this.requestBodyData = requestBodyData;
    this.requestResponseType = requestResponseType;
    this.onStateChange = onStateChange;
    //
    this.requestURLDataParse();
    // setState
    this.setState(0, null);
  }

  async send() {
    return await new Promise((resolve) => {
      try {
        // request
        // response type
        if (this.requestResponseType)
          this.request.responseType = this.requestResponseType;
        // this.request.timeout = 4000;
        this.request.open(
          this.requestMethod,
          this.requestURL,
          true,
          this.requestUsername,
          this.requestPassword
        );
        // headers
        if (!this.requestHeaders) this.requestHeaders = {};
        this.requestHeaders["User-Timezone"] = -new Date().getTimezoneOffset();
        for (let key in this.requestHeaders)
          this.request.setRequestHeader(key, this.requestHeaders[key]);
        // onloadstart
        this.request.onloadstart = (event) => this.setState(1, null);
        // upload onloadstart
        this.request.upload.onloadstart = (event) => {
          this.upload.start = Date.now();
          this.upload.total = event.total;
          this.upload.loaded = event.loaded;
          this.uploadCalc();
          this.setState(2, null);
        };
        // upload onprogress
        this.request.upload.onprogress = (event) => {
          this.upload.loaded = event.loaded;
          this.uploadCalc();
          this.setState(2, null);
        };
        // upload onload
        this.request.upload.onload = (event) => {
          this.upload.loaded = event.loaded;
          this.uploadCalc();
          this.setState(3, null);
        };
        // onprogress
        this.request.onprogress = (event) => {
          this.setState(3, null);
        };
        // onload
        this.request.onload = (event) => {
          try {
            this.bodyText = this.request.response;
            this.bodyJson = JSON.parse(this.bodyText);
          } catch (e) {}
          this.setState(4, null), resolve(this);
        };
        // ontimeout
        this.request.ontimeout = (event) => {
          this.setState(5, "timeout"), resolve(this);
        };
        // onabort
        this.request.onabort = (event) => {
          this.setState(5, "aborted"), resolve(this);
        };
        // onerror
        this.request.onerror = (event) => {
          this.setState(5, "failed"), resolve(this);
        };
        // send
        this.request.send(this.requestBodyData);
        //
      } catch (e) {
        this.setState(5, e);
      }
    });
  }

  uploadCalc() {
    this.upload.duration = Date.now() - this.upload.start;
    if (this.state > 2) {
      this.upload.speed = 0;
      this.upload.estimate = 0;
    } else {
      this.upload.percentage = (
        (this.upload.loaded / this.upload.total) *
        100
      ).mzRound(2);
      this.upload.speed = (this.upload.loaded / this.upload.duration).mzRound(
        2
      );
      this.upload.estimate = (
        (this.upload.total - this.upload.loaded) /
        this.upload.speed
      ).mzRound(2);
    }
  }

  setState(id, error = null) {
    const STATES = {
      0: "unsent",
      1: "started",
      2: "uploading",
      3: "processing",
      4: "completed",
      5: "failed",
    };
    //
    this.httpCode = this.request.status;
    this.state = id;
    this.stateText = STATES[id];
    this.error = error;
    //
    if (this.onStateChange) this.onStateChange(this);
  }

  requestURLDataParse() {
    if (!this.requestURLData) this.requestURLData = {};
    let query = "?";
    for (let key in this.requestURLData)
      query += `${encodeURIComponent(key)}=${encodeURIComponent(
        this.requestURLData[key]
      )}&`;
    this.requestURL += query;
  }
}

/*
    //================================================
    // request
     request = new XMLHttpRequest();

    // request variables
    requestMethod = null;
    requestURL = null;
    requestHeaders = null;
    requestURLData = null;
    requestBodyData = null;
    requestResponseType = null;
    //
    onUploading = null;
    //
     upload = {
        total: 0,
        loaded: 0,
        time: 0,
        duration: 0,
        percentage: 0,
        speed: 0,
        estimate: 0,
      };
    // response
    response;
    //
    httpCode = null;
    status = null;
    statusText = null;
    error = null;
    bodyText = null;
    bodyJson = null;
    //================================================
    // constructor
    constructor({
    requestMethod = null,
    requestURL = null,
    requestHeaders = null,
    requestURLData = null,
    requestBodyData = null,
    requestResponseType = null,
    onUploading = null,
  }) {
    this.requestMethod = requestMethod;
    this.requestURL = requestURL;
    this.requestHeaders = requestHeaders;
    this.requestURLData = requestURLData;
    this.requestBodyData = requestBodyData;
    this.requestResponseType = requestResponseType;
    this.onUploading = onUploading;
    this.response.open(){}
      //
      this.requestURLDataParse();
      // setState
      this.setState(0, null);
      


      // add headers
    this.request .setRequestHeader("user-timezone", getMysqlTimezone());

      request!.headers["User-Timezone"] =
          DateTime.now().timeZoneOffset.inMinutes.toString();
      if (headers != null) {
        headers!.forEach((key, value) {
          request!.headers[key] = value;
        });
      }
      // add fields
      if (data != null) {
        data!.forEach((key, value) async {
          if (data != null) {
            data.forEach((key, value) async {
              if (value is List) {
                int i = 0;
                for (dynamic val in value) {
                  if (val is File) {
                    request.files
                        .add(await http.MultipartFile.fromPath('$key[$i]', val.path));
                  } else {
                    request.fields['$key[$i]'] = val.toString();
                  }
                  i++;
                }
              } else if (value is File) {
                request.files.add(await http.MultipartFile.fromPath(key, value.path));
              } else {
                request.fields[key] = value.toString();
              }
            });
          }
        });
      }
      // callback
    }
  
    //================================================
    Future<EbXhrReponse> send() async {
      // request res
      http.StreamedResponse requestRes = await request!.send();
  
      
      print("my contentlength:");
      print(request!.contentLength);
      // upload ?
      int uploadTotal = request!.contentLength;
      int uploadLoaded = 0;
      int uploadStart = DateTime.now().millisecondsSinceEpoch;
      int uploadTime = 0;
      double uploadProgress = 0;
      double uploadSpeedKB = 0;
      double uploadEstimateSEC = 0;
      
      StreamTransformer<List<int>, List<int>> transformer =
          StreamTransformer.fromHandlers(
        handleData: (List<int> data, EventSink<List<int>> sink) {
          // update data
          uploadLoaded += data.length;
          uploadTime = DateTime.now().millisecondsSinceEpoch - uploadStart;
          // calc
          uploadProgress = ((uploadLoaded / uploadTotal) * 100);
          uploadSpeedKB = (uploadLoaded / uploadTime);
          uploadEstimateSEC = ((uploadTotal - uploadLoaded) / uploadSpeedKB);
          // callback
          onUploading!(uploadProgress, uploadSpeedKB, uploadEstimateSEC);
          sink.add(data);
        },
      );
      
      String data = await requestRes.stream.bytesToString();
      response = EbXhrReponse(requestRes.statusCode,
          (requestRes.statusCode != 200 ? data : null), data);
      return response;
    }
  }
  
  //================================================
  class EbXhrReponse {
    //================================================
    // request
    int httpCode;
    String? error;
    String bodyText;
    Map? bodyJson;
  
    // constructor
    EbXhrReponse(
      this.httpCode,
      this.error,
      this.bodyText,
    ) {
      // try to parse to json
      try {
        bodyJson = json.decode(bodyText);
      } catch (e) {
        print(e);
      }
    }
  }*/
