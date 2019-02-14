import React , { Component } from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import "./FundSettlementPage.css";

class FundSettlementPage extends Component {
    render(){
        return(
            <div className="container">
                <p className="tile">資金決済法に基づく表示</p>
                <div className="text">
                <p>
                【発行事業者】<br/>
                株式会社 東京藝能<br/>
                東京都世田谷区三宿2-11-27 メイクスデザイン三宿3F
                </p>
                <p>
                【購入限度額等 （支払可能金額等）】<br/>
                上限はありません。
                </p>
                <p>
                【有効期限】<br/>
                お客様は、東京小町の販促キャンペーンに別段の約定がある
                場合を除き、ダイヤの有効期間は購入した日から6ヶ月間
                （180日間）とすることを理解並びに同意します。<br/>
                ただしサービス規約に基づき契約が解除された場合は、未使
                用残高を全て失効します。<br/>
                詳細は利用規約をご覧ください。
                </p>
                <p>
                お問い合わせ先】<br/>
                東京小町カスタマーセンター
                </p>
                <p>
                【利用できる場所】<br/>
                ダイヤ：サイト「東京小町」サービス内でご利用いただけます。
                </p>
                <p>
                【利用上の注意】<br/>
                ※原則、商品販売後の払い戻しはいたしません。<br/>
                ただし各サービスの提供を終了する場合は、<br/>
                この限りではありません。<br/>
                ※システム障害時やメンテナンス等により、<br/>
                一時的に商品の利用ができない場合があります。<br/>
                ※商品の利用条件は、公式サイトならびに利用規約をご確認ください。
                </p>
                <p>
                【購入履歴確認方法】<br/>
                ダイヤ：サイト「東京小町」サービス内で、<br/>
                以下の方法でご確認いただけます。<br/>
                ・「マイページ」→「マイダイヤ」→「購入履歴」<br/>
                </p>
                <p>
                【未使用残高確認方法】<br/>
                ダイヤ：サイト「東京小町」サービス内で、<br/>
                以下の方法でご確認いただけます。<br/>
                ・「マイページ」→「マイダイヤ」→「購入履歴」<br/>
                ・（配信視聴時）サイト内右上に表示<br/>
                </p>
                <p>
                【利用規約】<br/>
                利用規約はこちら
                </p>
                </div>
                <Link to="/PrivacyPolicyPage">
                <div className="buttonContainer">
                <button className="button" >もどる</button></div>
                </Link>
            </div>
        );
    }
}
export default withRouter (FundSettlementPage);