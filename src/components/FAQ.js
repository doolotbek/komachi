import React, { Component } from 'react';
// import { withRouter } from "react-router";
import Divider from '@material-ui/core/Divider';
import { withStyles } from '@material-ui/core/styles';
import CardHeader from '@material-ui/core/CardHeader';
import { Typography } from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetail';

const styles = {
    texts: {
        fontSize: '14px',
        height: 'auto',
        left: '1rem',
        right: '1rem',
        width: '100%',
        marginTop: '34px',

    },
    text: {
        fontSize: '10px',
        marginBottom: '27px'
    },
    button: {
        fontSize: '29px',
        textAlign: 'center',
        height: '56px',

    },
    container: {
        haight: '18px',
    }
};


class FAQ extends Component {



    render() {
        const { classes } = this.props;
        return (
            <div className={classes.container}>




                <CardHeader
                    avatar={<img alt='icon' style={{ height: "14px" }} src='/images/arrowLeft.svg' onClick={() => this.props.history.goBack()} />}
                    title={<Typography align='center' style={{ marginRight: '1rem', fontSize: "18px", fontWeight: '150' }}>FAQ</Typography>}
                />

                <Divider />

                <div className={classes.texts}>
                    <ExpansionPanel>
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography className={classes.heading}>東京小町について</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Typography className={classes.text}>
                                ・SHOWROOMとはどんなサービスですか？<br />
                                ・録画機能はありますか？<br />
                                ・対応機種・推奨環境を教えてください
                           </Typography>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>

                    <ExpansionPanel>
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography className={classes.heading}>視聴</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Typography className={classes.text}>
                                ・Safariのバージョンアップで配信が視聴できなくなった場合<br />
                                ・動画が正常に再生されない場合<br />
                                ・コメントが星(☆)になるのですが</Typography>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                    <p>会員登録</p>

                    <ExpansionPanel>
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography className={classes.heading}>視聴</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Typography className={classes.text}>
                                ・無料で利用できますか？<br />
                                ・アカウント設定方法を教えてください<br />
                                ・機種変更しても同じアカウントで使うことはできますか？<br />
                                ・アプリを削除をするとフォローしたルームなどのデータは消えてしまいますか？<br />
                                ・退会したいのですが
                                        </Typography>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>

                    <ExpansionPanel>
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography className={classes.heading}>ログイン</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Typography className={classes.text}>
                                ・ログインできません<br />
                                ・ログアウトしたいのですが
                                        </Typography>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>

                    <ExpansionPanel>
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography className={classes.heading}>Twitter連携</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Typography className={classes.text}>
                                ・Twitter連携ができません<br />
                                ・別のTwitterアカウントを連携したい<br />
                                ・「他のアカウントと連携されています」と表示され連携ができません<br />
                                ・350エラーと表示されます<br />
                                ・「投稿に失敗しました」と表示されTwitter投稿できません
                                        </Typography>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>

                    <ExpansionPanel>
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography className={classes.heading}>Show Gold</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Typography className={classes.text}>
                                ・Show Goldとは<br />
                                ・購入方法<br />
                                ・Show Goldが反映されません<br />
                                ・購入履歴と残高を確認したい
                                        </Typography>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>

                    <ExpansionPanel>
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography className={classes.heading}>イベント機能</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Typography className={classes.text}>
                                ・配信者向け：イベントへの参加方法<br />
                                ・イベントの終了時間は、59秒までですか？<br />
                                ・コメントのポイント換算の仕組みを教えて下さい<br />
                                ・ポイントとは何ですか？<br />
                                ・ランキングイベントとは何ですか？
                                        </Typography>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>

                    <ExpansionPanel>
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography className={classes.heading}>配信</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Typography className={classes.text}>
                                ・アマチュアとオフィシャルアカウントの違い<br />
                                ・配信している映像がアプリで観られない<br />
                                ・Androidで配信ができない<br />
                                ・ルーム画像の解像度を教えて下さい<br />
                                ・ルームレベルとは何ですか？
                                        </Typography>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>

                    <ExpansionPanel>
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography className={classes.heading}>通報</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Typography className={classes.text}>
                                ・通報とは何ですか？<br />
                                ・誤って通報してしまった
                                        </Typography>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>

                    <ExpansionPanel>
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography className={classes.heading}>その他の機能</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Typography className={classes.text}>
                                ・配信通知（♡マークとは）<br />
                                ・ハートマークの下の数字は何ですか？<br />
                                ・支援ゲージとは？<br />
                                ・支援ゲージの設定方法<br />
                                ・ファンルーム（チャットルーム）とは？
                                        </Typography>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>

                    <ExpansionPanel>
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography className={classes.heading}>配信者向け：iPhone/Androidでの配信方法</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Typography className={classes.text}>
                                ・アプリのインストール<br />
                                ・iPhone / iPadでの配信方法<br />
                                ・Androidでの配信方法<br />
                                ・ラジオ配信方法<br />
                                ・カラオケ配信方法
                                        </Typography>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>

                    <ExpansionPanel>
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography className={classes.heading}>配信者向け：PCでの配信方法</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Typography className={classes.text}>
                                ・Open Broadcaster Software を使った配信 (Window…<br />
                                ・ブラウザを使った配信 (Windows / Mac)<br />
                                ・エンコーダーの推奨設定（上級者向け）
                                        </Typography>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>

                    <ExpansionPanel>
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography className={classes.heading}>配信者向け：配信ルーム設定</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Typography className={classes.text}>
                                ・ライブ配信予定の登録方法<br />
                                ・ツイート文言の変更方法<br />
                                ・YouTube動画の設定方法<br />
                                ・バナー画像の設定方法<br />
                                ・配信ルームを削除するには
                                        </Typography>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>

                    <ExpansionPanel>
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography className={classes.heading}>各種ガイド</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Typography className={classes.text}>
                                ・権利に関するガイドページ<br />
                                ・オリジナルアバター制作ガイドラインについて
                                        </Typography>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>

                    <ExpansionPanel>
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography className={classes.heading}>オーガナイザーと公式アカウント</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Typography className={classes.text}>
                                ・公式アカウントとは何ですか？<br />
                                ・オーガナイザーとは何ですか？<br />
                                ・どうすればアマチュアから公式アカウントになれますか？<br />
                                ・アマチュアから公式アカウントになる前に気をつけることはありますか？<br />
                                ・公式アカウントはアマチュアと分配金の分配率が異なると聞いています。 どのように異…
                                        </Typography>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>

                </div>
            </div>
        );
    }
}
SimpleExpansionPanel.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FAQ);