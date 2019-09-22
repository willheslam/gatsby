export const messages = ({ id }) => {
  return Promise.resolve([
    {
      messageid: '123',
      text: 'Hello!',
      founddate: '2019-09-22T17:56:07Z'
    },
    {
      messageid: '436',
      text: 'Testing\nnew lines\na bit!',
      founddate: '2019-04-10T12:20:00Z'
    },
    {
      messageid: '64991',
      text: 'One more message',
      founddate: '2021-02-05T08:10:30Z'
    }
  ]);
};

export const personal = ({ id }) => {
  return Promise.resolve({
    name: 'Frank Drebin',
    email: 'frank@drebin.com',
    phone: '0123456'
  });
};

export const register = ({ name, password, id }) => {
  return Promise.resolve(true);
};

export const login = ({ name, password }) => {
  return Promise.resolve('84621222-4c87-40ba-872e-1462e46adeae');
};

export const update = ({ id, name, email, phone, password }) => {
  return Promise.resolve(true);
};

export const found = ({ id, code }) => {
  return Promise.resolve(true);
};
