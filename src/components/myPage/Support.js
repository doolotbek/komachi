import React, { Component } from "react";
import { withRouter } from "react-router";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { withStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import "./Support.css";

const styles = {
    container: {
        fontSize: '25px',
    },
    icon: {
        marginRight: '100%',

    }
};


class Support extends Component {

    render() {
        return (
            <List  >
                
                <ListItem button >
                <i  class="fa fa-chevron-left" style = {{color:"#A2A3A3", position: "absolute", left:"5%", button: "5%"}}></i>
                    <ListItemText className="support" spyle = {{fontSize: "24"}} >サポート</ListItemText>
                </ListItem>

                <Divider />

                <ListItem button divider>
                    <div className="container">
                        <ListItemText className="contact" >お問い合わせ
                        <i class="fa fa-chevron-right" style={{ color: "#A2A3A3", position: "absolute", right: "5%", button: "5%" }}></i>
                        </ListItemText>

                    </div>
                </ListItem>
                <Link to="/TermsOf">
                <ListItem button >
                    <ListItemText className="termsOf"  >利用規約</ListItemText>
                    <i class="fa fa-chevron-right" style={{ color: "#A2A3A3", position: "absolute", right: "5%", button: "5%" }}></i>
                </ListItem>
                </Link>
                <Divider light />
                <Link to="/Law">
                <ListItem button>
                    <ListItemText className="law" >特定商取引法に基づく表示</ListItemText>
                    <i class="fa fa-chevron-right" style={{ color: "#A2A3A3", position: "absolute", right: "5%", button: "5%" }}></i>
                </ListItem>
                </Link>
                <Divider light />
                <ListItem button>
                    <ListItemText className="fund-settlemen" >資金決済法に基づく表示</ListItemText>
                    <i class="fa fa-chevron-right" style={{ color: "#A2A3A3", position: "absolute", right: "5%", button: "5%" }}></i>
                </ListItem>
                <Divider light />
                <ListItem button>
                    <ListItemText className="privacypolicy" >プライバシーポリシー</ListItemText>
                    <i class="fa fa-chevron-right" style={{ color: "#A2A3A3", position: "absolute", right: "5%", button: "5%" }}></i>
                </ListItem>
                <Divider light />
                <ListItem button>
                    <ListItemText className="company" >運営会社</ListItemText>
                    <i class="fa fa-chevron-right" style={{ color: "#A2A3A3", position: "absolute", right: "5%", button: "5%" }}></i>
                </ListItem>
                <Divider light />
            </List>

        );
    }
}
export default withStyles(styles)(withRouter(Support));