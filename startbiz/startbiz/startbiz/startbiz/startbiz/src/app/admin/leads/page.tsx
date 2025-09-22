"use client";

import { useState, useEffect } from "react";
import { Calendar, Clock, Phone, Mail, Building, User, Tag, Filter } from "lucide-react";

interface Lead {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  company?: string;
  projectSummary?: string;
  status: string;
  leadType?: "lead" | "appointment";
  appointmentDate?: string;
  appointmentTime?: string;
  appointmentDateTime?: string;
  createdAt: string;
  budgetRange?: string;
  serviceSlug?: string;
  citySlug?: string;
}

export default function AdminLeadsPage() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<"all" | "lead" | "appointment">("all");

  useEffect(() => {
    fetchLeads();
  }, []);

  const fetchLeads = async () => {
    try {
      const response = await fetch("/api/admin/leads");
      if (response.ok) {
        const data = await response.json();
        setLeads(data);
      }
    } catch (error) {
      console.error("Erreur lors du chargement des leads:", error);
    } finally {
      setLoading(false);
    }
  };

  const filteredLeads = leads.filter(lead => {
    if (filter === "all") return true;
    return lead.leadType === filter;
  });

  const getStatusColor = (status: string) => {
    const colors = {
      new: "bg-blue-100 text-blue-800",
      qualified: "bg-green-100 text-green-800",
      contacted: "bg-yellow-100 text-yellow-800",
      meeting: "bg-purple-100 text-purple-800",
      proposal: "bg-orange-100 text-orange-800",
      won: "bg-emerald-100 text-emerald-800",
      lost: "bg-red-100 text-red-800",
      cold: "bg-gray-100 text-gray-800"
    };
    return colors[status as keyof typeof colors] || "bg-gray-100 text-gray-800";
  };

  if (loading) {
    return (
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">Leads & Rendez-vous</h2>
        <div className="animate-pulse space-y-4">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="h-20 bg-gray-200 rounded-lg"></div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Leads & Rendez-vous</h2>
        <div className="flex items-center gap-2">
          <Filter className="h-4 w-4 text-gray-500" />
          <select 
            value={filter} 
            onChange={(e) => setFilter(e.target.value as "all" | "lead" | "appointment")}
            className="border border-gray-300 rounded-lg px-3 py-1 text-sm"
          >
            <option value="all">Tous ({leads.length})</option>
            <option value="lead">Leads ({leads.filter(l => l.leadType === "lead" || !l.leadType).length})</option>
            <option value="appointment">Rendez-vous ({leads.filter(l => l.leadType === "appointment").length})</option>
          </select>
        </div>
      </div>

      {/* Stats rapides */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex items-center gap-2">
            <User className="h-5 w-5 text-blue-600" />
            <span className="font-semibold text-blue-800">Total Leads</span>
          </div>
          <div className="text-2xl font-bold text-blue-900 mt-1">{leads.length}</div>
        </div>
        
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <div className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-green-600" />
            <span className="font-semibold text-green-800">Rendez-vous</span>
          </div>
          <div className="text-2xl font-bold text-green-900 mt-1">
            {leads.filter(l => l.leadType === "appointment").length}
          </div>
        </div>
        
        <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
          <div className="flex items-center gap-2">
            <Tag className="h-5 w-5 text-purple-600" />
            <span className="font-semibold text-purple-800">Nouveaux</span>
          </div>
          <div className="text-2xl font-bold text-purple-900 mt-1">
            {leads.filter(l => l.status === "new").length}
          </div>
        </div>
      </div>

      {/* Liste des leads */}
      <div className="space-y-4">
        {filteredLeads.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            Aucun lead trouvé
          </div>
        ) : (
          filteredLeads.map((lead) => (
            <div key={lead._id} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    {lead.leadType === "appointment" ? (
                      <Calendar className="h-5 w-5 text-blue-600" />
                    ) : (
                      <User className="h-5 w-5 text-blue-600" />
                    )}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      {lead.firstName} {lead.lastName}
                      {lead.company && <span className="text-gray-500"> — {lead.company}</span>}
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <span className="flex items-center gap-1">
                        <Mail className="h-3 w-3" />
                        {lead.email}
                      </span>
                      {lead.phone && (
                        <span className="flex items-center gap-1">
                          <Phone className="h-3 w-3" />
                          {lead.phone}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(lead.status)}`}>
                    {lead.status}
                  </span>
                  {lead.leadType === "appointment" && (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
                      RDV
                    </span>
                  )}
                </div>
              </div>

              {/* Détails du rendez-vous */}
              {lead.leadType === "appointment" && lead.appointmentDateTime && (
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-4">
                  <div className="flex items-center gap-2 text-orange-800 font-medium mb-2">
                    <Clock className="h-4 w-4" />
                    Rendez-vous programmé
                  </div>
                  <div className="text-orange-900 font-semibold">
                    📅 {lead.appointmentDateTime}
                  </div>
                </div>
              )}

              {/* Projet */}
              {lead.projectSummary && (
                <div className="mb-4">
                  <h4 className="font-medium text-gray-900 mb-1">Projet :</h4>
                  <p className="text-gray-600 text-sm">{lead.projectSummary}</p>
                </div>
              )}

              {/* Métadonnées */}
              <div className="flex items-center gap-4 text-xs text-gray-500">
                <span>Créé le {new Date(lead.createdAt).toLocaleDateString('fr-FR')}</span>
                {lead.budgetRange && <span>Budget: {lead.budgetRange}</span>}
                {lead.serviceSlug && <span>Service: {lead.serviceSlug}</span>}
                {lead.citySlug && <span>Ville: {lead.citySlug}</span>}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}