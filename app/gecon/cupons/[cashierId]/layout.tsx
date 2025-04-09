import { ReactNode } from "react";

export default function RootLayout({
  children,
  aside
}: Readonly<{
  children: ReactNode;
  aside: ReactNode;
}>) {
  return (
    <>
        { children }  
        { aside }
    </>
  );
}
