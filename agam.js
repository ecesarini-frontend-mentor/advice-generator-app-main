class AgamReq {
    constructor(buttonApi, api, adviceId, adviceContent) {
        this.buttonApi = buttonApi;
        this.api = api;
        this.adviceId = adviceId;
        this.adviceContent = adviceContent;
        this.ev = ['mousedown', 'mouseup', 'click'];
        this.init();
    }

    init() {
        this.getAdvice(this.api)
        this.ev.forEach( ev => this.buttonApi.addEventListener(ev, this) );
    }
    handleEvent(e) {
        let ect = e.currentTarget;
        switch(e.type) {
            case 'mousedown':
            case 'mouseup':
                this.setStyle(e, ect);
                break;
            case 'click':
                this.getAdvice(this.api);
                break;
        }
    }
    setStyle(e, ect) {
        ect.style.backgroundColor = (e.type === 'mousedown')? 'white' : '';
    }
    async getAdvice(url) {
        let apiResponse = await fetch(url).then(response => response.json()).then(prop => prop.slip),
            id = apiResponse.id,
            advice = apiResponse.advice;
        this.adviceId.innerText = ' ' + id;
        this.adviceContent.innerText = advice;       
    }
}

function agamInit() {
    let buttonApi = document.querySelector('#fb-button-dice'),
        api = 'https://api.adviceslip.com/advice',
        adviceId = document.querySelector('#fb-advice-id-number'),
        adviceContent = document.querySelector('#fb-advice-content');

    new AgamReq(buttonApi, api, adviceId, adviceContent);
}

agamInit();
