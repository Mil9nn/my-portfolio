function Timeline() {
    const events = [
      { year: 2024, description: "[Started my journey as a developer]" },
      { year: 2025, description: "[Completed my first major project]" },
      { year: 2026, description: "[Started working with React and advanced frameworks]" },
    ];
  
    return (
      <section className="timeline">
        <h2>Career Timeline</h2>
        <ul>
          {events.map((event, index) => (
            <li key={index}>
              <span>{event.year}</span> - {event.description}
            </li>
          ))}
        </ul>
      </section>
    );
  }
  
  export default Timeline;
  