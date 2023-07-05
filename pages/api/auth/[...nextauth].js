import NextAuth from "next-auth/next";
import GitHubProvider from 'next-auth/providers/github'

export default NextAuth({
    
    providers:[
        GitHubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        })
    ],
    // session: {
    //     jwt: true
    //   },
    //   jwt: {
    //     secret: 'asdcvbtjhm'
    //   },
    //   callbacks: {
    //     async jwt(token, user) {
    //       if (user) {
    //         token.id = user.id
    //       }
    //       return token
    //     },
    //     async session(session, token) {
    //       session.user.id = token.id
    //       return session
    //     }
    // }
})