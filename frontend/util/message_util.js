export const postMessage = (message) => {
  return ($.ajax({
    method: 'POST',
    url: '/api/messages',
    data: {
      message
    }
  }))
};