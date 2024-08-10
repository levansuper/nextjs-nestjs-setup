import { UserProfile, UserProvider } from "@auth0/nextjs-auth0/client";
import "./globals.css";
import AuthenticationContextProvider from "@/components/context/authentication-context";
import { Header } from "@/components/header/header";
import ApolloContextProvider from "@/components/context/apollo-context";
import { ToastContainer } from "react-toastify";
import { ElementType } from 'react';
import 'react-toastify/ReactToastify.css';
import { getSession } from "@auth0/nextjs-auth0";


function RootLayout({
  children,
  params : {
    user
  }
}: {
  children: React.ReactNode;
  params: {
    user: UserProfile
  }
}) {

  return (
    <UserProvider user={user}>
      <AuthenticationContextProvider>
        <ApolloContextProvider>
          <html lang="en">
            <body>
              <ToastContainer />
              <div className="bg-indigo-200 h-screen p-2 flex flex-col gap-2">
                <Header />
                {children}
              </div>
            </body>
          </html>
        </ApolloContextProvider>
      </AuthenticationContextProvider>
    </UserProvider>
  );
}


const withUserLoad = (Component: ElementType): any => {
  const sessionLoader = async ({ children }: any) => {
    const session = await getSession();
    return (
      <Component
        params={{
          user: session?.user,
        }}
      >
        {children}
      </Component>
    );
  };
  return sessionLoader;
};

export default withUserLoad(RootLayout);