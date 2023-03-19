export class Mainapp {
    constructor(id) {
        this.id = id;
        this.$demoapp = $('#' + id);
        this.login = new MainLogin(this);
        this.ajax = new Ajax(this);
        this.register = new MainRegister(this);
        this.start();
    }

    start() {

    }
}
