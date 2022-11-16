export default {
    name: 'team',
    title: 'Team section',
    type: 'object',
    fields: [
    {
        name: 'heading',
        title: 'Heading',
        description: 'H2 goes here',
        type: 'string',
      },
      {
        name: 'teamDescription',
        title: 'Team description',
        type: 'text',
        rows: 3,
      },
      {
        name: 'teamMember',
        title: 'Team member',
        type: 'reference',
        to: [
          {type: 'people'}
        ]
      }
    ],
  };