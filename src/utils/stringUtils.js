export const normalizeName = (value) => value[0].toUpperCase() + value.slice(1);

export const splitByNewLine = (content) => content.split('\n');

export const formatCommentsCount = (comments) => `${comments.length} comment${comments.length !== 1 ? 's' : ''}`;
