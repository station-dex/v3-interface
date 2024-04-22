import React, { ReactNode, useEffect, useMemo, useRef, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import {GlobeIcon, TelegramIcon, TwitterIcon} from "./icons"
import { ExternalLink } from "react-feather"
import { IntroBg, Planet } from "./index.style"
import PoissonDiskSampling from 'poisson-disk-sampling'

const introSocials = [
  {
    Icon: GlobeIcon,
    label: 'visit',
    href: 'https://www.stationdex.com',
  },
  {
    Icon: TwitterIcon,
    label: 'follow',
    href: 'https://twitter.com/stationdex_',
  },
  {
    Icon: TelegramIcon,
    label: 'join',
    href: 'https://t.me/+dN2W3Uqp_jpkMmI0'
  }
]

const planetNames = [
  "Proxima Centauri",
  "Alpha Centauri A",
  "Alpha Centauri B",
  "Barnard's Star",
  "Sirius (Alpha Canis Majoris)",
  "Epsilon Eridani",
  "Tau Ceti",
  "Wolf 359",
  "Lalande 21185",
  "Luyten's Star",
  "Ross 154",
  "Ross 248",
  "Ross 128",
  "Gliese 876",
  "Gliese 581",
  "Gliese 667 C",
  "61 Cygni A",
  "61 Cygni B",
  "HD 189733",
  "HD 209458",
  "Kapteyn's Star",
  "40 Eridani A (Keid)",
  "40 Eridani B (Omicron² Eridani)",
  "Altair (Alpha Aquilae)",
  "Vega (Alpha Lyrae)",
  "Fomalhaut (Alpha Piscis Austrini)",
  "Pollux (Beta Geminorum)",
  "Denebola (Beta Leonis)",
  "Aldebaran (Alpha Tauri)",
  "Antares (Alpha Scorpii)",
  "Castor (Alpha Geminorum)",
  "Regulus (Alpha Leonis)",
  "Spica (Alpha Virginis)",
  "Betelgeuse (Alpha Orionis)",
  "Rigel (Beta Orionis)",
  "Achernar (Alpha Eridani)",
  "Alphard (Alpha Hydrae)",
  "Algieba (Gamma Leonis)",
  "Arcturus (Alpha Boötis)",
  "Bellatrix (Gamma Orionis)",
  "Betelgeuse (Alpha Orionis)",
  "Canopus (Alpha Carinae)",
  "Capella (Alpha Aurigae)",
  "Deneb (Alpha Cygni)",
  "Achernar (Alpha Eridani)",
  "Gacrux (Gamma Crucis)",
  "Hadar (Beta Centauri)",
  "Miaplacidus (Beta Carinae)",
  "Mimosa (Beta Crucis)",
  "Polaris (Alpha Ursae Minoris)",
  "Procyon (Alpha Canis Minoris)",
  "Rigil Kentaurus (Alpha Centauri)",
  "Sadr (Gamma Cygni)",
  "Shaula (Lambda Scorpii)",
  "Suhail (Lambda Velorum)",
  "Thuban (Alpha Draconis)",
  "Zeta Herculis",
  "Alnilam (Epsilon Orionis)",
  "Alnitak (Zeta Orionis)",
  "Mintaka (Delta Orionis)",
]

type Planet = { name: string; pos: { top: number; left: number; }; }

const IntroCloud = ({children}: {children: ReactNode}) => {
  const [planets, setPlanets] = useState<Planet[]>([])

  const containerRef = useRef<HTMLDivElement>(null)
  
  const location = useLocation()
  
  const [showIntro, setShowIntro] = useState(false)
    
  const navigate = useNavigate()
    
  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    
    const attemptedWalletConnect = localStorage.getItem('attemptedWalletConnect');

    const searchParams = new URLSearchParams(location.search)
    const isHome = location.pathname === '/'
    const hasIntroInUrl = searchParams.has('intro') && searchParams.get('intro') === 'true'

    if(isHome) {
      if (attemptedWalletConnect && !hasIntroInUrl) {
        navigate('/swap', { replace: true });
        return;
      }

      if(hasIntroInUrl || !attemptedWalletConnect) {
        setShowIntro(true)
        return
      }

      return
    }

    setShowIntro(false)
  }, [location, navigate])

  useEffect(() => {
    if(!containerRef.current) return;

    const containerEl = containerRef.current

    const width = containerEl.clientWidth
    const height = containerEl.clientHeight
    
    const widthMin = 16;
    const widthMax = width - (100 + 16);
    
    const heightMin = 16;
    const heightMax = height - (90 + 16);

    const poissonConfig = {
      shape: [width, height],
      minDistance: 200,
      maxDistance: 375,
      tries: 10,
    }

    const poissonDiskSampling = new PoissonDiskSampling(poissonConfig)
      .fill()
      .map(([x, y], i) => {
        const left = x < widthMin ? widthMin : x > widthMax ? widthMax : x;
        const top = y < heightMin ? heightMin : y > heightMax ? heightMax : y;

        const planetName = planetNames[i % planetNames.length]

        return {
          name: planetName,
          pos: { top, left }
        }
      }).filter(Boolean) as Planet[]

    setPlanets(prev => prev.length ? prev : poissonDiskSampling)
  }, [containerRef.current, showIntro])

  return (
    !showIntro ? (
      <>{children}</>
     ) : (
      <IntroBg show={showIntro} ref={containerRef}>
        <p className='intro'>
          Embark on a Stellar Trading Experience
        </p>

        <div className='hud' />

        <div className="planets">
          {
            planets.map(({name, pos: {top, left}}, idx) => (
              <Planet
                top={top}
                left={left}
                key={idx}
                data-planet={idx + 1}
                >
                  <div className="outer">
                    <div className="inner">
                      <div className="dot" />
                    </div>
                  </div>
                  <p>{name}</p>
                </Planet>
            ))
          }
        </div>

        {children}

        <p className='info'>
          Most Trusted DEX for Swapping Crypto
        </p>

        <div className='socials'>
          {
            introSocials.map(({Icon, href, label}, i) => (
              <a key={i} href={href} target='_blank' rel='noopener noreferrer'>
                <i className="icon">
                  <Icon width={20} height={20} />
                </i>
                <p>
                  {label}
                  <ExternalLink size={12} />
                </p>
              </a>
            ))
          }
        </div>
      </IntroBg>
     )
  )
} 

export default IntroCloud