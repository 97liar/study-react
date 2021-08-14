import { useRouter } from 'next/dist/client/router';
import { useEffect, useMemo } from 'react'

export const useBgLightBlue = () => {
  const router = useRouter();

  const bgColor = useMemo(() => {
    return document.body.style.backgroundColor = router.asPath === "/" ? "lightblue" : "beige";
  }, [router.asPath])

  useEffect(() => {
    document.body.style.backgroundColor = bgColor;
    return () => {
    document.body.style.backgroundColor = "";
    }
  },[bgColor])
}