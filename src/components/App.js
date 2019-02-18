import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import ContractPage from "./ContractPage";
import { Route, Switch } from "react-router-dom";
import LawPage from "./LawPage";
import FundSettlementPage from "./FundSettlementPage";
import PrivacyPolicyPage from "./PrivacyPolicyPage";
import Support from "./myPage/Support"
import TermsOf from "./myPage/TermsOf";
import Law from "./myPage/Law";
import Privacypolicy from "./myPage/Privacypolicy";
import Contact from "./myPage/Contact";
import Company from "./myPage/Company";
import FundSettlement from "./myPage/FundSettlement";
import MainPage from './myPage/MainPage';
import FAQ from './FAQ';


class App extends Component {
    render() {
        return (
            <div >
                <Switch>
                    <Route exact path="/" render={() => <MainPage />} />
                    <Route exact path="/ContractPage" render={() => <ContractPage />} />
                    <Route exact path="/LawPage" render={() => <LawPage />} />
                    <Route exact path="/FundSettlementPage" render={() => <FundSettlementPage />} />
                    <Route exact path="/PrivacyPolicyPage" render={() => <PrivacyPolicyPage />} />
                    <Route exact path="/Support" render={() => <Support />} />
                    <Route exact path="/TermsOf" render={() => <TermsOf />} />
                    <Route exact path="/Law" render={() => <Law />} />
                    <Route exact path="/Privacypolicy" render={() => <Privacypolicy />} />
                    <Route exact path="/FundSettlement" render={() => <FundSettlement />} />
                    <Route exact path="/Contact" render={() => <Contact />} />
                    <Route exact path="/Company" render={() => <Company />} />
                    <Route exact path="/FAQ" render={() => <FAQ />} />
                </Switch>
            </div>
        );
    }
}
export default App;
