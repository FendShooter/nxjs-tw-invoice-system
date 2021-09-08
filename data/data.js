export const data = [
  {
    invoice: {
      num: '008',
    },
    date: {
      issueDate: new Date(),
    },
  },
  {
    me: {
      name: `Malfait`,

      address: 'Example street , 9055 Av',
    },
  },
  {
    client: {
      name: 'Acme Inc.',
      address: '3605 sessame street , BTM',
    },
    items: [
      { id: 1, description: 'Line item #1', price: 64, vat: 0.1, units: 1 },
      { id: 2, description: 'Line item #2', price: 100, vat: 0.25, units: 2 },
      { id: 3, description: 'Line item #3', price: 200, vat: 0.12, units: 3 },
      {
        id: 4,
        description: 'iPhone 12 Pro Max',
        price: 200,
        vat: 0.12,
        units: 1,
      },
      { id: 5, description: 'Line 5', price: 200, vat: 0.12, units: 5 },
    ],
  },
];
