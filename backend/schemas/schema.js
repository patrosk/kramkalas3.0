// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Home page
import home from './documents/home/home';
import hero from './documents/home/objects/hero';
import game from './documents/home/objects/game';
import kim from './documents/home/objects/kim';

// About page
import about from './documents/about/about';
import aboutHero from './documents/about/objects/hero';
import team from './documents/about/objects/team';
import partners from "./documents/about/objects/partners";
import projects from "./documents/about/objects/projects";

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
    kim,

    //About page schemas
    about,
    aboutHero,
    team,
    partners,
    projects
  ]),
})
