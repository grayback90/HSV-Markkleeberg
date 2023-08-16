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
      <div id="angebot">
        <p>Angebot</p>
      </div>
      <div id="aktuelles">
        <p>Aktuelles (Instagram?)</p>
      </div>
      <div id="wettkaempfe">
        <p>Wettkämpfe (Boxen oder Slideshow)</p>
      </div>
      <div id="termine">
        <p>Termine 2023 (no idea)</p>
      </div>
      <div id="kontakt">
        <p>Kontakt (Kontaktformular und Adresse/Anfahrt/Google Maps)</p>
      </div>
    </main>
  )
}
