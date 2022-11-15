export default {
    name: 'projects',
    title: 'Projects section',
    type: 'object',
    fields: [
    {
        name: 'heading',
        title: 'Heading',
        description: 'H2 goes here',
        type: 'string',
      },
      {
        name: 'projectsDescription1',
        title: 'Projects description: paragraph 1',
        type: 'text',
        rows: 3,
      },
      {
        name: 'projectsDescription2',
        title: 'Projects description: paragraph 2',
        type: 'text',
        rows: 3,
      },
      {
        name: 'companyEmailText',
        title: 'Company email Text',
        type: 'string'
      },
      {
        name: 'companyEmailAddress',
        title: 'Company email address',
        type: 'string'
      },
    ],
  };