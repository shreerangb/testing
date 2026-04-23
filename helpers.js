function formatUserId(id) {
  if (id === null || id === undefined) {
    throw new Error('Invalid user id');
  }

  const normalized = String(id).trim();

  if (!normalized) {
    throw new Error('Empty user id');
  }

  if (normalized.startsWith('user_')) {
    return normalized;
  }

  return `user_${normalized}`;
}
