import React from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Statistics from './components/Statistics';
import Transactions from './components/Transactions';
import User from './components/User';
import Engagement from './components/Engagement';

const App = () => {
  return (
    <>
      <Sidebar />
      <main 
        className='grid grid-cols-1 md:grid-cols-[auto_300px] 
        lg:pl-[250px]'
      >
        {/* Column 1 start */}
        <section className='p-4 md:pb-16'>
          <Navbar />
          <Statistics />
          <Transactions />
        </section>
        {/* Column 1 end */}

        {/* Column 2 start */}
        <section className='p-4 pb-16 border-bordercolor lg:border-l-2'>
          <User />
          <Engagement />
        </section>
        {/* Column 2 end */}
      </main>
    </>
  );
};

export default App;