export default {
    name: 'aboutPage',
    type: 'document',
    title: 'About',
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
                {type: 'aboutHero'},
                {type: 'team'},
                {type: 'aboutPartners'},
                {type: 'projects'}
            ],
        },
    ],
};