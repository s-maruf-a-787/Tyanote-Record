import { useState } from "react";

export default function App() {




  // ---------- Members Data ----------
  const members = [
    { name: "Md. Noyon Hassan", role: "Founder" },
    { name: "Sheikh Maruf Ahammed", role: "Co-Founder" },
    { name: "Sharif Md Shafiul Akbar", role: "CEO" },
    { name: "Md. Rifat Islam", role: "UI/UX Designer" },
    { name: "Rupom Rahman", role: "QA Enginner" },
    { name: "Adel Bin Hossain", role: "Researcher" },
  ];





  // ---------- Cost Data ----------
  const [costType, setCostType] = useState("one-time");

  const costs = {
    "one-time": [
      { item: "Google Play Store", amount: 25 },
      { item: "Stripe - International Payment Getway", amount: 500 },
      { item: "SSLCOMMERZ - Local Payment Getway", amount: 210 },
      { item: "Promo Video", amount: 120 },
    ],
    "per-month": [
      { item: "Frontend Hosting - Vercel", amount: 30 },
      { item: "Backend Hosting - Render", amount: 30 },
      { item: "Database - MongoDB Atlas", amount: 40 },
      { item: "File Storage - Firebase Storage", amount: 30 },
      { item: "AI API", amount: 30 },
      { item: "Email - 10 users", amount: 70 },
      { item: "Email Automation", amount: 20 },
      { item: "CI/CD Pipeline", amount: 20 },
      { item: "Branding & Marketing - Facebook and Youtube", amount: 600 },
    ],
    "per-year": [
      { item: "Domain & SSL Certificate", amount: 20 },
      { item: "App Store ", amount: 100 },
    ],
  };

  const selectedCosts = costs[costType];
  const totalCost = selectedCosts.reduce((sum, c) => sum + c.amount, 0);


  



  // ---------- Investment Section ----------
  const [step, setStep] = useState("1st");

  const investmentSteps = {
    "1st": {
      deadline: "15-Sept-2025",
      expenses: [
        { item: "Doamin", amount: 20 },
        { item: "Email", amount: 70 },
        { item: "Stripe", amount: 500 },
      ],
    },
    "2nd": {
      deadline: "31-Oct-2025",
      expenses: [
        { item: "SSLCOMMERZ", amount: 210 },
        { item: "Promo Video", amount: 120 },
        { item: "Hosting & Storage", amount: 200 },
      ],
    },
    Final: {
      deadline: "01-Jan-2026",
      expenses: [
        { item: "Google & App Store", amount: 125 },
        { item: "Marketing & Branding", amount: 600 },
      ],
    },
  };

  const selectedStep = investmentSteps[step];
  const totalInvestment = selectedStep.expenses.reduce(
    (sum, e) => sum + e.amount,
    0
  );
  const exchangeRate = 125; // 1 USD = 125 BDT
  const totalInBDT = totalInvestment * exchangeRate;




  // ---------- Investor Contribution ----------
  const rolePercentages = {
    "Founder": 12,
    "Co-Founder": 20,
    "CEO": 16,
    "UI/UX Designer": 24,
    "QA Enginner": 24,
    "Researcher": 4,
    
  };

  const [selectedRole, setSelectedRole] = useState("Founder");

  const contributionUSD =
    (totalInvestment * rolePercentages[selectedRole]) / 100;
  const contributionBDT = contributionUSD * exchangeRate;



    // ---------- Total User Wise Investment ----------

  const [type, setType] = useState("before-launch");  // FIXED
  const [role, setRole] = useState("");

  const costCategory =
    type === "before-launch"
      ? [...costs["one-time"], ...costs["per-year"],...costs["per-month"]]
      : [...costs["per-month"]];

  const totalCosts = costCategory.reduce((sum, c) => sum + c.amount, 0);

  const contribution =
    role && rolePercentages[role]
      ? (totalCosts * rolePercentages[role]) / 100
      : 0;



  // ---------- Revenue Data ----------
  const [profitType, setProfitType] = useState("one-time");

  const profits = {
    "one-time": [
      { item: "Ads Revenue", amount: 300 },
      { item: "Premium Subscriptions", amount: 2000 },
      { item: "Competition Purpose", amount: 900 },
    ],

  };

  const revenue = profits[profitType];
  const totalRevenue = revenue.reduce((sum, c) => sum + c.amount, 0);




   // ---------- Revenue Contribution ----------
  const revenuePercentages = {
    "Founder": 30,
    "Co-Founder": 24,
    "CEO": 18,
    "UI/UX Designer": 14,
    "QA Enginner": 10,
    "Researcher": 5,
    
  };

  const [selectedRoles, setSelectedRoles] = useState("Founder");

  const contributionsUSD =
    (totalRevenue* revenuePercentages[selectedRoles]) / 100;
  const contributionsBDT = contributionsUSD * exchangeRate;



  return (
    <div className="min-h-screen bg-gray-100 w-4/5 max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">
        Tyanote Dashboard 
      </h1>





      {/* Members Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">👥 Team Members</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {members.map((m, i) => (
            <div
              key={i}
              className="p-4 bg-white rounded-2xl shadow hover:shadow-lg transition"
            >
              <h3 className="font-bold text-lg">{m.name}</h3>
              <p className="text-gray-600">{m.role}</p>
            </div>
          ))}
        </div>
      </section>




    <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">

          {/* Cost Section */}
        <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">💰 Project Costs List</h2>

        {/* Cost Selector */}
        <div className="mb-4">
          <label className="mr-3 font-medium">Select Cost Type: </label>
          <select
            value={costType}
            onChange={(e) => setCostType(e.target.value)}
            className="p-2 border rounded-lg"
          >
            <option value="one-time">One Time</option>
            <option value="per-month">Per Month</option>
            <option value="per-year">Per Year</option>
          </select>
        </div>

        {/* Cost List */}
        <div className="bg-white p-4 rounded-2xl shadow">
          <ul className="space-y-2">
            {selectedCosts.map((c, i) => (
              <li key={i} className="flex justify-between items-center gap-6 hover:bg-blue-100 hover:shadow rounded-lg p-2 transition">
                <span>{c.item}</span>
                <span>${c.amount}</span>
              </li>
            ))}
          </ul>
          <hr className="my-2" />
          <p className="font-bold">Total: ${totalCost}</p>
        </div>
        </section>

          {/* Total Investment Section */}
        <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">Total Invest</h2>

      {/* Select Type */}
      <div className="flex gap-4 mb-4">
        <label className="mr-3 font-medium">Select Cost Category: </label>
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="before-launch">Before Launch</option>
          <option value="after-launch">After Launch</option>
        </select> 

        {/* Select Role */}
        <label className="mr-3 font-medium">Select Role: </label>
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="">Select Role</option>
          {Object.keys(rolePercentages).map((r) => (
            <option key={r} value={r}>
              {r}
            </option>
          ))}
        </select>
      </div>

      {/* Output Section */}
      {role && (
        <div className="mt-4 bg-white p-4 rounded-2xl shadow">
          <h3 className="font-semibold mb-2">{role}
          <ul className="list-disc list-inside text-gray-700">
            {members
              .filter((m) => m.role === role)
              .map((m, i) => (
                <li key={i}>{m.name}</li>
              ))}
          </ul>
          </h3>

          <div className="mt-4">
            <p className="font-medium">Total Cost ({type}): ${totalCosts}</p>
            <p>
              {role} Contribution ({rolePercentages[role]}%):{" "}
              <span className="font-bold">
                ${contribution.toFixed(2)} / BDT{" "}
                {(contribution * exchangeRate).toFixed(0)}
              </span>
            </p>
          </div>
        </div>
      )}
        </section>
    </section>



    <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
      {/* Investment Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">📊 Investment Steps</h2>

        {/* Step Selector */}
        <div className="mb-4">
          <label className="mr-3 font-medium">Select Step: </label>
          <select
            value={step}
            onChange={(e) => setStep(e.target.value)}
            className="p-2 border rounded-lg"
          >
            <option value="1st">1st Step</option>
            <option value="2nd">2nd Step</option>
            <option value="Final">Final Step</option>
          </select>
        </div>

        {/* Step Details */}
        <div className="bg-white p-4 rounded-2xl shadow">
          <p className="font-bold mb-2">
            Deadline:{" "}
            <span className="text-red-500">{selectedStep.deadline}</span>
          </p>
          <ul className="space-y-2">
            {selectedStep.expenses.map((e, i) => (
              <li key={i} className="flex justify-between items-center gap-6 hover:bg-blue-100 hover:shadow rounded-lg p-2 transition">
                <span>{e.item}</span>
                <span>${e.amount}</span>
              </li>
            ))}
          </ul>
          <hr className="my-2" />
          <p className="font-bold">Total: ${totalInvestment}</p>
          <p className="font-bold text-green-600">
            In BDT: {totalInBDT.toLocaleString()} ৳
          </p>
        </div>
      </section>

      {/* Investor Contribution Section */}
      <section className="mb-8"> 
      <h2 className="text-2xl font-semibold mb-4">🤝 Investor Contribution</h2>

        {/* Role Selector */}
        <div className="mb-4">
          <label className="mr-3 font-medium">Select Role: </label>
          <select
            value={selectedRole}
            onChange={(e) => setSelectedRole(e.target.value)}
            className="p-2 border rounded-lg"
          >
            {Object.keys(rolePercentages).map((role) => (
              <option key={role} value={role}>
                {role}
              </option>
            ))}
          </select>
        </div>

        {/* Contribution Output */}
        <div className="bg-white p-4 rounded-2xl shadow">
          <p>
            <span className="font-bold">{selectedRole}</span> should invest:
          </p>
          <p className="font-bold text-blue-600">
            ${contributionUSD.toFixed(2)}
          </p>
          <p className="font-bold text-green-600">
            BDT {contributionBDT.toLocaleString()}
          </p>
          <p className="text-gray-500">
            ({rolePercentages[selectedRole]}% of total step investment)
          </p>
        </div>
      </section>

 
    </section>





    <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {/* Revenue Section */}
        <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">💰 Revenue List</h2>

        {/* Revenue Selector */}
        <div className="mb-4">
          <label className="mr-3 font-medium">Select Profit Type: </label>
          <select
            value={profitType}
            onChange={(e) => setProfitType(e.target.value)}
            className="p-2 border rounded-lg"
          >
            <option value="one-time">One Time</option>

          </select>
        </div>
        {/* Revenue Selector */}
        <div className="bg-white p-4 rounded-2xl shadow">
          <ul className="space-y-2">
            {revenue.map((c, i) => (
              <li key={i} className="flex justify-between items-center gap-6 hover:bg-blue-100 hover:shadow rounded-lg p-2 transition">
                <span>{c.item}</span>
                <span>${c.amount}</span>
              </li>
            ))}
          </ul>
          <hr className="my-2" />
          <p className="font-bold">Total: ${totalRevenue}</p>
        </div>
        </section>


          {/* Revenue Contribution Section */}
      <section className="mb-8"> 
      <h2 className="text-2xl font-semibold mb-4">🤝 Revenue Contribution</h2>

        {/* Revenue Selector */}
        <div className="mb-4">
          <label className="mr-3 font-medium">Select Role: </label>
          <select
            value={selectedRoles}
            onChange={(e) => setSelectedRoles(e.target.value)}
            className="p-2 border rounded-lg"
          >
            {Object.keys(revenuePercentages).map((role) => (
              <option key={role} value={role}>
                {role}
              </option>
            ))}
          </select>
        </div>

        {/* Contribution Output */}
        <div className="bg-white p-4 rounded-2xl shadow">
          <p>
            <span className="font-bold">{selectedRoles}</span> will receive:
          </p>
          <p className="font-bold text-blue-600">
            ${contributionsUSD.toFixed(2)}
          </p>
          <p className="font-bold text-green-600">
            BDT {contributionsBDT.toLocaleString()}
          </p>
          <p className="text-gray-500">
            ({revenuePercentages[selectedRoles]}% of total revenue.)
          </p>
        </div>
      </section>
    </section>



      


    </div>
  );
}
