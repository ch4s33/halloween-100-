import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { StepsList } from '@/components/steps-list'

export default function Page() {
  return (
    <main className="flex min-h-dvh items-center justify-center bg-background px-5 py-10">
      <div className="flex w-full max-w-md flex-col items-center gap-8 text-center">
        <div className="w-full overflow-hidden rounded-2xl">
          <Image
            src="/gift-card-100.jpg"
            alt="$100 gift voucher card"
            width={800}
            height={749}
            priority
            className="h-auto w-full"
          />
        </div>

        <div className="flex flex-col items-center gap-2">
          <h1 className="text-balance text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Want a $100 Gift Card?
          </h1>
          <p className="text-pretty text-sm text-muted-foreground">
            See how to qualify for your reward in 4 simple steps
          </p>
        </div>

        <StepsList />

        <div className="flex w-full flex-col items-center gap-3">
          <Button asChild size="lg" className="h-14 w-full rounded-xl text-lg font-semibold">
            <a
              href="https://linkthem.net/aff_c?offer_id=722&aff_id=207380"
              target="_blank"
              rel="noopener noreferrer sponsored"
            >
              See If You Qualify
            </a>
          </Button>
          <p className="text-sm text-muted-foreground">
            Available in selected countries - US, UK, CA
          </p>
        </div>
      </div>
    </main>
  )
}
