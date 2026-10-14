const steps = [
  'Tap below to begin',
  'Enter your email & basic details',
  'Complete 3 to 5 required deals',
  'Get your reward after verification',
]

export function StepsList() {
  return (
    <ol className="flex w-full flex-col gap-3 text-left">
      {steps.map((step, index) => (
        <li
          key={step}
          className="flex items-center gap-4 rounded-xl border border-border bg-card px-4 py-3.5"
        >
          <span
            aria-hidden="true"
            className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground"
          >
            {index + 1}
          </span>
          <span className="text-pretty text-base text-card-foreground">
            <span className="sr-only">{`Step ${index + 1}: `}</span>
            {step}
          </span>
        </li>
      ))}
    </ol>
  )
}
