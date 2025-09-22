"use client";

import { useState } from "react";
import { Calendar, Clock, Phone, ChevronLeft, ChevronRight, Check, Star, TrendingUp, Users } from "lucide-react";
import LeadForm from "@/components/common/LeadForm";

// Fonction pour générer des créneaux réservés sur 2 semaines glissantes
const generateReservedSlots = (date: Date, timeSlot: string) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  // Calculer le nombre de jours depuis aujourd'hui
  const daysDifference = Math.floor((date.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
  
  // Seulement réserver des créneaux dans les 14 prochains jours
  if (daysDifference < 0 || daysDifference >= 14) {
    return false; // Pas de créneaux réservés au-delà de 2 semaines
  }
  
  // Créer un seed unique basé sur la date + heure + un offset qui change chaque jour
  const dateString = date.toISOString().split('T')[0];
  const timeString = timeSlot.replace(':', '');
  const dailyOffset = Math.floor(Date.now() / (1000 * 60 * 60 * 24)); // Change chaque jour
  
  const seed = (dateString + timeString + dailyOffset).split('').reduce((a, b) => a + b.charCodeAt(0), 0);
  const random = (seed * 9301 + 49297) % 233280 / 233280;
  
  // Plus de créneaux réservés dans les premiers jours (effet de popularité)
  const reservationRate = daysDifference < 7 ? 0.7 : 0.5; // 70% première semaine, 50% deuxième
  
  return random < reservationRate;
};

// Données du calendrier avec logique améliorée
const generateCalendarData = (currentMonth: number, currentYear: number) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  
  // Créneaux horaires (pas le dimanche)
  const timeSlots = [
    "09:00", "09:30", "10:00", "10:30", "11:00", "11:30", 
    "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00"
  ];
  
  const availableDays = [];
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  
  for (let i = 1; i <= daysInMonth; i++) {
    const date = new Date(currentYear, currentMonth, i);
    
    // Seulement à partir de demain ET pas le dimanche
    if (date >= tomorrow && date.getDay() !== 0) {
      const daySlots = timeSlots.map(time => {
        const slotDate = new Date(date);
        const [hours, minutes] = time.split(':').map(Number);
        slotDate.setHours(hours, minutes);
        
        const isReserved = generateReservedSlots(date, time);
        
        return {
          time,
          available: !isReserved
        };
      });
      
      // S'assurer qu'il y a au moins 2 créneaux disponibles par jour
      const availableCount = daySlots.filter(slot => slot.available).length;
      if (availableCount < 2) {
        for (let j = 0; j < 2 - availableCount; j++) {
          const randomIndex = Math.floor(Math.random() * daySlots.length);
          if (!daySlots[randomIndex].available) {
            daySlots[randomIndex].available = true;
          }
        }
      }
      
      availableDays.push({
        date: i,
        slots: daySlots
      });
    }
  }
  
  return { availableDays };
};

