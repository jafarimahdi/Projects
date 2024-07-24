"use client";

import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import React from "react";
import Image from 'next/image';


export default function About() {
  return (
    <>
      <div className="w-full">
        <div className="relative w-full h-[70vh] overflow-hidden" >
          {/* <Carousel className="w-full h-full" > */}
            {/* <CarouselContent > */}
              {/* <CarouselItem > */}
                <Image
                  src="/b7.jpg"
                  alt="Slide 1"
                  layout ="responsive"
                  width={0}
                  height={0}
                  objectFit="containe"
                  className="w-full h-full"
                />
              {/* </CarouselItem>
              <CarouselItem>
                <Image
                  src="/b3.jpg"
                  layout="responsive"
                  width={0}
                  height={0}
                  alt="Slide 2"
                  objectFit="containe"
                  className="w-full h-full"
                />
              </CarouselItem>
              <CarouselItem>
              <Image
                  src="/b5.jpg"
                  layout="responsive"
                  width={0}
                  height={0}
                  alt="Slide 3"
                  objectFit="cover"
                  className=" w-full h-full"
                />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel> */}
        </div>
      </div>


      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container mx-auto">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold tracking-tight">OUR Team</h2>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
            <TeamMember
              name="Andreas Bohnisch"
              title="Dr. med."
              imageSrc="/bonish.jpg"
              description={[
                "1994 - 2001:  Medizin-Studium Universität Leipzig einschließlich 1 Jahr experimenteller Tätigkeit am Institut für Humangenetik",
                "2002 - 2003:  AiP am Parkkrankenhaus Leipzig (Innere Medizin)",
                "08/2004:  Promotion zum Dr. med. mit dem Thema: “Mikrosatelliteninstabilität beim hereditären Kolorektalkarzinom”",
                "2002 - 2007:  Facharztausbildung mit Tätigkeiten in der Allgemeinmedizin, Chirurgie, Kinderheilkunde, Innere Medizin und Rehabilitationsmedizin",
                "10/2007:  Facharztprüfung zum FA für Allgemeinmedizin",
              ]}
            />
            <TeamMember
              name="Claudia Arndt"
              title="Dr. med."
              imageSrc="/Arndt.jpg"
              description={[
                "1997 :  Studium Gesundheitsförderung/-management an der Fachhochschule Magdeburg mit Abschluss als Diplom-Gesundheitswirtin",
                "2005 :  Studium der Humanmedizin an der O.-v.-Guericke-Universität Magdeburg mit Approbation",
                "2009 :  Promotion an der Medizinischen Fakultät der Universität Leipzig",
                "03/2015:  Facharztprüfung zur FÄ für Allgemeinmedizin",
                "Tätigkeitsschwerpunkte: Ärztliche Sprechstunde einschließlich Vorsorgeuntersuchungen und Impfungen sowie psychosomatischer Grundversorgung",
              ]}
            />
            <TeamMember
              name="Julia Bohnisch"
              title="Physiotherapeutin"
              imageSrc="/julia.jpg"
              description={[
                "2007 :  Staatlich geprüfte Wirtschaftsassistentin für Fremdsprachen (Englisch, Französisch, Spanisch)",
                "2009-2011  :  Studentin an der Universität Leipzig im Studiengang Anglistik",
                "2011-2014 :  Ausbildung zur Physiotherapeutin",
                "2018 :  Berufsbegleitendes Studium zur Medizinpädagogin",
                "Tätigkeitsschwerpunkte: Physiotherapie",
              ]}
            />
            <TeamMember
              name="Nancy Wilhelm"
              title="Medizinische Fachangestellte"
              imageSrc="/Nancy.jpg"
              description={[
                "2011 :  Abitur am Werner-Heisenberg-Gymnasium Leipzig",
                "2012-2015  :  Ausbildung zur Medizinischen Fachangestellten an der Ruth-Pfau-Schule Leipzig",
                "Tätigkeitsschwerpunkte: Leitende Medizinische Fachangestellte unserer Praxis",
              ]}
            />
            <TeamMember
              name="Diana Neidahl"
              title="Arzthelferin"
              imageSrc="/Diana.jpg"
              description={[
                "1991 - 1994 :  AAusbildung zur Industriekauffrau",
                "1994 - 2003 :  Immobilienverwaltung",
                "2010 :  Umschulung zur Arzthelferin",
                "2015 :  Mitarbeit in unserer Praxis",
                "Tätigkeitsschwerpunkte: Praxisorganisation, Büroarbeiten, Labortätigkeiten",
              ]}
            />
            <TeamMember
              name="Mahsa Jafari"
              title="Auszubildende"
              imageSrc="/Diana.jpg"
              description={[
                "2005 - 2015 :  Schulbesuch im Iran",
                "2016-2020 :  Schulbesuch in Deutschland, Realschulabschlußg",
                "2017 :  Schülerpraktikum in Allgemeinarztpraxis",
                "Tätigkeitsschwerpunkte: Patientenannahme, Labortätigkeiten, Dolmetscher Persisch-Deutsch",
              ]}
            />
          </div>
        </div>
      </section>
    </>
  );
}

const TeamMember: React.FC<{
  name: string;
  title: string;
  imageSrc: string;
  description: string[];
}> = ({ name, title, imageSrc, description }) => (
  <div className="rounded-lg border bg-background p-6 shadow-sm">
    <div className="flex items-center gap-4">
      <div className="h-40 w-40 overflow-hidden bg-muted rounded-[5%]">
        <Image
          src={imageSrc}
          alt={name}
          width={96}
          height={96}
          layout="responsive"
          objectFit="cover"
          className="rounded-[5%]"
        />
      </div>
      <div>
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-sm text-muted-foreground">{title}</p>
      </div>
    </div>
    <div className="mt-4 space-y-2">
      <h3 className="text-sm text-muted-foreground">
        <b>Beruflicher Werdegang: </b>
      </h3>
      {description.map((desc, index) => (
        <p key={index} className="text-sm text-muted-foreground">
          {desc}
        </p>
      ))}
    </div>
  </div>
);





