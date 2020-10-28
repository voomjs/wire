const Path = require('path')
const Sinon = require('sinon')
const Lab = require('@hapi/lab')
const Code = require('@hapi/code')

const Plugin = require('../lib')

const { expect } = Code
const { describe, it, beforeEach, afterEach } = exports.lab = Lab.script()

describe('plugin', function () {
  beforeEach(function ({ context }) {
    context.cwd = Sinon.stub(process, 'cwd').returns(Path.join(__dirname, 'lib'))
  })

  afterEach(function ({ context }) {
    context.cwd.restore()
  })

  it('imports root modules', function () {
    expect(Plugin.root('module')).to.be.equal('root-module')
  })

  it('imports config modules', function () {
    expect(Plugin.config('module')).to.be.equal('config-module')
    expect(Plugin.config('module')).to.be.equal(Plugin.root('config/module'))
    expect(Plugin.config('module')).to.be.equal(Plugin.root('config', 'module'))
  })

  it('imports database modules', function () {
    expect(Plugin.database('module')).to.be.equal('database-module')
    expect(Plugin.database('module')).to.be.equal(Plugin.root('database/module'))
    expect(Plugin.database('module')).to.be.equal(Plugin.root('database', 'module'))
  })

  it('imports models modules', function () {
    expect(Plugin.models('module')).to.be.equal('models-module')
    expect(Plugin.models('module')).to.be.equal(Plugin.root('models/module'))
    expect(Plugin.models('module')).to.be.equal(Plugin.root('models', 'module'))
  })

  it('imports plugins modules', function () {
    expect(Plugin.plugins('module')).to.be.equal('plugins-module')
    expect(Plugin.plugins('module')).to.be.equal(Plugin.root('plugins/module'))
    expect(Plugin.plugins('module')).to.be.equal(Plugin.root('plugins', 'module'))
  })

  it('imports public modules', function () {
    expect(Plugin.public('module')).to.be.equal('public-module')
    expect(Plugin.public('module')).to.be.equal(Plugin.root('public/module'))
    expect(Plugin.public('module')).to.be.equal(Plugin.root('public', 'module'))
  })

  it('imports resources modules', function () {
    expect(Plugin.resources('module')).to.be.equal('resources-module')
    expect(Plugin.resources('module')).to.be.equal(Plugin.root('resources/module'))
    expect(Plugin.resources('module')).to.be.equal(Plugin.root('resources', 'module'))
  })

  it('imports routes modules', function () {
    expect(Plugin.routes('module')).to.be.equal('routes-module')
    expect(Plugin.routes('module')).to.be.equal(Plugin.root('routes/module'))
    expect(Plugin.routes('module')).to.be.equal(Plugin.root('routes', 'module'))
  })

  it('imports storage modules', function () {
    expect(Plugin.storage('module')).to.be.equal('storage-module')
    expect(Plugin.storage('module')).to.be.equal(Plugin.root('storage/module'))
    expect(Plugin.storage('module')).to.be.equal(Plugin.root('storage', 'module'))
  })
})
