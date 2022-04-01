export const createUser = async (data)=>{
    let user = await fetch('/api/v1/users/adduser',{
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      
    })
    let userJson = await user.json();
    console.log(userJson);
}

export const getAllUsers = async ()=>{
  let users = await fetch(`/api/v1/users/`,{
    method: 'GET'
  });
  let usersJson = await users.json();
  console.log(usersJson)
  return usersJson;
}

export const createChat = async(obj)=>{
  let conId = await fetch('/api/v1/newConversation',{
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(obj)
  })
  let conIdJson = await conId.json();
  console.log('this is conId',conIdJson);
  return (conIdJson);
}

export const newMessage = async(obj)=>{
  let conId = await fetch('/api/v1/messages/newMessage',{
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(obj)
  })
  let conIdJson = await conId.json();
  return (conIdJson);
}

export const getMessages = async(id)=>{
  console.log('this is getmesage caalll',id)
  let messages = await fetch(`/api/v1/messages/?id=${id}`,{
    method: 'GET',
  })
  let messagesJson = await messages.json();
  return (messagesJson.allMessage);
}