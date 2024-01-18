import { LightningElement,api } from 'lwc';

export default class ApiChildComp extends LightningElement {

    @api itemName = 'I ma child';

    @api handleClickChild(){

        this.itemName='I am a Child';
    }
   
    }