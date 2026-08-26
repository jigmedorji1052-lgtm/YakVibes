export default function ListeningRoom() {
  return (
    <aside className="listening-room" aria-label="Listening Room audio player">
      <span className="listening-room-label">🎧 Listening Room — YakVibes: Sacred Sounds</span>
      <iframe
        width="100%"
        height="166"
        scrolling="no"
        frameBorder="no"
        allow="autoplay"
        referrerPolicy="no-referrer"
        title="SoundCloud player — YakVibes: Sacred Sounds playlist"
        src="https://w.soundcloud.com/player/?url=https%3A%2F%2Fsoundcloud.com%2Fjigme-dorji-62211426%2Fsets%2Fyakvibes-sacredsounds&color=%23C2410C&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false"
      />
    </aside>
  );
}
