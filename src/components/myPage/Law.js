import React, { Component } from "react";
import { withRouter } from "react-router";
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { withStyles } from '@material-ui/core/styles';
import CardHeader from '@material-ui/core/CardHeader';
import BackIcon from '@material-ui/icons/ArrowBackIosSharp';

const styles = {
    text: {
        fontSize: '16px',
        height: 'auto',
        width: '100%',
        marginTop: '38px',
    },
    button: {
        textAlign: 'center',
        height: '56px',
        fontSize: '24px'
    },
    conteiner: {
        marginLeft:'1rem',
        marginRight:'1rem'
    }
};



class Law extends Component {


    render() {
        const { classes } = this.props;
        return (
            
            <div className={classes.conteiner}>
                 <ListItem className={classes.button} button >
                    <CardHeader
                    avatar={<BackIcon style={{fontSize: "24px"}} onClick={()=> this.props.history.goBack()}/>}
                />
                        <ListItemText >特定商取引法に基づく表示</ListItemText>
                        
                        <Divider />  
                    </ListItem>
                

                <div className={classes.text}>
                    <p>
                        サイト名<br />
                        東京小町
                </p>
                    <p>
                        運営業者<br />
                        株式会社 東京藝能
                </p>
                    <p>
                        運営統括責任者<br />
                        大神田 務
                </p>
                    <p>
                        所在地<br />
                        〒154-0005 東京都世田谷区三宿2−11−27 メイクスデザイン三宿301
                </p>
                    <p>
                        電話番号<br />
                        03-6629-0689（カスタマーサポート）<br />
                        受付時間：平日11時～18時
                </p>
                    <p>
                        メールアドレス<br />
                        support@tokyo-komachi.jp
                </p>
                    <p>
                        支払い方法<br />
                        クレジットカード、楽天Edy、楽天ID決済、銀行、ゆうちょ、ビットキャッシュ、
                        G-MONEY、C-CHECK、セキュリティーマネー、コンビニダイレクト決済、Pay-easy
                </p>
                    <p>
                        ポイント単価<br />
                        1ポイント 1円 (税別)<br />
                        30ダイヤ3000円～
                </p>
                    <p>
                        返金について<br />
                        ライブストリーミング配信の提供というコンテンツの都合上、購入されたポイントについては
                            一切返金できませんので予めご了承下さい。

                </p>
                </div>

            </div>

        );
    }
}
export default withStyles(styles)(withRouter(Law));