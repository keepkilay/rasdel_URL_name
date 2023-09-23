const getSubredditName = (link) => {
	const rIndex = link.indexOf('/r/');
  const nameStartIndex = rIndex + 3;
  return link.slice(nameStartIndex, -1);
}

alert( getSubredditName('https://reddit.com/r/dankmemes/') )