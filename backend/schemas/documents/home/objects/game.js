export default {
    name: 'game',
    title: 'Game section',
    type: 'object',
    fields: [
        {
            name: 'heading',
            title: 'Heading',
            description: 'H2 goes here',
            type: 'string',
          },
        {
          name: 'gameImage',
          title: 'Game image',
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
            name: 'gameDescription',
            title: 'Game description',
            type: 'text',
            rows: 3,
          },
          {
            name: 'gameLinkText',
            title: 'Game link text',
            type: 'string',
          },
          {
            name: 'gameLinkUrl',
            title: 'Game link url',
            type: 'url',
          },
    ],
  };
  