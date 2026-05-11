import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Shield, Mail, Calendar, User } from "lucide-react";
import { motion } from "framer-motion";

// Import your actual premium background layer components
import ParticleCanvas from "@/components/landing/ParticleCanvas";
import GradientMesh from "@/components/landing/GradientMesh";
import LightStreaks from "@/components/landing/LightStreaks";
import AuroraEffect from "@/components/landing/AuroraEffect";
import FloatingElements from "@/components/landing/FloatingElements";

const Privacy = () => {
  const navigate = useNavigate();

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen bg-background text-foreground font-sans overflow-x-hidden selection:bg-primary/30 selection:text-white">
      {/* Background Layers — exactly matching your landing page */}
      <div className="noise-overlay" />
      <GradientMesh />
      <AuroraEffect />
      <ParticleCanvas />
      <LightStreaks />
      <FloatingElements />

      {/* Floating Header Back Button */}
      <div className="relative z-20 max-w-4xl mx-auto px-6 pt-10 pb-4">
        <motion.button
          onClick={() => navigate("/")}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
          whileHover={{ x: -4, backgroundColor: "rgba(255, 255, 255, 0.08)", borderColor: "rgba(168, 85, 247, 0.4)" }}
          whileTap={{ scale: 0.97 }}
          className="flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/3 border border-white/6 text-sm font-semibold backdrop-blur-xl transition-all shadow-lg hover:shadow-primary/10 hover:text-primary cursor-pointer group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span>Back to Home</span>
        </motion.button>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 pb-24">
        <motion.main
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 80, damping: 20, delay: 0.1 }}
          className="glass rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-2xl"
          style={{
            background: "rgba(13, 13, 18, 0.65)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
          }}
        >
          {/* Subtle Glowing Gradient Rim */}
          <div className="absolute inset-0 pointer-events-none rounded-3xl" style={{ padding: "1px" }}>
            <div className="w-full h-full rounded-3xl" style={{
              background: "linear-gradient(135deg, rgba(168, 85, 247, 0.3) 0%, transparent 40%, transparent 60%, rgba(6, 182, 212, 0.3) 100%)",
              WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              WebkitMaskComposite: "xor",
              maskComposite: "exclude"
            }} />
          </div>

          {/* Header Title */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-primary">
              <Shield className="w-6 h-6 animate-pulse" />
              <span className="text-xs font-semibold tracking-widest uppercase bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
                Privacy First
              </span>
            </div>
            
            <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground via-primary to-accent">
              Privacy Policy
            </h1>

            {/* Meta badges */}
            <div className="flex flex-wrap gap-4 text-xs text-muted-foreground pt-2">
              <span className="flex items-center gap-1.5 bg-white/2 px-3 py-1.5 rounded-lg border border-white/5">
                <User className="w-3.5 h-3.5 text-primary" />
                <span>mShivam | App Studio</span>
              </span>
              <span className="flex items-center gap-1.5 bg-white/2 px-3 py-1.5 rounded-lg border border-white/5">
                <Shield className="w-3.5 h-3.5 text-accent" />
                <span>App: NightVault</span>
              </span>
              <span className="flex items-center gap-1.5 bg-white/2 px-3 py-1.5 rounded-lg border border-white/5">
                <Calendar className="w-3.5 h-3.5 text-primary" />
                <span>Updated: May 11, 2025</span>
              </span>
            </div>
          </div>

          <div className="border-b border-white/5 my-8" />

          {/* Document Content */}
          <div className="space-y-10 text-foreground/80 leading-relaxed text-base">
            
            {/* Section 1 */}
            <section className="space-y-4">
              <h2 className="font-display text-2xl font-bold text-white flex items-center gap-3">
                <span className="w-1.5 h-6 rounded-full bg-gradient-to-b from-primary to-accent" />
                1. Introduction
              </h2>
              <p>
                Welcome to NightVault ("the App"), developed and maintained by <strong>mShivam | App Studio</strong> ("we", "us", or "our"). NightVault is a privacy-first, offline media vault application for Android that allows users to securely store, encrypt, organise, and manage personal media including photos, videos, audio, documents, contacts, and passwords — entirely on their own device.
              </p>
              <p>
                This Privacy Policy explains what information the App accesses, how it is used, how it is protected, and your rights as a user. By installing and using NightVault, you agree to the terms described in this policy. If you do not agree, please uninstall the App.
              </p>
            </section>

            {/* Section 2 */}
            <section className="space-y-4">
              <h2 className="font-display text-2xl font-bold text-white flex items-center gap-3">
                <span className="w-1.5 h-6 rounded-full bg-gradient-to-b from-primary to-accent" />
                2. Our Core Privacy Principle
              </h2>
              <p className="text-white font-medium">
                NightVault is built on a zero-data-collection philosophy.
              </p>
              <ul className="space-y-2.5 pl-2">
                <li className="relative pl-5 before:content-['•'] before:absolute before:left-1 before:text-primary before:font-bold">
                  All data you store in NightVault remains on your device at all times.
                </li>
                <li className="relative pl-5 before:content-['•'] before:absolute before:left-1 before:text-primary before:font-bold">
                  We do not operate any servers that receive, store, or process your personal content.
                </li>
                <li className="relative pl-5 before:content-['•'] before:absolute before:left-1 before:text-primary before:font-bold">
                  We do not sell, share, rent, or trade your data with any third party for commercial purposes.
                </li>
                <li className="relative pl-5 before:content-['•'] before:absolute before:left-1 before:text-primary before:font-bold">
                  We do not collect analytics, usage statistics, crash reports, or telemetry of any kind.
                </li>
                <li className="relative pl-5 before:content-['•'] before:absolute before:left-1 before:text-primary before:font-bold">
                  We do not display advertisements.
                </li>
              </ul>
            </section>

            {/* Section 3 */}
            <section className="space-y-6">
              <h2 className="font-display text-2xl font-bold text-white flex items-center gap-3">
                <span className="w-1.5 h-6 rounded-full bg-gradient-to-b from-primary to-accent" />
                3. Information the App Accesses
              </h2>
              <p>
                NightVault does not collect or transmit personal data. However, to function correctly, the App requires access to certain on-device data and system capabilities. Below is a complete and transparent explanation of every permission the App requests and why.
              </p>

              {/* Sub 3.1 */}
              <div className="space-y-3">
                <h3 className="font-display text-lg font-semibold text-white">3.1 Media & File Storage</h3>
                <div className="overflow-hidden rounded-xl border border-white/5 bg-white/1">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm border-collapse">
                      <thead>
                        <tr className="bg-white/3 border-b border-white/5 text-white font-medium">
                          <th className="p-4 font-semibold font-display">Permission</th>
                          <th className="p-4 font-semibold font-display">Purpose</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/5">
                        <tr className="hover:bg-white/1 transition-colors">
                          <td className="p-4 font-semibold text-white">READ_MEDIA_IMAGES</td>
                          <td className="p-4 text-foreground/80">Import photos from your device gallery into the encrypted vault</td>
                        </tr>
                        <tr className="hover:bg-white/1 transition-colors">
                          <td className="p-4 font-semibold text-white">READ_MEDIA_VIDEO</td>
                          <td className="p-4 text-foreground/80">Import videos from your device storage into the encrypted vault</td>
                        </tr>
                        <tr className="hover:bg-white/1 transition-colors">
                          <td className="p-4 font-semibold text-white">READ_MEDIA_AUDIO</td>
                          <td className="p-4 text-foreground/80">Import audio files from your device into the encrypted vault</td>
                        </tr>
                        <tr className="hover:bg-white/1 transition-colors">
                          <td className="p-4 font-semibold text-white">READ_EXTERNAL_STORAGE</td>
                          <td className="p-4 text-foreground/80">Required on older Android versions (below Android 13) for media access</td>
                        </tr>
                        <tr className="hover:bg-white/1 transition-colors">
                          <td className="p-4 font-semibold text-white">WRITE_EXTERNAL_STORAGE</td>
                          <td className="p-4 text-foreground/80">Required on older Android versions to save files to device storage</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground pt-1">
                  All imported media files are encrypted immediately on import and stored locally within the App's private encrypted storage. Original files are optionally deleted from the gallery after import, based on your preference.
                </p>
              </div>

              {/* Sub 3.2 */}
              <div className="space-y-3 pt-2">
                <h3 className="font-display text-lg font-semibold text-white">3.2 Camera</h3>
                <div className="overflow-hidden rounded-xl border border-white/5 bg-white/1">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm border-collapse">
                      <thead>
                        <tr className="bg-white/3 border-b border-white/5 text-white font-medium">
                          <th className="p-4 font-semibold font-display">Permission</th>
                          <th className="p-4 font-semibold font-display">Purpose</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="hover:bg-white/1 transition-colors">
                          <td className="p-4 font-semibold text-white">CAMERA</td>
                          <td className="p-4 text-foreground/80">Allows you to capture photos or videos directly into the vault without saving to the gallery</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground pt-1">
                  Photos and videos taken through NightVault's built-in camera are written directly into the encrypted vault and never appear in your device gallery.
                </p>
              </div>

              {/* Sub 3.3 */}
              <div className="space-y-3 pt-2">
                <h3 className="font-display text-lg font-semibold text-white">3.3 Contacts</h3>
                <div className="overflow-hidden rounded-xl border border-white/5 bg-white/1">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm border-collapse">
                      <thead>
                        <tr className="bg-white/3 border-b border-white/5 text-white font-medium">
                          <th className="p-4 font-semibold font-display">Permission</th>
                          <th className="p-4 font-semibold font-display">Purpose</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="hover:bg-white/1 transition-colors">
                          <td className="p-4 font-semibold text-white">READ_CONTACTS</td>
                          <td className="p-4 text-foreground/80">Allows you to import specific contacts from your device into the private contacts vault</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground pt-1">
                  NightVault only reads contact information that you explicitly choose to import. No contacts are uploaded, synced, or shared outside the App. All imported contact data is encrypted and stored locally.
                </p>
              </div>

              {/* Sub 3.4 */}
              <div className="space-y-3 pt-2">
                <h3 className="font-display text-lg font-semibold text-white">3.4 Biometric Authentication</h3>
                <div className="overflow-hidden rounded-xl border border-white/5 bg-white/1">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm border-collapse">
                      <thead>
                        <tr className="bg-white/3 border-b border-white/5 text-white font-medium">
                          <th className="p-4 font-semibold font-display">Permission</th>
                          <th className="p-4 font-semibold font-display">Purpose</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/5">
                        <tr className="hover:bg-white/1 transition-colors">
                          <td className="p-4 font-semibold text-white">USE_BIOMETRIC</td>
                          <td className="p-4 text-foreground/80">Allows fingerprint or face authentication to unlock the vault</td>
                        </tr>
                        <tr className="hover:bg-white/1 transition-colors">
                          <td className="p-4 font-semibold text-white">USE_FINGERPRINT</td>
                          <td className="p-4 text-foreground/80">Legacy biometric support for older Android devices</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground pt-1">
                  Biometric authentication is handled entirely by the Android operating system's secure hardware enclave. NightVault never receives, stores, or transmits your biometric data in any form.
                </p>
              </div>

              {/* Sub 3.5 */}
              <div className="space-y-3 pt-2">
                <h3 className="font-display text-lg font-semibold text-white">3.5 Overlay & Floating Launcher</h3>
                <div className="overflow-hidden rounded-xl border border-white/5 bg-white/1">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm border-collapse">
                      <thead>
                        <tr className="bg-white/3 border-b border-white/5 text-white font-medium">
                          <th className="p-4 font-semibold font-display">Permission</th>
                          <th className="p-4 font-semibold font-display">Purpose</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="hover:bg-white/1 transition-colors">
                          <td className="p-4 font-semibold text-white">SYSTEM_ALERT_WINDOW</td>
                          <td className="p-4 text-foreground/80">Powers the optional Floating Quick Launcher — a quick-access bubble overlay for fast vault entry</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground pt-1">
                  This permission is optional. The floating launcher can be disabled at any time from settings. It does not monitor, read, or interact with other apps on your screen.
                </p>
              </div>

              {/* Sub 3.6 */}
              <div className="space-y-3 pt-2">
                <h3 className="font-display text-lg font-semibold text-white">3.6 Foreground Services</h3>
                <div className="overflow-hidden rounded-xl border border-white/5 bg-white/1">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm border-collapse">
                      <thead>
                        <tr className="bg-white/3 border-b border-white/5 text-white font-medium">
                          <th className="p-4 font-semibold font-display">Permission</th>
                          <th className="p-4 font-semibold font-display">Purpose</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/5">
                        <tr className="hover:bg-white/1 transition-colors">
                          <td className="p-4 font-semibold text-white">FOREGROUND_SERVICE</td>
                          <td className="p-4 text-foreground/80">Keeps encryption, decryption, and download operations running reliably in the background</td>
                        </tr>
                        <tr className="hover:bg-white/1 transition-colors">
                          <td className="p-4 font-semibold text-white">FOREGROUND_SERVICE_DATA_SYNC</td>
                          <td className="p-4 text-foreground/80">Ensures large file imports and encryption tasks are not interrupted by the system</td>
                        </tr>
                        <tr className="hover:bg-white/1 transition-colors">
                          <td className="p-4 font-semibold text-white">FOREGROUND_SERVICE_SPECIAL_USE</td>
                          <td className="p-4 text-foreground/80">Powers the background downloader service for in-app media downloads</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* Sub 3.7 */}
              <div className="space-y-3 pt-2">
                <h3 className="font-display text-lg font-semibold text-white">3.7 Internet Access</h3>
                <div className="overflow-hidden rounded-xl border border-white/5 bg-white/1">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm border-collapse">
                      <thead>
                        <tr className="bg-white/3 border-b border-white/5 text-white font-medium">
                          <th className="p-4 font-semibold font-display">Permission</th>
                          <th className="p-4 font-semibold font-display">Purpose</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/5">
                        <tr className="hover:bg-white/1 transition-colors">
                          <td className="p-4 font-semibold text-white">INTERNET</td>
                          <td className="p-4 text-foreground/80">Required for the built-in browser and media downloader (yt-dlp) to download files from the web</td>
                        </tr>
                        <tr className="hover:bg-white/1 transition-colors">
                          <td className="p-4 font-semibold text-white">ACCESS_NETWORK_STATE</td>
                          <td className="p-4 text-foreground/80">Checks network availability before initiating downloads</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* Sub 3.8 & 3.9 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="space-y-2">
                  <h3 className="font-display text-sm font-semibold text-white">3.8 Notifications</h3>
                  <div className="p-4 rounded-xl border border-white/5 bg-white/1 text-sm">
                    <span className="font-semibold text-white block mb-1">POST_NOTIFICATIONS</span>
                    <span className="text-foreground/80">Displays discreet, silent download progress notifications. They do not reveal file names on your lock screen.</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="font-display text-sm font-semibold text-white">3.9 Vibration</h3>
                  <div className="p-4 rounded-xl border border-white/5 bg-white/1 text-sm">
                    <span className="font-semibold text-white block mb-1">VIBRATE</span>
                    <span className="text-foreground/80">Powers the "Shake to Lock" feature — shaking the device instantly locks the vault.</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 4 */}
            <section className="space-y-4">
              <h2 className="font-display text-2xl font-bold text-white flex items-center gap-3">
                <span className="w-1.5 h-6 rounded-full bg-gradient-to-b from-primary to-accent" />
                4. Data We Do NOT Collect
              </h2>
              <p>
                To be completely clear, NightVault does not collect any of the following:
              </p>
              <ul className="space-y-2 pl-2">
                <li className="relative pl-5 before:content-['•'] before:absolute before:left-1 before:text-primary">Your name, email address, or account information (no accounts required)</li>
                <li className="relative pl-5 before:content-['•'] before:absolute before:left-1 before:text-primary">Your location or GPS data</li>
                <li className="relative pl-5 before:content-['•'] before:absolute before:left-1 before:text-primary">Your device's advertising ID or any unique identifier</li>
                <li className="relative pl-5 before:content-['•'] before:absolute before:left-1 before:text-primary">Crash reports or diagnostic logs sent to our servers</li>
                <li className="relative pl-5 before:content-['•'] before:absolute before:left-1 before:text-primary">Usage statistics or in-app behaviour analytics</li>
                <li className="relative pl-5 before:content-['•'] before:absolute before:left-1 before:text-primary">The names, contents, or metadata of files you store in the vault</li>
                <li className="relative pl-5 before:content-['•'] before:absolute before:left-1 before:text-primary">Your passwords or contact data stored in the vault</li>
                <li className="relative pl-5 before:content-['•'] before:absolute before:left-1 before:text-primary">Any data transmitted to mShivam | App Studio servers</li>
              </ul>
            </section>

            {/* Section 5 */}
            <section className="space-y-4">
              <h2 className="font-display text-2xl font-bold text-white flex items-center gap-3">
                <span className="w-1.5 h-6 rounded-full bg-gradient-to-b from-primary to-accent" />
                5. Encryption & Security
              </h2>
              <p>
                NightVault uses industry-standard encryption to protect your data at rest on your device.
              </p>
              <ul className="space-y-3.5 pl-2">
                <li className="relative pl-5 before:content-['•'] before:absolute before:left-1 before:text-primary">
                  <strong>Database Encryption:</strong> All metadata, contact information, and password entries stored in the App's database are encrypted using SQLCipher, an open-source library implementing AES-256 encryption for SQLite databases.
                </li>
                <li className="relative pl-5 before:content-['•'] before:absolute before:left-1 before:text-primary">
                  <strong>File Encryption:</strong> Media files and documents stored in the vault are protected using the Android Jetpack Security library (androidx.security:security-crypto), which uses AES-256-GCM encryption.
                </li>
                <li className="relative pl-5 before:content-['•'] before:absolute before:left-1 before:text-primary">
                  <strong>Authentication:</strong> The vault is protected by your choice of a 4-digit PIN, biometric authentication (fingerprint or face), or both. The "Shake to Lock" feature provides instant locking by physically shaking the device.
                </li>
                <li className="relative pl-5 before:content-['•'] before:absolute before:left-1 before:text-primary">
                  <strong>Scoped Storage:</strong> The App uses Android's Scoped Storage API, meaning vault contents are stored in the App's private directory, which is inaccessible to other apps and cannot be browsed through a standard file manager.
                </li>
              </ul>
              <p className="text-white font-medium bg-white/2 p-4 rounded-xl border border-white/5 mt-2">
                What this means for you: Even if someone gains physical access to your device, your vault contents are encrypted and cannot be read without your PIN or biometric credential.
              </p>
            </section>

            {/* Section 6 */}
            <section className="space-y-4">
              <h2 className="font-display text-2xl font-bold text-white flex items-center gap-3">
                <span className="w-1.5 h-6 rounded-full bg-gradient-to-b from-primary to-accent" />
                6. Third-Party Libraries & Services
              </h2>
              <p>
                NightVault integrates several open-source libraries to deliver its features. None of these libraries are configured to collect or transmit personal data from your device.
              </p>

              <div className="overflow-hidden rounded-xl border border-white/5 bg-white/1">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm border-collapse">
                    <thead>
                      <tr className="bg-white/3 border-b border-white/5 text-white">
                        <th className="p-4 font-semibold font-display">Library</th>
                        <th className="p-4 font-semibold font-display">Purpose</th>
                        <th className="p-4 font-semibold font-display">Data Shared</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      <tr className="hover:bg-white/1 transition-colors">
                        <td className="p-4 font-semibold text-white">SQLCipher</td>
                        <td className="p-4 text-foreground/80">AES-256 encrypted local database</td>
                        <td className="p-4 text-foreground/70">None — runs locally</td>
                      </tr>
                      <tr className="hover:bg-white/1 transition-colors">
                        <td className="p-4 font-semibold text-white">Jetpack Security</td>
                        <td className="p-4 text-foreground/80">File encryption</td>
                        <td className="p-4 text-foreground/70">None — runs locally</td>
                      </tr>
                      <tr className="hover:bg-white/1 transition-colors">
                        <td className="p-4 font-semibold text-white">Room (SQLite)</td>
                        <td className="p-4 text-foreground/80">Local database layer</td>
                        <td className="p-4 text-foreground/70">None — runs locally</td>
                      </tr>
                      <tr className="hover:bg-white/1 transition-colors">
                        <td className="p-4 font-semibold text-white">Retrofit & OkHttp</td>
                        <td className="p-4 text-foreground/80">HTTP networking for the built-in downloader</td>
                        <td className="p-4 text-foreground/70">Network requests to URLs you choose only</td>
                      </tr>
                      <tr className="hover:bg-white/1 transition-colors">
                        <td className="p-4 font-semibold text-white">youtubedl-android</td>
                        <td className="p-4 text-foreground/80">Media downloading from websites</td>
                        <td className="p-4 text-foreground/70">Connects to URLs you request only</td>
                      </tr>
                      <tr className="hover:bg-white/1 transition-colors">
                        <td className="p-4 font-semibold text-white">FFmpeg</td>
                        <td className="p-4 text-foreground/80">Media processing and format conversion</td>
                        <td className="p-4 text-foreground/70">None — runs locally</td>
                      </tr>
                      <tr className="hover:bg-white/1 transition-colors">
                        <td className="p-4 font-semibold text-white">Lottie</td>
                        <td className="p-4 text-foreground/80">Smooth UI animations</td>
                        <td className="p-4 text-foreground/70">None — runs locally</td>
                      </tr>
                      <tr className="hover:bg-white/1 transition-colors">
                        <td className="p-4 font-semibold text-white">WorkManager</td>
                        <td className="p-4 text-foreground/80">Reliable background task management</td>
                        <td className="p-4 text-foreground/70">None — runs locally</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <p className="text-sm text-muted-foreground pt-1">
                <strong>Important note on downloading:</strong> When you use the downloader, your device makes standard requests to those websites. Those websites may log your IP address in accordance with their own policies. You are responsible for ensuring that downloaded content complies with applicable laws.
              </p>
            </section>

            {/* Section 7 */}
            <section className="space-y-4">
              <h2 className="font-display text-2xl font-bold text-white flex items-center gap-3">
                <span className="w-1.5 h-6 rounded-full bg-gradient-to-b from-primary to-accent" />
                7. Data Stored Locally — Summary
              </h2>
              <p>
                The following types of data may be stored inside NightVault's encrypted vault, based solely on what you choose to add:
              </p>
              <ul className="space-y-2 pl-2">
                <li className="relative pl-5 before:content-['•'] before:absolute before:left-1 before:text-primary">Photos, videos, and audio files you import or capture</li>
                <li className="relative pl-5 before:content-['•'] before:absolute before:left-1 before:text-primary">PDF and document files you import</li>
                <li className="relative pl-5 before:content-['•'] before:absolute before:left-1 before:text-primary">Contact information you choose to protect</li>
                <li className="relative pl-5 before:content-['•'] before:absolute before:left-1 before:text-primary">Passwords and associated credentials you enter manually</li>
                <li className="relative pl-5 before:content-['•'] before:absolute before:left-1 before:text-primary">Filenames, timestamps, and file sizes (stored in the encrypted database as metadata)</li>
                <li className="relative pl-5 before:content-['•'] before:absolute before:left-1 before:text-primary">Download history within the App</li>
              </ul>
              <p>
                All of the above is stored exclusively on your device. None of it is accessible to us.
              </p>
            </section>

            {/* Section 8 */}
            <section className="space-y-4">
              <h2 className="font-display text-2xl font-bold text-white flex items-center gap-3">
                <span className="w-1.5 h-6 rounded-full bg-gradient-to-b from-primary to-accent" />
                8. Data Sharing
              </h2>
              <p>
                <strong>We do not share your data with anyone, for any reason.</strong>
              </p>
              <p>
                NightVault does not share any user data with third-party advertisers, social platforms, analytics companies, or government agencies (since we hold no data ourselves). Because all data is stored locally, we are technically incapable of sharing your vault contents.
              </p>
            </section>

            {/* Section 9 */}
            <section className="space-y-4">
              <h2 className="font-display text-2xl font-bold text-white flex items-center gap-3">
                <span className="w-1.5 h-6 rounded-full bg-gradient-to-b from-primary to-accent" />
                9. User-Generated Content & Downloads
              </h2>
              <p>
                NightVault provides a built-in browser and media downloader (powered by yt-dlp) that allows you to download content from websites on the internet. You are solely responsible for the content you choose to download and store. NightVault does not monitor, filter, or review content you download, and we accept no liability for how you use this feature.
              </p>
            </section>

            {/* Section 10 */}
            <section className="space-y-4">
              <h2 className="font-display text-2xl font-bold text-white flex items-center gap-3">
                <span className="w-1.5 h-6 rounded-full bg-gradient-to-b from-primary to-accent" />
                10. Children's Privacy
              </h2>
              <p>
                NightVault is not directed at children under 13. We do not knowingly collect personal information from children. If you are a parent and believe your child has used this App, please contact us at <a href="mailto:support.nightvault@gmail.com" className="text-accent hover:text-primary border-b border-dashed border-accent/40 hover:border-solid transition-colors">support.nightvault@gmail.com</a>. You can remove any local data by clearing the App's storage or uninstalling the App.
              </p>
            </section>

            {/* Section 11 */}
            <section className="space-y-4">
              <h2 className="font-display text-2xl font-bold text-white flex items-center gap-3">
                <span className="w-1.5 h-6 rounded-full bg-gradient-to-b from-primary to-accent" />
                11. Your Rights & Data Control
              </h2>
              <p>
                Because NightVault stores all data locally on your device, you have complete and direct control over your data at all times.
              </p>
              <ul className="space-y-2 pl-2">
                <li className="relative pl-5 before:content-['•'] before:absolute before:left-1 before:text-primary"><strong>To delete all vault data:</strong> Go to Settings → Clear All Data inside the App, or go to Android Settings → Apps → NightVault → Clear Storage.</li>
                <li className="relative pl-5 before:content-['•'] before:absolute before:left-1 before:text-primary"><strong>To delete individual files:</strong> Select any file within the vault and tap Delete.</li>
                <li className="relative pl-5 before:content-['•'] before:absolute before:left-1 before:text-primary"><strong>To remove all data permanently:</strong> Uninstall NightVault. This removes all encrypted vault contents and databases.</li>
                <li className="relative pl-5 before:content-['•'] before:absolute before:left-1 before:text-primary"><strong>To revoke permissions:</strong> Toggle off permissions anytime in your Android Settings.</li>
              </ul>
              <p>
                Since we hold no data on any server, there is no account to delete and no request to make to us for data erasure.
              </p>
            </section>

            {/* Section 12 */}
            <section className="space-y-4">
              <h2 className="font-display text-2xl font-bold text-white flex items-center gap-3">
                <span className="w-1.5 h-6 rounded-full bg-gradient-to-b from-primary to-accent" />
                12. Data Retention
              </h2>
              <p>
                NightVault does not retain any data on external servers because no data is ever sent to us. All data remains on your device for as long as you choose to keep it.
              </p>
            </section>

            {/* Section 13 */}
            <section className="space-y-4">
              <h2 className="font-display text-2xl font-bold text-white flex items-center gap-3">
                <span className="w-1.5 h-6 rounded-full bg-gradient-to-b from-primary to-accent" />
                13. Security Practices
              </h2>
              <p>
                We take security seriously and have implemented the following measures:
              </p>
              <ul className="space-y-2 pl-2 grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
                <li className="relative pl-5 before:content-['•'] before:absolute before:left-1 before:text-primary">AES-256 encryption via SQLCipher for databases</li>
                <li className="relative pl-5 before:content-['•'] before:absolute before:left-1 before:text-primary">AES-256-GCM encryption for stored files</li>
                <li className="relative pl-5 before:content-['•'] before:absolute before:left-1 before:text-primary">Biometric hardware enclave authentication</li>
                <li className="relative pl-5 before:content-['•'] before:absolute before:left-1 before:text-primary">Scoped Storage isolation protection</li>
                <li className="relative pl-5 before:content-['•'] before:absolute before:left-1 before:text-primary">System screenshot prevention overlay blocks</li>
                <li className="relative pl-5 before:content-['•'] before:absolute before:left-1 before:text-primary">Discreet silently running progress banners</li>
                <li className="relative pl-5 before:content-['•'] before:absolute before:left-1 before:text-primary">Incognito Mode search activity wipe</li>
                <li className="relative pl-5 before:content-['•'] before:absolute before:left-1 before:text-primary">Secret dialler code launcher icons</li>
              </ul>
            </section>

            {/* Section 14 */}
            <section className="space-y-4">
              <h2 className="font-display text-2xl font-bold text-white flex items-center gap-3">
                <span className="w-1.5 h-6 rounded-full bg-gradient-to-b from-primary to-accent" />
                14. Changes to This Privacy Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time. When we make changes, we will update the "Last Updated" date at the top of this page. We encourage you to review this Privacy Policy periodically.
              </p>
            </section>

            {/* Section 15 */}
            <section className="space-y-4">
              <h2 className="font-display text-2xl font-bold text-white flex items-center gap-3">
                <span className="w-1.5 h-6 rounded-full bg-gradient-to-b from-primary to-accent" />
                15. Governing Law
              </h2>
              <p>
                This Privacy Policy is governed by the laws of India. Any disputes arising in connection with this policy shall be subject to the exclusive jurisdiction of the courts of India.
              </p>
            </section>

            {/* Section 16 */}
            <section className="space-y-4">
              <h2 className="font-display text-2xl font-bold text-white flex items-center gap-3">
                <span className="w-1.5 h-6 rounded-full bg-gradient-to-b from-primary to-accent" />
                16. Contact Us
              </h2>
              <p>
                If you have any questions, concerns, or requests regarding this Privacy Policy or the App's data practices, please contact us:
              </p>
              <ul className="space-y-2.5 pl-2">
                <li className="relative pl-5 before:content-['•'] before:absolute before:left-1 before:text-primary">
                  <strong>Developer:</strong> mShivam | App Studio
                </li>
                <li className="relative pl-5 before:content-['•'] before:absolute before:left-1 before:text-primary">
                  <strong>Email:</strong> <a href="mailto:support.nightvault@gmail.com" className="text-accent hover:text-primary border-b border-dashed border-accent/40 hover:border-solid transition-colors">support.nightvault@gmail.com</a>
                </li>
                <li className="relative pl-5 before:content-['•'] before:absolute before:left-1 before:text-primary">
                  <strong>Telegram Community:</strong> <a href="https://t.me/nightvaultConnect" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-primary border-b border-dashed border-accent/40 hover:border-solid transition-colors">https://t.me/nightvaultConnect</a>
                </li>
                <li className="relative pl-5 before:content-['•'] before:absolute before:left-1 before:text-primary">
                  <strong>Response Time:</strong> We aim to respond within 24 hours on business days.
                </li>
              </ul>
            </section>

          </div>

          <div className="border-b border-white/5 my-10" />

          <p className="text-center text-xs text-muted-foreground italic">
            This Privacy Policy was written to comply with Google Play Store requirements, the General Data Protection Regulation (GDPR), the California Consumer Privacy Act (CCPA), India's Digital Personal Data Protection Act (DPDPA) 2023, and applicable global privacy standards.
          </p>

        </motion.main>
      </div>
    </div>
  );
};

export default Privacy;
