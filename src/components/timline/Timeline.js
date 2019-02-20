import React, { Component } from "react";
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import classnames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from "react-router"
import Divider from '@material-ui/core/Divider';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { IconButton } from "@material-ui/core";


const styles = {
    button: {
        textAlign: 'center',
        fontSize: '36px',
        width: '100%'
    },
    gridList: {
        height: '352px'
    },

    card: {
        height: 'auto',
        width: '100%',
    },
    container: {
        marginBottom: '5rem'
    },
    actions: {
        display: 'flex',
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',

    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },



};

class Timeline extends Component {
    state = { expanded: false };

    handleExpandClick = () => {
    };

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.container}>
                <ListItem className={classes.button} button >

                    <ListItemText >タイムライン</ListItemText>
                </ListItem>

                <div style={{ marginBottom: "1.25rem" }} >
                    <CardHeader 
                        avatar={ 
                            <img alt='icon' style={{height: "40px" }} src='/images/user_image.svg'
                                className={classes.avatar} />
                        }
                        title="星野愛理"
                        subheader="1時間前"
                    />
                    <GridList style={{marginTop: "-2%"}} >
                        <GridListTile style={{
                            height: "352px", width: "95%",marginTop: "3px",
                            marginLeft: "2.5%", marginRight: "2.5%"
                        }}>
                            <img alt='icon' src='/images/030A8962.png' />
                        </GridListTile>
                    </GridList>
                    <CardContent>
                        <Typography style={{ fontSize: "12px" }} component="p">
                            iOS用のApple UIデザインリソースには、Sketch、Photoshop、Adobe XDの各テンプレート、
                            およびiOS SDKを使用して開発者が利用できるあらゆる
                            <p style={{ color: '#A5A5A5' }}
                                className={classnames(classes.expand, {
                                    [classes.expandOpen]: this.state.expanded,
                                })}
                                onClick={this.handleExpandClick}
                                aria-label="Show more"
                            >
                                …もっと見る</p>
                        </Typography>
                    </CardContent>
                    <IconButton aria-label="Add to favorites">
                        <img alt='icon' style={{ height: "22px" }} src='/images/heart.svg' />
                    </IconButton>
                    <IconButton aria-label="Chat">
                        <img alt='icon' style={{ height: "22px" }} src='/images/chat.svg' />
                    </IconButton>

                    <Divider />
                </div>

                <div >
                    <Divider />
                    <CardHeader 
                        avatar={
                            <img alt='icon' style={{ height: "40px" }} src='/images/user_image.svg'
                                className={classes.avatar} />
                        }
                        title="星野愛理"
                        subheader="1時間前"
                    />
                    <GridList style={{marginTop: "-2%"}}  >
                        <GridListTile style={{
                            height: "352px", width: "95%",
                            marginLeft: "2.5%", marginRight: "2.5%"
                        }}>
                            <img alt='icon' src='/images/030A8962.png' />
                        </GridListTile>
                    </GridList>

                    <CardContent>

                        <Typography style={{ fontSize: "12px", width: "90%", marginLeft: "5%" }} component="p">
                            iOS用のApple UIデザインリソースには、Sketch、Photoshop、Adobe XDの各テンプレート、
                            およびiOS SDKを使用して開発者が利用できるあらゆる
                                <p style={{ color: '#A5A5A5' }}>…もっと見る</p>

                        </Typography>
                    </CardContent>
                    <IconButton aria-label="Add to favorites">
                        <img alt='icon' style={{ height: "22px" }} src='/images/heart.svg' />
                    </IconButton>
                    <IconButton aria-label="Chat">
                        <img alt='icon' style={{ height: "22px" }} src='/images/chat.svg' />
                    </IconButton>
                    <Divider />
                </div>


            </div>
        );
    }
}

export default withStyles(styles)(withRouter(Timeline));