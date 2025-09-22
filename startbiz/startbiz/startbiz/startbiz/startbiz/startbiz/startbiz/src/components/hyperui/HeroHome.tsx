"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Button from "./Button";

interface HeroHomeProps {
  title: React.ReactNode;
  description: string;
  primaryCTA: {
    text: React.ReactNode;
    href: string;
  };
}

export default function HeroHome({
  title,
  description,
  primaryCTA
}: HeroHomeProps) {
  return (
    <section className="overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 pt-20 max-sm:pt-12 pb-8 lg:pb-20">
        <div className="flex flex-col lg:flex-row">
          {/* Contenu texte - Gauche */}
          <div className="flex-1 px-4 flex items-center">
            <div className="max-w-xl">
              {/* Titre */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-3"
              >
                <h1 className="text-6xl font-bold text-black leading-tight">
                  {title}
                </h1>
              </motion.div>

              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-6"
              >
                <p className="text-lg text-[#666] leading-relaxed">
                  {description.replace(/\*\*(.*?)\*\*/g, '$1')}
                </p>
              </motion.div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-row items-center"
              >
                <Button
                  href={primaryCTA.href}
                  variant="primary"
                  size="lg"
                  className=""
                >
                  {primaryCTA.text}
                </Button>
              </motion.div>
            </div>
          </div>

          {/* Images à droite - Desktop uniquement */}
          <div className="hidden lg:flex flex-col items-center justify-center flex-1 px-6 relative max-w-7xl">
            <div className="flex items-end relative max-w-5xl">
              {/* Image client - gauche */}
              <div className="relative mr-8">
                <img
                  src="https://scontent.fdxb2-1.fna.fbcdn.net/v/t51.82787-15/534557728_18518480227063393_2085201440699368223_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=ntD16qfIjvQQ7kNvwE4LBp2&_nc_oc=AdlRru7qSpUX71XXTvdMWa99jb550nH_22iqZ4KCO_mtzmKz9W5BSk9wQzccqmx9ptE&_nc_zt=23&_nc_ht=scontent.fdxb2-1.fna&_nc_gid=r8Eg_Kowd9TYT03qCpq7mw&oh=00_AfY1VqDl9e5UcoA0aR7wUDlrA2WNz8vUkOkQpJbCiJcYRw&oe=68D597A6"
                  alt="Vahe & Azad Chahinian - Fondateurs Rotisserie Montaigne"
                  className="w-72 h-112 object-cover rounded-2xl shadow-2xl border-4 border-white"
                />
                {/* Overlay dégradé */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent rounded-2xl"></div>
                {/* Texte en blanc */}
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="font-bold text-white text-lg block leading-tight">Vahe & Azad Chahinian</span>
                  <span className="text-white/90 text-sm">Fondateurs Rotisserie Montaigne</span>
                </div>
              </div>

              {/* Image agence - droite */}
              <div className="relative">
                <img
                  src="https://media.licdn.com/dms/image/v2/D4E22AQFV8QjPGkC0jw/feedshare-shrink_2048_1536/B4EZd95zfOG4Ao-/0/1750163995347?e=2147483647&v=beta&t=2doBWsGWwnaedtJBfgSdqkE03V8gvugqAUU6cousN2k"
                  alt="Nicolas Rovera - CEO Aviaco France"
                  className="w-72 h-112 object-cover rounded-2xl shadow-2xl border-4 border-white"
                />
                {/* Overlay dégradé */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent rounded-2xl"></div>
                {/* Texte en blanc */}
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="font-bold text-white text-lg block leading-tight">Nicolas Rovera</span>
                  <span className="text-white/90 text-sm">CEO Aviaco France</span>
                </div>
              </div>

              {/* Badge central */}
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 translate-y-8 bg-white/90 backdrop-blur-sm shadow-2xl rounded-2xl text-center p-4 w-fit border border-white/20">
                <div className="flex items-center justify-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3 w-3 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-xs leading-tight">
                  Ils ont choisi <span className="font-bold text-[#01579b]">Startbiz</span><br />
                  pour digitaliser leur business
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
