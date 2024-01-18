import { LightningElement } from 'lwc';

export default class LifecycleHooksExample extends LightningElement {

    constructor(){
        super();
        console.log('this is from constructor');
    }
    

    connectedCallback(){

        console.log('this is from connected call back');
    }

    renderedCallback(){
        console.log('this is from rendered call back');
    }
}