import Table from './Table';

export default function InvoiceBody({ item }) {
  return (
    <>
      <Table {...item} />
    </>
  );
}
