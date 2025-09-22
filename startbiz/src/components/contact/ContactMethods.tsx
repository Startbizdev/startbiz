import { Phone, Mail, MessageSquare, Clock, MapPin, Calendar } from "lucide-react";
import Link from "next/link";

export default function ContactMethods() {
  const contactMethods = [
    {
      icon: Phone,
      title: "Appelez-nous",
      description: "Pour une discussion directe sur votre projet",
      action: "01 23 45 67 89",
      href: "tel:+33123456789",
      availability: "Lun-Ven 9h-18h",
      primary: true
    },
    {
      icon: Mail,
      title: "Écrivez-nous",
      description: "Pour une demande détaillée par email",
      action: "contact@startbiz.fr",
      href: "mailto:contact@startbiz.fr",
      availability: "Réponse sous 24h",
      primary: false
    },
    {
      icon: Calendar,
      title: "Réservez un créneau",
      description: "Pour un échange de 30 minutes sur votre projet",
      action: "Choisir un créneau",
      href: "/rdv",
      availability: "Créneaux disponibles",
      primary: false
    }
  ];

  const businessInfo = [
    {
      icon: MapPin,
      title: "Localisation",
      value: "Paris, France",
      description: "Équipe basée en région parisienne"
    },
    {
      icon: Clock,
      title: "Horaires",
      value: "Lun-Ven 9h-18h",
      description: "Réponse rapide en dehors des horaires"
    },
    {
      icon: MessageSquare,
      title: "Réactivité",
      value: "< 24h",
      description: "Temps de réponse moyen garanti"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Méthodes de contact */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-h2-responsive text-gray-900 mb-4">
              Comment nous contacter ?
            </h2>
            <p className="text-body-responsive max-w-2xl mx-auto">
              Choisissez le moyen de contact qui vous convient le mieux
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon;
              
              return (
                <div
                  key={index}
                  className={`rounded-xl border bg-white p-6 text-center hover:shadow-[0_12px_30px_rgba(0,0,0,0.06)] transition-all duration-200 ${
                    method.primary ? "border-blue-200 ring-1 ring-blue-100" : "border-gray-200"
                  }`}
                >
                  <div className="mb-4">
                    <div className={`inline-flex p-3 rounded-lg ${
                      method.primary ? "bg-blue-100" : "bg-gray-100"
                    }`}>
                      <IconComponent className={`h-6 w-6 ${
                        method.primary ? "text-blue-600" : "text-gray-700"
                      }`} />
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    {method.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 text-sm">
                    {method.description}
                  </p>
                  
                  <Link
                    href={method.href}
                    className={`inline-flex items-center gap-2 rounded-lg px-4 py-2 font-medium transition-all duration-200 ${
                      method.primary
                        ? "bg-blue-600 text-white hover:bg-blue-500"
                        : "border border-gray-200 text-gray-900 hover:bg-gray-50"
                    }`}
                  >
                    {method.action}
                  </Link>
                  
                  <p className="text-xs text-gray-500 mt-3">
                    {method.availability}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Informations pratiques */}
        <div>
          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Informations pratiques
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {businessInfo.map((info, index) => {
              const IconComponent = info.icon;
              
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex p-2 rounded-lg bg-white border border-gray-200 mb-3">
                    <IconComponent className="h-5 w-5 text-gray-700" />
                  </div>
                  
                  <h4 className="font-medium text-gray-900 mb-1">
                    {info.title}
                  </h4>
                  
                  <p className="text-blue-600 font-medium mb-1">
                    {info.value}
                  </p>
                  
                  <p className="text-sm text-gray-600">
                    {info.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
