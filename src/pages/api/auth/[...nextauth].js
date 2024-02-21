import NextAuth from 'next-auth';
import CredentialsProvider from "next-auth/providers/credentials"
// import qs from 'qs';
// import axios from 'axios';
// import Cookies from 'cookies'
// import jwt_decode from "jwt-decode";

const nextAuthOptions = (req, res) => {
  // const cookies = new Cookies(req, res);

  return {
    pages: {
      signIn: '/auth/signin',
      signOut: '/auth/signout',
      error: '/auth/error', // Error code passed in query string as ?error=
      verifyRequest: '/auth/verify-request', // (used for check email message)
      newUser: '/auth/new-user' // New users will be directed here on first sign in (leave the property out if not of interest)
    },
    providers: [
      CredentialsProvider({
        name: 'Credentials',
        credentials: {
          username: { label: "Username", type: "text", placeholder: "jsmith" },
          password: { label: "Password", type: "password" }
        },
        async authorize(credentials, req) {
          try {

            // const user = await axios.post(`${process.env.NEXT_PUBLIC_URL_STRAPI}/auth/local`, {
            //   identifier: credentials.email,
            //   password: credentials.password
            // });

            // const cookiesHeaders = user.headers['set-cookie']

            // res.setHeader('Set-Cookie', cookiesHeaders)

            return {
              name: 'pippo'
            }
          } catch (err) {
            console.error(err);
            throw (Error(err.response))

          }
        }
      })
    ],
    // callbacks: {

    //   jwt: async ({ token, user, profile, session, trigger }) => {

    //     if (trigger === 'update' && !!session.selectedYear) {
    //       try {

    //         const resUpdateSelectedYear = await fetch(`${process.env.NEXT_PUBLIC_URL_STRAPI}/user/me`, {
    //           method: 'PUT',
    //           headers: {
    //             authorization: `Bearer ${token.accessToken}`,
    //             'Content-Type': 'application/json'
    //           },
    //           body: JSON.stringify({
    //             selectedYear: session.selectedYear.id
    //           }),
    //         }
    //         );

    //         if (resUpdateSelectedYear.ok) {
    //           token.selectedYear = { id: session.selectedYear.id, date: session.selectedYear.date }
    //           return token;
    //         } else {
    //           return { ...token, error: "RefreshAccessTokenError" }

    //         }

    //       } catch (err) {
    //         return { ...token, error: "RefreshAccessTokenError" }

    //       }

    //     } else


    //       if (user) {

    //         return {
    //           ...token,
    //           accessToken: user.accessToken,
    //           id: user.user.id,
    //           expire: jwt_decode(user.accessToken).exp
    //         }

    //       } else if (token.expire && ((Date.now() / 1000) + 10) < token.expire) {

    //         return token

    //       } else {
    //         try {

    //           const resRefresh = await axios.post(`${process.env.NEXT_PUBLIC_URL_STRAPI}/token/refresh`, {}, {
    //             headers: {
    //               Cookie: `refreshToken=${cookies.get('refreshToken')}; refreshToken.sig=${cookies.get('refreshToken.sig')}`
    //             }
    //           });

    //           const cookiesHeaders = resRefresh.headers['set-cookie']

    //           res.setHeader('Set-Cookie', cookiesHeaders)

    //           const accessTokenDecoded = jwt_decode(resRefresh.data.accessToken);

    //           token.accessToken = resRefresh.data.accessToken;
    //           token.expire = accessTokenDecoded.exp;

    //           return token

    //         } catch (err) {
    //           console.error(err);
    //           // throw (Error(err.response))
    //           return { ...token, error: "RefreshAccessTokenError" }

    //         }
    //       };
    //   },
    //   session: async ({ session, token, user }) => {

    //     session.id = token.id;
    //     session.jwt = token.accessToken;
    //     session.error = token.error

    //     if (!token.role) {
    //       const resUserMe = await fetch(`${process.env.NEXT_PUBLIC_URL_STRAPI}/users/me?${qs.stringify({
    //         populate: {
    //           role: {
    //             populate: '*'
    //           },
    //           tourExpert: {
    //             fields: ['id']
    //           },
    //           selectedYear: {
    //             fields: ['id', 'date']
    //           }
    //         }
    //       })}`, {
    //         headers: {
    //           authorization: `Bearer ${session.jwt}`,
    //         },
    //       });
    //       const resUserMeJson = await resUserMe.json();

    //       session.user.role = resUserMeJson.role.name
    //       session.user.selectedYear = resUserMeJson.selectedYear

    //       token.role = resUserMeJson.role.name
    //       token.selectedYear = resUserMeJson.selectedYear

    //       if (resUserMeJson.tourExpert) {
    //         session.user.tourExpert = resUserMeJson.tourExpert.id
    //         token.tourExpert = resUserMeJson.tourExpert.id
    //       }

    //     } else {

    //       session.user.role = token.role;
    //       session.user.selectedYear = token.selectedYear;

    //       if (token.tourExpert) {
    //         session.user.tourExpert = token.tourExpert
    //       }
    //     }

    //     return session
    //   },

    // },
  }
};

export default (req, res) => NextAuth(req, res, nextAuthOptions(req, res));