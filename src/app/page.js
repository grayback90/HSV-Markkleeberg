import Navibar from "./navibar"

export default function Home() {
  return (
    <main className="min-h-screen flex-col items-center justify-between">
      <Navibar/>
      <div id="hsvhome">
        <p>HOME</p>
      </div>
      <div id="uVerein">
        <p>UNSER VEREIN</p>
      </div>
    </main>
  )
}
