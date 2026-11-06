  width: 218px;
  height: 270px;
  object-fit: cover;
  object-position: center 25%;
  border-radius: 18px;
  border: 1px solid rgba(144,225,255,.5);
  box-shadow: 0 18px 45px rgba(0,0,0,.38), 0 0 28px rgba(74,213,255,.15);
}
.about-photo-caption {
  position: absolute;
  z-index: 2;
  bottom: 5px;
  padding: 8px 11px;
  border: 1px solid rgba(131,190,255,.2);
  border-radius: 6px;
  background: rgba(7,12,27,.88);
  color: #c5e9f5;
  font-size: 8px;
  letter-spacing: 1.6px;
  backdrop-filter: blur(10px);
}
.about-founder-copy { flex: 1; min-width: 0; }
.about-founder-copy h3 { margin: 13px 0 8px; font-size: clamp(25px, 3vw, 35px); }
.about-role { margin-bottom: 18px; color: #9feaff; font-size: 12px; font-weight: 700; }
.about-role span { color: #9ba9c2; font-weight: 500; }
.about-founder-copy p { color: var(--muted); font-size: 12px; line-height: 1.9; margin: 0 0 12px; }
.about-quote {
  margin-top: 18px;
  padding: 13px 16px;
  border-left: 2px solid #8f7cff;
  border-radius: 0 8px 8px 0;
  background: linear-gradient(90deg, rgba(156,112,255,.11), transparent);
  color: #e1d9ff;
  font-size: 12px;
  font-style: italic;
}
.about-actions { display: flex; flex-wrap: wrap; gap: 11px; margin-top: 22px; }
.about-social-block {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 24px;
  padding: 22px 24px;
  border: 1px solid var(--border);
  border-radius: 13px;
  background: rgba(13,20,40,.72);
}
.about-social-block h3 { margin-top: 8px; font-size: 21px; }
.about-social-block .socials { display: flex; flex-wrap: wrap; gap: 9px; }
.about-social-block .social {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 12px;
  border: 1px solid rgba(131,190,255,.17);
  border-radius: 8px;
  color: #c8d8ee;
  text-decoration: none;
  font-size: 10px;
  transition: .25s ease;
}
.about-social-block .social:hover {
  transform: translateY(-3px);
  color: #fff;
  border-color: rgba(101,234,255,.5);
  background: rgba(101,234,255,.08);
}
.about-social-block .social svg { width: 17px; height: 17px; }

.top-cta {
  position: relative;
  overflow: hidden;
  border: 1px solid transparent !important;
  background: linear-gradient(#0b1224,#0b1224) padding-box, linear-gradient(110deg,#38eaff,#8d6bff,#ff65cf,#38eaff) border-box;
  background-size: 100% 100%, 300% 100%;
  animation: talkGlow 5s linear infinite;
  box-shadow: 0 0 18px rgba(71,220,255,.12);
}
.top-cta:hover { transform: translateY(-3px); box-shadow: 0 0 28px rgba(71,220,255,.32); }
.primary-btn { position: relative; overflow: hidden; }
.primary-btn::after {
  content: "";
  position: absolute;
  top: -80%; left: -45%;
  width: 35%; height: 260%;
  transform: rotate(24deg);
  background: rgba(255,255,255,.35);
  transition: left .65s ease;
}
.primary-btn:hover::after { left: 130%; }

.custom-cursor { transition: opacity .2s ease; }
.cursor-glow { transition: opacity .2s ease; }
.cursor-trail { width: 3px !important; height: 3px !important; filter: blur(.15px); }
@keyframes brandFloat { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-2px); } }
@keyframes titleFlow { to { background-position: 220% center; } }
@keyframes haloBreathe { 0%,100% { transform: scale(.92); opacity: .55; } 50% { transform: scale(1.08); opacity: 1; } }
@keyframes emblemFloat { 0%,100% { transform: translateY(0) rotateY(-7deg) rotateX(2deg); } 50% { transform: translateY(-12px) rotateY(7deg) rotateX(-2deg); } }
@keyframes emblemFrame { to { transform: rotate(367deg); } }
@keyframes headingRise { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: translateY(0); } }
@keyframes artGradient { from { background-position: 0% 40%; } to { background-position: 100% 60%; } }
@keyframes portraitOrbit { to { transform: rotate(347deg); } }
@keyframes logoPulse {
  0%,100% { box-shadow: 0 0 0 4px rgba(88,205,255,.035), 0 8px 28px rgba(27,196,255,.13), inset 0 0 18px rgba(165,124,255,.16); }
  50% { box-shadow: 0 0 0 5px rgba(88,205,255,.055), 0 8px 34px rgba(27,196,255,.24), inset 0 0 22px rgba(165,124,255,.23); }
}
@media (max-width: 850px) {
  .about-founder-card { flex-direction: column; align-items: flex-start; }
  .about-photo-wrap { flex-basis: auto; width: min(100%, 280px); min-height: 300px; align-self: center; }
  .about-social-block { align-items: flex-start; flex-direction: column; }
}
@media (max-width: 600px) {
  .side-label { display: none; }
  .home-brand-title { letter-spacing: -2px !important; }
  .planet { width: 165px !important; height: 165px !important; }
  .hero-emblem { font-size: 58px; }
  .about-photo { width: 205px; height: 255px; }
  .about-social-block .social { padding: 9px 10px; }
}
@media (prefers-reduced-motion: reduce) {
  .brand-mark, .home-brand-title .gradient-text, .hero-visual::before, .planet, .planet::before, .about-photo-orbit, .portfolio-art { animation: none !important; }
}
