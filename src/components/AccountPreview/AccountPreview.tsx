import React from 'react';

interface AccountPreviewProps {
  accountNumber: string;
  balance: number;
}

const AccountPreview: React.FC<AccountPreviewProps> = ({ accountNumber, balance }) => {
  return (
    <div>
      <h2>Account Preview</h2>
      <p>Account Number: {accountNumber}</p>
      <p>Balance: {balance}</p>
    </div>
  );
};

export default AccountPreview;
