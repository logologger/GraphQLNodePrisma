function newLinkSubscribe(parent, args, context, info) {
    return context.prisma.$subscribe.link({ mutation_in: ['CREATED'] }).node()
}

function newVoteSubscribe(parent, args, context, info) {
  return context.prisma.$subscribe.vote({ mutation_in: ['CREATED'] }).node()
}

const newVote = {
  subscribe: newVoteSubscribe,
  resolve: payload => {
    return payload
  },
}
  
  const newLink = {
    subscribe: newLinkSubscribe,
    resolve: payload => {
      return payload
    },
  }
  
  module.exports = {
    newLink,
    newVote,
  }


  /*


  Rather than returning any data directly, they return an AsyncIterator which subsequently is used by the GraphQL server
   to push the event data to the client.
Subscription resolvers are wrapped inside an object and need to be provided as the value for a subscribe field.
 You also need to provide another field called resolve 
that actually returns the data from the data emitted by the AsyncIterator.

  */