import NextAuth from "next-auth"
import Providers from "next-auth/providers"

import { fauna } from "../../../services/faunadb"
import {query as q} from "faunadb"

export default NextAuth({
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      scope: 'read:user'
    }),
  ],
  callbacks: {
    async signIn( user, account, profile) {

      const {email} = user

      try {
        
        await fauna.query(
          q.If(
            q.Not(
              q.Exists(
                q.Match(
                  q.Index("user_by_email"),
                  email
                )
              )
            ),
            q.Create(
              q.Collection("users"),
              {data: {email: email}}
            ),
            q.Get(
              q.Match(
                q.Index("user_by_email"),
                q.Casefold(email) //? Lower Case
              )
            )
          )
        )
        /**
         * ! Everything's inside the if statement
         * 
         * ? The first section is the condition to be met (user exists?)
         * 
         * * The middle is what's suposed to be done if true (create a new user)
         * 
         * * The last is the else statement (get the user's info)
         */
        
        return true
      } catch {
        return false
      }

    }
  }
})