import React, { Component } from "react";
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from "react-router"
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ChatIcon from '@material-ui/icons/Chat';
import Typography from '@material-ui/core/Typography';
import "./Timeline.css"
import { Avatar, IconButton } from "@material-ui/core";


const styles = them => ({
    button: {
        textAlign: 'center',
        fontSize: '36px'
    },
    gridList: {
        height:'352px'
    },
    card: {
        height: 'auto',
        width: '100%',
    },
    conteiner: {
        marginBottom: "20px",
        
    }
    
    


});

class Timeline extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div>
                <ListItem  className={classes.button} button >

                    <ListItemText >タイムライン</ListItemText>
                </ListItem>
                
                <Card className={classes.card}>
                    <div className={classes.conteiner}>
                        <CardHeader 
                            avatar={
                                <Avatar aria-label="Recipe" className={classes.avatar}>
                                    A
                                </Avatar>
                            }
                            title="星野愛理"
                            subheader="1時間前"
                        />
                        <CardMedia
                            className={classes.media}
                            title="Paella dish"
                        />
                        <CardContent>
                        <GridList cellHeight={160} className={classes.gridList} cols={3}>
                                <GridListTile >
                                </GridListTile>
                            </GridList>
                        <Typography component="p">
                        iOS用のApple UIデザインリソースには、Sketch、Photoshop、Adobe XDの各テンプレート、
                        およびiOS SDKを使用して開発者が利用できるあらゆる

                        </Typography>
                        </CardContent>
                        <IconButton aria-label="Add to favorites">
                                <FavoriteIcon />
                            </IconButton>
                        <IconButton aria-label="Chat">
                            <ChatIcon />
                        </IconButton>
                    </div>
                   
                    <div >
                        <CardHeader 
                            avatar={
                                <Avatar aria-label="Recipe" className={classes.avatar}>
                                    A
                                </Avatar>
                            }
                            title="星野愛理"
                            subheader="1時間前"
                        />
                        <CardMedia
                            className={classes.media}
                            title="Paella dish"
                        />
                        <CardContent>
                        <GridList cellHeight={160} className={classes.gridList} cols={3}>
                                <GridListTile >
                                </GridListTile>
                            </GridList>
                        <Typography component="p">
                        iOS用のApple UIデザインリソースには、Sketch、Photoshop、Adobe XDの各テンプレート、
                        およびiOS SDKを使用して開発者が利用できるあらゆる

                        </Typography>
                        </CardContent>
                        <IconButton aria-label="Add to favorites">
                                <FavoriteIcon />
                            </IconButton>
                        <IconButton aria-label="Chat">
                            <ChatIcon />
                        </IconButton>
                   </div>
                </Card>
                
                
            </div>
                );
            }
        }
        
export default withStyles(styles)(withRouter(Timeline));