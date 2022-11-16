export default {
    name: 'kimPage',
    type: 'document',
    title: 'Kim',
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
                {type: 'kimHero'},
                {type: 'poem'},
                {type: 'books'},
                {type: 'book'},
            ],
        },
    ],
};