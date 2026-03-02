const TAG_COLORS: Record<string, { bg: string; text: string }> = {
  "terapia online": { bg: "bg-tag-terapia", text: "text-tag-terapia-text" },
  "terapia": { bg: "bg-tag-terapia", text: "text-tag-terapia-text" },
  "terapia grupal": { bg: "bg-tag-grupal", text: "text-tag-grupal-text" },
  "psicología": { bg: "bg-tag-terapia", text: "text-tag-terapia-text" },
  "salud mental": { bg: "bg-tag-bienestar", text: "text-tag-bienestar-text" },
  "bienestar": { bg: "bg-tag-bienestar", text: "text-tag-bienestar-text" },
  "autocuidado": { bg: "bg-tag-bienestar", text: "text-tag-bienestar-text" },
  "seguridad": { bg: "bg-tag-seguridad", text: "text-tag-seguridad-text" },
  "privacidad": { bg: "bg-tag-seguridad", text: "text-tag-seguridad-text" },
  "precio": { bg: "bg-tag-precio", text: "text-tag-precio-text" },
  "accesibilidad": { bg: "bg-tag-precio", text: "text-tag-precio-text" },
  "economía": { bg: "bg-tag-precio", text: "text-tag-precio-text" },
  "tecnología": { bg: "bg-tag-tech", text: "text-tag-tech-text" },
  "plataforma": { bg: "bg-tag-tech", text: "text-tag-tech-text" },
  "chat grupal": { bg: "bg-tag-grupal", text: "text-tag-grupal-text" },
  "grupos": { bg: "bg-tag-grupal", text: "text-tag-grupal-text" },
  "ansiedad": { bg: "bg-tag-seguridad", text: "text-tag-seguridad-text" },
  "depresión": { bg: "bg-tag-seguridad", text: "text-tag-seguridad-text" },
  "flexibilidad": { bg: "bg-tag-tech", text: "text-tag-tech-text" },
  "profesionales": { bg: "bg-tag-pro", text: "text-tag-pro-text" },
  "relaciones": { bg: "bg-tag-grupal", text: "text-tag-grupal-text" },
  "soledad": { bg: "bg-tag-seguridad", text: "text-tag-seguridad-text" },
  "burnout": { bg: "bg-tag-precio", text: "text-tag-precio-text" },
  "autoestima": { bg: "bg-tag-bienestar", text: "text-tag-bienestar-text" },
  "crecimiento personal": { bg: "bg-tag-tech", text: "text-tag-tech-text" },
};

function getTagColors(tag: string) {
  const lower = tag.toLowerCase();
  return TAG_COLORS[lower] ?? { bg: "bg-tag-default", text: "text-tag-default-text" };
}

function capitalize(text: string) {
  return text.replace(/\b\w/g, (c) => c.toUpperCase());
}

export default function Tag({ label }: { label: string }) {
  const colors = getTagColors(label);
  return (
    <span
      className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${colors.bg} ${colors.text}`}
    >
      {capitalize(label)}
    </span>
  );
}
