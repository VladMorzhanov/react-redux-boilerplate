import React from 'react'
import Enzyme, { shallow, render, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import registerRequireContextHook from 'babel-plugin-require-context-hook/register'
import jest from 'jest'

registerRequireContextHook()

require('babel-jest').createTransformer({
  presets: ['react', 'env'],
  plugins: [
    'transform-class-properties',
    'transform-object-rest-spread',
    'syntax-dynamic-import',
    'dynamic-import-node',
    'require-context-hook',
    [
      'transform-runtime',
      {
        polyfill: false,
        regenerator: true
      }
    ]
  ]
})

// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() })
// Make Enzyme functions available in all test files without importing
global.shallow = shallow
global.render = render
global.mount = mount

window.URL = {
  createObjectURL: () => 'stub'
}

jest.mock('react-modal', () => ({ children }) => (
  <div className="modal">{children}</div>
))

module.exports = {
  verbose: true,
  collectCoverage: true,
  coverageReporters: ['json', 'html'],
  testRegex: '(/tests/.*|\\.(test|spec))\\.(ts|tsx|js)$',
  transformIgnorePatterns: ['node_modules'],
  globals: {
    window: true
  },
  setupFiles: ['jest-localstorage-mock', './test/__setup__/jest.setup.js'],
  moduleNameMapper: {
    '\\.(css|less|scss|styl)$': 'identity-obj-proxy',
    '^.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/test/__mocks__/fileMock.js'
  },
  transform: {
    '^.+\\.(js|jsx)$': '<rootDir>/test/__setup__/js.transformer.js'
  }
}
