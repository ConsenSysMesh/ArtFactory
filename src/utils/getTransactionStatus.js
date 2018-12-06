const getTransactionStatus = (drizzleState, transactionId) => {
  const { transactions, transactionStack } = drizzleState;

  const txHash = transactionStack[transactionId];

  if (!txHash) return null;

  return transactions[txHash].status;
};

export default getTransactionStatus;