export default function RdvPage() {
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [success, setSuccess] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  const { availableDays } = generateCalendarData(currentMonth, currentYear);
  const selectedDay = availableDays.find(day => day.date === selectedDate);

  const handleDateSelect = (date: number) => {
    setSelectedDate(date);
    setSelectedTime(null);
    setShowForm(false);
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
    setShowForm(true);
  };

  const handleFormSuccess = () => {
    setSuccess(true);
  };

  const navigateMonth = (direction: 'prev' | 'next') => {
    if (direction === 'next') {
      if (currentMonth === 11) {
        setCurrentMonth(0);
        setCurrentYear(currentYear + 1);
      } else {
        setCurrentMonth(currentMonth + 1);
      }
    } else {
      const today = new Date();
      const targetMonth = currentMonth === 0 ? 11 : currentMonth - 1;
      const targetYear = currentMonth === 0 ? currentYear - 1 : currentYear;
      
      // Ne pas aller dans le passé
      if (targetYear > today.getFullYear() || 
          (targetYear === today.getFullYear() && targetMonth >= today.getMonth())) {
        setCurrentMonth(targetMonth);
        setCurrentYear(targetYear);
      }
    }
    
    setSelectedDate(null);
    setSelectedTime(null);
    setShowForm(false);
  };

  const monthNames = [
    "Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
    "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"
  ];

  const dayNames = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"];

  // Calculer le premier jour du mois et les jours à afficher
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
  const firstDayWeekDay = (firstDayOfMonth.getDay() + 6) % 7; // Lundi = 0
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const daysInPrevMonth = new Date(currentYear, currentMonth, 0).getDate();

  const calendarDays = [];
  
  // Jours du mois précédent
  for (let i = firstDayWeekDay - 1; i >= 0; i--) {
    calendarDays.push({
      day: daysInPrevMonth - i,
      isCurrentMonth: false,
      isPrevMonth: true
    });
  }
  
  // Jours du mois actuel
  for (let day = 1; day <= daysInMonth; day++) {
    calendarDays.push({
      day,
      isCurrentMonth: true,
      isPrevMonth: false
    });
  }
  
  // Jours du mois suivant pour compléter la grille
  const remainingDays = 42 - calendarDays.length;
  for (let day = 1; day <= remainingDays; day++) {
    calendarDays.push({
      day,
      isCurrentMonth: false,
      isPrevMonth: false
    });
  }

  if (success) {
    return (
      <main className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="text-center bg-white rounded-2xl p-12 shadow-lg border border-gray-100">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="h-10 w-10 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Rendez-vous confirmé !
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Votre appel stratégique est programmé le <strong>{selectedDate && new Date(currentYear, currentMonth, selectedDate).toLocaleDateString('fr-FR')} à {selectedTime}</strong>
            </p>
            <div className="bg-blue-50 rounded-xl p-6 mb-6">
              <p className="text-blue-800 font-medium">
                📧 Vous recevrez un email de confirmation avec le lien de visioconférence dans quelques instants.
              </p>
            </div>
            <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 text-yellow-500" />
                <span>30 minutes d'expertise gratuite</span>
              </div>
              <div className="flex items-center gap-1">
                <Users className="h-4 w-4 text-blue-500" />
                <span>+600 projets accompagnés</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-4 py-2 mb-6">
            <TrendingUp className="h-4 w-4 text-blue-600" />
            <span className="text-blue-700 text-sm font-medium">+600 dirigeants nous font confiance</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Réservez votre audit stratégique
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            30 minutes avec nos experts pour analyser votre projet et définir la stratégie digitale qui va 
            <strong className="text-blue-600"> multiplier votre CA</strong>
          </p>
          
          {/* Social proof */}
          <div className="flex flex-wrap justify-center gap-6 text-gray-600 text-sm">
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 text-yellow-500" />
              <span>4.9/5 satisfaction client</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4 text-green-500" />
              <span>Réponse sous 24h garantie</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="h-4 w-4 text-blue-500" />
              <span>26M€ générés pour nos clients</span>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Calendrier */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                <Calendar className="h-6 w-6 text-blue-600" />
                {monthNames[currentMonth]} {currentYear}
              </h2>
              <div className="flex gap-2">
                <button 
                  onClick={() => navigateMonth('prev')}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <ChevronLeft className="h-5 w-5 text-gray-600" />
                </button>
                <button 
                  onClick={() => navigateMonth('next')}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <ChevronRight className="h-5 w-5 text-gray-600" />
                </button>
              </div>
            </div>

            {/* Légende */}
            <div className="flex items-center gap-4 mb-6 p-4 bg-gray-50 rounded-xl">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                <span className="text-xs text-gray-600">Disponible</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-red-200 rounded-full"></div>
                <span className="text-xs text-gray-600">Réservé</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-gray-200 rounded-full"></div>
                <span className="text-xs text-gray-600">Non disponible</span>
              </div>
            </div>

            {/* Grille calendrier */}
            <div className="grid grid-cols-7 gap-1 mb-6">
              {dayNames.map((day, i) => (
                <div key={i} className="text-center text-sm font-medium text-gray-500 py-2">
                  {day}
                </div>
              ))}
              
              {calendarDays.map((calDay, i) => {
                const dayData = calDay.isCurrentMonth ? availableDays.find(day => day.date === calDay.day) : null;
                const isSelected = selectedDate === calDay.day && calDay.isCurrentMonth;
                const isToday = calDay.isCurrentMonth && 
                                calDay.day === new Date().getDate() && 
                                currentMonth === new Date().getMonth() && 
                                currentYear === new Date().getFullYear();
                const hasAvailableSlots = dayData?.slots.some(slot => slot.available);
                const hasSlots = !!dayData;
                
                return (
                  <button
                    key={i}
                    onClick={() => hasAvailableSlots && calDay.isCurrentMonth ? handleDateSelect(calDay.day) : null}
                    disabled={!hasAvailableSlots || !calDay.isCurrentMonth}
                    className={`
                      aspect-square rounded-lg text-sm font-medium transition-all duration-200 relative
                      ${!calDay.isCurrentMonth 
                        ? "text-gray-300 cursor-default"
                        : hasAvailableSlots 
                          ? isSelected 
                            ? "bg-blue-600 text-white shadow-lg" 
                            : "bg-blue-50 text-blue-700 hover:bg-blue-100 hover:shadow-md"
                          : hasSlots
                            ? "bg-red-50 text-red-400 cursor-not-allowed"
                            : "bg-gray-100 text-gray-400 cursor-not-allowed"
                      }
                      ${isToday && !isSelected ? "ring-2 ring-blue-300" : ""}
                    `}
                  >
                    {calDay.day}
                    {dayData && !hasAvailableSlots && (
                      <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-400 rounded-full"></div>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Créneaux horaires */}
            {selectedDate && selectedDay && (
              <div className="border-t pt-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Clock className="h-5 w-5 text-blue-600" />
                  Créneaux du {new Date(currentYear, currentMonth, selectedDate).toLocaleDateString('fr-FR')}
                </h3>
                <div className="space-y-2 max-h-64 overflow-y-auto">
                  {selectedDay.slots.map((slot) => (
                    <div key={slot.time} className="flex items-center">
                      {slot.available ? (
                        <button
                          onClick={() => handleTimeSelect(slot.time)}
                          className={`
                            flex-1 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 text-left
                            ${selectedTime === slot.time
                              ? "bg-blue-600 text-white shadow-lg"
                              : "bg-green-50 text-green-700 hover:bg-green-100 border border-green-200"
                            }
                          `}
                        >
                          <div className="flex items-center justify-between">
                            <span>{slot.time}</span>
                            <span className="text-xs opacity-75">Disponible</span>
                          </div>
                        </button>
                      ) : (
                        <div className="flex-1 px-4 py-3 rounded-lg bg-red-50 border border-red-200 text-red-400 text-sm">
                          <div className="flex items-center justify-between">
                            <span>{slot.time}</span>
                            <span className="text-xs">Créneaux réservé</span>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                
                {/* Message marketing */}
                <div className="mt-4 p-3 bg-orange-50 border border-orange-200 rounded-lg">
                  <p className="text-orange-800 text-xs font-medium">
                    ⚡ Forte demande : {selectedDay.slots.filter(s => !s.available).length} créneaux déjà réservés aujourd'hui
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Formulaire */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            {!showForm ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Phone className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Choisissez votre créneau
                </h3>
                <p className="text-gray-600 mb-6">
                  Sélectionnez une date et un horaire dans le calendrier pour accéder au formulaire de réservation
                </p>
                
                {/* Témoignages */}
                <div className="space-y-4">
                  <div className="bg-blue-50 rounded-xl p-4 text-left">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => <Star key={i} className="h-3 w-3 fill-current" />)}
                      </div>
                      <span className="text-xs text-gray-500">Marie, CEO TechFlow</span>
                    </div>
                    <p className="text-sm text-gray-700 italic">
                      "En 30 min, ils ont identifié 3 leviers pour doubler notre conversion"
                    </p>
                  </div>
                  
                  <div className="bg-green-50 rounded-xl p-4 text-left">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => <Star key={i} className="h-3 w-3 fill-current" />)}
                      </div>
                      <span className="text-xs text-gray-500">Thomas, Dir. Digital</span>
                    </div>
                    <p className="text-sm text-gray-700 italic">
                      "Conseil ultra-qualifié, on a économisé 6 mois et 50k€"
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Réservez votre audit stratégique
                  </h3>
                  <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
                    <p className="text-blue-800 font-semibold">
                      📅 {new Date(currentYear, currentMonth, selectedDate!).toLocaleDateString('fr-FR')} à {selectedTime}
                    </p>
                    <p className="text-blue-600 text-sm mt-1">
                      30 minutes d'expertise gratuite pour booster votre projet
                    </p>
                  </div>
                </div>

                <LeadForm 
                  context={{
                    appointmentDate: new Date(currentYear, currentMonth, selectedDate!).toISOString(),
                    appointmentTime: selectedTime!,
                    appointmentDateTime: `${new Date(currentYear, currentMonth, selectedDate!).toLocaleDateString('fr-FR')} à ${selectedTime}`,
                    leadType: "appointment"
                  }}
                  onSuccess={handleFormSuccess}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}