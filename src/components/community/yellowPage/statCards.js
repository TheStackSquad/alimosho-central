// src/components/community/yellowPage/StatsCards.js
import { Building2, Users, BookOpen } from "lucide-react";

export default function StatsCards({ stats }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <StatCard
        icon={
          <Building2 className="w-8 h-8 text-amber-600 dark:text-amber-400" />
        }
        value={stats.total}
        label="Total Businesses"
        bgColor="bg-amber-100 dark:bg-amber-900/30"
      />
      <StatCard
        icon={
          <Users className="w-8 h-8 text-yellow-600 dark:text-yellow-400" />
        }
        value={stats.verified}
        label="Verified Businesses"
        bgColor="bg-yellow-100 dark:bg-yellow-900/30"
      />
      <StatCard
        icon={
          <BookOpen className="w-8 h-8 text-yellow-700 dark:text-yellow-300" />
        }
        value={stats.categories}
        label="Categories"
        bgColor="bg-yellow-200 dark:bg-yellow-800/30"
      />
    </div>
  );
}

function StatCard({ icon, value, label, bgColor }) {
  return (
    <div className="bg-amber-50 dark:bg-amber-950 rounded-xl shadow-lg border border-amber-200 dark:border-amber-800 p-6">
      <div className="flex items-center">
        <div className={`p-3 ${bgColor} rounded-lg`}>{icon}</div>
        <div className="ml-4">
          <h3 className="text-2xl font-bold text-amber-950 dark:text-amber-200 font-['Montserrat']">
            {value}
          </h3>
          <p className="text-amber-800 dark:text-amber-400">{label}</p>
        </div>
      </div>
    </div>
  );
}
