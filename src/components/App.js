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

class App extends Component {
    render() {
        return (
            <div className="App container">
                <Switch>
                    <Route exact path="/" render={() => <ContractPage />} />
                    <Route exact path="/LawPage" render={() => <LawPage />} />
                    <Route exact path="/FundSettlementPage" render={() => <FundSettlementPage />} />
                    <Route exact path="/PrivacyPolicyPage" render={() => <PrivacyPolicyPage />} />
                    <Route exact path="/Support" render={() => <Support />} />
                    <Route exact path="/TermsOf" render={() => <TermsOf />} />
                    <Route exact path="/Law" render={() => <Law />} />

                </Switch>
            </div>
        );
    }
}
export default App;
