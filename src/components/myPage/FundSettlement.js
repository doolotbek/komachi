import React, { Component } from "react";
import Divider from '@material-ui/core/Divider';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from "react-router";
import CardHeader from '@material-ui/core/CardHeader';
import { Typography } from "@material-ui/core";

const styles = {
    text: {
        fontSize: '14px',
        height: 'auto',
        width: '90%',
        marginTop: '38px',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    button: {
        textAlign: 'center',
        height: '56px',
        fontSize: '24px'
    },
    container: {
        height: '18px'
    }
};


class FundSettlement extends Component {
    render() {
        const { classes } = this.props;
        return (

            <div > 
                
                    
                    <CardHeader
                    className={classes.container}
                    avatar={<img alt='icon' style = {{height: "14px"}} src='/images/arrowLeft.svg' onClick={()=> this.props.history.goBack()}/>}
                    title={<Typography align='center' style = {{fontSize: "18px",marginRight: '1rem'}}>資金決済法に基づく表示</Typography>}
               />
                        <Divider />  
                   
                   
                    <div className={classes.text}>
                            <p>【サービス名】<br />
                            東京小町
                </p>
                        <p>
                            【発行事業者】<br />
                            株式会社 東京藝能<br />
                            東京都世田谷区三宿2-11-27 メイクスデザイン三宿3F
                </p>
                        <p>
                            【購入限度額等 （支払可能金額等）】<br />
                            上限はありません。
                </p>
                        <p>
                            【有効期限】<br />
                            お客様は、東京小町の販促キャンペーンに別段の約定がある場合を除き、
                    ダイヤの有効期間は購入した日から6ヶ月間（180日間）とすることを理解並びに同意します。<br />
                            ただしサービス規約に基づき契約が解除された場合は、未使用残高を全て失効します。<br />
                            詳細は利用規約をご覧ください。
                </p>
                        <p>
                            【お問い合わせ先】<br />
                            東京小町カスタマーセンター
                </p>
                        <p>
                            【利用できる場所】<br />
                            ダイヤ：サイト「東京小町」サービス内でご利用いただけます。
                </p>
                        <p>
                            【利用上の注意】<br />
                            ※原則、商品販売後の払い戻しはいたしません。<br />
                            ただし各サービスの提供を終了する場合は、<br />
                            この限りではありません。<br />
                            ※システム障害時やメンテナンス等により、<br />
                            一時的に商品の利用ができない場合があります。<br />
                            ※商品の利用条件は、公式サイトならびに利用規約をご確認ください。
                </p>
                        <p>
                            【購入履歴確認方法】<br />
                            ダイヤ：サイト「東京小町」サービス内で、<br />
                            以下の方法でご確認いただけます。<br />
                            ・「マイページ」→「マイダイヤ」→「購入履歴」
                </p>
                        <p>
                            【未使用残高確認方法】<br />
                            ダイヤ：サイト「東京小町」サービス内で、<br />
                            以下の方法でご確認いただけます。<br />
                            ・「マイページ」→「マイダイヤ」→「購入履歴」<br />
                            ・（配信視聴時）サイト内右上に表示
                </p>
                        <p>
                            【利用規約】<br />
                            利用規約はこちら
                </p>
                    </div>
               
            </div>
        );
    }
}
export default withStyles(styles)(withRouter(FundSettlement));