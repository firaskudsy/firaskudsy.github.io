// Giscus comments (GitHub Discussions). Get these values from https://giscus.app
// after enabling Discussions on the repo. Until all four are filled in, note pages
// show a placeholder box instead of loading Giscus.
export const giscus = {
  repo: '', // TODO(firas): "owner/repo", e.g. the site repo
  repoId: '', // TODO(firas): from giscus.app
  category: '', // TODO(firas): Discussions category name
  categoryId: '', // TODO(firas): from giscus.app
  mapping: 'pathname',
  strict: '1',
  reactionsEnabled: '1',
  emitMetadata: '0',
  inputPosition: 'top',
  lang: 'en',
};

export const giscusEnabled = Boolean(giscus.repo && giscus.repoId && giscus.category && giscus.categoryId);
