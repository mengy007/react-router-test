// newOrg
export function newOrg(name) {
  return {
    type: 'NEW_ORG',
    name
  }
}

// modifyOrg
export function modifyOrg(id, name, address, city, state, zip) {
  return {
    type: 'MOD_ORG',
    id,
    name,
    address,
    city,
    state,
    zip
  }
}

// removeOrg
export function removeOrg(id) {
  return {
    type: 'REMOVE_ORG',
    id
  }
}

// newContact
export function newContact(organization_id, firstName, lastName, email) {
  return {
    type: 'NEW_CONTACT',
    organization_id,
    firstName,
    lastName,
    email
  }
}

// modifyContact
export function modifyContact(id, firstName, lastName, email, address, city, state, zip) {
  return {
    type: 'MOD_CONTACT',
    id,
    firstName,
    lastName,
    email,
    address,
    city,
    state,
    zip
  }
}

// removeContact
export function removeContact(id) {
  return {
    type: 'REMOVE_CONTACT',
    id
  }
}

// newUser
export function newUser(userName, firstName, lastName, email) {
  return {
    type: 'NEW_USER',
    userName,
    firstName,
    lastName,
    email
  }
}

// modifyUser
export function modifyUser(userName, firstName, lastName, email) {
  return {
    type: 'MOD_USER',
    userName,
    firstName,
    lastName,
    email
  }
}

// removeUser
export function removeUser(id) {
  return {
    type: 'REMOVE_USER',
    id
  }
}
