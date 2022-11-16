// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Home page
import home from './documents/home/home';
import hero from './documents/home/objects/hero';
import game from './documents/home/objects/game';
import kimSection from './documents/home/objects/kimSection';

// About page
import about from './documents/about/about';
import aboutHero from './documents/about/objects/hero';
import team from './documents/about/objects/team';
import aboutPartners from "./documents/about/objects/aboutPartners";
import projects from "./documents/about/objects/projects";

// Contact page
import contact from './documents/contact/contact';
import contactHero from './documents/contact/objects/hero';

// Kim page
import kim from './documents/kim/kim';
import kimHero from './documents/kim/objects/hero';
import poem from './documents/kim/objects/poem';
import books from './documents/kim/objects/books';
import book from './documents/kim/objects/book';

// People and partners
import people from './documents/people/people';
import partners from './documents/partners/partners';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */

    // Home page schemas
    home,
    hero,
    game,
    kimSection,

    //About page schemas
    about,
    aboutHero,
    team,
    aboutPartners,
    projects,

    //Contact page schemas
    contact,
    contactHero,

    //Kim page schemas
    kim,
    kimHero,
    poem,
    books,
    book,

    // People and partners
    people,
    partners,
  ]),
})
