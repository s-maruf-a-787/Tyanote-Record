import React, { useState, useEffect, useMemo } from "react";
import rolesData from "./data/roles.json";
import membersData from "./data/members.json";
import costsData from "./data/costs.json";
import investStepsData from "./data/investSteps.json";
import { formatUSD, formatBDT, clampPct } from "./utils/formatters";
import useLocalStorage from "../tyanote-dashboard/src/hooks/useLocalStorage";

import Section from "./components/Section";
import Input from "./components/Input";
import Select from "./components/Select";
import Button from "./components/Button";
import Pill from "./components/Pill";

export default function App() {
  const companyName = "Tyanem";
  const appName = "Tyanote";

  // Load from localStorage or defaults
  const [roles, setRoles] = useLocalStorage("roles", rolesData);
  const [members, setMembers] = useLocalStorage("members", membersData);
  const [costCatalog, setCostCatalog] = useLocalStorage("costs", costsData);
  const [investSteps, setInvestSteps] = useLocalStorage("steps", investStepsData);
  const [usdToBdt, setUsdToBdt] = useLocalStorage("usdToBdt", 120);

  // এখানে আগের ড্যাশবোর্ড লজিক 그대로 থাকবে (state, derived values, UI)

  return (
    <div className="min-h-screen w-full text-neutral-900 dark:text-neutral-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold">
          {companyName} • {appName} Dashboard
        </h1>
        {/* তোমার আগের dashboard sections এখানে থাকবে */}
      </div>
    </div>
  );
}
