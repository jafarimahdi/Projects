"use client";

import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import React from "react";
import Image from 'next/image';


export default function About() {
  return (
    <>
    <div className="w-full">
      <div className="relative w-full h-[80vh] overflow-hidden" >
        <Carousel className="w-full h-full" >
          <CarouselContent >
            <CarouselItem >
              <Image
                src="/B2.jpg"
                alt="Slide 1"
                layout ="responsive"
                width={0}
                height={0}
                objectFit="containe"
                className="w-full h-full"
              />
            </CarouselItem>
            <CarouselItem>
              <Image
                src="/b3.jpg"
                layout="responsive"
                width={0}
                height={0}
                alt="Slide 2"
                objectFit="cover"
                className=" w-full h-full"
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
        </Carousel>
      </div>
</div>



      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container mx-auto">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold tracking-tight">OUR Team</h2>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
            <div className="rounded-lg border bg-background p-6 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="h-40 w-41 overflow-hidden bg-muted rounded-5p">
                  <Image
                      src="/bonish.jpg"
                      alt="Dr Bonish"
                      width={96}
                      height={96}
                      layout="responsive"
                      objectFit="cover"
                      className="rounded-29p"
                    />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Dr. med.</p>
                  <h3 className="text-lg font-semibold"> Andreas Bohnisch</h3>
                </div>
              </div>
              <div className="mt-4 space-y-2">
                <h3 className="text-sm text-muted-foreground">
                <b>Beruflicher Werdegang: </b>
                </h3>
                <p className="text-sm text-muted-foreground">
                1994 - 2001:  Medizin-Studium Universität Leipzig einschließlich 1 Jahr experimenteller Tätigkeit am Institut für Humangenetik
                </p>
                <p className="text-sm text-muted-foreground">
                2002 - 2003:  AiP am Parkkrankenhaus Leipzig (Innere Medizin)
                </p>
                <p className="text-sm text-muted-foreground">
                08/2004:  Promotion zum Dr. med. mit dem Thema: “Mikrosatelliteninstabilität beim hereditären Kolorektalkarzinom”
                </p>
                <p className="text-sm text-muted-foreground">
                2002 - 2007:  Facharztausbildung mit Tätigkeiten in der Allgemeinmedizin, Chirurgie, Kinderheilkunde, Innere Medizin und Rehabilitationsmedizin
                </p>
                <p className="text-sm text-muted-foreground">
                10/2007:  Facharztprüfung zum FA für Allgemeinmedizin
                </p>
              </div>
            </div>


            <div className="rounded-lg border bg-background p-6 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="h-35 w-35 overflow-hidden bg-muted rounded-5p">
                  <Image
                      src="/Arndt.jpg"
                      alt="Dr Arndt"
                      width={76}
                      height={76}
                      layout="responsive"
                      objectFit="cover"
                      className="rounded-29p"
                    />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Dr. med.</p>
                  <h3 className="text-lg font-semibold">Claudia Arndt</h3>
                </div>
              </div>
              <div className="mt-4 space-y-2">
                <h3 className="text-sm text-muted-foreground">
                <b>Beruflicher Werdegang: </b>
                </h3>
                <p className="text-sm text-muted-foreground">
                1997 :  Studium Gesundheitsförderung/-management an der Fachhochschule Magdeburg mit Abschluss als Diplom-Gesundheitswirtin
                </p>
                <p className="text-sm text-muted-foreground">
                2005 :  Studium der Humanmedizin an der O.-v.-Guericke-Universität Magdeburg mit Approbation
                </p>
                <p className="text-sm text-muted-foreground">
                2009 :  Promotion an der Medizinischen Fakultät der Universität Leipzig
                </p>
                <p className="text-sm text-muted-foreground">
                03/2015:  Facharztprüfung zur FÄ für Allgemeinmedizin
                </p>
                <p className="text-sm text-muted-foreground">
                <b>Tätigkeitsschwerpunkte</b> :  Ärztliche Sprechstunde einschließlich Vorsorgeuntersuchungen und Impfungen sowie psychosomatischer Grundversorgung
                </p>
              </div>
            </div>


            <div className="rounded-lg border bg-background p-6 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="h-35 w-35 overflow-hidden bg-muted rounded-5p">
                  <Image
                      src="/julia.jpg"
                      alt="Julia Bohnisch"
                      width={76}
                      height={56}
                      layout="responsive"
                      objectFit="cover"
                      className="rounded-29p"
                    />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Julia Bohnisch</h3>
                  <p className="text-sm text-muted-foreground">Physiotherapeutin</p>
                </div>
              </div>
              <div className="mt-4 space-y-2">
                <h3 className="text-sm text-muted-foreground">
                <b>Beruflicher Werdegang: </b>
                </h3>
                <p className="text-sm text-muted-foreground">
                2007 :  Staatlich geprüfte Wirtschaftsassistentin für Fremdsprachen (Englisch, Französisch, Spanisch)
                </p>
                <p className="text-sm text-muted-foreground">
                2009-2011  :  Studentin an der Universität Leipzig im Studiengang Anglistik
                </p>
                <p className="text-sm text-muted-foreground">
                2011-2014 :  Ausbildung zur Physiotherapeutin
                </p>
                <p className="text-sm text-muted-foreground">
                2018 :  Berufsbegleitendes Studium zur Medizinpädagogin
                </p>
                <p className="text-sm text-muted-foreground">
                <b>Tätigkeitsschwerpunkte</b> :  Physiotherapie
                </p>
              </div>
            </div>


            <div className="rounded-lg border bg-background p-6 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="h-35 w-35 overflow-hidden bg-muted rounded-5p">
                  <Image
                      src="/Nancy.jpg"
                      alt="Julia Bohnisch"
                      width={76}
                      height={56}
                      layout="responsive"
                      objectFit="cover"
                      className="rounded-29p"
                    />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Nancy Wilhelm</h3>
                  <p className="text-sm text-muted-foreground">Medizinische Fachangestellte</p>
                </div>
              </div>
              <div className="mt-4 space-y-2">
                <h3 className="text-sm text-muted-foreground">
                <b>Beruflicher Werdegang: </b>
                </h3>
                <p className="text-sm text-muted-foreground">
                2011 :  Abitur am Werner-Heisenberg-Gymnasium Leipzig
                </p>
                <p className="text-sm text-muted-foreground">
                2012-2015  :  Ausbildung zur Medizinischen Fachangestellten an der Ruth-Pfau-Schule Leipzig
                </p>
                <p className="text-sm text-muted-foreground">
                <b>Tätigkeitsschwerpunkte</b> :  Leitende Medizinische Fachangestellte unserer Praxis
                </p>
              </div>
            </div>



            
            


            


            


           


          </div>
        </div>
      </section>
    </>
  );
}
