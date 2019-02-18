import React, { Component } from "react";
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from "react-router";
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
    },
     icon: {
        marginRight: '100%',

    }
};


class Privacypolicy extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.conteiner}>
                
                
                <ListItem className={classes.button} button >
                <CardHeader
                    avatar={<BackIcon style={{fontSize: "24px"}} onClick={()=> this.props.history.goBack()}/>}
                />
                    <ListItemText >プライバシーポリシー</ListItemText>
                    <Divider />
                </ListItem>
                
                
                <div className={classes.text}>
                    <p>東京小町 プライバシーポリシー</p>
                    <p>当サイトは、ユーザー様についての個人情報を以下の基準にて取り扱います。</p>
                    <p>
                        1.個人情報の収集について<br />
                        当サイトでは、ユーザー様にサービスをご利用いただくために、お名前、
                        メールアドレス、電話番号等の個人情報をお尋ねいたします。それらの個人情報はユ
                        ーザー様個人にサービスを提供するために必要な情報ですので、その旨をご理解いただ
                        いたうえで、ユーザー様の個人情報をご登録いただいております。ユーザー様から収集さ
                        せていただいた個人情報は、不正アクセスや紛失、漏洩等が起きぬよう厳重に管理いたします。
                </p>
                    <p>
                        2.使用目的について<br />
                        ご登録いただいた個人情報については、ユーザー様により良いサービスをご提供出来る
                        よう利用させていただきます。 ご請求の対応、サービスの向上、ユーザー様との連絡等、
                        カスタマサポートもしくはユーザーサポートに必要な情報として使用させていただきます。
                         なお、当サイトからのご案内の停止/受信については、いつでも任意に会員登録後
                         「マイメニュー」より選択いただけます。
                </p>
                    <p>
                        3.自動的に受け取る情報『cookie(クッキー)』について<br />
                        当サイトでは、ユーザー様にサービスを有効にご利用いただけるよう、
                        『cookie(クッキー)』を利用して必要な情報を受け取り保管しております。
                        『cookie(クッキー)』とは、ブラウザを通じて、ユーザー様のスマートフ
                        ォン/パソコンに書き込む英数字によるデータファイルです。当サイトが
                    管理している必要な情報は以下の通りです。<br />
                        ・会員認証<br />
                        ・ポイント<br />
                        ・お気に入り等<br />
                        ユーザー様のプライバシーを侵害することは決してございませんので安心
                        してご利用ください。お客様でcookie(クッキー)を無効に設定することも出来ますが、
                        その場合システムの都合上、サービスの一部が利用できなくなる可能性がございます
                        事をご承知ください。
                </p>
                    <p>
                        4.情報の開示・提供について<br />
                        当サイトはユーザー様の同意なく、ユーザー様の個人情報を、下記の場合を除き、
                        第三者へ開示または提供することは一切ありません。
                </p>
                    <p>
                        ・当事務局と機密保持契約を締結している業務委託会社や協力会社<br />
                        (業務委託とは、請求処理、メールの送付等)<br />
                        ・警察などの官公署からの要請<br />
                        ・法律の適応を受ける場合<br />
                        (当サイトは法律に基づく要請を受け、会員規約とその他の規約により、弊社及びユ
                        ーザー様の権利、財産、安全を保障するため、情報の開示が必要であると認められ
                        た場合において、個人情報を開示・提供することがあります)
                </p>
                    <p>
                        5.個人情報保護の遵守<br />
                        「東京小町」は、本サイトで収集した個人情報に関して適用される「個人情報保護に関
                        する法律」(平成15年5月30日法律第57号)、日本工業規格「個人情報保護に関するコン
                        プライアンス・プログラムの要求事項（JIS Q 15001）」及びその他の個人情報保護に関
                        する規範を遵守します。さらに規範を遵守するとともに、上記における取り組みをこれから
                        も強化し改善に努めてまいります。
                </p>
                </div>
            </div>
        );
    }
}
export default withStyles(styles)(withRouter(Privacypolicy));