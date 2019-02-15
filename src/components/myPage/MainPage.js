import React, { Component } from "react";
import { withRouter } from "react-router";
import Button from '@material-ui/core/Button';


class MainPage extends Component {

    render() {
        console.log("props", this.props);
        return (
            <div >
                <Button onClick={()=> this.props.history.push('/Support')}>Support</Button>
            </div>

        );
    }
}
export default (withRouter(MainPage));