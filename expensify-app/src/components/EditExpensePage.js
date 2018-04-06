import React, { Component } from "react";

export class EditExpensePage extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                Editing the expense with id of {this.props.match.params.id}
            </div>
        )
    }

}