import { experiences } from "@/data";

export default function ExperienceSection() {
  return (
    <section aria-label="Experience">
      <div className="flex items-baseline justify-between gap-4">
        <h2 className="text-2xl font-bold text-gray-900">Experience</h2>
      </div>

      <div className="mt-6 space-y-10">
        {experiences.map((exp) => (
          <div
            key={exp.company}
            className="border-b border-gray-200/70 pb-10 last:border-b-0 last:pb-0"
          >
            <h3 className="text-lg font-semibold text-gray-900">{exp.company}</h3>

            <div className="mt-4 space-y-8">
              {exp.roles.map((role) => (
                <div key={`${exp.company}-${role.title}-${role.dates}`}>
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                    <p className="font-medium text-gray-900">{role.title}</p>
                    <p className="text-sm text-gray-500">{role.dates}</p>
                  </div>

                  <ul className="mt-3 ml-5 list-disc space-y-2 text-sm text-gray-700">
                    {role.highlights.map((line) => (
                      <li key={line}>{line}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

