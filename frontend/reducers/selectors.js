export const leaders = (state) => {
  let fast = undefined;
  let most = undefined;
  let winTotal = undefined;
  let fastPlayer;
  let mostPlayer;
  let winTotalPlayer;

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

    if (!winTotal) {
      winTotal = leader.best_round;
      winTotalPlayer = leader.username;
    } else if (leader.win_total > winTotal) {
      winTotal = leader.best_round;
      winTotalPlayer = leader.username;
    }

  });

  return {
    fastestWin: fast,
    fastPlayer,
    mostBrains : most,
    mostPlayer,
    mostWins: winTotal,
    winTotalPlayer
  };
};