import { LightningElement } from 'lwc';

export default class ApiParentComp extends LightningElement {

    itemName1 = 'I am Parent';

    handleClickParent(){
        this.template.querySelector("c-api-child-comp").handleClickChild();
    }
    
}