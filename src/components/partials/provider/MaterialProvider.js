"use client"

import { ThemeProvider } from '@material-tailwind/react';

function MaterialProvider({children}) {
  return <ThemeProvider >{children} </ThemeProvider>;
}

export default MaterialProvider
