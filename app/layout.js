import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import { UserButton, currentUser } from '@clerk/nextjs'
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import Header from "./components/Header";
import Footer from "./components/Footer";
import '@mantine/core/styles.css';
import '@mantine/charts/styles.css';

export const metadata = {
  title: "WOW ",
  description: "Generated by create next app",
};

export default async function RootLayout({ children }) {
  const user = await currentUser();

  return (
    <ClerkProvider appearance={{
      variables:{
      colorPrimary:'green'
    }}}>
      <html lang="en">
        <head>
          <ColorSchemeScript/>
        </head>
        <body style={{backgroundColor:'#F6F7FC'}}>
        <MantineProvider theme={{
          primaryColor:'green'
        }}>
        <Header/>
          {children}
          <Footer/>
        </MantineProvider>
          </body>
      </html>
    </ClerkProvider>
  );
}
