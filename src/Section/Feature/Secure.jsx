import React from "react";
import encryptionIcon from "../../assets/Feature/encryption-icon.png";
import fraudProtection from "../../assets/Feature/fraud-protection.png";
import performance from "../../assets/Feature/performance.png";
import globalCompliance from "../../assets/Feature/global-compliance.png";
import lockGroup from "../../assets/Feature/lock-group.png";
import stageGroup from "../../assets/Feature/stages-group.png";

export default function SecurePlatform() {
  return (
    <div className="min-h-screen bg-[#0A0F21] flex justify-center items-center px-4 py-16">
      <div className="bg-[#0E1224] rounded-[2rem] w-full max-w-7xl p-8 sm:p-12 md:p-16 flex flex-col md:flex-col items-center justify-center gap-16 overflow-hidden">
        {/* ------------------ TOP SECTION ------------------ */}
        <div className="flex flex-col md:flex-row items-center justify-between w-full gap-10 md:gap-16">
          {/* ---------- LEFT SIDE ---------- */}
          <div className="text-white w-full md:w-[50%]">
            <p className="text-[#8EA4F1] text-sm font-medium mb-3">
              Safe & Secure
            </p>

            <h1 className="text-4xl sm:text-5xl font-semibold leading-tight mb-4">
              Secure Platform
            </h1>

            <p className="text-gray-400 text-sm sm:text-base mb-6 leading-relaxed">
              Your security comes first. Built with enterprise-grade protection,
              encrypted data, and trusted infrastructure, our platform keeps
              every transaction safe and reliable.
            </p>

            <button className="bg-gradient-to-r from-[#FF00C7] to-[#7B61FF] text-white px-6 py-2 rounded-full font-medium text-sm hover:opacity-90 transition">
              Start Securely
            </button>
          </div>

          {/* ---------- RIGHT SIDE (Images) ---------- */}
          <div className="flex flex-row items-center justify-center gap-6 md:gap-10 relative">
            <img
              src={lockGroup}
              alt="Lock Group"
              className="items-baseline-end w-[180px] sm:w-[220px] md:w-[250px] lg:w-[160px] object-contain transition-all duration-300"
            />
            <img
              src={stageGroup}
              alt="Stages Group"
              className="w-[170px] sm:w-[200px] md:w-[230px] lg:w-[320px] object-contain transition-all duration-300"
            />
          </div>
        </div>

        {/* ------------------ BOTTOM SECTION ------------------ */}
        <div className="w-full text-white">
          <h2 className="text-3xl sm:text-4xl font-semibold leading-snug mb-8 md:-mt-20">
            See what <br /> being built Secure
          </h2>

          {/* Feature Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {/* Card 1 */}
            <div className="gap-5 bg-[#14192F] border border-[#1E2340] hover:border-[#FF00C7] transition rounded-3xl p-5 flex flex-row items-center justify-center text-center min-h-[110px]">
              <img
                src={encryptionIcon}
                alt="End-to-End Encryption"
                className="w-6 h-6 mb-3"
              />
              <p className="text-sm font-medium leading-tight">
                End-to-End <br /> Encryption
              </p>
            </div>

            {/* Card 2 */}
            <div className="gap-5 bg-[#14192F] border border-[#1E2340] hover:border-[#FF00C7] transition rounded-3xl p-5 flex flex-row items-center justify-center text-center min-h-[110px]">
              <img
                src={fraudProtection}
                alt="Fraud Protection"
                className="w-6 h-6 mb-3"
              />
              <p className="text-sm font-medium leading-tight">
                Fraud <br /> Protection
              </p>
            </div>

            {/* Card 3 */}
            <div className="gap-5 bg-[#14192F] border border-[#1E2340] hover:border-[#FF00C7] transition rounded-3xl p-5 flex flex-row items-center justify-center text-center min-h-[110px]">
              <img
                src={performance}
                alt="Reliable Performance"
                className="w-6 h-6 mb-3"
              />
              <p className="text-sm font-medium leading-tight">
                Reliable <br /> Performance
              </p>
            </div>

            {/* Card 4 */}
            <div className="gap-5 bg-[#14192F] border border-[#1E2340] hover:border-[#FF00C7] transition rounded-3xl p-5 flex flex-row items-center justify-center text-center min-h-[110px]">
              <img
                src={globalCompliance}
                alt="Global Compliance"
                className="w-6 h-6 mb-3"
              />
              <p className="text-sm font-medium leading-tight">
                Global <br /> Compliance
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
