export const signup = (user) => {
  return ($.ajax({
    method: 'POST',
    url: '/api/users',
    data: {
      user
    }
  }))
};

export const login = (user) => {
  return ($.ajax({
    method: 'POST',
    url: '/api/session',
    data: {
      user
    }
  }))
};

export const logout = () => {
  return ($.ajax({
    method: 'DELETE',
    url: '/api/session'
  }))
};

// export const createStats = (user_id) => {
//   return $.ajax({
//     method: 'POST',
//     url: '/api/user_stats',
//     data: {
//       user_stats: {
//         user_id
//       }
//     }
//   });
// }
