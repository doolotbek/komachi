import React, { Component } from "react";
import { withRouter } from "react-router";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import CardHeader from '@material-ui/core/CardHeader';
import BackIcon from '@material-ui/icons/ArrowBackIosSharp';
import NextIcon from '@material-ui/icons/ArrowForwardIosSharp';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from "@material-ui/core";
import { myData } from './myData';

const styles = {
    container: {
        fontSize: '25px',
        width: '100%',
        
    },
    listContainer: {
        height: '4rem'
    },
    icon: {
        marginRight: '100%',

    }
};


class Support extends Component {

    render() {
        console.log("props", this.props);
        const { classes } = this.props;
        return (
            <div className={classes.container} >

                <CardHeader
                    avatar={<BackIcon onClick={()=> this.props.history.goBack()}/>}
                    title={<Typography className="support"  >サポート</Typography>}
                />

                <Divider />
                <List  >
                    {myData.map((item, index) => {
                        return (
                            <ListItem button 
                            divider 
                            onClick={()=> this.props.history.push(item.link)}
                            className={classes.listContainer}>
                               
                                    <ListItemText className='contact' >{item.name}</ListItemText>
                                    <NextIcon />
                                
                            </ListItem>
                        )
                    })}

                </List>
            </div>

        );
    }
}
export default withStyles(styles)(withRouter(Support));