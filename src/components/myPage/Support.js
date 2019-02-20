import React, { Component } from "react";
import { withRouter } from "react-router";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import CardHeader from '@material-ui/core/CardHeader';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from "@material-ui/core";
import { myData } from './myData';

const styles = {
    container: {
        fontSize: '25px',
        width: '100%',
        
    },
    listContainer: {
        height: '3.6rem',
    },
    btn:{
        height: '18px',
    },
   
};


class Support extends Component {

    render() {
        console.log("props", this.props);
        const { classes } = this.props;
        return (
            <div className={classes.container} >

                <CardHeader
                className={classes.btn} 
                    avatar={<img alt='icon' style = {{height: "14px"}} src='/images/arrowLeft.svg' onClick={()=> this.props.history.goBack()}/>}
                    title={<Typography className="support" style = {{textAlign:"center",marginRight: '1rem', fontSize:"18px"}}>サポート</Typography>}
                />

                <Divider />
                <List  style = {{marginTop:"0%"}}>
                    {myData.map((item, index) => {
                        return (
                            <ListItem button 
                            divider 
                            onClick={()=> this.props.history.push(item.link)}
                            className={classes.listContainer}>
                               
                                    <ListItemText className='contact' >{item.name}</ListItemText>
                                    <img alt='icon' style = {{height: "14px"}} src='/images/arrowRight.svg' />
                                
                            </ListItem>
                        )
                    })}
                </List>
            </div>

        );
    }
}
export default withStyles(styles)(withRouter(Support));