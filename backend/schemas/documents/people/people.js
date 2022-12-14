export default {
    name: 'people',
    type: 'document',
    title: 'People',
    fields: [
        {
            name: 'firstName',
            title: 'First Name',
            type: 'string',
        },
        {
            name: 'lastName',
            title: 'Last Name',
            type: 'string',
        },
        {
            name: 'photo',
            title: 'Photo',
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
            name: 'bio',
            title: 'Biography',
            type: 'text',
            rows: 3,
        },
        {
            name: 'phone',
            title: 'Phone Number',
            type: 'string',
        },
        {
            name: 'email',
            title: 'Email Address',
            type: 'string',
        },
    ],
};