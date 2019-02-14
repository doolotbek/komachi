import React , { Component } from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import "./LawPage.css"

class LawPage extends Component {
    render() {
        return (
            <div className="container">
            <p className="tile">特定商取引法に基づく表示</p>
            <div className="text" > 
                <p>
                サイト名<br/>
                東京小町
                </p>
                <p>
                運営業者<br/>
                株式会社 東京藝能
                </p>
                <p>
                運営統括責任者<br/>
                大神田 務

                </p>
                <p>
                所在地<br/>
                〒154-0005 東京都世田谷区三宿2−11−27 メイクスデザイン三宿301
                </p>
                <p>
                電話番号<br/>
                03-6629-0689（カスタマーサポート）<br/>
                受付時間：平日11時～18時<br/>
                </p>
                <p>
                メールアドレス<br/>
                support@tokyo-komachi.jp
                </p>
                <p>
                支払い方法<br/>
                クレジットカード、楽天Edy、楽天ID決済、銀行、ゆうちょ、ビッ
                トキャッシュ、G-MONEY、C-CHECK、セキュリティーマネー、コン
                ビニダイレクト決済、Pay-easy
                </p>
                <p>
                ポイント単価<br/>
                1ポイント 1円 (税別)<br/>
                30ダイヤ3000円～<br/>
                </p>
                <p>
                返金について<br/>
                ライブストリーミング配信の提供というコンテンツの都合上、購
                入されたポイントについては一切返金できませんので予めご了
                承下さい。
                </p>


            </div>
            <Link to="/FundSettlementPage">
                <div className="buttonContainer">
                <button className="button" >もどる</button></div>
            </Link>
  
            
            </div>
        );
    }
}

export default withRouter (LawPage);