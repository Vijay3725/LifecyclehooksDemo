import { LightningElement, track } from 'lwc';
import htmlOne from './lifeCycleHooks.html';
import htmlTwo from './lifeCycleHooks1.html';
import htmlThree from './lifeCycleHooks2.html';

export default class LifeCycleHooks extends LightningElement {
    @track currentPage = 'page1';

    handleClick(){
        if(this.currentPage === "page1"){
            this.currentPage = "page2";
        }

        else if(this.currentPage === "page2"){
            this.currentPage = "page3";
        }

        else if(this.currentPage === "page3"){
            this.currentPage = "page1";
        }
    }

    render(){
        if(this.currentPage === "page1"){
            return htmlOne;
        }

        else if(this.currentPage === "page2"){
            return htmlTwo;
        }

        else if(this.currentPage === "page3"){
            return htmlThree;
        }
    }

}