export default {
    name: 'contactPage',
    type: 'document',
    title: 'Contact',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
        },
        {
            name: 'pageBuilder',
            title: 'Sections for the page',
            description: 'The different sections that this page contains.',
            type: 'array',
            of: [
                {type: 'contactHero'},
            ],
        },
    ],
};