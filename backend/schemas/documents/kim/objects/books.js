export default {
    name: 'books',
    title: 'Books section',
    type: 'object',
    fields: [
    {
        name: 'heading',
        title: 'Heading',
        description: 'H2 goes here',
        type: 'string',
      },
      {
        name: 'booksDescription1',
        title: 'Books description: paragraph 1',
        type: 'text',
        rows: 3,
      },
      {
        name: 'booksDescription2',
        title: 'Books description: paragraph 2',
        type: 'text',
        rows: 3,
      },
      {
        name: 'booksDescription3',
        title: 'Books description: paragraph 3',
        type: 'text',
        rows: 3,
      },
    ]
};