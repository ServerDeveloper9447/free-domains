addSubDomain({
  description: 'Hobby Guilded Bot',
  domain: 'is-an.app',
  subdomain: 'powerguilds',
  owner: {
    email: 'serverdeveloper@duck.com',
  },
  record: {
    CNAME: 'power-guilds.pages.dev',
  },
  proxy: false,
  nested: [{
    subdomain: 'dash',
    record: {
      A: ['69.197.135.202']
    },
    proxy: false
  },{
    subdomain: 'api',
    record: {
      A: ['69.197.135.202']
    },
    proxy: false
  }]
})
