import React, { Component } from "react";
import Divider from '@material-ui/core/Divider';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from "react-router";
import CardHeader from '@material-ui/core/CardHeader';
import { Typography } from "@material-ui/core";

const styles = {
    container: {
        height:'18px'
    },
};

class Company extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div>
                <CardHeader
                    className={classes.container}
                    avatar={<img alt='icon' style={{ height: "14px", left: "0%" }} src='/images/arrowLeft.svg' onClick={() => this.props.history.goBack()} />}
                    title={<Typography align='center' style={{ marginRight: '1rem', fontSize: "18px" }}>運営会社</Typography>}
                />

                <Divider />
            </div>
        );
    }
}

export default withStyles(styles)(withRouter(Company));