import './app.css'
import ghIcon from './assets/icons/github-invertocat-white.svg'
import scratchIcon from './assets/icons/scratch-s.svg'
import dcIcon from './assets/icons/discord-symbol-white.svg'
import ytIcon from './assets/icons/yt-icon-red-digital.svg'
import webIcon from './assets/icons/mdi-web.svg'

function LinkedIcon(props: { alt: string, url?: string, user?: string, src: string, size?: number }) {
  const img = <img src={props.src} alt={props.alt} title={props.alt} {...props.user && {onmouseenter: () => {
    document.getElementById('header')!.innerText = `@${props.user}`
  }}} height={props.size ? props.size : 32} class="icon" />
  if (props.url) {
    return <a href={props.url} target="_blank">{img}</a>
  } else {
    return img
  }
}

function Project(props: { title: string, desc: string, children?: any }) {
  return <div class="project">
    <h2>{props.title}</h2>
    <p>{props.desc}</p>
    {props.children}
  </div>
}

function ComingSoon() {
  return <span class="yellow">Coming soon...?</span>
}

export function App() {
  return <>
    <h1 id="header">MagentaDude</h1>
    <div id="links" onMouseLeave={() => {
      document.getElementById('header')!.innerText = 'MagentaDude'
    }}>
      <LinkedIcon alt="GitHub" url="https://github.com/MagentaDude" user="MagentaDude" src={ghIcon} size={48} />
      <LinkedIcon alt="Scratch" url="https://scratch.mit.edu/users/MagentaDude1359/" user="MagentaDude1359" src={scratchIcon} size={48} />
      <LinkedIcon alt="Discord" user="magentadude" src={dcIcon} size={48} />
      <LinkedIcon alt="YouTube" url="https://www.youtube.com/@MagentaDudeYT" user="MagentaDudeYT" src={ytIcon} size={48} />
    </div>
    <p class="p">Hi, and welcome to my website! I'm a composer and programmer, although I also make videos sometimes. My favorite coding languages are goboscript, Rust, Preact with TypeScript, and GDScript. I also have nearly 200 Scratch followers.</p>
    <Project title="video2sb3" desc="Web tool to convert videos into Scratch projects.">
      <LinkedIcon alt="Try it out" url="https://magentadude.github.io/video2sb3/" src={webIcon} />
      <LinkedIcon alt="View on GitHub" url="https://github.com/MagentaDude/video2sb3" src={ghIcon} />
      <LinkedIcon alt="Demo project" url="https://scratch.mit.edu/projects/1260123073/" src={scratchIcon} />
    </Project>
    <Project title="S.T.U.B." desc="Bytecode to run external programs in Scratch projects.">
      <ComingSoon />
    </Project>
    <footer><a href="https://github.com/MagentaDude/magentas-website" target="_blank">View source</a></footer>
  </>
}