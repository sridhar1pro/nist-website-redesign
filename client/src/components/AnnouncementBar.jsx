function AnnouncementBar() {
  const announcements = [
    "Admissions 2026 Now Open – Apply Before May 30",
    "NIST Ranked Among Top Engineering Institutes",
    "Campus Placement Drive 2026 Starts in April",
  ];

  return (
    <div className="bg-yellow-400 text-black py-2 overflow-hidden">
      <div className="whitespace-nowrap animate-marquee font-medium">
        {announcements.join("   |   ")}
      </div>
    </div>
  );
}

export default AnnouncementBar;
