export default {
    name: 'hero',
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
      name: 'heroImage',
      title: 'Hero image',
      type: 'image',
      option: {
        hotspot: true,
      },
      fields: [
        {
          name: 'caption',
          type: 'string',
          title: 'Image alt text',
          description: 'Short description of image',
          options: {
            isHighlighted: true, // <-- make this field easily accessible
          },
          validation: (Rule) => [
            Rule.required()
              .max(80)
              .error('Tip: avoid long alt texts, use a maximum of 80 characters.'),
          ],
        },
      ],
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
        name: 'heroLinkText',
        title: 'Hero link text',
        type: 'string',
      },
      {
        name: 'heroLinkUrl',
        title: 'Hero link url',
        type: 'url',
      },
    ],
  };