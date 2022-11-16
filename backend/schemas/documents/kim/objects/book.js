export default {
    name: 'book',
    title: 'Single book',
    type: 'object',
    fields: [
    {
        name: 'heading',
        title: 'Heading',
        description: 'H4 goes here',
        type: 'string',
      },
      {
        name: 'bookCover',
        title: 'Book cover',
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
        name: 'bookDescription',
        title: 'Book description',
        type: 'text',
        rows: 3,
      },
      {
        name: 'bookEscerpt',
        title: 'Book excerpt',
        type: 'text',
        rows: 3,
      },
    ]
};