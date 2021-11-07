import { LightningElement } from 'lwc';

export default class MyParentComponent extends LightningElement {
    name='World';
    
    handlePropertyOne(event){
        
        this.name = event.detail.value;
    }
}