server.tsconst octokit = new Octokit({
  auth: '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'
})

await octokit.request('GET /app/hook/config', {
  headers: {
    'X-GitHub-Api-Version': '2022-11-28'
  }
})
