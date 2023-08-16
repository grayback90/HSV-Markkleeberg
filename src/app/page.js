import Navibar from "./navibar"

export default function Home() {
  return (
    <main className="min-h-screen flex-col items-center justify-between">
      <Navibar/>
      <div id="hsvhome">
			<p><strong>Willkommen beim Hundesportverein Leipzig-Süd/Markkleeberg e.V.!</strong></p>
<p>Wir bieten Ihnen und Ihrem Vierbeiner Abwechslung und Beschäftigung für den Hundealltag und verstehen uns als Verein für Rassehunde und Mischlinge aller Größen.<br />
Unsere ehrenamtlichen, engagierten Trainer stehen Ihnen gern mit Ihrer Erfahrung als kompetente Ansprechpartner für alle Fragen der Hundeausbildung zur Seite.</p>
<p>Unser breit gefächertes Angebot erstreckt sich über<br />
Welpenstunde und Junghundegruppe, Gehorsamstraining, Begleithundeausbildung, Agility und Turnierhundesport, Fährtenarbeit und aktive Jugendförderung sowie Präsentationen auf öffentlichen Veranstaltungen.</p>
<p>Wir freuen uns auf Ihren Besuch und bieten Ihnen unverbindlich ein <strong>kostenloses Schnuppertraining</strong> an!</p>
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
