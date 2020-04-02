export const createGame = (game) => {
  return ($.ajax({
    method: 'POST',
    url: '/api/games',
    data: {
      game
    }
  }))
};

export const fetchGames = () => {
  return ($.ajax({
    method: 'GET',
    url: '/api/games'
  }))
};

export const fetchGame = (id) => {
  return ($.ajax({
    method: 'GET',
    url: `/api/games/${id}`
  }))
};

export const destroyGame = (id) => {
  return ($.ajax({
    method: 'DELETE',
    url: `/api/games/${id}`
  }))
}