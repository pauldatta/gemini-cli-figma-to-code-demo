import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';
import Cashtellations from './components/Cashtellations/Cashtellations';
import QuickActions from './components/QuickActions/QuickActions';
import Balances from './components/Balances/Balances';
import People from './components/People/People';
import BillsRecharges from './components/BillsRecharges/BillsRecharges';
import Businesses from './components/Businesses/Businesses';
import ManageMoney from './components/ManageMoney/ManageMoney';
import InviteEarn from './components/InviteEarn/InviteEarn';
import Footer from './components/Footer/Footer';
import Profile from './screens/Profile/Profile';
import Search from './screens/Search/Search';
import ScanQR from './screens/ScanQR/ScanQR';
import SendMoney from './screens/SendMoney/SendMoney';
import BankTransfer from './screens/BankTransfer/BankTransfer';
import BillsRechargesScreen from './screens/BillsRechargesScreen/BillsRechargesScreen';
import Transaction from './screens/Transaction/Transaction';
import BusinessPayment from './screens/BusinessPayment/BusinessPayment';
import CreditCards from './screens/CreditCards/CreditCards';
import Loans from './screens/Loans/Loans';
import CIBIL from './screens/CIBIL/CIBIL';
import TransactionHistory from './screens/TransactionHistory/TransactionHistory';
import AccountBalance from './screens/AccountBalance/AccountBalance';
import Invite from './screens/Invite/Invite';
import Money from './screens/Money/Money';
import You from './screens/You/You';

const Home = () => (
  <main className="main-content">
    <SearchBar />
    <Cashtellations />
    <QuickActions />
    <Balances />
    <People />
    <BillsRecharges />
    <Businesses />
    <ManageMoney />
    <InviteEarn />
  </main>
);

function App() {
  return (
    <Router>
      <div className="mobile-container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/search" element={<Search />} />
          <Route path="/scan-qr" element={<ScanQR />} />
          <Route path="/send-money" element={<SendMoney />} />
          <Route path="/bank-transfer" element={<BankTransfer />} />
          <Route path="/bills-recharges" element={<BillsRechargesScreen />} />
          <Route path="/transaction/:person" element={<Transaction />} />
          <Route path="/pay/:business" element={<BusinessPayment />} />
          <Route path="/credit-cards" element={<CreditCards />} />
          <Route path="/loans" element={<Loans />} />
          <Route path="/cibil" element={<CIBIL />} />
          <Route path="/history" element={<TransactionHistory />} />
          <Route path="/balance" element={<AccountBalance />} />
          <Route path="/invite" element={<Invite />} />
          <Route path="/money" element={<Money />} />
          <Route path="/you" element={<You />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
