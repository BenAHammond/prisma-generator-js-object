import { generatorHandler, GeneratorOptions } from '@prisma/generator-helper'
import { logger } from '@prisma/sdk'
import path from 'path'
import { GENERATOR_NAME } from './constants'
import { writeFileSafely } from './utils/writeFileSafely'

const { version } = require('../package.json')

generatorHandler({
  onManifest() {
    logger.info(`${GENERATOR_NAME}:Registered`)
    return {
      version,
      defaultOutput: '../node_modules/@prisma/schema',
      prettyName: GENERATOR_NAME,
    }
  },
  onGenerate: async (options: GeneratorOptions) => {
   const writeLocation = path.join(
      options.generator.output?.value!,
      `index.js`,
    );
    const content = `const schema = ${JSON.stringify(options.dmmf.datamodel, null, 2)}; module.exports = schema;`
    await writeFileSafely(writeLocation, content);
  },
});