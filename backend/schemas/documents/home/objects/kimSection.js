export default {
    name: 'kimSection',
    title: 'Kim section',
    type: 'object',
    fields: [
        {
            name: 'heading',
            title: 'Heading',
            description: 'H2 goes here',
            type: 'string',
          },
          {
            name: 'kimImage',
            title: 'Kim image',
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
            name: 'kimDescription',
            title: 'Kim description',
            type: 'text',
            rows: 3,
          },
          {
            name: 'kimLinkText',
            title: 'Kim link text',
            type: 'string',
          },
          {
            name: 'kimLinkUrl',
            title: 'Kim link url',
            type: 'url',
          },
        ],
  };