import { LightningElement,api } from 'lwc';

export default class MyTestComponent extends LightningElement {
    @api
    propertyOne;


    handleChange(event){
        this.propertyOne=event.detail.value;
        this.dispatchEvent(new CustomEvent('change',{detail:this.propertyOne}));

    }
}