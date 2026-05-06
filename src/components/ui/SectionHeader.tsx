interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export function SectionHeader({
  title,
  subtitle,
  centered = true,
  light = false,
}: SectionHeaderProps) {
  return (
    <div className={centered ? "text-center" : ""}>
      <h2
        className={`font-heading text-3xl sm:text-4xl font-bold ${
          light ? "text-white" : "text-navy-dark"
        }`}
      >
        {title}
      </h2>
      <div className={`mt-3 h-0.5 w-12 bg-gold ${centered ? "mx-auto" : ""}`} />
      {subtitle && (
        <p
          className={`mt-4 text-base max-w-2xl leading-relaxed ${
            centered ? "mx-auto" : ""
          } ${light ? "text-white/70" : "text-navy-mid"}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
