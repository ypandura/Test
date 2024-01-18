import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class MyToastExample extends LightningElement {
    myTitle='Salesforce Demo';

    handleClick(){

        //window.alert("Salesforce Demo");
        this.showToast(this.myTitle);
    }

    showToast(arg1){

        const event= new ShowToastEvent({
            title:arg1,
            message:'want to display toast example' ,
            variant: 'error'
        })
        this.dispatchEvent(event);

    }
}