const answers = {
  regulation: {
    title: "Is Atlantic Tech properly regulated?",
    myth: "Defence-grade AI operates outside normal scrutiny.",
    fact: "Atlantic Tech is designed for public-sector environments where security, auditability and reporting requirements are central to deployment.",
    cta: "See the compliance checklist"
  },
  ethics: {
    title: "Could the technology be misused?",
    myth: "Civil defence AI means autonomous military decision-making.",
    fact: "Atlantic Tech supports civil defence: helping emergency services, infrastructure operators and public-sector teams understand risk faster, while keeping humans accountable.",
    cta: "Watch the civil defence explainer"
  },
  data: {
    title: "Where does the data go?",
    myth: "Sensitive public-sector data automatically leaves the country.",
    fact: "Deployment can be designed around data sovereignty, access control and secure infrastructure requirements.",
    cta: "View the data sovereignty explanation"
  },
  accountability: {
    title: "Who is accountable?",
    myth: "AI systems make decisions with no human oversight.",
    fact: "The trust model keeps human decision-makers responsible, with transparent reporting and review processes built into the workflow.",
    cta: "Read the accountability framework"
  }
};

function showAnswer(topic, btn) {
  document.querySelectorAll('.card-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  const item = answers[topic];
  document.getElementById('ans-title').textContent = item.title;
  document.getElementById('ans-myth').textContent = item.myth;
  document.getElementById('ans-fact').textContent = item.fact;
  document.getElementById('ans-cta').textContent = item.cta;

  const box = document.getElementById('answer');
  box.classList.remove('hidden');
}
