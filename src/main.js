import * as core from '@actions/core'
import cpy from 'cpy'

const sourceGlobs = core.getInput('source').split(',')
const destination = core.getInput('destination')
const options = JSON.parse(core.getInput('options') || '{}')

try {
  await cpy(sourceGlobs, destination, options)
} catch (error) {
  if (error instanceof Error) {
    core.setFailed(error.message)
  } else {
    core.setFailed(`Error while copying files: ${error}`)
  }
}
