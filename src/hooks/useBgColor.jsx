import { useRouter } from 'next/dist/client/router';
import { route } from 'next/dist/next-server/server/router';
import { useEffect, useMemo } from 'react'

export const useBgColor = () => {
  const router = useRouter(); 

  const bgColor = useMemo(() => {
    return router.asPath === "/" ? "lightblue" : "beige"
  })

  useEffect(() => {
    document.body.style.backgroundColor = bgColor;
    return () => {
    document.body.style.backgroundColor = "";
    }
  },[bgColor])
}