export const leaders = (state) => {
  let fast = undefined;
  let most = undefined;
  let fastPlayer;
  let mostPlayer;

  Object.values(state.entities.leaders).forEach((leader) => {
    if (!fast) {
      fast = leader.fastest_win;
      fastPlayer = leader.username;
    } else if (leader.fastest_win < fast) {
      fast = leader.fastest_win;
      fastPlayer = leader.username;
    }

    if (!most) {
      most = leader.best_round;
      mostPlayer = leader.username;
    } else if (leader.best_round > most) {
      most = leader.best_round;
      mostPlayer = leader.username;
    }
  });

  return {
    fastestWin: fast,
    fastPlayer,
    mostBrains : most,
    mostPlayer
  };
};