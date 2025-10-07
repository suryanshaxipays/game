export default function SecurePlatform() {
  return (
    <div className="min-h-screen bg-[#0A0E1A] flex justify-center items-center px-4 py-10">
      <div className="bg-[#0E1224] rounded-[2rem] w-full max-w-6xl p-10 md:p-16 flex flex-col md:flex-row md:justify-between items-center gap-10">
        {/* Left Section */}
        <div className="text-white max-w-lg">
          <p className="text-[#8EA4F1] text-sm font-medium mb-3">
            Safe & Secure
          </p>
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight mb-4">
            Secure Platform
          </h1>
          <p className="text-gray-400 text-sm md:text-base mb-6">
            Your security comes first. Built with enterprise-grade protection,
            encrypted data, and trusted infrastructure, our platform keeps every
            transaction safe and reliable.
          </p>
          <button className="bg-gradient-to-r from-[#FF00C7] to-[#7B61FF] text-white px-6 py-2 rounded-full font-medium text-sm hover:opacity-90 transition">
            Start Securely
          </button>

          <div className="mt-10">
            <h2 className="text-3xl md:text-4xl font-semibold leading-snug mb-6">
              See what
              <br />
              being built Secure
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-[#14192F] border border-[#1E2340] hover:border-[#FF00C7] rounded-3xl p-4 flex flex-col items-center text-center">
                <img
                  src="/assets/encryption-icon.png"
                  alt="End-to-End Encryption"
                  className="w-6 h-6 mb-3"
                />
                <p className="text-sm font-medium">
                  End-to-End
                  <br />
                  Encryption
                </p>
              </div>
              <div className="bg-[#14192F] border border-[#1E2340] hover:border-[#FF00C7] rounded-3xl p-4 flex flex-col items-center text-center">
                <img
                  src="/assets/fraud-protection.png"
                  alt="Fraud Protection"
                  className="w-6 h-6 mb-3"
                />
                <p className="text-sm font-medium">
                  Fraud
                  <br />
                  Protection
                </p>
              </div>
              <div className="bg-[#14192F] border border-[#1E2340] hover:border-[#FF00C7] rounded-3xl p-4 flex flex-col items-center text-center">
                <img
                  src="/assets/performance.png"
                  alt="Reliable Performance"
                  className="w-6 h-6 mb-3"
                />
                <p className="text-sm font-medium">
                  Reliable
                  <br />
                  Performance
                </p>
              </div>
              <div className="bg-[#14192F] border border-[#1E2340] hover:border-[#FF00C7] rounded-3xl p-4 flex flex-col items-center text-center">
                <img
                  src="/assets/global-compliance.png"
                  alt="Global Compliance"
                  className="w-6 h-6 mb-3"
                />
                <p className="text-sm font-medium">
                  Global
                  <br />
                  Compliance
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="relative flex flex-col items-center justify-center">
          <div className="relative w-64 h-64 md:w-72 md:h-72 flex items-center justify-center">
            <div className="absolute w-full h-full rounded-full bg-gradient-to-br from-[#FF00C7] to-[#7B61FF] opacity-80 blur-2xl"></div>

            <div className="relative z-10 bg-gradient-to-b from-[#FF007A] to-[#7B61FF] rounded-[2rem] w-36 h-56 flex flex-col justify-center items-center text-center">
              <img
                src="/assets/lock-icon.png"
                alt="Bitcoin secure and safe"
                className="w-12 h-12 mb-3"
              />
              <p className="text-white text-sm font-medium">
                Bitcoin secure
                <br />
                and safe
              </p>
            </div>
          </div>

          <div className="mt-6 bg-gradient-to-br from-[#1E1B35] to-[#000000] p-6 rounded-full text-center text-white">
            <p className="text-xs mb-2">Stages</p>
            <div className="flex items-center justify-center gap-3">
              <img
                src="/assets/secure-stage.png"
                alt="Secured"
                className="w-10 h-10"
              />
              <img
                src="/assets/game-stage.png"
                alt="Game"
                className="w-10 h-10"
              />
              <img
                src="/assets/bitcoin-stage.png"
                alt="Bitcoin"
                className="w-10 h-10"
              />
            </div>
            <p className="text-xs mt-2">Secured</p>
          </div>
        </div>
      </div>
    </div>
  );
}
