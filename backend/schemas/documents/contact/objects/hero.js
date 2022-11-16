export default {
    name: 'contactHero',
    title: 'Hero section',
    type: 'object',
    fields: [
    {
        name: 'h1',
        title: 'Heading',
        description: 'H1 goes here',
        type: 'string',
      },
      {
        name: 'heroDescription1',
        title: 'Hero description: paragraph 1',
        type: 'text',
        rows: 3,
      },
      {
        name: 'heroDescription2',
        title: 'Hero description: paragraph 2',
        type: 'text',
        rows: 3,
      },
      {
        name: 'heroEmailText',
        title: 'Hero Email Text',
        type: 'string',
      },
      {
        name: 'heroEmailAddress',
        title: 'Hero Email Address',
        type: 'string',
      },
    ],
  };