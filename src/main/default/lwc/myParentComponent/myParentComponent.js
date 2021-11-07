import { LightningElement } from 'lwc';

export default class MyParentComponent extends LightningElement {
    propertyOne;
    
    handlePropertyOne(event){
        
        this.propertyOne = event.detail.value;
    }
}