import React from 'react';

import Header from '../components/header';
import Footer from '../components/footer';

const headerList = [{
  label: 'Vendre',
  path: ''
}, {
  label: 'Amélioration',
  path: 'amelioration'
}, {
  label: 'Produits',
  path: 'produits'
}, {
  label: 'Manager',
  path: 'manager'
}];

const Page = ({ children }) => (
  <div>
    <Header listItem={headerList} />
    <main className="container">
      {children}
    </main>
    <Footer />
  </div>
);

export default Page;
