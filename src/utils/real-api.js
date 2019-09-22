export const messages = ({ id }) => {
  return Promise.reject('not implemented yet');
};

export const personal = ({ id }) => {
  return Promise.reject('not implemented yet');
};

export const register = ({ name, password, id }) => {
  fetch('/beaconsproject.uk/api/', {
    method: 'POST',
    body: { name, password, id }
  });
  return Promise.reject('not implemented yet');
};

export const login = ({ name, password }) => {
  fetch('/beaconsproject.uk/api/', {
    method: 'POST',
    body: { name, password }
  });
  return Promise.reject('not implemented yet');
};

export const update = ({ id, name, email, phone, password }) => {
  return Promise.reject('not implemented yet');
};

export const found = ({ id, code }) => {
  fetch('/beaconsproject.uk/api/', {
    method: 'POST',
    body: { id, code }
  });
  return Promise.reject('not implemented yet');
};
