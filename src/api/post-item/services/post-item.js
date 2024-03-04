'use strict';

/**
 * post-item service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::post-item.post-item');
