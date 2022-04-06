// TODO: look at bookmarks 'Code-Dev' about getting JSON data from API

function agamInit() {
    /*let adSlipResp = "https://api.adviceslip.com/advice";
    const request = new Request('https://api.adviceslip.com/advice',
         {method: 'GET', body: '{"foo": "bar"}'});

    const url = request.url;
    const method = request.method;
    const credentials = request.credentials;
    const bodyUsed = request.bodyUsed;*/
    const req = new Request('https://api.adviceslip.com/advice', {method: 'GET'});
    const resp = fetch(req).then(r => r.json());
    console.log(resp);

    //alert(response);
}

agamInit();