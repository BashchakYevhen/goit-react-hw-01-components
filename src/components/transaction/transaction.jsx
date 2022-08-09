import transactions from '../../transactions.json';
import { TableHead, TableCell, TableString, Table } from './transaction.style';
export const TransactionHistory = () => {
  return (
    <Table>
      <thead>
        <tr>
          <TableHead>Type</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead>Currency</TableHead>
        </tr>
      </thead>

      <tbody>
        {transactions.map(({ id, type, amount, currency }) => {
          return (
            <TableString key={id}>
              <TableCell>{type}</TableCell>
              <TableCell>{amount}</TableCell>
              <TableCell>{currency}</TableCell>
            </TableString>
          );
        })}
      </tbody>
    </Table>
  );
};

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
