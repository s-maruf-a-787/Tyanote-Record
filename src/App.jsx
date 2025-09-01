import { useEffect, useState } from "react";
import { Sun, Moon, Users, Wallet, ClipboardList, ChartNoAxesCombined, Waypoints, Split, LayoutList } from "lucide-react";




export default function App() {



const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);



  // ---------- Members Data ----------
  const members = [
    { name: "Md. Noyon Hassan", role: "Founder" },
    { name: "Sheikh Maruf Ahammed", role: "Co-Founder" },
    { name: "Sharif Md Shafiul Akbar", role: "CEO" },
    { name: "Md. Omor Faruque Abir", role: "Business Analyst" },
    { name: "Adel Bin Hossain", role: "Lead Researcher" },
    { name: "Md. Mihad Hassan", role: "Content Writer" },
    { name: "Golam Rasul Orin", role: "Junior Researcher" },
  ];




    // ---------- Account Data ----------
    const [accountType, setAccountType] = useState("founder");

    const accounts = {
    "founder": [
    { balance: "7,350.00", status: "Total Payable" },
    { balance: "00.00", status: "Total Paid" },
    { balance: "7,350.00", status: "Total Due" },
    { balance: "00.00", status: "Total Revenue" },
  ],
    "co-founder": [
    { balance: "11,800.00", status: "Total Payable" },
    { balance: "2,250.00", status: "Total Paid" },
    { balance: "9,550.00", status: "Total Due" },
    { balance: "00.00", status: "Total Revenue" },
  ],
    "ceo": [
    { balance: "11,050.00", status: "Total Payable" },
    { balance: "00.00", status: "Total Paid" },
    { balance: "11,050.00", status: "Total Due" },
    { balance: "00.00", status: "Total Revenue" },
  ],
    "business analyst": [
    { balance: "14,750.00", status: "Total Payable" },
    { balance: "46,000.00", status: "Total Paid" },
    { balance: "-31,250.00", status: "Total Due" },
    { balance: "00.00", status: "Total Revenue" },
  ],
    "lead researcher": [
    { balance: "2,200.00", status: "Total Payable" },
    { balance: "00.00", status: "Total Paid" },
    { balance: "2,200.00", status: "Total Due" },
    { balance: "00.00", status: "Total Revenue" },
  ],
    "content writer": [
    { balance: "14,000.00", status: "Total Payable" },
    { balance: "00.00", status: "Total Paid" },
    { balance: "14,000.00", status: "Total Due" },
    { balance: "00.00", status: "Total Revenue" },
  ],
    "junior researcher": [
    { balance: "14,000.00", status: "Total Payable" },
    { balance: "00.00", status: "Total Paid" },
    { balance: "14,000.00", status: "Total Due" },
    { balance: "00.00", status: "Total Revenue" },
  ],

};







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
    "Founder": 10,
    "Co-Founder": 16,
    "CEO": 15,
    "Business Analyst": 20,
    "Lead Researcher": 3,
    "Content Writer": 18,
    "Junior Researcher": 18,

    
  };

  const [selectedRole, setSelectedRole] = useState("Founder");

  const contributionUSD =
    (totalInvestment * rolePercentages[selectedRole]) / 100;
  const contributionBDT = contributionUSD * exchangeRate;



    // ---------- Total Investment Section----------

  const [type, setType] = useState("before-launch");  
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
    "Founder": 26,
    "Co-Founder": 20,
    "CEO": 15,
    "Business Analyst": 11,
    "Lead Researcher": 4,
    "Content Writer": 12,
    "Junior Researcher": 12,
    
  };

  const [selectedRoles, setSelectedRoles] = useState("Founder");

  const contributionsUSD =
    (totalRevenue* revenuePercentages[selectedRoles]) / 100;
  const contributionsBDT = contributionsUSD * exchangeRate;





  return (
    <div className="min-h-screen bg-gray-100  max-w-7xl mx-auto p-6 dark:bg-gray-900 dark:text-white">
      <h1 className=" font-bold text-blue-600 mb-6 flex justify-between">
        <span className="flex flex-row gap-1 text-3xl xs:text-2xl xs:mt-2"> <img src="Tyanote_Logo.png" alt="" className="h-8 w-8 mt-0.5" />
          <span>Tyanote Dashboard</span>
        </span>
        <button
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white shadow"
        >
      {theme === "light" ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
        </button>
      </h1>







      {/* Members Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold flex item-center mb-4 gap-2 leading-none"><Users className="w-6 h-6" /> Team Members</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {members.map((m, i) => (
            <div
              key={i}
              className="p-4 bg-white dark:bg-black  rounded-2xl shadow hover:shadow-lg transition dark:hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]"
            >
              <h3 className="font-bold text-xl">{m.name}</h3>
              <p className="text-gray-500">{m.role}</p>
            </div>
          ))}
        </div>
      </section>



<hr className="my-2" />



      {/* Account Section */}
      <section className="mb-8 mt-6">
        <h2 className="text-2xl font-semibold mb-4 flex item-center gap-2 leading-none"><Wallet className="w-6 h-6" /> Account Details</h2>
        
        <div className="mb-4 ">
          <label className="font-medium whitespace-nowrap">Select Role: </label>
          <select
            value={accountType}
            onChange={(e) => setAccountType(e.target.value)}
            className="p-2 border rounded-lg text-gray-900 dark:bg-black dark:text-gray-300"
          >
            <option value="founder">Founder</option>
            <option value="co-founder">Co-Founder</option>
            <option value="ceo">CEO</option>
            <option value="business analyst">Business Analyst</option>
            <option value="lead researcher">Lead Researcher</option>
            <option value="content writer">Content Writer</option>
            <option value="junior researcher">Junior Researcher</option>
          </select>
        </div>


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 ">
          {accounts[accountType].map((m, i) => (
            <div
              key={i}
              className="p-4 bg-white rounded-2xl shadow hover:shadow-lg transition dark:bg-black dark:hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]"
            >
              <h3 className="font-bold text-3xl dark:text-green-600">{m.balance}</h3>
              <p className="text-gray-500">{m.status}</p>
            </div>
          ))}
        </div>
      </section>




<hr className="my-2" />




    <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">

          {/* Cost Section */}
        <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 flex item-center gap-2 leading-none"><ClipboardList className="w-6 h-6" /> Project Costs List</h2>

        <div className="mb-4">
          <label className="mr-3 font-medium">Select Cost Type: </label>
          <select
            value={costType}
            onChange={(e) => setCostType(e.target.value)}
            className="p-2 border rounded-lg dark:bg-black dark:text-gray-300"
          >
            <option value="one-time">One Time</option>
            <option value="per-month">Per Month</option>
            <option value="per-year">Per Year</option>
          </select>
        </div>

        <div className="bg-white dark:bg-black p-4 rounded-2xl shadow">
          <ul className="space-y-2">
            {selectedCosts.map((c, i) => (
              <li key={i} className="flex justify-between items-center gap-6 hover:bg-gray-100 dark:hover:bg-gray-900 rounded-lg p-2 transition">
                <span>{c.item}</span>
                <span>${c.amount}</span>
              </li>
            ))}
          </ul>
          <hr className="my-2" />
          <p className="font-bold">Total: <span className="text-blue-600">${totalCost}</span></p>
        </div>
        </section>

          {/* Total Investment Section */}
        <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2 leading-none"> <ChartNoAxesCombined className="w-6 h-6" />Total Invest</h2>

      <div className="flex flex-col xxl:flex-row xxl:item-center gap-4 mb-4">
        <div className="flex items-center gap-2">
        <label className="font-medium whitespace-nowrap">Select Cost Category: </label>
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="border p-2 rounded-lg dark:bg-black dark:text-gray-300"
        >
          <option value="before-launch">Before Launch</option>
          <option value="after-launch">After Launch</option>
        </select> 
        </div>

        <div className="flex items-center xxl:flex-row xxl:items-center gap-2">
        <label className="font-medium whitespace-nowrap">Select Role: </label>
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="border p-2 rounded dark:bg-black dark:text-gray-300"
        >
          <option value="">Select Role</option>
          {Object.keys(rolePercentages).map((r) => (
            <option key={r} value={r}>
              {r}
            </option>
          ))}
        </select>
        </div>
      </div>

      {role && (
        <div className="mt-4 bg-white p-4 rounded-2xl shadow dark:bg-black">
          <h3 className="font-semibold mb-2">{role}
          <ul className="list-disc list-inside text-gray-500 ">
            {members
              .filter((m) => m.role === role)
              .map((m, i) => (
                <li key={i}>{m.name}</li>
              ))}
          </ul>
          </h3>

          <div className="mt-4">
            <p className="font-medium">Total Cost ({type}): <span className="text-blue-600">${totalCosts}</span></p>
            <p>
              {role} Contribution ({rolePercentages[role]}%):{" "}
              <span className="font-bold">
                <span className="text-blue-600">${contribution.toFixed(2)} </span> 
                 /  
                <span className="text-green-600"> BDT{" "}{(contribution * exchangeRate).toFixed(0)}</span>
              </span>
            </p>
          </div>
        </div>
      )}
        </section>
    </section>



<hr className="my-2" />




    <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
      {/* Investment Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2 leading-none"><Waypoints className="w-6 h-6" /> Investment Steps</h2>

        {/* Step Selector */}
        <div className="mb-4">
          <label className="font-medium whitespace-nowrap">Select Step: </label>
          <select
            value={step}
            onChange={(e) => setStep(e.target.value)}
            className="p-2 border rounded-lg dark:bg-black dark:text-gray-300"
          >
            <option value="1st">1st Step</option>
            <option value="2nd">2nd Step</option>
            <option value="Final">Final Step</option>
          </select>
        </div>

        {/* Step Details */}
        <div className="bg-white p-4 dark:bg-black rounded-2xl shadow">
          <p className="font-bold mb-2">
            Deadline:{" "}
            <span className="text-red-500">{selectedStep.deadline}</span>
          </p>
          <ul className="space-y-2">
            {selectedStep.expenses.map((e, i) => (
              <li key={i} className="flex justify-between items-center gap-6 hover:bg-gray-100 dark:hover:bg-gray-900 hover:shadow rounded-lg p-2 transition">
                <span>{e.item}</span>
                <span>${e.amount}</span>
              </li>
            ))}
          </ul>
          <hr className="my-2" />
          <p className="font-bold">Total: <span className="text-blue-600">${totalInvestment}</span> / <span className="text-green-600">BDT {totalInBDT.toLocaleString()}</span></p>
        </div>
      </section>

      {/* Investor Contribution Section */}
      <section className="mb-8"> 
      <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2 leading-none"><Split className="w-6 h-6" /> Investor Contribution</h2>

        {/* Role Selector */}
        <div className="mb-4">
          <label className="font-medium whitespace-nowrap">Select Role: </label>
          <select
            value={selectedRole}
            onChange={(e) => setSelectedRole(e.target.value)}
            className="p-2 border rounded-lg dark:bg-black dark:text-gray-300"
          >
            {Object.keys(rolePercentages).map((role) => (
              <option key={role} value={role}>
                {role}
              </option>
            ))}
          </select>
        </div>

        <div className="bg-white p-4 rounded-2xl shadow dark:bg-black">
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




<hr className="my-2" />




    <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {/* Revenue Section */}
        <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2 leading-none"><LayoutList className="w-6 h-6" /> Revenue List</h2>

        {/* Revenue Selector */}
        <div className="mb-4">
          <label className="font-medium whitespace-nowrap">Select Profit Type: </label>
          <select
            value={profitType}
            onChange={(e) => setProfitType(e.target.value)}
            className="p-2 border rounded-lg dark:bg-black dark:text-gray-300"
          >
            <option value="one-time">One Time</option>

          </select>
        </div>
        {/* Revenue Selector */}
        <div className="bg-white dark:bg-black p-4 rounded-2xl shadow">
          <ul className="space-y-2">
            {revenue.map((c, i) => (
              <li key={i} className="flex justify-between items-center gap-6 hover:bg-gray-100 dark:hover:bg-gray-900 hover:shadow rounded-lg p-2 transition">
                <span>{c.item}</span>
                <span>${c.amount}</span>
              </li>
            ))}
          </ul>
          <hr className="my-2" />
          <p className="font-bold">Total: <span className="text-blue-600">${totalRevenue}</span></p>
        </div>
        </section>


          {/* Revenue Contribution Section */}
      <section className="mb-8"> 
      <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2 leading-none"><Split className="w-6 h-6" /> Revenue Contribution</h2>

        {/* Revenue Selector */}
        <div className="mb-4">
          <label className="font-medium whitespace-nowrap">Select Role: </label>
          <select
            value={selectedRoles}
            onChange={(e) => setSelectedRoles(e.target.value)}
            className="p-2 border rounded-lg dark:bg-black dark:text-gray-300"
          >
            {Object.keys(revenuePercentages).map((role) => (
              <option key={role} value={role}>
                {role}
              </option>
            ))}
          </select>
        </div>

        {/* Contribution Output */}
        <div className="bg-white dark:bg-black p-4 rounded-2xl shadow">
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
