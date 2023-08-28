'use client'

import Navibar from "./navibar"
import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default function Home() {
  return (
    <main className="min-h-screen flex-col items-center justify-between">
      <Navibar/>
      <div className="flex justify-center bg-[url('./../../pictures/dog_home.jpg')] bg-no-repeat bg-center bg-cover pt-10" id="hsvhome">
        <div>
          <h1 className="flex justify-center pt-10 pb-10 font-bold">Willkommen beim Hundesportverein Leipzig-Süd/Markkleeberg e.V.!</h1>
          <p className="flex justify-center">Wir bieten Ihnen und Ihrem Vierbeiner Abwechslung und Beschäftigung für den Hundealltag und verstehen uns als Verein für Rassehunde und Mischlinge aller Größen.</p>
          <p className="flex justify-center">Unsere ehrenamtlichen, engagierten Trainer stehen Ihnen gern mit Ihrer Erfahrung als kompetente Ansprechpartner für alle Fragen der Hundeausbildung zur Seite.</p>
          <p className="flex justify-center">Unser breit gefächertes Angebot erstreckt sich über</p>
          <p className="flex justify-center">Welpenstunde und Junghundegruppe, Gehorsamstraining, Begleithundeausbildung, Agility und Turnierhundesport, Fährtenarbeit und aktive Jugendförderung sowie Präsentationen auf öffentlichen Veranstaltungen.</p>
          <p className="flex justify-center">Wir freuen uns auf Ihren Besuch und bieten Ihnen unverbindlich ein kostenloses Schnuppertraining an!</p>
        </div>
      </div>
      <div id="uVerein">
        <h1 className="flex justify-center pt-10 pb-10 font-bold">UNSER VEREIN</h1>
          <Carousel>
                    <div>
                        <img src="./../../pictures/vorstand/Franzi.jpg" alt="franzi"/>
                        <p>Franzi</p>
    
                    </div>
                    <div>
                        <img src="./../../pictures/vorstand/Melanie.jpg" alt="melanie" />
                        <p>Melanie</p>
    
                    </div>
                </Carousel>
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
