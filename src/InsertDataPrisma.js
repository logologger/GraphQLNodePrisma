const { prisma } = require('./generated/prisma-client');

async function main() {
    const newLink  = await prisma.createLink({
        url: 'www.prisma.io',
        description: ' Yo Yo singh'

    })

    console.log('Created New Lnk ')

    const allLinks  = await prisma.links();
    console.log(allLinks)
}

main().catch( e => console.log(e));