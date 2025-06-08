export const filteredGames = (games, category = 'all') => {
  if (category === 'all') return games;
  const filteredGames = games.filter(game => game.category === category);
  return filteredGames;
};
