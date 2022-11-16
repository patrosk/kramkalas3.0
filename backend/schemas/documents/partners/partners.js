export default {
    name: 'partners',
    type: 'document',
    title: 'Partners',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'image',
            title: 'Image',
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
            name: 'description',
            title: 'Description',
            type: 'text',
            rows: 3,
        },
        {
            name: 'linkText',
            title: 'Link Text',
            type: 'string',
        },
        {
            name: 'linkUrl',
            title: 'Link Url',
            type: 'string',
        },
    ],
};