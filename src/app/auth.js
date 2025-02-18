import UserModel from "../utils/models/User";
import NextAuth from "next-auth";
import CredentialProvider from "next-auth/providers/credentials";

export const { auth, signIn, signOut, handlers: { GET, POST } } = NextAuth({
    providers: [
        CredentialProvider({
            name: "credentials",
            async authorize(credentials) {
                const user = await UserModel.findOne({ email: credentials?.email });
                console.log("auth", user);
                if (user) {
                    return { id: user._id, name: user.name, email: user.email, role: user.role };
                } else {
                    throw new Error('Invalid credentials');
                }
            }
        })
    ],
    secret: process.env.SECRET_KEY,
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.userid = user.id;
                token.name = user.name;
                token.role = user.role;
                token.email = user.email;
            }
            return token;
        },
        async session({ session, token }) {
            session.userid = token.userid;
            session.name = token.name;
            session.role = token.role;
            session.email = token.email;
            return session;
        }
    }
});
