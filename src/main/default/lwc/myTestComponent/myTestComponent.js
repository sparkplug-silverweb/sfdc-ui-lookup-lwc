import { LightningElement} from 'lwc';

export default class MyTestComponent extends LightningElement {
    
    handleChange(event){
        
        this.dispatchEvent(new CustomEvent('change',{detail:event.detail.value}));

    }
}