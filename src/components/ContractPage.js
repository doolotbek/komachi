import React, { Component } from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import "./ContractPage.css";

class ContractPage extends Component {
    render() {
        return (

            <div className="container">
                <p className="tile">利用規約</p>
                <div className="text">

                    <p> 東京小町 会員規約
               <br/>
                        本規約は、株式会社東京藝能（以下「弊社」とする）が提
                        供するサービスであるウェブサイト「東京小町」（以下「本サイト
                        」とする）におけるビデオチャットシステムの提供や弊社が配
                        信・受信する各種コンテンツのインターネット通信サービス（以
                        下「本サービス」という）の利用に関し、全ての本サービス利用
                        者（以下「利用者」とする）に対し、適用されます。
                        利用者は、以下の条項を全て承諾の上、本サービスを利用す
                        るものとします。
                </p>
                    <p>
                        第一条（本規約の範囲と変更）
                <br/>
                        1.弊社が本サイトを通じて随時発表する諸規定は、本規約の
                        一部を構成するものとします。
                </p>
                    <p>
                        2.弊社は本サイトへの表示をもって利用者の承諾を得ることな
                        く、いつでも料金規定の変更を含む本規約および諸規定の変
                        更を行うことができ、変更後の規約が適用されます。
                </p>
                    <p> 第二条（本サービスの内容）
                   <br/>
                        1.本サービスは、サービス内のみにおいてメッセージや通話をライ
                        ブ配信を楽しんでいただくサービスであり、実際の出会い・デー
                        ト・異性交際を提供するサービスではありません。従って、出会
                        い・デート・異性交際に関する情報の書き込みキャストとの遣り
                        取りは禁止させていただきます。当該情報に関する書き込み
                        キャストとの遣り取りを確認した場合、事務局にてテキスト削除
                        又はアカウント削除させていただきますので予めご了承ください。
                </p>
                    <p>
                        2.本サービスはメンバーキャストとのコミュニケーションを楽しんでい
                        ただく事を主旨としております。メンバーキャストとは、視聴者様
                        へのサービス提供毎にインセンティブが発生する、弊社に所属す
                        る女性タレント、モデル、アイドル、女優等の東京小町でライブ
                        配信を行う東京藝能所属タレント及び、弊社と配信契約を
                        交わしたタレントを指します。メンバーキャストに対しては、本サー
                        ビス利用前に公的身分証明書を提出してもらい、満1816歳
                        以上であることを確認しております。
                </p>
                    <p>
                        3.本サービスは、18歳未満の方のご利用を固くお断りしております。
                </p>
                    <p>
                        第三条（利用資格および承認）
                    <br/>
                        1.満18歳未満の方は本サービスを利用することはできません。
                </p>
                    <p>
                        2.弊社は本サービスの利用申込について審査の上、本サービス
                        の利用を認めます。申込者が次の事由に該当する場合、弊
                        社は入会の承認をしないことがあります。
                </p>
                    <p>
                        会員登録申込内容に虚偽、誤記または記入漏れがあったこと
                        が判明した場合。
                        過去に本規約違反等により除名されていることが判明した場
                        合。
                        過去に本サービスの利用料金等の支払債務の履行を遅滞
                        し、または支払いを拒絶したことがある場合。
                        クレジットカード会社、金融機関などにより申込者の指定した
                        クレジットカードや支払口座の利用が停止させられている場
                        合。
                        申込者が未成年者18歳未満である場合。
                        その他、弊社が利用者として不適当と判断した場合。
                </p>
                    <p>
                        第四条（会員登録)
                    <br/>
                        1.利用者は本規約の内容を確認した上で、弊社が用意する
                        フォームに従い住所・氏名・年齢等の個人情報を登録すること
                        ができます。
                </p>
                    <p>
                        2.弊社の過失による場合を除いて電子メールの不着・紛失によ
                        る利用者の利用料金支払い義務は免除されません
                </p>
                    <p>
                        3.メールアドレス等の登録事項に変更のあった場合、すみやか
                        に当社の定める手続きにより当社に届け出るものとします。この
                        届出のない場合、当社は、登録事項の変更のないものとして
                        取り扱うことができるものとします。
                </p>
                    <p>
                        4.登録事項を変更したことを当社に届け出なかった場合、本
                        サービスを利用できなくなることがあります。
                </p>
                    <p>
                        第五条（パスワード管理と責任）
                   <br/>
                        1.利用者は本サービスで得た自己のIDおよびパスワードを第三
                        者に譲渡もしくは質入れし、または使用させることはできませ
                        ん。
                </p>
                </div>
                <Link to="/lawPage">
                    <div className="buttonContainer">
                        <button className="button" >もどる</button></div>
                </Link>
            </div>
        );
    }
}

export default withRouter(ContractPage);