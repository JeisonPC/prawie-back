'use strict';

/**
 * cotization service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::cotization.cotization');
